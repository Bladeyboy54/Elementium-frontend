import React from "react";
import "./index.css";
import { Form } from "../../../elements/Input/Form";
import Button from "../../../elements/Input/Button";
import { Outlet, useNavigate } from "react-router-dom";
import { InputFieldText } from "../../../elements/Input/InputField";
import { OnboadingTemplate } from "../../../utility/ui/OnboardingTemplate/index-onboading-template";
import { useAuth } from "../../../utility/global/auth/authProvider";
import { TbMedicalCrossCircle } from "react-icons/tb";

export const OTP = () => {
  const { approveOTP } = useAuth();
  const navigate = useNavigate();
  const verifyUser = () => {
    approveOTP(1234);
    navigate("/");
  };
  const subheading = (
    <div className="text-body">
      Enter your OTP sent to your email - <b>name@provider.com</b>
    </div>
  );
  const OTPForm = (
    <Form
      heading="One Time Pin"
      customSubheading={subheading}
      submitButton={<Button onClick={verifyUser}>Enter</Button>}
      style={{ width: "max-content", gap: "40px" }}
    >
      <InputFieldText
        type="number"
        placeholder="Enter OTP"
        widthWrap="-webkit-fill-available"
        icon={<TbMedicalCrossCircle />}
      />
    </Form>
  );
  return (
    <div>
      {/* Onboarding */}
      <OnboadingTemplate pageHeading="Bank On Us." form={OTPForm} />
      <Outlet />
    </div>
  );
};
