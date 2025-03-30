import { createRoot } from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import Header from "./source/Components/Header";
import HeroComponent from "./source/Components/HeroComponent";
import Main from "./source/Components/Main";
import About from "./source/Components/About";
import Contact from "./source/Components/Contact";
import ProductDetail from "./source/Components/ProductDetail";
import Footer from "./source/Components/Footer";
import { useState } from "react";
const Layout = () => {
  const [status, setStatus] = useState(true);
  window.addEventListener("online", () => {
    setStatus(true);
  });
  window.addEventListener("offline", () => {
    setStatus(false);
  });
  if (status === true) {
    return (
      <>
        <Header></Header>
        <HeroComponent></HeroComponent>
        <Outlet></Outlet>
        <Footer></Footer>
      </>
    );
  } else {
    return <>
    <div className="offline-page">
    <h1>Hi there</h1>
    <span>Try reloading this page or following this link when you are offline</span>
    </div>
    </>
  }
};
const route = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Main></Main>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "productinfo/:proid",
        element: <ProductDetail></ProductDetail>,
      },
    ],
  },
]);
const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={route}></RouterProvider>);
