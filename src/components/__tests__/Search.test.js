import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import { act } from "react-dom/test-utils";
import MOCK_DATA from "../../../mocks/mockResList.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  // we have to mock fetch here
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

describe("Search tests", () => {
  it("Should search res list for restaurant input", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      );
    }); // global is an object wherever this is being rendered
    const initialCards = screen.getAllByTestId("res-card");

    expect(initialCards.length).toBe(20);

    const searchBtn = screen.getByTestId("search-res");

    const searchInput = screen.getByPlaceholderText("Search restaurants");

    fireEvent.change(searchInput, { target: { value: "restaurant" } }); // the object is simulating what we get as 'e'

    fireEvent.click(searchBtn);

    // screen should load 1 card
    const finalCards = screen.getAllByTestId("res-card");
    expect(finalCards.length).toBe(2);
  });

  it("Should filter top-rated res", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      );
    }); // global is an object wherever this is being rendered

    const topRatedBtn = screen.getByTestId("top-rated-btn");

    fireEvent.click(topRatedBtn);

    const cards = screen.getAllByTestId("res-card");
    expect(cards.length).toBe(8);
  });
});
