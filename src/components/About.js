import React, { useState, useMemo,useContext, useEffect } from "react";
import ThemeContext from "../context/ThemeContext";
const initList=[1,2,3,4,5,6,7,8,9];
const About = () => {
  const [list, setList] = useState(initList);
  const [dragList, setDragList] = useState(null);
  const [draggedItem, setDraggedItem] = useState(null);

  /**
   * On drag start
   * Initialize the temporary item being dragged and drag list.
   */
  const onDragStartHandle = index => e => {
    setDraggedItem(list[index]);
    setDragList(list);
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/html", e.target.parentNode);
    e.dataTransfer.setDragImage(e.target.parentNode, 20, 22);
  };

  /**
   * On drag end
   * Save updated drag list to list and nullify temporary values.
   */
  const onDragEndHandle = e => {
    e.preventDefault();
    setList(dragList);
    setDragList(null);
    setDraggedItem(null);
  };

  /**
   * On drag leave
   * Item wasn't dropped so reset temporary drag list
   */
  const onDragLeaveHandle = e => {
    e.preventDefault();
    setDragList(list);
  };

  /**
   * On drag over
   * If dragging over another item update the drag list with new position
   */
  const onDragOverHandle = index => e => {
    e.preventDefault();

    const draggedOverItem = dragList[index];

    if (draggedOverItem === draggedItem) {
      return;
    }

    const items = dragList.filter(item => item !== draggedItem);
    items.splice(index, 0, draggedItem);
    setDragList(items);
  };

  return (
    <div className="about">
      <header className="about-header">
        <h3>Drag'n'Drop</h3>
        <ul>
          {(draggedItem ? dragList : list).map((item, index) => (
            <li key={index} className="item-style">
              <div
                draggable
                onDragOver={onDragOverHandle(index)}
                onDragLeave={onDragLeaveHandle}
                onDragEnd={onDragEndHandle}
                onDragStart={onDragStartHandle(index)}
              >
                {item}
              </div>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}
export default About;
