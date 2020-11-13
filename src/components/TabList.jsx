import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { map, findIndex, toNumber } from "lodash";
import classNames from "classnames";
import "./TabList.scss";

const TabList = ({ files, activeId, unsaveIds, onTabClick, onCloseTab }) => {
  return (
    <div className="tab-list-components">
      <ul className="nav nav-pills tab-list-container">
        {map(files, (item, index) => {
          const withUnsaveMarked =
            findIndex(unsaveIds, (unSaveIitem) => {
              return toNumber(unSaveIitem) === toNumber(item.id);
            }) > -1;
          // 增加选中状态的样式
          const finallyClass = classNames({
            "nav-link": true,
            active: activeId === item.id,
            withUnsaveMarked: withUnsaveMarked,
          });
          return (
            <li
              className="nav-item tab-list-item"
              key={index}
              title={item.title}
            >
              <span
                className={finallyClass}
                onClick={(e) => {
                  e.preventDefault();
                  onTabClick(item.id);
                }}
              >
                {item.title}
                <span className="ml-2 close-icon">
                  <FontAwesomeIcon
                    onClick={(e) => {
                      e.stopPropagation();
                      onCloseTab(item.id);
                    }}
                    icon={faTimes}
                  />
                </span>
                {withUnsaveMarked && (
                  <span className="rounded-circle unsaved-icon ml-2"></span>
                )}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
TabList.propTypes = {
  files: PropTypes.array,
  activeId: PropTypes.string,
  unsaveIds: PropTypes.array,
  onTabClick: PropTypes.func,
  onCloseTab: PropTypes.func,
};

TabList.defaultProps = {
  unsaveIds: [2],
};
export default TabList;
