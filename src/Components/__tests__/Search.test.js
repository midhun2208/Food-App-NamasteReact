import { render,screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListingData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should Render the component with the Search Function", async () => {
  //to  avoid the stateupdate in the testing we uses a  functioncalled act that  returns a promise

  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  )

  const searchBtn = screen.getByRole("button",{name:"search"})
  console.log(searchBtn);

  expect(searchBtn).toBeInTheDocument()

});
