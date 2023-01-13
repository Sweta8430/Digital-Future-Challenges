import Peeps from "../models/peeps.model.js";
import chai from "chai";
import { expect } from "chai";
import chaiHttp from "chai-http";
import server from "../app.js";
import testData from "./testData/samplepeeps.js";
const testDataArray = testData.peeps;
chai.use(chaiHttp);
describe(`Testing requests on the database`, () => {
  const testServer = chai.request(server).keepOpen();

  beforeEach(async () => {
    try {
      await Peeps.deleteMany();
      console.log(`Database cleared`);
    } catch (error) {
      console.log(`Error clearing`);
      throw new Error();
    }
    try {
      await Peeps.insertMany(testDataArray);
      console.log(`Database populated with test Peeps`);
    } catch (error) {
      console.log(`Error inserting`);
      // Terminate the test
      throw new Error();
    }
  });
  describe(`/GET Peeps`, () => {
    it(`should return all of the Peeps as an array`, async () => {
      const res = await testServer.get(`/peeps`).send();

      expect(res).to.have.status(200);
      expect(res.body).to.be.an(`array`);
      expect(res.body.length).to.equal(testDataArray.length);
    });

    describe(`/POST create a Peep`, () => {
      it(`should not create a peep without an author field`, async () => {
        let peep = {
          title: "peep",
          message: "hello Peep",
        };

        const res = await testServer.post(`/addpeeps`).send(peep);
        expect(res).to.have.status(422);
        expect(res).to.have.property(`error`);
        expect(res.body.message).to.be.eql(`There is a Error in Peep Data`);
      });

      it(`should not create a todo without a title field`, async () => {
        let peep = {
          author: "peep1",
          message: "hello Peep",
        };

        const res = await testServer.post(`/addpeeps`).send(peep);

        expect(res).to.have.status(422);
        expect(res).to.have.property(`error`);
        expect(res.body.message).to.be.eql(`There is a Error in Peep Data`);
      });

      it(`should not create a todo without a message field`, async () => {
        let peep = {
          author: "peep1",
          title: "peep",
        };

        const res = await testServer.post(`/addpeeps`).send(peep);

        expect(res).to.have.status(422);
        expect(res).to.have.property(`error`);
        expect(res.body.message).to.be.eql(`There is a Error in Peep Data`);
      });

      it(`should create a SuccessFul Post request`, async () => {
        let peep = {
          author: "peep1",
          title: "peep",
          message: "hello Peep",
        };

        const res = await testServer.post(`/addpeeps`).send(peep);

        expect(res).to.have.status(201);
        expect(res.body).to.be.an(`object`);
      });
    });
  });
});
