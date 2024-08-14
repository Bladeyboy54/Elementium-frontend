import React, { useEffect, useState } from "react";
import "./index.css";
import { PageName } from "../../elements/Feedback/PageName";
import { InputFieldText } from "../../elements/Input/InputField";
import { TbIcons } from "react-icons/tb";

export const Market = () => {
  return (
    <div className="market">
      {/* Market */}
      <PageName name="Market" />
      <InputFieldText placeholder="Placeholder" icon={<TbIcons />} />
      <InputFieldText
        type="password"
        placeholder="Placeholder"
        icon={<TbIcons />}
      />
    </div>
  );
};
