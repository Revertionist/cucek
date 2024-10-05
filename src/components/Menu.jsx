import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Menu = ({ onClose }) => {
    const [bgImage, setBgImage] = useState(''); // State to hold the background image
    const [selectedItem, setSelectedItem] = useState(''); // State to track selected menu item
    const navigate = useNavigate()

    const handleMenuClick = (item) => {
        setSelectedItem(item); // Set the selected item

        // Set the background image based on the clicked menu item
        switch (item) {
            case 'Home':
                setBgImage('');
                navigate('/');
                break;
            case 'About Us':
                setBgImage('aboutus.jpeg');
                break;
            case 'People':
                setBgImage('people.jpg');
                break;
            case 'Campus Life':
                setBgImage('campuslife.jpeg');
                break;
            case 'Login':
                setBgImage(''); // Set a black background (no image) for Login
                break;
            case 'Academics':
                setBgImage('academics.jpeg');
                break;
            case 'Alumni':
                setBgImage('alumini.jpg'); // No specific image for Alumni (you can update it with an image if needed)
                break;
            default:
                setBgImage('');
                break;
        }
    };

    // Submenu items based on the selected menu item
    const getSubMenuItems = (item) => {
        switch (item) {
            case 'About Us':
                return ['College Principal\'s Desk', 'Vision and Mission', 'Contact Us', 'Administration', 'About this college'];
            case 'People':
                return ['Faculty', 'Non-Teaching Staff'];
            case 'Campus Life':
                return [
                    'Hostels', 'Anti Ragging Cell', 'Grievance Redressal Cells', 'Co-Teaching Committees',
                    'Arts and Sports', 'Library', 'NSS Cell', 'Placement Cell', 'PTA', 'Gender Justice Committee'
                ];
            case 'Academics':
                return ['B.Tech', 'MCA', 'Research', 'Online Courses'];
            default:
                return [];
        }
    };

    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 w-screen h-screen"
            style={{ backgroundImage: bgImage ? `url(${bgImage})` : 'none', backgroundColor: bgImage ? 'transparent' : 'black', backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="bg-black bg-opacity-80 p-10 rounded-lg shadow-md text-white w-full h-full flex flex-col relative">
                {/* Logo in the top left corner */}
                <div className="flex items-center mb-6">
                    <img src="logo.png" alt="Logo" className="h-16 filter brightness-0 invert" />
                </div>
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-5xl text-white-500 hover:text-white transition duration-200 rounded-full p-4 focus:outline-none"
                    aria-label="Close Menu"
                >
                    &times; {/* Close button using an '×' symbol */}
                </button>

                {/* Flex container to hold main menu and submenu */}
                <div className="flex flex-grow">
                    {/* Main menu column */}
                    <ul className="w-1/2 flex flex-col items-start space-y-4 pr-10 border-r border-gray-700">
                        {['Home', 'About Us', 'People', 'Campus Life', 'Academics', 'Alumni', 'Login'].map((item, index) => (
                            <li 
                                key={index} 
                                className={`py-4 flex items-center text-3xl relative tracking-wider transition-all duration-200 ${selectedItem === item ? 'text-yellow-400 font-bold' : 'text-gray-300 hover:text-white'}`} 
                                onClick={() => handleMenuClick(item)} // Call handleMenuClick when item is clicked
                            >
                                <i className={`fa fa-${item.toLowerCase().replace(' ', '-')}-circle mr-4`} aria-hidden="true"></i>
                                <a 
                                    href="#" 
                                    className="relative group"
                                >
                                    {item}
                                    <span className="block h-0.5 bg-yellow-400 w-full transition-transform duration-300 scale-x-0 group-hover:scale-x-100 absolute bottom-0 left-0"></span>
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Submenu column */}
                    {['About Us', 'People', 'Campus Life', 'Academics'].includes(selectedItem) && (
                        <ul className="w-1/2 flex flex-col items-start text-left space-y-2 pl-10">
                            {getSubMenuItems(selectedItem).map((subItem, subIndex) => (
                                <li 
                                    key={subIndex} 
                                    className="py-1 text-lg text-gray-300 hover:text-white font-medium tracking-wider"
                                >
                                    <i className="fa fa-angle-right mr-2"></i>
                                    <a 
                                        href="#" 
                                        className="hover:text-gray-100 transition duration-200 relative group"
                                    >
                                        {subItem}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Menu;
