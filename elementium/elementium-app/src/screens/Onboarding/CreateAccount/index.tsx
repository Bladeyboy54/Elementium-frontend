import React, { useEffect, useState } from "react";
import "./index.css";
import { InputFieldText } from "../../../elements/Input/InputField";
import { Form } from "../../../elements/Input/Form";
import Button from "../../../elements/Input/Button";
import { OnboadingTemplate } from "../../../utility/ui/OnboardingTemplate/index-onboading-template";
import { useNavigate } from "react-router-dom";
import { NewUser, useAuth } from "../../../utility/global/auth/authProvider";
import { TbMail, TbUser, TbLock } from "react-icons/tb";
import { BeatLoader } from "react-spinners";

export const CreateAccount = () => {
  const navigate = useNavigate();
  const { createAccount, setOnboardingEmail, setOnboardingName } = useAuth();
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [newUserForm, setNewUserForm] = useState<NewUser>({
    userId: 0,
    email: "",
    username: "",
    role: "user",
    password: "",
  });

  // const goToOTP = async () => {
  //   setOnboardingName(newUserForm.username);
  //   setOnboardingEmail(newUserForm.email);
  //   let newAccResponse = await createAccount(newUserForm);

  //   if (newAccResponse.type === 200) {
  //     navigate("/onboarding/otp");
  //   }
  // };

  const goToOTP = async () => {
    setIsLoading(true);
    console.log(newUserForm);
    console.log(newUserForm?.email);
    try {
      setOnboardingEmail(newUserForm.email);
      let registerResponse = await createAccount(newUserForm);

      // Handle successful response
      if (registerResponse.type === 200 || registerResponse.type === 201) {
        console.log("Registration successful:", registerResponse);
        navigate("/onboarding/otp");
      } else {
        // Handle specific cases like unauthorized or other errors
        setFeedbackMessage(registerResponse.message);
        console.error("Registration failed with response:", registerResponse);
      }
    } catch (error: any) {
      setIsLoading(false);
      // Catch any network errors or unexpected issues
      const feedback = error;
      setFeedbackMessage(feedback?.response?.data?.message);
      console.error(feedback);
    }
  };

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
      submitButton={
        <Button onClick={goToOTP}>
          {isLoading ? (
            <BeatLoader color="#45404D" loading={true} size={8} />
          ) : (
            "Create Account"
          )}
        </Button>
      }
      style={{ width: "360px", gap: "40px" }}
    >
      {feedbackMessage && <div className="form-error">{feedbackMessage}</div>}
      <InputFieldText
        type="text"
        placeholder="Username"
        widthWrap="-webkit-fill-available"
        icon={<TbUser />}
        onChange={(e) => {
          setNewUserForm({ ...newUserForm, username: e });
          setFeedbackMessage(null);
        }}
      />
      <InputFieldText
        type="text"
        placeholder="Email"
        widthWrap="-webkit-fill-available"
        icon={<TbMail />}
        onChange={(e) => {
          setNewUserForm({ ...newUserForm, email: e });
          setFeedbackMessage(null);
        }}
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
        onChange={(e) => {
          setNewUserForm({ ...newUserForm, password: e });
          setFeedbackMessage(null);
        }}
      />
    </Form>
  );

  return (
    <div className="create-account">
      <OnboadingTemplate pageHeading="Join the club." form={CreateAccForm} />
    </div>
  );
};
