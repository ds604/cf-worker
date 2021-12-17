import { getDate } from "./src/util.js"

// addEventListener("fetch", event => {
//   event.respondWith(handleRequest(event.request))
// })

// async function handleRequest(request) {
//   return new Response(`Hello world, today is ${getDate()}`)
// }

export default {
  async fetch(request, environment, context) {
    return new Response("I’m a module!");
  },
  async scheduled(controller, environment, context) {
    // await doATask();
  }
}
