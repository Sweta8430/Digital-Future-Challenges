import { render, screen } from "@testing-library/react";
import DisplayPeeps from "../Components/Home/DisplayPeeps";
import { MemoryRouter } from "react-router-dom";

import peepData from "../test/testData/peepData.json";

describe("Display Peeps Tests", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <DisplayPeeps peepdata={peepData.peeps} />
      </MemoryRouter>
    );
  });
  describe("Checking the Peep Data Rendered correctly", () => {
    it("should show correct Author", () => {
      expect(screen.getByText("@test1")).toBeInTheDocument;
    });

    it("should show correct user Title", () => {
      expect(screen.getByText("First Peep")).toBeInTheDocument;
    });
    it("should show correct user Title", () => {
      expect(screen.getByText("Hello From First Peep")).toBeInTheDocument;
    });
  });
});
