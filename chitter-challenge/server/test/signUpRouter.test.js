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
  describe(`/POST create a SignUp/NewUser`, () => {
    it(`should not create a user without an firstname field`, async () => {
      let signup = {
        lname: "testlname",
        userhandler: "testuser",
        email: "test@gmail.com",
        pwd: "12345678",
      };

      const res = await testServer.post(`/signup`).send(signup);
      expect(res).to.have.status(422);
      expect(res).to.have.property(`error`);
      expect(res.body.message).to.be.eql(`There is an Error in User Data`);
    });
    it(`should not create a user without an lastname field`, async () => {
      let signup = {
        fname: "testfname",
        userhandler: "testuser",
        email: "test@gmail.com",
        pwd: "12345678",
      };

      const res = await testServer.post(`/signup`).send(signup);
      expect(res).to.have.status(422);
      expect(res).to.have.property(`error`);
      expect(res.body.message).to.be.eql(`There is an Error in User Data`);
    });
    it(`should not create a user without an Email field`, async () => {
      let signup = {
        fname: "testfname",
        lname: "testlname",
        userhandler: "testuser",
        pwd: "12345678",
      };

      const res = await testServer.post(`/signup`).send(signup);
      expect(res).to.have.status(422);
      expect(res).to.have.property(`error`);
      expect(res.body.message).to.be.eql(`There is an Error in User Data`);
    });
    it(`should not create a user without an Password field`, async () => {
      let signup = {
        fname: "testfname",
        lname: "testlname",
        userhandler: "testuser",
        email: "test@gmail.com",
      };

      const res = await testServer.post(`/signup`).send(signup);
      expect(res).to.have.status(422);
      expect(res).to.have.property(`error`);
      expect(res.body.message).to.be.eql(`There is an Error in User Data`);
    });
    it(`should not create a user without an userhandler field`, async () => {
      let signup = {
        fname: "testfname",
        lname: "testlname",
        email: "test@gmail.com",
        pwd: "12345678",
      };

      const res = await testServer.post(`/signup`).send(signup);
      expect(res).to.have.status(422);
      expect(res).to.have.property(`error`);
      expect(res.body.message).to.be.eql(`There is an Error in User Data`);
    });
    it(`should create a Successful Registration for User`, async () => {
      let signup = {
        fname: "testfname",
        lname: "testlname",
        userhandler: "testuser",
        email: "test3@gmail.com",
        pwd: "1234567",
      };

      const res = await testServer.post(`/signup`).send(signup);
      expect(res).to.have.status(200);
      expect(res.body).to.be.an(`object`);
      expect(res.body.message).to.be.eql(`Registration successful`);
    });
    it(`should Give a message of User Already exist  if i pass the same email`, async () => {
      let signup = {
        fname: "testfname",
        lname: "testlname",
        userhandler: "testuser",
        email: "test@gmail.com",
        pwd: "1234567",
      };

      const res = await testServer.post(`/signup`).send(signup);
      expect(res).to.have.status(200);
      expect(res.body).to.be.an(`object`);
      expect(res.body.message).to.be.eql(`User already exists!`);
    });
    it(`should Give a message of User Already exist  if userhandler and email are same.`, async () => {
      let signup = {
        fname: "testfname",
        lname: "testlname",
        userhandler: "test@gmail.com",
        email: "test@gmail.com",
        pwd: "1234567",
      };

      const res = await testServer.post(`/signup`).send(signup);
      expect(res).to.have.status(200);
      expect(res.body).to.be.an(`object`);
      expect(res.body.message).to.be.eql(`User already exists!`);
    });
  });
});
