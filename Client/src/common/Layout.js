import React from 'react';
import HeaderTwo from "./header/HeaderTwo";
import HeaderTopNews from "./header/HeaderTopNews";
import FooterTwo from "./footer/FooterTwo";
import Copyright from "./footer/Copyright";

const Layout = ({children}) => {
    return (
        <>
            <main className="page-wrapper">
                {/* <HeaderTopNews /> */}
                <HeaderTwo btnStyle="btn-small round btn-icon" HeaderSTyle="header-not-transparent" />
                {children}
                <FooterTwo />
                <Copyright />
            </main>
        </>
    )
}
export default Layout;
