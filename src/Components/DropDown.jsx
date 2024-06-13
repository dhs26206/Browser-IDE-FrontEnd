import React, { useState } from 'react';
// import './Dropdown.css'; // Include CSS for styling

const Dropdown = ({ title, items, onSelect,clickable }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(title);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSelect = (item) => {
        setSelectedItem(item);
        if(clickable){
            // Open in New Tab
            Window.open(`/${item}`,'_blank')
        }
        setIsOpen(false);
        onSelect(item);
    };

    return (
        <div className="dropdown  bg-slate-700 border-2 cursor-pointer border-white rounded-r-md mt-1 px-1 ">
            <div onClick={toggleDropdown} className="dropdown-toggle">
                {selectedItem}
            </div>
            {isOpen && (
                <div className="dropdown-menu ">
                    {items.map((item, index) => (
                        <div key={index} onClick={() => handleSelect(item)} className={`dropdown-item ${clickable?'cursor-pointer':''} `}>
                            {item}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dropdown;
