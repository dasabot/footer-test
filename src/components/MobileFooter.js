import React from "react";
import { mobileFooter } from "../mockData";
import NavLinksGroup from "./NavLinksGroup";
import NavLink from "./NavLink";

function MobileFooter() {
    return <footer className="footer footer_mobile">

        <div className="footer-wrapper">
            {mobileFooter.navLinkGroups?.map(navLinkGroup => navLinkGroup.navLinks ?
                <NavLinksGroup key={navLinkGroup._id} header={navLinkGroup.displayText}
                    linksArray={navLinkGroup.navLinks} mobileList={true}>
                </NavLinksGroup> :

                <NavLink key={navLinkGroup._id} header={navLinkGroup.displayText} link={navLinkGroup.url}
                    text={navLinkGroup.displayText}></NavLink>)}
        </div>
        <div className='social-networks'>
            <a href='instagram.com' className='social-networks__element'>
                <img alt="insta" src={require('../icons/inst.png')}></img>
            </a>
            <a href='facebook.com' className='social-networks__element'>
                <img alt="fb" src={require('../icons/fb.png')}></img>
            </a>
            <a href='pinterest.com' className='social-networks__element'>
                <img alt="pinterest" src={require('../icons/pinterest.png')}></img>
            </a>

            <a href='twitter.com' className='social-networks__element'>
                <img alt="twitter" src={require('../icons/twitter.png')}></img>
            </a>

        </div>
        <div className='legal-text'>
            <p>{mobileFooter.legalText[0].children[0].text}</p>
            <p>{mobileFooter.legalText[1].children[0].text}</p>
        </div>
    </footer>
}

export default MobileFooter;