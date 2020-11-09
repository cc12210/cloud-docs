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
    </div>
  );
};

EditContainer.propTypes = {
  value: PropTypes.string,
};
export default EditContainer;
