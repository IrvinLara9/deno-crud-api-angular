import 'jsr:@std/dotenv/load';
import { Application } from './deps.ts';
import router from './routes/fruit.routes.ts';
import { oakCors } from './deps.ts';

const app = new Application();

app.use(async (ctx, next) => {
  console.log(`${ctx.request.method} ${ctx.request.url}`);
  await next();
});

app.use(oakCors());
app.use(router.routes());
app.use(router.allowedMethods());

console.log('Server is running on http://localhost:8000');
await app.listen({ port: 8000 });
