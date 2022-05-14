export default {
  install: (app) => {
    app.config.globalProperties.$http = fetch;
  },
};
