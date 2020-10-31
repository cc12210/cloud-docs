import React, { useState, useEffect, useRef } from "react";

const FileSearch = ({ title, onFileSearch }) => {
  const [inputActive, setInputActive] = useState(false);
  const [keyWords, setKeyWords] = useState("");

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

  useEffect((e) => {
    if (inputActive) {
      console.log(node.current);
    }
  });
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
            搜索
          </button>
        </div>
      )}
      {/* 搜索框输入 */}
      {inputActive && (
        <div className="row">
          <input
            ref={node}
            autoFocus
            className="form-control col-8"
            value={keyWords}
            onChange={(e) => {
              setKeyWords(e.target.value);
            }}
            onBlur={() => {
              setInputActive(false);
            }}
          ></input>
          <button
            type="button"
            className="btn btn-primary col-4"
            onClick={() => {
              setInputActive(true);
            }}
          >
            关闭
          </button>
        </div>
      )}
    </div>
  );
};

export default FileSearch;
