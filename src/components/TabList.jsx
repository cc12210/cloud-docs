import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { map } from "lodash";
import classNames from "classnames";
import "./TabList.scss";

const TabList = ({ files, activeId, unsaveIds, onTabClick, onCloseTab }) => {
  return (
    <div className="tab-list-components">
      <ul className="nav nav-pills">
        {map(files, (item, index) => {
          // 增加选中状态的样式
          const finallyClass = classNames({
            "nav-link": true,
            active: activeId === item.id,
          });
          return (
            <li className="nav-item" key={index}>
              <a
                href="#"
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
                    }}
                    icon={faTimes}
                  />
                </span>
              </a>
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
  unsaveIds: [],
};
export default TabList;
