import chai, { expect } from "chai";
import Computer from "../src/computer.js";
chai.should();
describe("Testing the Computer Class", () => {
  const comp = new Computer();
  const compData = comp.computerData();
  it("Testing computer choice is valid option", () => {
    expect(compData).to.be.a(`string`);
    expect(comp.options).contains(compData);
  });
  it("Testing computer should generate the correct arrayof [RPS]", () => {
    expect(comp.options).to.have.lengthOf(3);
    expect(comp.options).to.be.an(`Array`);
    expect(comp.options).to.contain.oneOf([`rock`, `paper`, `scissor`]);
  });
});
