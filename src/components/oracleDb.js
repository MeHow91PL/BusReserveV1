
import oracledb from 'oracledb'

oracledb.getConnection(
  {
    user          : 'react',
    password      : 'react',
    connectString : 'localhost:1521/XE'
  })
  .then(function(connection) {
    return connection.execute(
      `SELECT *
       FROM opcje`,
      [180]
    )
      .then(function(result) {
        console.log(result.metaData);
        console.log(result.rows);

        return connection.close();
      })
      .catch(function(err) {
        console.log(err.message);

        return connection.close();
      });
  })
  .catch(function(err) {
    console.error(err.message);
  });