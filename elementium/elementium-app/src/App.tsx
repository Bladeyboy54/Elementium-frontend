import React from "react";
import "./App.css";
import "./utility/ui/globalStyle.css";
import Routes from "./utility/global/routes";
import { AuthProvider } from "./utility/global/auth/authProvider";

function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;
