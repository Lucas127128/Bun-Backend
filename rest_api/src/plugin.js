import { Elysia } from "elysia";

//Plugin
export const plugin = new Elysia()
.state({
    plugin_version: 1
})
.get("/form-plugin", () => {
    console.log("hello world!")
    return "Hi"})
.get("/greet", ()=>"hello!")