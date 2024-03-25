import { fireEvent, render, screen } from "@testing-library/react";
import appStore from "../../Utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";

it("Should test the Header Components is renders with a Login Button", () => {
  //The header Component Contains  the Redux and the link tag so we have to  wrap them into a BrowseRouter and the Provider
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //   const loginButton = screen.getByRole("button")
  // const loginButton = screen.getByText('Login') // not a good way
  const loginButton = screen.getByRole("button", { name: "Login" });
  // we can also find them by  spcific also by giving them  the name

  expect(loginButton).toBeInTheDocument();
});

it("Should render Header Components is renders with CartItems-0", () => {
  //The header Component Contains  the Redux and the link tag so we have to  wrap them into a BrowseRouter and the Provider
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

    // const cartItems = screen.getByText("Cart 0-Items")
    const cartItems = screen.getByText(/Cart/)


  expect(cartItems).toBeInTheDocument();
});

it("Should change the Login button to Logout while clicking", () => {
    //The header Component Contains  the Redux and the link tag so we have to  wrap them into a BrowseRouter and the Provider
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
  
    const loginButton = screen.getByRole("button",{name:"Login"})
    fireEvent.click(loginButton)
    const logoutButton = screen.getByRole("button",{name:"Logout"})

  
  
    expect(logoutButton).toBeInTheDocument();
  });
