import React from "react";

function RibbonGroup({ colClass = "col", ...props }) {
  console.log(colClass || "d");
  console.log(props);
  return (
    <div className={`ribbon-group ${colClass}`} {...props}>
      <div className="d-flex justify-content-around h-75">{props.children}</div>
      <div className="d-flex justify-content-center h-25 mt-1 ribbon-group-title">
        {props.title}
      </div>
    </div>
  );
}

export default RibbonGroup;
