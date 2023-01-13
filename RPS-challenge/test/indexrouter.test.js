import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import server from "../app.js";
chai.use(chaiHttp);
describe("Checking the request made successful on index / ", () => {
  it("Checking the request made successful on index /", async () => {
    const res = await chai.request(server).get(`/index`).send();
    expect(res).to.have.status(200);
    expect(res).to.be.html;
  });
});
