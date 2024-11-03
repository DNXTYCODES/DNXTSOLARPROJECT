import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-y7agkmqetvk26r0j.us.auth0.com"
      clientId="vgHbkPBe3b4vcJK5kRtp3uQuGRDhbS4e"
      authorizationParams={{
        redirect_uri: "https://solar-project-site.vercel.app",
        // redirect_uri: "window.location.origin"
      }}
      // audience="https://solar-project-snowy.vercel.app/"
      audience="http://localhost:8000"
      scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
