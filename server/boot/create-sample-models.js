<<<<<<< HEAD
'use strict';

module.exports = function(app) {
  app.dataSources.mysqlDs.automigrate('CoffeeShop', function(err) {
    if (err) throw err;

    app.models.CoffeeShop.create([{
      name: 'Bel Cafe',
      city: 'Vancouver',
    }, {
      name: 'Three Bees Coffee House',
      city: 'San Mateo',
    }, {
      name: 'Caffe Artigiano',
      city: 'Vancouver',
    }], function(err, coffeeShops) {
      if (err) throw err;

      console.log('Models created: \n', coffeeShops);
    });
  });
=======
module.exports = function (app) {
   app.dataSources.mysqlIDs.automigrate('CoffeeShop', function(err) {
     if(err) console.log("error #1");

     app.models.CoffeeShop.create([{
       name: 'Oscar\'s Bakery',
       city: 'Canberra'
     }, {
       name: 'Coffee Grounds',
       city: 'Canberra'
     }, {
       name: 'Cafe Mizzuna',
       city: 'Canberra'
     }], function(err, coffeeShops) {
       if(err) console.console.log('error #2');
       console.log('Models created: \n', coffeeShops);
     });
   });
   console.log("Performed automigration.");
>>>>>>> 4ef0f9b6c7420855125170614b2d2bd8f07cd448
};
