import React from "react";
import { Button } from "react-bootstrap";
import "./ActivePageOne.css";
import { NavLink } from "react-router-dom";
import CapabilitiesInp from "./CapabilitiesInp";

const ActivePageOne = () => {
  return (
    <div className="activePageOne">
      <div className="activePage-header">
        <NavLink to="/">
        <i className="fa-solid fa-xmark" style={{ fontSize: 40, color: "black"}}></i>
        </NavLink>
        <NavLink to="/">
          <Button variant="dark">Save</Button>
        </NavLink>
      </div>
      <div className="name-area">
        <h4 className="act-h4">Aron Power</h4>
      </div>

      <div className="descrip">
        <textarea
          maxlength="250"
          placeholder="Description"
          className="text-area"
        ></textarea>
      </div>
      <div>
        <h6 className="cap-h6">CAPABILITIES</h6>
      </div>
      <div>
        <CapabilitiesInp />
      </div>
    </div>
  );
};

export default ActivePageOne;
