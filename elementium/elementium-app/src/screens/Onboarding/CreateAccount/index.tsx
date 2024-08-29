import React, { useEffect, useState } from "react";
import "./index.css";
import { InputFieldText } from "../../../elements/Input/InputField";
import { Form } from "../../../elements/Input/Form";
import Button from "../../../elements/Input/Button";
import { OnboadingTemplate } from "../../../utility/ui/OnboardingTemplate/index-onboading-template";
import { useNavigate } from "react-router-dom";
import { NewUser, useAuth } from "../../../utility/global/auth/authProvider";
import { TbMail, TbUser, TbLock } from "react-icons/tb";

export const CreateAccount = () => {
  const navigate = useNavigate();
  const { createAccount, setOnboardingEmail, setOnboardingName } = useAuth();
  const goToOTP = async () => {
    setOnboardingName(newUserForm.username);
    setOnboardingEmail(newUserForm.email);
    let newAccResponse = await createAccount(newUserForm);

    if (newAccResponse.type === 200) {
      navigate("/onboarding/otp");
    }
  };

  const [newUserForm, setNewUserForm] = useState<NewUser>({
    email: "",
    username: "",
    role: "user",
    password: "",
  });

  useEffect(() => {
    console.log(newUserForm);
  }, [newUserForm]);

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
        onChange={(e) => setNewUserForm({ ...newUserForm, username: e })}
      />
      <InputFieldText
        type="text"
        placeholder="Email"
        widthWrap="-webkit-fill-available"
        icon={<TbMail />}
        onChange={(e) => setNewUserForm({ ...newUserForm, email: e })}
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
        onChange={(e) => setNewUserForm({ ...newUserForm, password: e })}
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
