import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListingData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should Search resList for pizza text input", async () => {
  //to  avoid the stateupdate in the testing we uses a  functioncalled act that  returns a promise

  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeSearch = screen.getAllByTestId("resCards");
  expect(cardsBeforeSearch.length).toBe(9);

  const searchBtn = screen.getByRole("button", { name: "search" });
  const searchInput = screen.getByTestId("searchInput");

  fireEvent.change(searchInput, { target: { value: "pizza" } });
  fireEvent.click(searchBtn);

  const cards = screen.getAllByTestId("resCards");
  expect(cards.length).toBe(1);

  expect(searchBtn).toBeInTheDocument();
});

it("Should filter the top rated rests", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const beforeFilter = screen.getAllByTestId("resCards");
  expect(beforeFilter.length).toBe(9);

  const topRatedlist = screen.getByRole("button",{name:"Top Rated Resturant"})
  fireEvent.click(topRatedlist)
  console.log(topRatedlist);
  const afterFilter = screen.getAllByTestId("resCards")
  expect(afterFilter.length).toBe(4)

});
