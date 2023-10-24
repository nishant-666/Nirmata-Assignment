import React from "react";
import ReactDOM from "react-dom/client";
import PlayerListPage from "./pages/PlayerListPage.tsx";
import PlayerDetails from "./components/PlayerDetails.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PlayerListPage />,
  },
  {
    path: "/player-details",
    element: <PlayerDetails />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
