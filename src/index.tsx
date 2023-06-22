import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./views/Home/HomePage/Home";

import { tryLoadAndStartRecorder } from "@alwaysmeticulous/recorder-loader";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Pegasus from "./views/Pegasus/PegasusPage/Pegasus";
import Zeus from "./views/Zeus/ZeusPage/zeus";
import Moodle from "./views/Moodle/MoodlePage/moodle";
import notFound from "./views/NotFound/NotFoundPage/notFound";
import MicrosoftAuth from "./views/MicrosoftAuth/MicrosoftAuthPage/MicrosoftAuth";

// setup the router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/home" replace />,
    ErrorBoundary: notFound,
  },
  {
    path: "/home",
    Component: Home,
  },
  {
    path: "/pegasus",
    Component: Pegasus,
  },
  {
    path: "/zeus",
    Component: Zeus,
  },
  {
    path: "/moodle",
    Component: Moodle,
  },
  {
    path: "microsoftAuth",
    Component: MicrosoftAuth,
  },
]);

async function startApp() {
  // Start the Meticulous recorder before you initialise your app.
  // Note: all errors are caught and logged, so no need to surround with try/catch
  await tryLoadAndStartRecorder({
    projectId: "IKaNpMEIXn8mwR8sbfl6f5A4TMucGgC87dV8iaP8",
  });

  // Initalise app after the Meticulous recorder is ready, e.g.
  // get and render the root
  const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
  root.render(<RouterProvider router={router} />);
}

startApp();
