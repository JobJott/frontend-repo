import React, { useState, useRef, useEffect } from "react";
import draghandle from "../../../../../assets/drag-handle.svg";

const ColumnContact = () => {
  const [isColumnContactOpen, setIsColumnContactOpen] = useState(false);
  const [isChecked, setIsChecked] = useState({});
  const dropdownRef = useRef(null);

  const toggleColumnContact = () => {
    setIsColumnContactOpen((prev) => !prev);
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setIsChecked((prev) => ({ ...prev, [name]: checked }));
  };

  const [items, setItems] = useState([
    { name: "location", label: "Location" },
    { name: "goal", label: "Goal" },
    { name: "status", label: "Status" },
    { name: "relationship", label: "Relationship" },
    { name: "follow_up_at", label: "Follow up" },
  ]);
  const [draggingIndex, setDraggingIndex] = useState(null);
  const [draggedY, setDraggedY] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const onDragStart = (event, index) => {
    setDraggingIndex(index);
    setDraggedY(event.clientY);

    // Suppress ghost image
    const transparentPixel = document.createElement("img");
    transparentPixel.src =
      "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
    event.dataTransfer.setDragImage(transparentPixel, 0, 0);
  };

  const onDragOver = (event, index) => {
    // event.preventDefault(); // Prevent default to allow dropping
    const deltaY = event.clientY - draggedY;

    if (index !== draggingIndex) {
      // Update the order of items
      const updatedItems = [...items];
      const [draggedItem] = updatedItems.splice(draggingIndex, 1);
      updatedItems.splice(index, 0, draggedItem);

      setItems(updatedItems);
      setDraggingIndex(index);
    }

    setDraggedY(event.clientY);
    setHoveredIndex(index);
  };

  const onDragEnd = () => {
    setDraggingIndex(null);
    setDraggedY(0);
    setHoveredIndex(null);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsColumnContactOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="filter-dropdown-menu-container" ref={dropdownRef}>
      <button
        type="button"
        className={`filter-btn filter-btn-default filter-btn-sm filter-dropdown-trigger ${
          isColumnContactOpen ? "filter-dropdown-open" : ""
        }`}
        onClick={toggleColumnContact}
      >
        <span>Columns</span>
      </button>

      {/*Filter Dropdown Menu */}
      {isColumnContactOpen && (
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            width: "100%",
          }}
        >
          <div>
            <div
              className="filter-dropdown filter-dropdown-placement-bottomLeft"
              style={{ minWidth: "96.875px", left: "0px", top: "35px" }}
            >
              <div className="filter-dropdown-menu tracker-columns-menu">
                {items.map((item, index) => {
                  const isDragging = draggingIndex === index;
                  const isHovered = hoveredIndex === index;
                  const deltaY = draggedY - event.clientY;

                  // Dynamic translate3d for dragging and hovered items
                  const transform = isDragging
                    ? `translate3d(0px, ${deltaY}px, 0px)`
                    : isHovered
                    ? `translate3d(0px, -30px, 0px)`
                    : "translate3d(0px, 0px, 0px)";
                  const transition = isDragging ? "" : "transform 200ms ease";

                  return (
                    <div
                      key={item.name}
                      className="dnd-drag"
                      role="button"
                      tabIndex="0"
                      aria-disabled="false"
                      aria-roledescription="sortable"
                      aria-describedby="DndDescribedBy-0" //check later
                      draggable // Enables drag functionality
                      aria-pressed={isDragging ? "true" : "false"}
                      style={{ transform, transition }}
                      onDragStart={(event) => onDragStart(event, index)}
                      onDragOver={(event) => onDragOver(event, index)}
                      onDragEnd={onDragEnd}
                    >
                      <div className="tracker-columns-menu-dnd">
                        <label
                          className={`filter-checkbox-wrapper ${
                            isChecked[item.name]
                              ? "filter-checkbox-wrapper-checked"
                              : ""
                          }`}
                        >
                          <span
                            className={`filter-checkbox ${
                              isChecked[item.name]
                                ? "filter-checkbox-checked"
                                : ""
                            }`}
                          >
                            <input
                              name={item.name}
                              type="checkbox"
                              className="filter-checkbox-input"
                              checked={isChecked[item.name] || false}
                              onChange={handleCheckboxChange} // Event handler attached
                            />
                            <span className="filter-checkbox-inner"></span>
                          </span>
                          <span>{item.label}</span>
                        </label>
                        <div className="drag-handle">
                          <img src={draghandle} alt="" />
                        </div>
                      </div>
                    </div>
                  );
                })}
                <div id="DndDescribedBy-0" style={{ display: "none" }}>
                  To pick up a draggable item, press the space bar. While
                  dragging, use the arrow keys to move the item. Press space
                  again to drop the item in its new position, or press escape to
                  cancel.
                </div>
                <div
                  id="DndLiveRegion-0"
                  role="status"
                  aria-live="assertive"
                  aria-atomic="true"
                  style={{
                    position: "fixed",
                    width: "1px",
                    height: "1px",
                    margin: "-1px",
                    border: "0px",
                    padding: "0px",
                    overflow: "hidden",
                    clip: "rect(0px, 0px, 0px, 0px)",
                    clipPath: "inset(100%)",
                    whiteSpace: "nowrap",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ColumnContact;
