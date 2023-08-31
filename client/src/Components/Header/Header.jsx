import React, {useState} from 'react';
import './header.css';

function Header() {

    const [activeItem, setActiveItem] = useState(0);

    const handleItemClick = (index) => {
        setActiveItem(index);
      };

    return (
        <div className='header-container'>
            <div className="header-wrapper">
                <p>Test header</p>
                <div className="nav-menu">
                    <ul className='nav-menu-list'>
                        {['dashboard', 'dashboard', 'dashboard', 'dashboard', 'dashboard'].map((item, index) => (
                            <li
                                key={index}
                                className={`nav-menu-items ${index === activeItem ? 'active' : ''}`}
                                onClick={() => handleItemClick(index)}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="nav-button-wrapper">
                    <button type="button">login</button>
                    <button type="button">Register</button>
                </div>
            </div>
        </div>
    )
}

export default Header