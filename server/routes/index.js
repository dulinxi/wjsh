const Router = require('koa-router');
const fs = require('fs');
const DB = require('../db');
// 使用handle来处理async/await
const { handle } = require('../utils/handle');
const user = require('./modules/user');
const article = require('./modules/article');

const router = new Router();
router.all('/api', ctx => {
  ctx.redirect('/');
  ctx.status = 301;
});
router.use('/api/user', user.routes(), user.allowedMethods());
router.use('/api/article', article.routes(), article.allowedMethods());

// router.get('/api', async (ctx, next) => {
//   const db = new DB();
//   const connect = await handle(db.connect());
//   if (connect.error) {
//     console.log('[mysql connect] error');
//     ctx.status = 500;
//     return;
//   }
//   const query = await handle(db.query('select * from wp_users'));
//   const result = await handle(db.query('select * from wp_users'));
//   if (result.error) {
//     console.log('[mysql query] error');
//     ctx.status = 500;
//     return;
//   }
//   ctx.body = result.data;
// });
module.exports = router;
