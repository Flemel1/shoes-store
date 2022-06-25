import React from "react";
import { Icon } from "@iconify/react";

const AlertIcon = ({ icon, number, color }) => {
  return (
    <>
      <div className="alert-icon">
        <div className="alert-icon__wrapper">
          {number !== 0 && (<div className="alert-icon__wrapper__notification">{number}</div>)}
          <Icon
            icon={icon}
            height="24"
            color={color ? color : '#FFF'}
          />
        </div>
      </div>
    </>
  );
};

export default AlertIcon;
