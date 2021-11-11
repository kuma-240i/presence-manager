// const { setupExpressServer } = require("../src/server");
const { setupExpressServer } = require("../src/server");
const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
chai.should();

// Another reason we separated creating our server from starting it
const app = setupExpressServer();

describe("The express server", () => {
  let request;
  beforeEach(() => {
    request = chai.request(app);
  });

  describe("express basics", () => {
    describe("GET /v1/hello - commentttttt", () => {
      it("should return status 200", async () => {
        const res = await request.get("/v1/hello");
        res.should.have.status(200);
      });
    });

    // describe("GET /hello - returning text", () => {
    //   it("should return the text/html 'world'", async () => {
    //     const res = await request.get("/hello");
    //     res.should.be.html;
    //     res.text.should.equal("world");
    //   });
    // });
  });
});
