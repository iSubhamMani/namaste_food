import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../../../mocks/resCardMock.json";
import "@testing-library/jest-dom";
import { withOffersHeader } from "../RestaurantCard";

it("Should render Restaurant Card componenet with props data", () => {
  render(<RestaurantCard data={MOCK_DATA} />);

  const resName = screen.getByText("KFC");
  expect(resName).toBeInTheDocument();
});

it("Should render Restaurant Card componenet with offers", () => {
  const RestaurantCardWithOffers = withOffersHeader(RestaurantCard);
  render(<RestaurantCardWithOffers data={MOCK_DATA} />);

  const resName = screen.getByText("40% OFF UPTO ₹80");
  expect(resName).toBeInTheDocument();
});
