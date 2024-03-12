import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import RestMenu from "./Components/RestMenu";
import UserContext from "./Utils/UserContext";

// not using keys(not recommened) <<<<<<< index as a key <<<<<<<< unique id (best parctice)

//Chunking - making the code into different bundlers to optimize the app and to load in a diiferent js file
//Dynamic binding - binding Dynamically
// CodeSplitting
//Lazy loading - loading the component bubler when on it demands  in  the loading it helps in the production of the large scale to optimize and get efficent in loading the compoenets
//Demand Loading - Loading only when it is needed

const Grocery = lazy(() => import("./Components/Grocery"));

const About = lazy(()=>import("./Components/About"))
import {Provider} from 'react-redux';
import appStore from "./Utils/appStore";



const AppLayout = () => {

  const [userName,setUserName] = useState()
  useEffect(() => {
    const data = {
      name:"Midhun P M"
    }
    setUserName(data.name)
  }, []);

  return (
    // the conetxt dependes upon where we are using or wrapping the things
    //we have Provided the appStore using Provider
   <Provider store={appStore}>
     <UserContext.Provider value={{ loggedInUser: userName, setUserName}}>
      <div className="App">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
   </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element:(
          <Suspense fallback={<h1>loading</h1>}>
             <About />
          </Suspense>
        ),
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>loading</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/resturants/:resId",
        element: <RestMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
