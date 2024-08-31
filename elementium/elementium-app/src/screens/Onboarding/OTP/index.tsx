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
  const { onboardingEmail, onboardingName, userLoggedIn, approveOTP } =
    useAuth();
  const [verifyOTPForm, setVerifyOTPForm] = useState<any>({
    Email: userLoggedIn?.email,
    Code: "",
  });
  const username = shortenText(onboardingName!, 15);
  const navigate = useNavigate();
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const verifyUser = async () => {
    console.log(verifyOTPForm?.Email);
    try {
      const verifyOTP = await approveOTP(verifyOTPForm);
      if (verifyOTP.type === 200) {
        setFeedbackMessage(verifyOTP.message);
        navigate("/");
      } else {
        console.log(verifyOTP);
        setFeedbackMessage(verifyOTP.message);
      }
    } catch (error: any) {
      console.log(error);
      setFeedbackMessage(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    console.log(verifyOTPForm);
  }, [verifyOTPForm]);

  const subheading = (
    <div className="text-body">
      Hi {username},<br />
      Enter OTP sent to email: <b>{onboardingEmail}</b>
    </div>
  );

  const OTPForm = (
    <Form
      heading="One Time Pin"
      customSubheading={subheading}
      submitButton={<Button onClick={verifyUser}>Enter</Button>}
      style={{ width: "max-content", gap: "40px" }}
    >
      {feedbackMessage && <div className="form-error">{feedbackMessage}</div>}
      <InputFieldText
        type="number"
        placeholder="Enter OTP"
        widthWrap="-webkit-fill-available"
        onChange={(e) => {
          setVerifyOTPForm({ ...verifyOTPForm, Code: e });
          setFeedbackMessage(null);
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
