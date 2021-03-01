//Load supertest.
const request = require("supertest");
//Load chai.
var expect = require("chai").expect;
//Load express.
const app = require("../src/server");

/**
 * Testing get all user endpoint.
 */

//Testing "registration of new user".
it("Should registration user.", async () => {
  await request(app)
    .post("/registration")
    .send({
      username: "speer",
      password: "ilovedoingthis",
    })
    .expect(200);
});

//Testing "if username name already exist".
// it("Should fail registering user.", async () => {
//   await request(app)
//     .post("/registration")
//     .send({
//       username: "speer",
//       password: "ilovedoingthis",
//     })
//     .expect(400);
// });

//Testing "login user".
it("Should pass login user.", async () => {
  await request(app)
    .post("/login")
    .send({
      username: "speer",
      password: "ilovedoingthis",
    })
    .expect(200);
});
