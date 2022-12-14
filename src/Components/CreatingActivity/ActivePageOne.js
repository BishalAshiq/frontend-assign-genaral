import React from "react";
import { Button } from "react-bootstrap";
import "./ActivePageOne.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const ActivePageOne = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);

  // Add Items
  const addItem = () => {
    if (!inputData) {
    } else {
      setItems([...items, inputData]);
      setInputData("");
    }
  };

  // Delete Items
  const deleteItem = (id) => {
    const updatedItems = items.filter((elem, ind) => {
      return ind !== id;
    });
    setItems(updatedItems);
  };

  const removeAll = () => {
    setItems([]);
  };

  return (
    <>
      <div className="activePageOne">
        <div className="activePage-header">
          <NavLink to="/">
            <i
              className="fa-solid fa-xmark"
              style={{ fontSize: 40, color: "black" }}
            ></i>
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
            className="text-cap"
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
          />
          <i
            className="fa-solid fa-circle-plus add-btn"
            title="Add-Items"
            style={{ marginTop: 30, fontSize: 40, cursor: "pointer" }}
            onClick={addItem}
          ></i>
        </div>

        <div className="Add-Items">
          {items.map((elem, ind) => {
            return (
              <div className="Each-Items" key={ind}>
                <h5>{elem}</h5>
                <i
                  onClick={() => deleteItem(ind)}
                  class="fa-solid fa-trash-alt add-btn"
                  title="Delete-Items"
                  style={{
                    fontSize: 20,
                    marginLeft: 40,
                    marginTop: 5,
                    cursor: "pointer",
                  }}
                ></i>
              </div>
            );
          })}

          <div className="del-items">
            <Button variant="outline-dark" onClick={removeAll}>
              Remove All
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ActivePageOne;
