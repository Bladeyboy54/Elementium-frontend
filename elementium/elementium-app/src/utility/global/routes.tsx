import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import { Home } from "../../screens/Home";
import { Transactions } from "../../screens/Transactions";
import { Market } from "../../screens/Market";
import { Wallet } from "../../screens/Wallet";
import { Account } from "../../screens/Account";
import { Admin } from "../../screens/Account/Admin";
import { User } from "../../screens/Account/User";
import { Error404 } from "../../screens/Error404";
import { Onboarding } from "../../screens/Onboarding";
import { CreateAccount } from "../../screens/Onboarding/CreateAccount";
import { Login } from "../../screens/Onboarding/Login";
import { OTP } from "../../screens/Onboarding/OTP";
import { Sidebar } from "../../elements/Sidebar";
import { useAuth } from "./auth/authProvider";
import { PrivateRoute, PublicRoute } from "./auth/authRoutes";
import { Landing } from "../../screens/Onboarding/Landing";
import GridWrapper from "../ui/Grid/appGrid";

const AppRoutes: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <BrowserRouter>
      {/* <div> */}
      <GridWrapper sidebar={isAuthenticated && <Sidebar />}>
        {/* {isAuthenticated && <Sidebar />} */}
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="/transactions"
            element={
              <PrivateRoute>
                {/* <Transactions /> */}
                <Admin /> 
                {/* fix this (just for testing) */}
              </PrivateRoute>
            }
          />
          <Route
            path="/market"
            element={
              <PrivateRoute>
                <Market />
              </PrivateRoute>
            }
          />
          <Route
            path="/wallet"
            element={
              <PrivateRoute>
                <Wallet />
              </PrivateRoute>
            }
          />
          <Route
            path="/account"
            element={
              <PrivateRoute>
                <Account />
              </PrivateRoute>
            }
          >
            <Route
              path="user/:id"
              element={
                <PrivateRoute>
                  <User />
                </PrivateRoute>
              }
            />
            <Route
              path="admin/:id"
              element={
                <PrivateRoute>
                  <Admin />
                </PrivateRoute>
              }
            />
          </Route>
          <Route
            path="/onboarding"
            element={
              <PublicRoute>
                <Onboarding />
              </PublicRoute>
            }
          >
            <Route
              path="landing"
              element={
                <PublicRoute>
                  <Landing />
                </PublicRoute>
              }
            />
            <Route
              path="create-account"
              element={
                <PublicRoute>
                  <CreateAccount />
                </PublicRoute>
              }
            />
            <Route
              path="login"
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            />
            <Route
              path="otp"
              element={
                <PublicRoute>
                  <OTP />
                </PublicRoute>
              }
            />
          </Route>
          <Route path="*" element={<Error404 />} />
        </Routes>
      </GridWrapper>
      {/* </div> */}
    </BrowserRouter>
  );
};

export default AppRoutes;
