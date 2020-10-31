import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const FileSearch = ({ title, onFileSearch }) => {
  const [inputActive, setInputActive] = useState(false);
  const [keyWords, setKeyWords] = useState("");

  // useRef可以记录节点内容等
  let node = useRef(null);

  // 清空值及关闭输入框
  const closeSearch = (e) => {
    e.preventDefault();
    setKeyWords("");
    setInputActive(false);
  };

  useEffect(() => {
    const handleInputEvent = (e) => {
      const { keyCode } = e;
      if (keyCode === 13 && inputActive) {
        // 回车事件
        onFileSearch(keyWords);
      } else if (keyCode === 27 && inputActive) {
        // esc事件
        closeSearch(e);
      }
    };
    document.addEventListener("keyup", handleInputEvent);
    // 销毁事件
    return () => {
      document.removeEventListener("keyup", handleInputEvent);
    };
  });

  // useEffect((e) => {
  //   if (inputActive) {
  //     console.log(node.current);
  //   }
  // });
  return (
    <div className="alert alert-primary mb-0">
      {/* 标题提示 */}
      {!inputActive && (
        <div className="d-flex justify-content-between align-items-center">
          <span>{title}</span>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              setInputActive(true);
            }}
          >
            <FontAwesomeIcon title="搜索" icon={faSearch} />
          </button>
        </div>
      )}
      {/* 搜索框输入 */}
      {inputActive && (
        <div className="d-flex justify-content-between align-items-center">
          <input
            ref={node}
            autoFocus
            className="form-control"
            value={keyWords}
            onChange={(e) => {
              setKeyWords(e.target.value);
            }}
            // onBlur={() => {
            //   setInputActive(false);
            // }}
          ></input>
          <button
            type="button"
            className="btn btn-primary"
            onClick={(e) => {
              closeSearch(e);
            }}
          >
            <FontAwesomeIcon icon={faTimesCircle} />
          </button>
        </div>
      )}
    </div>
  );
};

export default FileSearch;
