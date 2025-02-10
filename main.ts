import { Application, Router } from "@oak/oak";
import { HOST, PORT } from "./src/lib/Constants.ts";

const router = new Router();

router.get("/", ctx => {
  ctx.response.body = "hello world!";
});

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

app.listen({ port: PORT, hostname: HOST });

console.log(`server is running at: http://${HOST}:${PORT}`);
