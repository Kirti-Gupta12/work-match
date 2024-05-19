import React, { useContext } from "react";
import { Context } from "../../main";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; 2024 Work Match</div>
     
    </footer>
  );
};

export default Footer;