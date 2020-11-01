import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileAlt,
  faEdit,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const FileList = ({ files, onFileCilck, onFileEdit, onFileDelete }) => {
  return (
    <div className="file-list-container mt-3 text-left">
      <ul className="list-group">
        {files &&
          files.length &&
          files.map((item, index) => {
            return (
              <li
                className="list-group-item d-flex justify-content-between align-items-center"
                key={index}
              >
                <span className="text-wrap text-break d-flex justify-content-between align-items-center">
                  <FontAwesomeIcon
                    title="文件"
                    icon={faFileAlt}
                    className="mr-1"
                  />
                  {item.title}
                </span>
                <span className="ml-1">
                  <FontAwesomeIcon
                    title="编辑"
                    className="mr-1"
                    icon={faEdit}
                  />
                  <FontAwesomeIcon title="删除" icon={faTrashAlt} />
                </span>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default FileList;
