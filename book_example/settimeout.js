function doAsyncTask(task) {
  task();
}

// IIFE
(function schedule() {
   setTimeout(function() {
    doAsyncTask(function() {
      console.log('doAsyncTask 함수 실행..  ');
      schedule();
    });
  }, 1000);
})();