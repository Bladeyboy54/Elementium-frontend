import React, { useEffect, useState } from "react";
import "./index.css";
import { Button } from "../../../Input/Button";
import { TbSmartHome } from "react-icons/tb";
import { MdOutlineWallet } from "react-icons/md";
import { TbChartCandle } from "react-icons/tb";
import { TbArrowsExchange } from "react-icons/tb";
import { TbUsers } from "react-icons/tb";

import { NavLink, useLocation } from "react-router-dom";
import { useAuth } from "../../../../utility/global/auth/authProvider";

export const SectionNavigation = () => {
  const { userLoggedIn } = useAuth();
  const [currentScreen, setCurrentScreen] = useState<string>("/");
  const location = useLocation();
  const iconSize = 24;
  const screens = [
    {
      label: "Overview",
      icon: <TbSmartHome size={iconSize} />,
      route: "/",
    },
    {
      label: "Wallet",
      icon: <MdOutlineWallet size={iconSize} />,
      route: "/wallet",
    },
    {
      label: "Transaction",
      icon: <TbArrowsExchange size={iconSize} />,
      route: "/transactions",
    },
    {
      label: "Market",
      icon: <TbChartCandle size={iconSize} />,
      route: "/market",
    },
  ];

  // Conditionally add the "Admin Portal" if the user is an admin
  if (userLoggedIn?.role === "admin") {
    screens.push({
      label: "Admin Portal",
      icon: <TbUsers size={iconSize} />,
      route: `/account/admin/${userLoggedIn?.userId}`,
    });
  }

  useEffect(() => {
    setCurrentScreen(location.pathname);
  }, [location]);

  return (
    <div className="section-nav-wrap">
      {/* {location.pathname} */}
      {screens.map((screen, i) =>
        screen.route === currentScreen ? (
          <NavLink to={screen.route} key={i}>
            <Button
              key={screen.route}
              label={screen.label}
              backgroundColor="#060604"
              textColor="#B1B98E"
              textSize="0.75rem"
              hoverTextColor="#060604"
              hoverBackgroundColor="#B1B98E"
              hoverBorderColor="#060604"
              justify="flex-start"
            >
              {screen.icon}
            </Button>
          </NavLink>
        ) : (
          <NavLink to={screen.route} key={i}>
            <Button
              key={screen.route}
              label={screen.label}
              backgroundColor="#B1B98E"
              textSize="0.75rem"
              hoverTextColor="#060604"
              hoverBackgroundColor="#B1B98E"
              hoverBorderColor="#060604"
              justify="flex-start"
            >
              {screen.icon}
            </Button>
          </NavLink>
        )
      )}
    </div>
  );
};
