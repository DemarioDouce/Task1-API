//Load supertest.
const request = require("supertest");
//Load chai.
var expect = require("chai").expect;
//Load express.
const app = require("../src/server");

/**
 * Testing all user endpoint.
 */

//Testing "registration of new user".
it("Should registration user.", async () => {
  await request(app)
    .post("/registration")
    .send({
      username: "",
      password: "",
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
      username: "",
      password: "",
    })
    .expect(200);
});

//Testing "logout user".
it("Should pass logout user.", async () => {
  await request(app).post("/logout").expect(302);
});

/**
 * Testing all chat endpoint.
 */

//Testing "get all chat".
it("Should pass get all chat.", async () => {
  await request(app).get("/chat").expect(200);
});

//Testing "get Single Chat by id".
it("Should pass get a single chat by id.", async () => {
  await request(app).get("/chat/:id").expect(200);
});

//Testing "creat a chat".
it("Should pass creating a chat.", async () => {
  await request(app)
    .post("/chat/create")
    .send({
      message: "",
    })
    .expect(200);
});

//Testing "updating a chat by id".
it("Should pass updating a chat by id.", async () => {
  await request(app)
    .patch("/chat/update/:id")
    .send({
      message: "",
      postedBy: "",
    })
    .expect(200);
});

//Testing "deleting a chat by id".
it("Should pass deleting a chat by id.", async () => {
  await request(app).delete("/chat/delete/:id").expect(200);
});
