import React from "react";
import "./index.css";
import { WalletAvailableCard } from "../../../../elements/Feedback/Cards/WalletAvailable";
import { Form } from "../../../../elements/Input/Form";
import { InputFieldText } from "../../../../elements/Input/InputField";
import Button from "../../../../elements/Input/Button";
import { DropdownEl } from "../../../../elements/Input/Dropdown";

export const MarketLeftSection = () => {
  return (
    <div className="market-left">
      <WalletAvailableCard />
      <div className="market-left-form">
        <Form
          heading="Purchase Currency"
          submitButton={<Button label="Purchase" />}
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "80px",
          }}
        >
          <DropdownEl />
          <div className="market-left-form-amount">
            <InputFieldText type="number" placeholder="Amount" />
            <div className="market-left-form-amount-rate">
              1 palladium equals ZAR 250
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};
