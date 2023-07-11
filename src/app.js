import React, { lazy, Suspense, useState, useContext } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./components/contact";
import RestaurantMenu from "./components/RestaurantMenu";
import { Outlet } from "react-router-dom";
import Loading from "./components/Loading";
import InstaMart from "./components/InstaMart";
import UserContext from "./utils/userContext";
import Store from "./utils/store"
import { Provider } from "react-redux";
import store from "./utils/store";


const Cart = lazy(() => import("./components/Cart"));
const AppLayout = () => {
  return (
    <Provider store={store}>
      <Header />
      <Outlet />
      <Footer />
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
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<Loading />}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "/instaMart",
        element: <InstaMart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
