import React from "react";
import "./Navbar.css";
import { ReactComponent as HomeLogo } from "@assets/Home.svg";
import { ReactComponent as PegasusLogo } from "@assets/Pegasus.svg";
import { ReactComponent as ZeusLogo } from "@assets/Zeus.svg";
import { ReactComponent as MoodleLogo } from "@assets/Moodle.svg";
import { useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="navbar-container">
        <Button
          to="/home"
          selected={useLocation().pathname === "/home"}
          iconComponent=<HomeLogo />
        />
        <Button
          to="/pegasus"
          selected={useLocation().pathname === "/pegasus"}
          iconComponent=<PegasusLogo />
        />
        <Button
          to="/zeus"
          selected={useLocation().pathname === "/zeus"}
          iconComponent=<ZeusLogo />
        />
        <Button
          to="/moodle"
          selected={useLocation().pathname === "/moodle"}
          iconComponent=<MoodleLogo />
        />
      </div>
    </>
  );
}

type ButtonProps = {
  to: string;
  iconComponent: JSX.Element;
  selected: boolean;
};

function Button({ to, iconComponent, selected }: ButtonProps) {
  const navigate = useNavigate();

  const buttonClickHandler = () => {
    navigate(to);
  };

  return (
    <>
      <div
        className={["button-container", selected ? "selected" : ""].join(" ")}
        onClick={buttonClickHandler}
      >
        {iconComponent}
      </div>
    </>
  );
}

export default Navbar;
