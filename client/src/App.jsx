import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Authentication, Footer } from "./views";
import { Home, SignIn, SignUp } from "./routes";
import { NavBar } from "./components";


function App() {

  const

    Layout = () => {
      return (
        <>
          <NavBar />
          <Outlet />
          <Footer />
        </>
      );
    },

    Auth = () => {
      return (
        <section className="auth-container">
          <div>
            <Authentication />
            <Outlet />
          </div>
        </section>
      );
    },

    router = createBrowserRouter([
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
        ]
      },

      {
        path: "/",
        element: <Auth />,
        children: [
          {
            path: "login",
            element: <SignIn />,
          },
          {
            path: "signup",
            element: <SignUp />,
          },
        ]
      },
    ]);


  return (
    <section className="container">
      <RouterProvider router={router} />
    </section>
  );
}

export default App;