var Flight = function () {
  this.data = {
    number: null,
    origin: null,
    destination: null,
    departs: null,
    arrives: null,
    actualDepart: null,
    actualArrive: null
  };

  this.fill = function(info) {
    for(var prop in this.data) {
      //console.log('this.data[prop]: ', this.data[prop]);
      if(this.data[prop] !== 'undefined') {
        this.data[prop] = info[prop];
      }
    }
  };

  this.triggerDepart = function () {
    this.data.actualDepart = Date.now();
  };
  this.triggerArrive = function () {
    this.data.actualArrive = Date.now();
  };
  this.getInformation = function () {
    return this.data;
  };
};

// Factory module
smodule.exports = function (info) {
  var instance = new Flight();

  //info:  { number: 847, origin: 'PDX', destination: 'LAX' }
  //info:  { number: 382, origin: 'AUS', destination: 'DCA' }
  //console.log('info: ', info);

  instance.fill(info);

  return instance;
};