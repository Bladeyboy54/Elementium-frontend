import React from "react";
import "./index.css";
import { TbLogout2 } from "react-icons/tb";
import { TiUser } from "react-icons/ti";
import { TbLogin2 } from "react-icons/tb";
import { Navigate, useNavigate } from "react-router-dom";
import Button from "../../../Input/Button";
import { useAuth } from "../../../../utility/global/auth/authProvider";

interface IUserInfo {
  profileImg?: string;
  username?: string;
}

export const SectionUserInfo: React.FC<IUserInfo> = ({
  profileImg,
  username = "King",
}) => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const login = (): void => {
    navigate("/onboarding/login");
  };

  return (
    <div
      className={`user-info-wrap ${!username && "user-not-logged-in"}`}
      onClick={(e) => {
        !username && login();
      }}
    >
      <div className="user-info-wrap-left">
        <div className="user-info-img-wrap">
          {profileImg ? (
            <img className="user-info-img" src="" alt="User" />
          ) : (
            <TiUser size={20} color="#b1b98e" />
          )}
        </div>
        {username ? (
          <div className="user-info-name">{username}</div>
        ) : (
          <div className="user-info-login">Login</div>
        )}
      </div>

      <div
        className={`user-info-options-wrap ${
          username && "user-info-options-logged-in"
        }`}
        onClick={logout}
      >
        {username ? (
          <TbLogout2 color="#050406" size={20} />
        ) : (
          <TbLogin2 color="#050406" size={20} />
        )}
      </div>
    </div>
  );
};
