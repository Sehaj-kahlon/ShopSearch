import React from "react";
import "./components.css";
import { Input, Button, Form } from "antd";
function PromptInput() {
  const { TextArea } = Input;
  return (
    <div>
      <Form>
        <h5>Describe the item you're searching for...</h5>
        <div className="textarea-container">
          <TextArea
            placeholder="Enter text here"
            autoSize={{ minRows: 6, maxRows: 10 }}
            className="inputBox"
            required
          ></TextArea>
          <small className="help-text">
            Provide details like color, style, and features to get better search
            results.
          </small>
        </div>
        <button type="submit" className="btn btn-primary find-button">
          Find Items
        </button>
      </Form>
    </div>
  );
}

export default PromptInput;
