/**
 * Added as an example
 */
export default {
  install: (app) => {
    app.config.globalProperties.$http = fetch;
  },
};
