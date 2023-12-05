const { render, screen } = require("@testing-library/react");
const { default: ContactUs } = require("../contact-us");
import "@testing-library/jest-dom";

// render -> query something -> assert

describe.skip("Contact us tests", () => {
  it("Should load heading in contact us component", () => {
    render(<ContactUs />); // render to JS DOM

    const heading = screen.getByRole("heading"); // finds all the heading elements inside the componenet

    expect(heading).toBeInTheDocument();
  });

  it("Should load button in contact us component", () => {
    render(<ContactUs />); // render to JS DOM

    const button = screen.getByText("Submit"); // finds all the heading elements inside the componenet

    expect(button).toBeInTheDocument();
  });

  it("Should load label in contact us component", () => {
    render(<ContactUs />); // render to JS DOM

    const label = screen.getByLabelText("Enter your email"); // finds all the heading elements inside the componenet

    expect(label).toBeInTheDocument();
  });

  it("Should load all two input boxes in contact us component", () => {
    render(<ContactUs />); // render to JS DOM

    const inputBoxes = screen.getAllByRole("textbox"); // finds all the heading elements inside the componenet

    expect(inputBoxes.length).toBe(2);
  });
});
