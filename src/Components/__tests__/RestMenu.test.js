import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestMenu from "../RestMenu";
import MOCK_DATA from "../mocks/restMenuMock.json";
import { Provider } from "react-redux";
import appStore from "../../Utils/appStore";
import "@testing-library/jest-dom";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import Cart from "../Cart";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

it("Should load the rest menu Component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordianHeader = screen.getByText("Recommended (20)");

  fireEvent.click(accordianHeader);

  const foodItems = screen.getAllByTestId("foodItems");
  expect(foodItems.length).toBe(20);

  const addButton = screen.getAllByRole("button", { name: "ADD" });

  fireEvent.click(addButton[2]);

  expect(screen.getByText("Cart 1-Items")).toBeInTheDocument();

  expect(screen.getAllByTestId("foodItems").length).toBe(21);

  fireEvent.click(screen.getByRole("button",{name:"Clear-Cart"}))

  expect(screen.getAllByTestId("foodItems").length).toBe(20)

});
