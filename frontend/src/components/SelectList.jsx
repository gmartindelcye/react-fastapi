import PropTypes from "prop-types";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import Select, { components } from "react-select";

const SelectList = ({ value, options, onChange }) => {
  const { theme, themes } = useContext(ThemeContext);
  const currentTheme = themes[theme];

  const OptionComponent = ({ isSelected, label, ...props }) => {
    return (
      <components.Option {...props}>
        <div
          style={{
            opacity: 1,
            color: isSelected ? currentTheme.boxColor : currentTheme.foreground,
            backgroundColor: isSelected
              ? currentTheme.foreground
              : currentTheme.boxColor,
            padding: "2px 4px", // Add some padding
            borderBottom: `3px solid ${currentTheme.border}`, // Add border between options
          }}
        >
          {label}
        </div>
      </components.Option>
    );
  };

  OptionComponent.propTypes = {
    isSelected: PropTypes.bool,
    label: PropTypes.string.isRequired,
  };

  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: currentTheme.background,
      borderColor: currentTheme.secondary,
      "&:hover": {
        borderColor: currentTheme.primary,
      },
    }),
    singleValue: (provided) => ({
      ...provided,
      color: currentTheme.accent,
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: currentTheme.boxColor,
      borderColor: currentTheme.border,
      color: currentTheme.foreground,
      boxShadow: `0 2px 5px 0 ${currentTheme.secondary}`,
      border: `3px solid ${currentTheme.border}`,
      borderRadius: "10%",
      opacity: 1, // Ensure opacity is set to 1
    }),
    menuList: (provided) => ({
      ...provided,
      backgroundColor: currentTheme.boxColor, // Set background color
      border: `3px solid ${currentTheme.border}`, // Add border
      borderRadius: "10%", // Optional: Add border radius
      padding: 0, // Remove default padding
      opacity: 1, // Ensure opacity is set to 1
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: "pink-500",
    }),
  };

  const listOptions = options.map((option) => ({
    value: option,
    label: option,
  }));
  const initialOption = listOptions.find((option) => option.value === value);

  return (
    <div>
      <Select
        value={initialOption}
        options={listOptions}
        onChange={onChange}
        className={`${currentTheme.secondary}`}
        styles={customStyles}
        components={{ Option: OptionComponent }}
      />
    </div>
  );
};

SelectList.propTypes = {
  value: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
};
export default SelectList;
