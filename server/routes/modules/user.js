const Router = require('koa-router');

const user = new Router();

user.get('/', (ctx, next) => {
  console.log(1);
  ctx.body = 'user';
});
module.exports = user;
