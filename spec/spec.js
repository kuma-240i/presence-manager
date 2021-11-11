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
    request = chai.request(app).keepOpen();
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

  describe("POST /v1/presences", () => {
    describe("add presence", () => {
      it("should return status 201", async () => {
        const newMenber = {
          name: '芹澤 鴨',
          presence: '壬生郷士八木邸',
        };
        const resPost = await request.post("/v1/presences").send(newMenber);
        resPost.should.have.status(201);
      });
      it("should return expected data", async () => {
        const res = await request.get("/v1/presences");
        res.should.be.json;
        JSON.parse(res.text).length.should.deep.equal(6);
        JSON.parse(res.text).slice(-1)[0].name.should.deep.equal('芹澤 鴨');
      });
    });
  });

  describe("DELETE /v1/presences/:id", () => {
    describe("delete presence", () => {
      it("should return status 204", async () => {
        const resGet = await request.get("/v1/presences");
        const targetId = JSON.parse(resGet.text).slice(-1)[0].id;
        const resDelete = await request.delete("/v1/presences/"+targetId);
        resDelete.should.have.status(204);
      });
      it("should return expected data", async () => {       
        const res = await request.get("/v1/presences");
        res.should.be.json;
        JSON.parse(res.text).length.should.deep.equal(5);
        JSON.parse(res.text).slice(-1)[0].name.should.deep.equal('近藤 勇');
      });
    });
  });

  describe("PATCH /v1/presences/:id", () => {
    describe("patch presence", () => {
      it("should return status 204", async () => {
        const changeContent = {
          presence: "業務終了",
          message: "体調不良のため早退します",
        };
        const resGet = await request.get("/v1/presences");
        const targetId = JSON.parse(resGet.text).shift().id;
        const resPatch = await request.patch("/v1/presences/"+targetId).send(changeContent);
        resPatch.should.have.status(204);
      });
      it("should return expected data", async () => {       
        const res = await request.get("/v1/presences");
        res.should.be.json;
        JSON.parse(res.text).length.should.deep.equal(5);
        JSON.parse(res.text).slice(-1)[0].presence.should.deep.equal('業務終了');
        JSON.parse(res.text).slice(-1)[0].message.should.deep.equal('体調不良のため早退します');
      });
    });
  });

});
