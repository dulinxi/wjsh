// const Router = require('koa-router');
// const Mysql = require('../mysql');

// const router = new Router();

// router.get('/hoooooo', async (ctx, next) => {
//   const mysql = new Mysql();
//   await mysql.connect();
//   const result = await mysql.query('select * from wp_users');
//   console.log(result.user_email);
//   ctx.body = 'Hello World!';
// });
// module.exports = router;
export default function(req, res, next) {
  // req is the Node.js http request object
  console.log(req.url);

  // res is the Node.js http response object

  // next is a function to call to invoke the next middleware
  // Don't forget to call next at the end if your middleware is not an endpoint!
  next();
}
