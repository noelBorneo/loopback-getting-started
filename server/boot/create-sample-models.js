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
};
