import React from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
import Tilt from "react-parallax-tilt";
import WalletLogo from "../../../../assets/logo-black.svg";
import { TbArrowRight } from "react-icons/tb";

interface IWalletAvailable {
  amountAvailable?: number;
  amountCurrency?: number;
  accountNumber?: number | string;
  accountRoute?: number | string;
}

export const WalletAvailableCard: React.FC<IWalletAvailable> = ({
  amountAvailable = 100.0,
  amountCurrency = "ZAR",
  accountNumber = 1234567890,
}) => {
  const navigate = useNavigate();
  const navigateToWallet = (): void => {
    navigate("/wallet");
  };
  return (
    <Tilt
      perspective={1920}
      glareEnable={true}
      glareMaxOpacity={0.25}
      glareColor="#090909"
      // tiltMaxAngleY={1}
      // tiltAxis="y"
      className="wallet-available"
    >
      <div className="wallet-available-wrap" onClick={navigateToWallet}>
        <div className="wallet-available-left">
          <div className="wallet-available-left-amount-avail">
            <div className="wallet-available-left-amount">
              {amountCurrency + " " + amountAvailable}
            </div>
            <div className="wallet-available-left-amount-postlabel">
              available
            </div>
          </div>
          <div className="wallet-available-left-acc">
            <div className="wallet-available-left-acc-label">
              Account number
            </div>
            <div className="wallet-available-left-acc-number">0123456789</div>
          </div>
        </div>
        <div className="wallet-available-right">
          <div className="wallet-available-right-logo-wrap">
            <img
              alt="Wallet Logo"
              src={WalletLogo}
              className="wallet-available-right-logo"
            />
          </div>
          <div className="wallet-available-right-logo-icon">
            <TbArrowRight />
          </div>
        </div>
      </div>
    </Tilt>
  );
};
