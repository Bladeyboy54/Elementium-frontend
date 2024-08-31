import React, { useEffect, useState } from "react";
import "./index.css";
import { WalletAvailableCard } from "../../../../elements/Feedback/Cards/WalletAvailable";
import { Form } from "../../../../elements/Input/Form";
import { InputFieldText } from "../../../../elements/Input/InputField";
import Button from "../../../../elements/Input/Button";
import { DropdownEl } from "../../../../elements/Input/Dropdown";
import { elements } from "chart.js";
import { useAuth } from "../../../../utility/global/auth/authProvider";

export const MarketLeftSection = () => {
  const [topUpForm, setTopUpForm] = useState<any>({
    userId: 0,
    currency: "",
    amount: 0,
  });

  const {userLoggedIn} = useAuth();
  

  const handleSubmit = () => {
    console.log("Submitted: ", topUpForm);
  }

  useEffect(() => {
    // console.log("logged in user: ", userLoggedIn?.&#36;id);
    
    console.log(topUpForm);
  }, [topUpForm]);

  return (
    <div className="market-left">
      <WalletAvailableCard />
      <div className="market-left-form">
        <Form
          heading="Purchase Currency"
          submitButton={<Button onClick={handleSubmit} label="Purchase" />}
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "80px",
          }}
        >
          <DropdownEl onSelectOption={(e) => {
                setTopUpForm({ ...topUpForm, currency: e.label });
              }} />
          <div className="market-left-form-amount">
            <InputFieldText
              onChange={(e) => {
                setTopUpForm({ ...topUpForm, amount: e });
              }}
              type="number"
              placeholder="Amount"
            />
            <div className="market-left-form-amount-rate">
              1 palladium equals ZAR 250
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};
