import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import server from "../app.js";
chai.use(chaiHttp);

describe("Checking the request made successful on /game ", () => {
  it("Checking the request made successful on /game (GET)", async () => {
    const res = await chai.request(server).get(`/game`).send();
    expect(res).to.have.status(200);
    expect(res).to.be.html;
    expect(res.text).to.include("Welcome  Lets Play Rock Paper Scissor !!");
    expect(res.text).to.include("Please Choose One Option");
    expect(res.text).to.include("Rock");
    expect(res.text).to.include("Paper");
    expect(res.text).to.include("Scissor");
  });
  it("Checking the request made successful on /game (POST)", async () => {
    const res = await chai.request(server).post(`/game`).send({
      player: `testname`,
    });
    expect(res).to.have.status(200);
  });
});
