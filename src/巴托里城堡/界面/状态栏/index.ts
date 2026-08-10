import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import './global.css';

// 立即挂载：不再等待 Mvu 初始化或消息级 stat_data 存在。
// 数据由 store 每 2 秒轮询，消息级缺失时自动回退聊天级（initvar），
// 避免首楼（无变量更新块）或引擎初始化慢时状态栏永久空白。
$(() => {
  createApp(App).use(createPinia()).mount('#app');
});
