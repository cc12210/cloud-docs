import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileAlt,
  faEdit,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import "./FileList.css";

const FileList = ({ files, onFileCilck, onFileEdit, onFileDelete }) => {
  return (
    <div className="file-list-container mt-3 text-left">
      <ul className="list-group">
        {files &&
          files.length &&
          files.map((item, index) => {
            return (
              <li
                className="list-group-item list-group-item-action d-flex justify-content-between align-items-center file-list-item"
                key={index}
                onClick={() => {
                  onFileCilck(item.id);
                }}
              >
                <FontAwesomeIcon title="文件" icon={faFileAlt} />
                <span className="text-wrap text-break d-flex align-items-center col-8">
                  {item.title}
                </span>
                <span className="col-3 d-flex">
                  <FontAwesomeIcon
                    title="编辑"
                    className="mr-1"
                    icon={faEdit}
                    onClick={(e) => {
                      e.stopPropagation();
                      onFileEdit(item.id);
                    }}
                  />
                  <FontAwesomeIcon
                    title="删除"
                    icon={faTrashAlt}
                    onClick={(e) => {
                      e.stopPropagation();
                      onFileDelete(item.id);
                    }}
                  />
                </span>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

FileList.propTypes = {
  files: PropTypes.array,
  onFileCilck: PropTypes.func,
  onFileEdit: PropTypes.func,
  onFileDelete: PropTypes.func,
};
export default FileList;
