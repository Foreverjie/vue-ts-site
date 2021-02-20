import { createApp } from 'vue';
import { Button, Divider } from 'ant-design-vue';
import App from './App.vue';
import router from './router';
import store from './store';

createApp(App)
  .component(Button.name, Button)
  .component(Divider.name, Divider)
  .use(store)
  .use(router)
  .mount('#app');
