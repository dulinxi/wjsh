const Router = require('koa-router');
const Mysql = require('../mysql');

const router = new Router();

router.get('/hoooooo', async (ctx, next) => {
  const mysql = new Mysql();
  await mysql.connect();
  const result = await mysql.query('select * from wp_users');
  console.log(result.user_email);
  ctx.body = 'Hello World!';
});
module.exports = router;
