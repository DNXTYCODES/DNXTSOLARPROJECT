import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-y7agkmqetvk26r0j.us.auth0.com"
      clientId="CPK1t6vfPt9ZIgCxMLEPjbpAhNOfYOEP"
      authorizationParams={{
        redirect_uri: "https://solarfrontend-c9rcwk11o-matthewcodezs-projects.vercel.app",
      }}
      audience="https://solarbackend-eight.vercel.app/"
      scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
