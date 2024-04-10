import { createSSRApp } from "vue";
import App from "./App.vue";
import store from '../src/store';
import Vuex from "vuex";
export function createApp() {
  const app = createSSRApp(App);
  app.use(store);
  return {
    app,
    Vuex
  };
}
