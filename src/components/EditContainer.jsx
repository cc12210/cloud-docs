import React from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import PropTypes from "prop-types";
import "./EditContainer.scss";

const EditContainer = ({ value }) => {
  return (
    <div className="edit-container">
      {value && (
        <SimpleMDE
          className="edit-container-simple-mde"
          value={value}
          options={{
            minHeight: "500px",
          }}
          onChange={(val) => {
            console.log(val);
          }}
        />
      )}
      {/* 没有tab的情况下给与markdown的提示 */}
      {!value && (
        <div className="card bg-light mb-3">
          <div className="card-header">markdown的语法规则</div>
          <div className="card-body">
            <h5 className="card-title">标题</h5>
            <p className="card-text">
              格式：## 标题<br></br>
              标题的大小从一个#到五个#递减
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

EditContainer.propTypes = {
  value: PropTypes.string,
};
export default EditContainer;
