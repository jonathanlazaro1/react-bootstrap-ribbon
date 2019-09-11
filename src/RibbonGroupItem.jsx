import React from "react";

const Directions = { row: "row", column: "column" };

function RibbonGroupItem({ direction = Directions.row, ...props }) {
  return (
    <div
      className={`d-flex flex-${direction} flex-fill justify-content-around align-items-sm-center m-1`}
      {...props}
    >
      {props.children}
    </div>
  );
}

export default RibbonGroupItem;
