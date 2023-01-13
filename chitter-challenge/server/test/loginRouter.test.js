import Users from "../models/user.model.js";
import chai from "chai";
import { expect } from "chai";
import chaiHttp from "chai-http";
import server from "../app.js";
import testData from "./testData/samplesignupdata.js";
const testDataArray = testData.signup;
chai.use(chaiHttp);
describe(`Testing requests on the database`, () => {
  const testServer = chai.request(server).keepOpen();
  beforeEach(async () => {
    try {
      await Users.deleteMany();
      console.log(`Database cleared`);
    } catch (error) {
      console.log(`Error clearing`);
      throw new Error();
    }
    try {
      await Users.insertMany(testDataArray);
      console.log(`Database populated with test Peeps`);
    } catch (error) {
      console.log(`Error inserting`);
      // Terminate the test
      throw new Error();
    }
  });
  describe(`/POST on Login Page`, () => {
    it(`should Login Successful`, async () => {
      let login = {
        email: "test@gmail.com",
        pwd: "12345678",
      };

      const res = await testServer.post(`/login`).send(login);
      expect(res).to.have.status(200);
      expect(res).to.have.an(`object`);
      expect(res.body.message).to.be.eql(`Login successful!`);
    });
    it(`should send an expected message if username is wrong`, async () => {
      let login = {
        email: "test4@gmail.com",
        pwd: "12345678",
      };

      const res = await testServer.post(`/login`).send(login);

      expect(res).to.have.status(200);
      expect(res).to.have.an(`object`);
      expect(res.body.message).to.be.eql(
        `Username or Password Wrong! Please try again!`
      );
    });
    it(`should send an expected message if password is wrong`, async () => {
      let login = {
        email: "test@gmail.com",
        pwd: "1234567811",
      };

      const res = await testServer.post(`/login`).send(login);
      expect(res).to.have.status(200);
      expect(res).to.have.an(`object`);
      expect(res.body.message).to.be.eql(
        `Username or Password Wrong! Please try again!`
      );
    });
    it(`should send an expected message if both are wrong`, async () => {
      let login = {
        email: "test4@gmail.com",
        pwd: "1234567811",
      };

      const res = await testServer.post(`/login`).send(login);
      expect(res).to.have.status(200);
      expect(res).to.have.an(`object`);
      expect(res.body.message).to.be.eql(
        `Username or Password Wrong! Please try again!`
      );
    });
  });
});
