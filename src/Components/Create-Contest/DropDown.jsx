import React, { useState } from 'react';
// import './Dropdown.css'; // Include CSS for styling

export const Dropdown = ({ title, items, onSelect,clickable }) => {
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
        <div className="dropdown w-full h-full  rounded-md bg-gray-900 relative border-2 cursor-pointer border-[#5a5757] rounded-r-md mt-1 px-1 ">
            <div onClick={toggleDropdown} className="dropdown-toggle">
                {selectedItem}
            </div>
            {isOpen && (
                <div className="dropdown-menu z-10 absolute w-[98%]  bg-slate-500">
                    {items.map((item, index) => (
                        <div key={index} onClick={() => handleSelect(item)} className={`dropdown-item border-b-2 hover:border-2 border-slate-300 hover:border-white ${clickable?'cursor-pointer':''} `}>
                            {item}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

// export default Dropdown;
