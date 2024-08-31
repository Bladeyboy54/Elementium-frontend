import React from "react";
import "./index.css";
import { useAuth } from "../../utility/global/auth/authProvider";
import { SectionLogo } from "./sections/sectionLogo";
import { SectionNavigation } from "./sections/sectionNavigation";
import { SectionUserInfo } from "./sections/sectionUserInfo";

export const Sidebar = () => {
  const { userLoggedIn } = useAuth();
  return (
    <div className="sidebar-wrap">
      <SectionLogo />
      <div className="sidebar-wrap-inner">
        <SectionNavigation />
        <SectionUserInfo username={userLoggedIn?.username} />
      </div>
    </div>
  );
};
