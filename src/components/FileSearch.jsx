import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import useKeyPress from "../hooks/useKeyPress";

const FileSearch = ({ title, onFileSearch }) => {
  const [inputActive, setInputActive] = useState(false);
  const [keyWords, setKeyWords] = useState("");
  const enterPress = useKeyPress(13);
  const escPress = useKeyPress(27);

  // useRef可以记录节点内容等
  let node = useRef(null);

  // 清空值及关闭输入框
  const closeSearch = () => {
    setKeyWords("");
    setInputActive(false);
  };

  // 输入框事件
  useEffect(() => {
    if (enterPress && inputActive) {
      onFileSearch(keyWords);
    } else if (escPress && inputActive) {
      closeSearch();
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
            className="form-control mr-1"
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

// 属性校验检查
FileSearch.propTypes = {
  title: PropTypes.string,
  onFileSearch: PropTypes.func.isRequired,
};

// 设置默认值
FileSearch.defaultProps = {
  title: "我的云文档",
};
export default FileSearch;
