import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faUpload } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const BottomBtn = ({ text, colorClass, icon, onBtnClick }) => {
  return (
    <div className="bottom-btn">
      <button
        type="button"
        onClick={onBtnClick}
        className={`btn no-border ${colorClass}`}
      >
        <FontAwesomeIcon title="文件" icon={icon} className="mr-2" />
        {text}
      </button>
    </div>
  );
};

BottomBtn.propTypes = {
  text: PropTypes.string,
  colorClass: PropTypes.string,
  icon: PropTypes.object.isRequired,
  onBtnClick: PropTypes.func,
};

BottomBtn.defaultProps = {
  text: "新建",
};
export default BottomBtn;
