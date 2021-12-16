export default {
  async fetch(request, environment, context) {
    return new Response("I’m a module!");
  },
  async scheduled(controller, environment, context) {
    // await doATask();
  }
}
