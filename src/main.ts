import { createApp, h } from 'vue';
import { Button, Divider } from 'ant-design-vue';
import PerfectScrollbar from 'vue3-perfect-scrollbar';
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/color.less';

const app = createApp({
  render: () => h(App),
});

app.component(Button.name, Button)
  .component(Divider.name, Divider)
  .use(PerfectScrollbar)
  .use(store)
  .use(router)
  .mount('#app');
