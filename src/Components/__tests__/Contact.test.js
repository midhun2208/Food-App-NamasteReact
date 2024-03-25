import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Test the Contact  Page ", () => {
  it("Should load the contact us page", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");
    //Assertion
    expect(heading).toBeInTheDocument();
  });
  it("Should load the and find the button in the contact Component", () => {
    render(<Contact />);

    const button = screen.getByText("Submit");

    expect(button).toBeInTheDocument();
  });
  it("Should load the and find the imput name in the contact Component", () => {
    render(<Contact />);

    const input = screen.getByPlaceholderText("name");

    expect(input).toBeInTheDocument();
  });
  it("Should load the 2 input boxes on the COntact Component", () => {
    render(<Contact />);

    const inputs = screen.getAllByRole("textbox");

    expect(inputs.length).toBe(2);
  });
});
