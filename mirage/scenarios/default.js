export default function (server) {
  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */
  // server.createList('post', 10);
  server.createList('question', 120);
  server.createList('indefinite-question', 50);
  server.createList('weak-question', 40);
}
