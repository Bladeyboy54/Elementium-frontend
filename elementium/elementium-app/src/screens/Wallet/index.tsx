import React from "react";
import "./index.css";
import WalletComponent from "../../components/WalletComponent/WalletComponent";
import ProfileActionsComponent from "../../components/ProfileComponents/ProfileActionsComponent/ProfileActionsComponent";
import { useAuth } from "../../utility/global/auth/authProvider";

export const Wallet = () => {
  const { userLoggedIn } = useAuth();
  console.log(userLoggedIn);

  return (
    <div>
      Wallet
      <WalletComponent />
    </div>
  );
};
