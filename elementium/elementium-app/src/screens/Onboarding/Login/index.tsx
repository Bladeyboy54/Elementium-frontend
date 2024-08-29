import React, { useEffect, useState } from "react";
import "./index.css";
import { IFeedback, useAuth } from "../../../utility/global/auth/authProvider";
import { InputFieldText } from "../../../elements/Input/InputField";
import Button from "../../../elements/Input/Button";
import { Form } from "../../../elements/Input/Form";
import { OnboadingTemplate } from "../../../utility/ui/OnboardingTemplate/index-onboading-template";
import { useNavigate } from "react-router-dom";
import { TbMail, TbLock } from "react-icons/tb";

interface IUserForm {
  Email: string;
  Password: string;
}

export const Login = () => {
  const navigate = useNavigate();
  const { login, setOnboardingEmail } = useAuth();
  const [userForm, setUserForm] = useState<IUserForm>({
    Email: "",
    Password: "",
  });
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const goToOTP = async () => {
    setIsLoading(true);
    try {
      setOnboardingEmail(userForm.Email);
      let loginResponse = await login(userForm);

      // Handle successful response
      if (loginResponse.type === 200) {
        console.log("Login successful:", loginResponse);
        navigate("/onboarding/otp");
      } else {
        // Handle specific cases like unauthorized or other errors
        console.error("Login failed with response:", loginResponse);
      }
    } catch (error: any) {
      setIsLoading(false);
      // Catch any network errors or unexpected issues
      const feedback = error;
      setFeedbackMessage(feedback.response.data.message);
      console.error(feedback);
    }
  };

  useEffect(() => {
    console.log(userForm);
  }, [userForm, isLoading, feedbackMessage]);

  const subheading = (
    <div className="login-subheading">
      Not a member yet?{" "}
      <div
        className="button-text"
        onClick={(e) => navigate("/onboarding/create-account")}
      >
        Create Account
      </div>
    </div>
  );

  const LoginForm = (
    <Form
      heading="Login"
      customSubheading={subheading}
      submitButton={
        <Button onClick={goToOTP}>{isLoading ? "Wait..." : "Login"}</Button>
      }
      style={{ width: "360px", gap: "40px" }}
    >
      {feedbackMessage && <div className="form-error">{feedbackMessage}</div>}
      <InputFieldText
        isRequired={true}
        type="text"
        placeholder="Email"
        widthWrap="-webkit-fill-available"
        icon={<TbMail />}
        onChange={(e) => {
          setUserForm({ ...userForm, Email: e });
          setFeedbackMessage(null);
        }}
      />
      <InputFieldText
        isRequired
        type="password"
        placeholder="Enter password"
        widthWrap="-webkit-fill-available"
        icon={<TbLock />}
        onChange={(e) => {
          setUserForm({ ...userForm, Password: e });
          setFeedbackMessage(null);
        }}
      />
    </Form>
  );

  return (
    <div className="login">
      <OnboadingTemplate pageHeading="Welcome back." form={LoginForm} />
    </div>
  );
};
