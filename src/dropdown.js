import React, { useState } from 'react';

const DropdownWithCheckboxes = ({ handleDropdownChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');
  const [checkedItems, setCheckedItems] = useState({
    item1: false,
    item2: false,
    item3: false,
    item4: false,
  });

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleCheckboxChange = (e, label) => {
    const { name } = e.target;
    const updatedCheckedItems = {
        item1: false,
        item2: false,
        item3: false,
        item4: false,
        [name]: true,
      };
      setCheckedItems(updatedCheckedItems);
      setSelectedItem(label);
      handleDropdownChange(label);
      setIsOpen(false)
  };

  return (
    <div className="dropdown">
      <p onClick={toggleDropdown}>I am attending this event as &#9650;</p>
      {!isOpen && <input type='text' name='attendingAs' value={selectedItem} readOnly className='dropdown__input' placeholder='- - - -' onClick={toggleDropdown} />}

      {isOpen && (
        <div className="dropdown-menu">
          <label>
            <input type="checkbox" name="item1" checked={checkedItems.item1} onChange={(e) => handleCheckboxChange(e, 'Teacher')} />
            Teacher
          </label>
          <label>
            <input type="checkbox" name="item2" checked={checkedItems.item2} onChange={(e) => handleCheckboxChange(e, 'Speaker')}
            />
            Speaker
          </label>
          <label>
            <input type="checkbox" name="item3" checked={checkedItems.item3} onChange={(e) => handleCheckboxChange(e, 'Sponsor')} />
            Sponsor
          </label>
          <label>
            <input type="checkbox" name="item4" checked={checkedItems.item4} onChange={(e) => handleCheckboxChange(e, 'Others')} />
            Others
          </label>
        </div>
      )}
    </div>
  );
};

export default DropdownWithCheckboxes;
