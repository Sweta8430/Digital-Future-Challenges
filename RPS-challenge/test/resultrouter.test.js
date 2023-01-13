import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import server from "../app.js";
chai.use(chaiHttp);

describe("Checking the request made successful on /result ", () => {
  it("Checking the response is sucessful after /result(POST) request", async () => {
    const res = await chai.request(server).post(`/result`).send({
      name: `testname`,
      choice: `rock`,
      compChoice: `paper`,
      finalResult: `computer win`,
    });
    expect(res.text).to.include("Rock Paper Scissor Game Result");
    expect(res.text).to.include("NEXT GAME");
    expect(res).to.have.status(200);
  });
});
