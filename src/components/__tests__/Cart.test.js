import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import { act } from "react-dom/test-utils";
import MOCK_DATA from "../../../mocks/mockMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";
import Header from "../Header";
import Cart from "../Cart";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should load Restaurant Menu Component", async () => {
  await act(async () =>
    render(
      <Provider store={appStore}>
        <BrowserRouter>
          <Header />
          <RestaurantMenu />
          <Cart />
        </BrowserRouter>
      </Provider>
    )
  );

  const accordionHeader = screen.getByText("Biryani & Rice (11)");

  fireEvent.click(accordionHeader);

  expect(screen.getByText("(0)")).toBeInTheDocument();

  const addBtns = screen.getAllByRole("button", { name: "ADD +" });

  fireEvent.click(addBtns[0]);

  expect(screen.getByText("(1)")).toBeInTheDocument();

  const cart = screen.getByText("(1)");
  fireEvent.click(cart);

  const cartItems = screen.getAllByTestId("menu-item");

  expect(cartItems.length).toBe(12);

  fireEvent.click(screen.getByText("Clear Cart"));

  const cartItemsNew = screen.getAllByTestId("menu-item");

  expect(cartItemsNew.length).toBe(11);
});
