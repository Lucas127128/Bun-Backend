import { Elysia } from "elysia";
import { plugin } from "./plugin.js";

//Application
const date = new Date();
const app = new Elysia()
  .get("/", () => "Hello Elysia")
  .use(plugin)
  .state({
    id: 1,
    email: "s20241033@gmail.com",
  })
  .decorate("getDate", date.toDateString())
  .get("/post/:id", ({ params: { id } }) => {
    return { id: id, title: "Learn Bun" };
  })
  .post("/post", ({ body, set, store }) => {
    console.log(store);
    set.status = 201;
    return body;
  })
  .get("/track/*", () => {
    return "track route";
  })
  .get("/tracks", ({ store, getDate, request }) => {
    /*    return new Response(JSON.stringify({
        "tracks":[
            "Dancing Feat",
            "Sam I",
            "Animals"
        ]
    }), {
        headers:{
            'Content-Type': "application/json"
        }
    })  */
    console.log(store);
    console.log(getDate);
    console.log(store["email"]);
    console.log(store["plugin_version"]);
    console.log(request);
  })
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
