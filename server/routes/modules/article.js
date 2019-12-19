const Router = require('koa-router');

const article = new Router();

article.get('/', (ctx, next) => {
  console.log(ctx.request.query);
  ctx.body = 'article';
});
article.post('/add', (ctx, next) => {
  console.log(ctx.request.body);
  ctx.body = 'article';
});
module.exports = article;
