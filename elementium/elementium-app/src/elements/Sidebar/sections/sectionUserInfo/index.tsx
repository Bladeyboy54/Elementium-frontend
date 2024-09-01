import React, { useEffect, useState } from "react";
import "./index.css";
import { TbLogout2 } from "react-icons/tb";
import { TiUser } from "react-icons/ti";
import { TbLogin2 } from "react-icons/tb";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../../../utility/global/auth/authProvider";

interface IUserInfo {
  profileImg?: string;
  username?: string;
}

interface IParsePath {
  section1?: "admin" | "user" | any;
  section2?: string;
  section3?: string;
}

export const SectionUserInfo: React.FC<IUserInfo> = ({
  profileImg,
  username = "Name not found",
}) => {
  const { logout, userLoggedIn } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [isHover, setIsHover] = useState(false);
  const [isScreenActive, setIsScreenActive] = useState(false);

  const accountRoutes = ["/account/user/0", "/account/admin/0"];
  const isActive = accountRoutes.includes(location.pathname);

  const parsePath = (path: string): IParsePath => {
    const sections = path.split("/").filter(Boolean);
    return {
      section1: sections[0],
      section2: sections[1],
      section3: sections[2],
    };
  };

  useEffect(() => {
    const parsedPath = parsePath(location.pathname);

    if (parsedPath.section1 === "account" || isActive) {
      setIsScreenActive(true);
    } else {
      setIsScreenActive(false);
    }
  }, [location.pathname, isActive]);

  const routeToUser = () => {
    if (userLoggedIn?.role && userLoggedIn?.userId) {
      navigate(`/account/${userLoggedIn.role}/${userLoggedIn.userId}`);
    }
  };

  return (
    <div
      className={`user-info-wrap ${!username && "user-not-logged-in"}`}
      onClick={() => {
        if (!username) navigate("/onboarding/login");
      }}
    >
      <div
        className="user-info-wrap-left"
        onClick={routeToUser}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <div
          className={`user-info-img-wrap ${
            isScreenActive || isHover ? "user-info-img-hover" : ""
          }`}
        >
          {profileImg ? (
            <img className="user-info-img" src={profileImg} alt="User" />
          ) : (
            <TiUser
              size={20}
              color={isScreenActive || isHover ? "#b1b98e" : "#050406"}
            />
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
