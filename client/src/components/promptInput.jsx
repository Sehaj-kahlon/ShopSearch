import React, { useState } from "react";
import "./components.css";
import { Input, Form } from "antd";
function PromptInput() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const { TextArea } = Input;
  // const BASE_URL = "http://localhost:5000";
  const getResult = async () => {
    console.log(prompt);
    try {
      const response = await fetch("http://localhost:5000/getresult", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });
      if (response.ok) {
        const data = await response.json();
        setResult(data.result);
      } else {
        setError("Network call Failed");
      }
    } catch (error) {
      console.error("Error:", error);
      setError(error.message);
    }
  };
  const handleInputChange = (e) => {
    setPrompt(e.target.value);
  };
  return (
    <div>
      <Form>
        <h5>Describe the item you're searching for</h5>
        <div className="textarea-container">
          <TextArea
            placeholder="Enter text here"
            autoSize={{ minRows: 6, maxRows: 10 }}
            className="inputBox"
            onChange={handleInputChange}
            required
          ></TextArea>
          <small className="help-text">
            Provide details like color, style, and features to get better search
            results.
          </small>
        </div>
        <button
          type="submit"
          className="btn btn-primary find-button"
          onClick={getResult}
        >
          Find Items
        </button>
      </Form>
      {result}
      {error}
    </div>
  );
}

export default PromptInput;
