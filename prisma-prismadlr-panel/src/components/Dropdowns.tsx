import { css } from '@emotion/css';
import { useStyles2 } from '@grafana/ui';
import ArrowDown from 'icons/ArrowDown';
import React, { useEffect, useState } from 'react';

interface MultiSelectProps {
  label: string;
  value: string[];
  options: string[];
  disabled?: boolean;
  handleChange: (value: string[]) => void;
}

const getStyles = () => ({
  dropdown: css`
    margin: 2px;
    min-width: 155px;
    border: 1px solid #0788c8;
    border-radius: 7px;
    width: 155px;
    padding-left: 5px;
  `,
  dropdownButton: css`
    width: 100%;
    text-align: left;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    font-weight: 700;
  `,
  dropdownContent: css`
    display: none;
    position: absolute;
    background-color: #1c1f21;
    min-width: 155px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  `,
  dropdownContentShow: css`
    display: block;
    border: 1px solid #0788c8;
    border-radius: 0px 0px 7px 7px;
  `,
  statusButton: css`
    background-color: transparent;
    border: 0px;
    font-weight: 700;
  `,
  checkbox: css`
    margin: 3px;
  `,
});

export const MultiSelect: React.FC<MultiSelectProps> = ({ label, options, value, handleChange, disabled = false }) => {
  const styles = useStyles2(getStyles);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState(value);
  const [selectAll, setSelectAll] = useState(false);

  const handleToggle = () => {
    setShowDropdown(!showDropdown);
  };

  const handleCheckboxChange = (option: string) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((o) => o !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
    handleChange(selectedOptions);
    setSelectAll(false);
  };

  const handleSelectAllChange = () => {
    const newSelectedOptions = selectAll ? [] : [...options];
    setSelectedOptions(newSelectedOptions);
    handleChange(newSelectedOptions);
    setSelectAll(!selectAll);
  };

  useEffect(() => {
    setSelectAll(selectedOptions.length === options.length);
  }, [selectedOptions, options]);

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
      <label style={{ fontWeight: 700 }}>{label}</label>
      <div className={styles.dropdown}>
        <div className={styles.dropdownButton} onClick={handleToggle}>
          <div className={styles.checkbox}>
            <input type="checkbox" checked={selectAll} onChange={handleSelectAllChange} disabled={disabled} />
            <span> All</span>
          </div>
          <button className={styles.statusButton}>
            {selectedOptions.length}/{options.length}
            <span style={{ margin: '0px 5px 0px 5px' }}>
              <ArrowDown />
            </span>
          </button>
        </div>
        <div className={`${styles.dropdownContent} ${showDropdown ? styles.dropdownContentShow : ''}`}>
          {options.map((option) => (
            <div key={option} className={styles.checkbox}>
              <input
                type="checkbox"
                checked={selectedOptions.includes(option)}
                onChange={() => handleCheckboxChange(option)}
                disabled={disabled}
              />
              <span> {option}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
