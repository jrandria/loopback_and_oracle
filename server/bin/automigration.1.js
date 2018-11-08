var app = require('../server');

// this loads the accountDb configuration in ~/server/datasources.json
var dataSource = app.dataSources.db;

dataSource.automigrate('User', function(err) {
  if (err) throw err;
  dataSource.disconnect();
});

// this automigrates the model
dataSource.automigrate('meetup', function(err) {
  if (err) throw err;
  dataSource.disconnect();
});


/*

dataSource.isActual(models, function(err, actual) {
  if (!actual) {
    dataSource.autoupdate(models, function(err, result) {
      if (err) throw err;
      dataSource.disconnect();
    });
  }
});
*/
