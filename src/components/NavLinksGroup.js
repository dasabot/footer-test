import React from "react";
import NavLink from "./NavLink";
import { useState } from "react";

export default function NavLinksGroup(props) {
    const linksArray = props.linksArray;
    const [display, setDisplay] = useState('none');

    function handleClick() {
        if (display === 'none') {
            setDisplay('block');
        } else {
            setDisplay('none');
        }
    }

    if (props.mobileList) {
        return <div className='nav-links-group'>
            <div className='nav-links-group__open-btn' onClick={handleClick}>
                <div className='nav-links-group__header'>{props.header}</div>
                <div className='nav-links-group__plus'>{display === 'block' ? '-' : '+'}</div>
            </div>

            <ul className='nav-links-group__list' style={{ display: display }}>
                {linksArray.map(link => <li className='nav-links-group__list-item'>
                    <NavLink link={link.url} text={link.displayText}></NavLink>
                </li>)}
            </ul>
        </div>
    } else {
        return <div className='nav-links-group'>
            <div className='nav-links-group__header'>{props.header}</div>
            {linksArray.map(link => <NavLink link={link.url} text={link.displayText}></NavLink>)}
        </div>
    }
}