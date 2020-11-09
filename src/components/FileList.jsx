import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileAlt,
  faEdit,
  faTrashAlt,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import "./FileList.scss";
import { find, map } from "lodash";
import useKeyPress from "../hooks/useKeyPress";

const FileList = ({
  files,
  activeId,
  onFileCilck,
  onFileEdit,
  onFileDelete,
}) => {
  const [editStatus, setEditStatus] = useState(false);
  const [value, setVaule] = useState("");

  const enterPress = useKeyPress(13);
  const escPress = useKeyPress(27);

  // 监听键盘事件
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (enterPress && editStatus) {
      // 标题不能为空
      if (!value) return;
      // 回车事件
      // 找到当前正在修改的文件对象
      const editFile = find(files, (item) => {
        return item.id === editStatus;
      });
      // 将修改的值传递出去
      onFileEdit(editFile.id, value);
      // 关闭编辑状态
      setEditStatus(false);
      setVaule("");
    } else if (escPress && editStatus) {
      // esc事件
      setEditStatus(false);
    }
  });
  // 渲染的内容
  return (
    <div className="file-list-container text-left">
      <ul className="list-group">
        {files &&
          files.length &&
          map(files, (item, index) => {
            return (
              <li
                className={`list-group-item list-group-item-action d-flex justify-content-between align-items-center file-list-item ${
                  activeId === item.id ? "active" : ""
                }`}
                key={index}
                onClick={() => {
                  onFileCilck(item.id);
                }}
              >
                {/* 正常展示 */}
                {item.id !== editStatus && (
                  <>
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
                          // 设置当前编辑的id和状态值
                          setEditStatus(item.id);
                          setVaule(item.title);
                          // onFileEdit(item.id);
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
                  </>
                )}
                {/* 编辑标题 */}
                {item.id === editStatus && (
                  <>
                    <input
                      autoFocus
                      className="form-control col-10"
                      value={value}
                      onChange={(e) => {
                        setVaule(e.target.value);
                      }}
                    ></input>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={(e) => {
                        e.stopPropagation();
                        setEditStatus("");
                      }}
                    >
                      <FontAwesomeIcon icon={faTimesCircle} />
                    </button>
                  </>
                )}
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
