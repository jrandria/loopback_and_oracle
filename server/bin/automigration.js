var app = require('../server');

// this loads the accountDb configuration in ~/server/datasources.json
var dataSource = app.dataSources.db;

var lbTables = ['User', 'AccessToken', 'ACL', 'RoleMapping', 'Role', 'meetup'];
dataSource.automigrate(lbTables, function(er) {
    if (er) throw er;
    console.log('Loopback tables [' + lbTables + '] created in ', dataSource.adapter.name);
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
