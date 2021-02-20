/* eslint-disable */
//  deploy/index.js里面
const scpClient = require('scp2');
const ora = require('ora');
const chalk = require('chalk');
const server = require('./products');

const spinner = ora(
  `正在发布到${server.host}`,
);

const { Client } = require('ssh2');

const conn = new Client();
conn
  .on('ready', () => {
    // rm 删除dist文件，\n 是换行 换行执行 重启nginx命令 我这里是用docker重启nginx
    conn.exec(`rm -rf ${server.path}`, (
      err,
      stream,
    ) => {
      if (err) throw err;
      stream
        .on('close', (code, signal) => {
          // 在执行shell命令后，把开始上传部署项目代码放到这里面
          spinner.start();
          scpClient.scp(
            './dist',
            {
              host: server.host,
              port: server.port,
              username: server.username,
              password: server.password,
              path: server.path,
            },
            (err) => {
              spinner.stop();
              if (err) {
                console.log(chalk.red('发布失败.\n'));
                throw err;
              } else {
                console.log(
                  chalk.green(
                    `Success! 成功发布到${server.host}! \n`,
                  ),
                );
              }
            },
          );

          conn.end();
        })
        .on('data', (data) => {
          console.log(`STDOUT: ${data}`);
        })
        .stderr.on('data', (data) => {
          console.log(`STDERR: ${data}`);
        });
    });
  })
  .connect({
    host: server.host,
    port: server.port,
    username: server.username,
    password: server.password,
    // privateKey: require('fs').readFileSync('/home/admin/.ssh/id_dsa')
  });
