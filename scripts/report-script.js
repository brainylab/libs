const open = require('open');

(async () => {
  await open('./coverage/lcov-report/index.html', {
    app: 'Microsoft Edge',
  });
})();
