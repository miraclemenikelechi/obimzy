import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Authentication } from "./views";
import { SignIn, SignUp } from "./routes";


function App() {

  const

    Layout = () => {
      return;
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
            path: "",
            element: "",
          }
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