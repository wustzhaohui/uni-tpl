import { createStore } from "vuex";


const store = createStore<any>({
  state() {
    return {
      userInfo: null
    };
  },
  mutations: {
    // 同步更改state的值

  },
  actions: {
    // 异步更改state的值
  },
  getters: {
    // 
  }
});
export type RootStateProps = ReturnType<typeof store.state>
export default store;