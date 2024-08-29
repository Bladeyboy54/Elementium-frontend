import React, { useEffect, useState } from "react";
import "./index.css";
import { Form } from "../../../elements/Input/Form";
import Button from "../../../elements/Input/Button";
import { Outlet, useNavigate } from "react-router-dom";
import { InputFieldText } from "../../../elements/Input/InputField";
import { OnboadingTemplate } from "../../../utility/ui/OnboardingTemplate/index-onboading-template";
import { useAuth } from "../../../utility/global/auth/authProvider";
import { TbMedicalCrossCircle } from "react-icons/tb";
import { shortenText } from "../../../utility/ui/shortenText";

export const OTP = () => {
  const { onboardingEmail, onboardingName, approveOTP } = useAuth();
  const [verifyOTPForm, setVerifyOTPForm] = useState<any>({
    otp: Number,
  });
  const username = shortenText(onboardingName!, 15);
  const navigate = useNavigate();
  const verifyUser = () => {
    approveOTP(verifyOTPForm);
    navigate("/");
  };

  const subheading = (
    <div className="text-body">
      Hi {username},<br />
      Enter OTP sent to email: <b>{onboardingEmail}</b>
    </div>
  );

  useEffect(() => {}, [verifyOTPForm]);
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
        onChange={(e) => {
          setVerifyOTPForm({ ...verifyOTPForm, otp: e });
        }}
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
