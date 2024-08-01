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

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/market" element={<Market />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/account" element={<Account />}>
          <Route path="user/:id" element={<User />} />
          <Route path="admin/:id" element={<Admin />} />
        </Route>
        <Route path="/onboarding" element={<Onboarding />}>
          <Route path="create-account" element={<CreateAccount />} />
          <Route path="login" element={<Login />} />
          <Route path="otp" element={<OTP />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
