import React from "react";
import { isMobile } from 'react-device-detect';
import MobileFooter from "../components/MobileFooter";
import DesktopFooter from "../components/DesktopFooter";

function Footer() {
    if (isMobile) {
      return <MobileFooter/>

    } else {
        return <DesktopFooter/>
    }
}

export default Footer;