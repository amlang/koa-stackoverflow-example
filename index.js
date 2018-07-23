const Koa = require('koa')
const app = new Koa()
app.use(async (ctx) => console.log(ctx.request.headers))

app.listen(8888)
