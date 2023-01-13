import { render, screen } from "@testing-library/react";
import AddPeeps from "../Components/Peeps/AddPeeps";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";

describe("Add Peeps Form tests", () => {
  const mockpeepHandler = jest.fn();
  const user = `testuser`;
  beforeEach(() => {
    render(
      <MemoryRouter>
        <AddPeeps peepHandler={mockpeepHandler} user={user} />
      </MemoryRouter>
    );
  });
  describe("Initial Render and Form Input Tests", () => {
    it("should render Please Enter Peeps as Title", () => {
      expect(screen.getByText(/Please Enter Peeps/i)).toBeInTheDocument();
    });
    it("should render Title Input type in the form", () => {
      expect(screen.getByText(/Title:/i)).toBeInTheDocument();
    });
    it("should render Message Input type in the form", () => {
      expect(screen.getByText(/Message:/i)).toBeInTheDocument();
    });
  });
  describe("Test AddPeeps Forms Input", () => {
    it("should render the title value when typed", () => {
      const testTitle = `testtitle`;
      const titileInput = screen.getByPlaceholderText("Please Enter Title...");
      userEvent.type(titileInput, testTitle);
      expect(titileInput).toHaveValue(testTitle);
    });
    it("should render the Message value when typed", () => {
      const testMsg = `testmessage`;
      const MsgInput = screen.getByPlaceholderText("Please Enter Message...");
      userEvent.type(MsgInput, testMsg);
      expect(MsgInput).toHaveValue(testMsg);
    });
  });
  describe("Post Peep Tests when events is occured.", () => {
    test("should make a call to mockpeepHandler when Post Peep is clicked", () => {
      const testPeep = {
        title: `testtitle`,
        message: `testmessage`,
      };
      const titleInput = screen.getByPlaceholderText("Please Enter Title...");
      const msgInput = screen.getByPlaceholderText("Please Enter Message...");
      const peepButton = screen.getByText("Post Peep");

      userEvent.type(titleInput, testPeep.title);
      userEvent.type(msgInput, testPeep.message);
      userEvent.click(peepButton);

      expect(mockpeepHandler).toHaveBeenCalledTimes(1);
    });
  });
});
