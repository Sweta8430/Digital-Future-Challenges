import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import server from "../app.js";
chai.use(chaiHttp);
describe("Checking the request made successful on HomePage / ", () => {
  it("Checking the request made successful on Home Page /", async () => {
    const res = await chai.request(server).get(`/`).send();
    expect(res).to.have.status(200);
    expect(res).to.be.html;
  });
});
