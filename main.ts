import { Application, Router } from "@oak/oak";

const PORT = 5000;

const router = new Router();

router.get("/", ctx => {
  ctx.response.body = "hello world!";
});

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

app.listen({ port: PORT });

console.log(`server is running at: http://0.0.0.0:${PORT}`);
