import React from "react";

function NavLink(props) {

    return <a href={props.link} className="nav-links-group__link">
        {props.text}
    </a>
}

export default NavLink;