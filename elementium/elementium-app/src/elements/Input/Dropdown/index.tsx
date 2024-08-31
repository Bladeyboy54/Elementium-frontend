import React, { useState } from "react";
import "./index.css";
import Dropdown from "rc-dropdown";
import Menu, { Item as MenuItem, Divider } from "rc-menu";
import Button, { ButtonProps } from "../Button";
import { BiExpandVertical } from "react-icons/bi";
import { TbCheck } from "react-icons/tb";

interface DropdownOption {
  label: string;
  value: string;
}

interface DropdownElProps extends ButtonProps {
  onSelectOption?: (option: DropdownOption) => void;
}

export const DropdownEl: React.FC<DropdownElProps> = ({
  label = "",
  backgroundColor = "#EDF2D6",
  textColor = "#060604",
  textSize = "0.8rem",
  textFont = "Satoshi",
  textWeight = "700",
  width = "",
  height = "auto",
  padding = "10px 15px",
  gap = 10,
  align = "center",
  justify = "space-between",
  borderColor = "transparent",
  borderRadius = "15px",
  hoverBackgroundColor = "#050406",
  hoverTextColor = backgroundColor,
  hoverBorderColor = backgroundColor,
  style,
  children,
  onSelectOption,
  ...props
}) => {
  const dropdownOptions = [
    {
      label: "Hydrogen",
      value: "balance_h2",
    },
    {
      label: "Lithium",
      value: "balance_li",
    },
    {
      label: "Palladium",
      value: "balance_pd",
    },
    {
      label: "Xenon",
      value: "balance_xe",
    },
  ];
  const [selectedOption, setSelectedOption] = useState<string>(
    dropdownOptions[0].value
  );
  const [selectedOptionLabel, setSelectedOptionLabel] =
    useState<string>("Choose option");
  function onSelect(key: any) {
    // console.log(`${key} selected`);
  }

  function onVisibleChange(visible: any) {
    // console.log(visible);
  }

  const optionClick = (option: any) => {
    setSelectedOption(option.value);
    setSelectedOptionLabel(option.label);
    if (onSelectOption) {
      onSelectOption(option); // Invoke the callback with the selected option object
    }
  };
  const menu = (
    <Menu onSelect={onSelect} className="dropdown-menu">
      {dropdownOptions.map((option, i) => {
        return (
          <MenuItem
            className="dropdown-menu-item"
            key={i}
            onClick={(e) => optionClick(option)}
          >
            {option.label}
            {selectedOption === option.value && <TbCheck />}
          </MenuItem>
        );
      })}
    </Menu>
  );
  return (
    <div>
      <Dropdown
        trigger={["click"]}
        overlay={menu}
        animation="slide-up"
        onVisibleChange={onVisibleChange}
      >
        <Button
          backgroundColor="#050406"
          textColor="#edf2d6"
          hoverTextColor="#edf2d6"
          borderColor="#edf2d6"
          justify={justify}
        >
          {selectedOptionLabel} <BiExpandVertical />
        </Button>
      </Dropdown>
    </div>
  );
};
