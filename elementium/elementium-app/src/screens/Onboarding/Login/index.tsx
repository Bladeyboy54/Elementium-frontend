import React, { useEffect, useState } from "react";
import "./index.css";
import { IFeedback, useAuth } from "../../../utility/global/auth/authProvider";
import { InputFieldText } from "../../../elements/Input/InputField";
import Button from "../../../elements/Input/Button";
import { Form } from "../../../elements/Input/Form";
import { OnboadingTemplate } from "../../../utility/ui/OnboardingTemplate/index-onboading-template";
import { useNavigate } from "react-router-dom";
import { TbMail, TbUser, TbLock } from "react-icons/tb";

interface IUserForm {
  email: string;
  password: string;
}

export const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [userForm, setUserForm] = useState<IUserForm>({
    email: "",
    password: "",
  });

  const goToOTP = async () => {
    let loginResponse = await login(userForm);

    // Ensure loginResponse is not void
    if (loginResponse.type === 200) {
      navigate("/onboarding/otp");
    }
  };

  useEffect(() => {}, [userForm]);

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
      submitButton={<Button onClick={goToOTP}>Login</Button>}
      style={{ width: "360px", gap: "40px" }}
    >
      <InputFieldText
        type="text"
        placeholder="Email"
        widthWrap="-webkit-fill-available"
        icon={<TbMail />}
      />
      <InputFieldText
        type="password"
        placeholder="Enter password"
        widthWrap="-webkit-fill-available"
        icon={<TbLock />}
      />
    </Form>
  );

  return (
    <div className="login">
      {/* Login{userForm.email}
       */}
      <OnboadingTemplate pageHeading="Welcome back." form={LoginForm} />
    </div>
  );
};
