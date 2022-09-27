import React from "react";
import { Button } from "react-bootstrap";
import { ArrowLeft, ArrowRightCircleFill } from "react-bootstrap-icons";
import "./ActivePageOne.css";
import { NavLink } from "react-router-dom";

const ActivePageOne = () => {
  return (
    <div className="activePageOne">
      <div className="activePage-header">
        <NavLink to="/">
          <ArrowLeft color="black" size={40} />
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
      <div className="cap">
        <input 
           type="text" 
           placeholder="Enter Capability..."
           className="text-cap"/>
        <ArrowRightCircleFill style={{marginTop: 30}} size={40}/>
        
      </div>
    </div>
  );
};

export default ActivePageOne;
