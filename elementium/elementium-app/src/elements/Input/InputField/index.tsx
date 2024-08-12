import React, { useEffect, useState } from "react";
import "./index.css";
import { TbEye, TbEyeOff } from "react-icons/tb";

// extends React.HTMLAttributes<HTMLDivElement>
interface IInputFieldProps {
  type?: "text" | "email" | "password" | "number";
  placeholder?: string;
  icon?: React.ReactNode;
  textColor?: string;
  widthValue?: string;
  widthWrap?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export const InputFieldText: React.FC<IInputFieldProps> = ({
  type = "text",
  placeholder,
  icon,
  textColor = "#EDF2D6",
  widthWrap = "fit-content",
  widthValue = "100px",
  value = "",
  onChange,
}) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [isPasswordViewOn, setIsPasswordViewOn] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>(value);
  const [inputType, setInputType] = useState<string>(type);

  useEffect(() => {
    if (type === "password") {
      setInputType(isPasswordViewOn ? "text" : "password");
    } else {
      setInputType(type);
    }
  }, [isPasswordViewOn, type, inputType]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div
      className={`input-field ${isFocus ? "input-focus" : ""}`}
      style={{ width: widthWrap }}
    >
      {icon && <div className="input-field-icon">{icon}</div>}
      <input
        placeholder={placeholder}
        type={inputType}
        className="input-field-value"
        style={{ color: textColor, width: widthValue }}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={handleInputChange}
      />
      {type === "password" && (
        <div
          className="input-field-password-icon"
          onClick={() => setIsPasswordViewOn(!isPasswordViewOn)}
        >
          {isPasswordViewOn ? <TbEyeOff /> : <TbEye />}
        </div>
      )}
    </div>
  );
};
