const OrientDBClient = require('orientjs').OrientDBClient;

const serverConfig = {
  host: 'localhost',
  port: 2424,
  username: 'root',
  password: '111111',
};

OrientDBClient.connect(serverConfig)
  .then(client => {
    return client.session({ name: 'o2', username: 'root', password: '111111' });
  })
  .then(session => {
    // 세션을 사용하여 코드 로직을 작성합니다.
    var sql = 'SELECT FROM topic';
    return session.query(sql).all();
  })
  .then(results => {
    console.log(results);
  })
  .catch(error => {
    console.error('오류:', error);
  });
