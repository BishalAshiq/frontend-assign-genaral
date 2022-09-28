import React from "react";
import { Button } from "react-bootstrap";
import "./ActivePageOne.css";
import { useState } from "react";

function CapabilitiesInp() {
    const[inputData, setInputData]= useState('');
  return (
    <>
      <div className="cap">
        <input
          type="text"
          placeholder="Enter Capability..."
          className="text-cap"
        />
        <i
          className="fa-solid fa-circle-plus add-btn"
          title="Add-Items"
          style={{ marginTop: 30, fontSize: 40, cursor:"pointer" }}
        ></i>
      </div>
      <div className="Add-Items">
        <div className="Each-Items">
          <h5>Capabilities</h5>
          <i
            class="fa-solid fa-trash-alt add-btn"
            title="Delete-Items"
            style={{ fontSize: 20, marginLeft: 40, marginTop: 5, cursor:"pointer" }}
          ></i>
        </div>
        <div className="del-items">
            <Button variant="outline-dark">Remove All</Button>
        </div>
      </div>
    </>
  );
}

export default CapabilitiesInp;
