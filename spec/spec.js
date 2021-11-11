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

  describe("GET /v1/presences", () => {
    describe("return presence", () => {
      it("should return status 200", async () => {
        const res = await request.get("/v1/presences");
        res.should.have.status(200);
      });
      it("should return expected data", async () => {
        const res = await request.get("/v1/presences");
        res.should.be.json;
        JSON.parse(res.text).length.should.deep.equal(5);
        JSON.parse(res.text).shift().name.should.deep.equal('土方 歳三');
      });
    });

  });
});
