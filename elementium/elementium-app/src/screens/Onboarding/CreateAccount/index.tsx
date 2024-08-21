import React, { useEffect, useState } from "react";
import "./index.css";
import { InputFieldText } from "../../../elements/Input/InputField";
import { Form } from "../../../elements/Input/Form";
import Button from "../../../elements/Input/Button";
import { OnboadingTemplate } from "../../../utility/ui/OnboardingTemplate/index-onboading-template";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../utility/global/auth/authProvider";
import { TbMail, TbUser, TbLock } from "react-icons/tb";

interface IUserForm {
  email: string;
  password: string;
}

export const CreateAccount = () => {
  const navigate = useNavigate();
  const { createAccount } = useAuth();
  const goToOTP = async () => {
    let newAccResponse = await createAccount(userForm);

    // Ensure loginResponse is not void
    if (newAccResponse.type === 200) {
      navigate("/onboarding/otp");
    }
  };

  const [userForm, setUserForm] = useState<IUserForm>({
    email: "",
    password: "",
  });

  useEffect(() => {}, [userForm]);

  const subheading = (
    <div className="create-acc-subheading text-body">
      Already a member?{" "}
      <div
        className="button-text"
        onClick={(e) => navigate("/onboarding/login")}
      >
        Login
      </div>
    </div>
  );

  const CreateAccForm = (
    <Form
      heading="Create Account"
      customSubheading={subheading}
      submitButton={<Button onClick={goToOTP}>Create Account</Button>}
      style={{ width: "360px", gap: "40px" }}
    >
      <InputFieldText
        type="text"
        placeholder="Username"
        widthWrap="-webkit-fill-available"
        icon={<TbUser />}
      />
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
      <InputFieldText
        type="password"
        placeholder="Re-enter password"
        widthWrap="-webkit-fill-available"
        icon={<TbLock />}
      />
    </Form>
  );

  return (
    <div className="login">
      {/* Login{userForm.email}
       */}
      <OnboadingTemplate pageHeading="Join the club." form={CreateAccForm} />
    </div>
  );
};
