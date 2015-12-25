function each(arr, iterator, callback) {
  if (!arr.length) {
    return callback(null, arr);
  }
  var completed = 0;

  function done(err) {
    if (err) {
      callback(err);
    } else {
      completed++;
      if (completed >= arr.length) {
        callback(null, arr);
      }
    }
  }

  arr.forEach(function(element, index, array) {
    iterator(array, index, done);
  });
}

function squire(array, index, callback) {
  if (typeof array[index] !== 'number') {
    callback(new Error(new Error(index + 1) + '번째 데이터는 숫자 타입이 아닙니다.'));
  } else {
    array[index] *= array[index];
    callback();
  }
}

var emptyArr = [];
var numberArr = [1, 2, 3, 4, 5];
var errorArr = [1, 2, '3', 4, 5];

each(emptyArr, squire, function(err, result) {
  if (err) {
    console.log('err.message: ', err.message);
  } else {
    console.log('result: ', result);
  }
});

each(numberArr, squire, function(err, result) {
  if (err) {
    console.log('err.message): ', err.message);
  } else {
    console.log('result: ', result);
  }
});

each(errorArr, squire, function(err, result) {
  if (err) {
    console.log('err.message): ', err.message);
  } else {
    console.log('result: ', result);
  }
});