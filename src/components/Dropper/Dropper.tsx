import React, { useState } from "react";

// styles
import "./Dropper.css";

type DropperProps = {
  width: string;
  height: string;
  left: string;
  top: string;
  items: string[];
  defaultSelection: string;
  onSelect: (itemName: string) => void;
};

function Dropper({
  width,
  height,
  left,
  top,
  items,
  defaultSelection,
  onSelect,
}: DropperProps) {
  const [selected, setSelected] = useState(defaultSelection);
  const [expanded, setExpanded] = useState(false);

  const handleExpandButton = () => {
    setExpanded(!expanded);
  };

  const handleItemClick = (itemName: string) => {
    setSelected(itemName);
    setExpanded(false);
    onSelect(itemName);
  };

  return (
    <>
      <div className="dropper-container" style={{ width, left, top }}>
        <div className="dropper-selected-item" style={{ height }}>
          <div
            className="dropper-item-container"
            style={{ height }}
            onClick={handleExpandButton}
          >
            <h1>{selected}</h1>
          </div>
        </div>
        <div className="dropper-expanded-items">
          {expanded
            ? items
                .filter((itemName) => itemName !== selected)
                .map((itemName) => (
                  <div
                    className="dropper-item-container"
                    style={{ height }}
                    onClick={() => handleItemClick(itemName)}
                  >
                    <h1>{itemName}</h1>
                  </div>
                ))
            : ""}
        </div>
      </div>
    </>
  );
}

export default Dropper;
