import React, { useEffect, useState } from "react";
import "./index.css";
import { PageName } from "../../elements/Feedback/PageName";
import { InputFieldText } from "../../elements/Input/InputField";
import { TbIcons } from "react-icons/tb";
import BodyGridWrapper from "../../utility/ui/Grid/bodyGrid";
import { WalletAvailableCard } from "../../elements/Feedback/Cards/WalletAvailable";
import { MarketLeftSection } from "./sections/MarketLeftSection";
import { MarketRightSection } from "./sections/MarketRightSection";

export const Market = () => {
  return (
    <div className="market">
      {/* Market */}
      <PageName name="Market" />

      <BodyGridWrapper>
        <MarketLeftSection />
        <MarketRightSection />
      </BodyGridWrapper>
    </div>
  );
};
