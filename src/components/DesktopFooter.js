import React from "react";
import { desktopFooter } from "../mockData";
import NavLinksGroup from "./NavLinksGroup";

function DesktopFooter() {
    return <footer className="footer footer_desktop">
        <div className="footer-wrapper">
            {desktopFooter.navLinkGroups?.map(navLinkGroup => <NavLinksGroup key={navLinkGroup._id}
                header={navLinkGroup.displayText}
                linksArray={navLinkGroup.navLinks}></NavLinksGroup>)}
        </div>
        <div className="legal-text">
            <p>{desktopFooter.legalText[0].children[0].text}</p>
        </div>
    </footer>
}

export default DesktopFooter;