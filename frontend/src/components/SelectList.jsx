import Select from "react-select";

const SelectList = ({ value, options, onChange }) => {
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
      />
    </div>
  );
};

import PropTypes from "prop-types";

SelectList.propTypes = {
  value: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
};
export default SelectList;
