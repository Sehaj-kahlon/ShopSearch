import React, { useState } from "react";
import "./components.css";
import { Input, Form, Spin } from "antd";
function PromptInput() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const { TextArea } = Input;
  const BASE_URL = "http://127.0.0.1:5000";
  const [loading, setLoading] = useState(false);
  const getResult = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${BASE_URL}/getresult`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });
      setTimeout(() => {
        setLoading(false);
      }, 5000);
      if (response.ok) {
        const data = await response.json();
        if (data.result === 0) {
          setResult("");
          setError("No items found");
        } else {
          setError("");
          setResult(data.result);
        }
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
    <div className="container">
      <div className="form-container">
        <Form>
          <h5>Describe the item you're searching for</h5>
          <div className="textarea-container">
            <TextArea
              placeholder="Enter text here"
              autoSize={{ minRows: 6, maxRows: 10 }}
              className="inputBox"
              onChange={handleInputChange}
              required
            />
            <small className="help-text">
              Provide details like color, style, and features to get better
              search results.
            </small>
          </div>
          <button
            type="button"
            className="btn btn-primary find-button"
            onClick={getResult}
          >
            Find Items
          </button>
        </Form>
      </div>
      {loading && (
        <div className="loader-container">
          <Spin size="large" />
        </div>
      )}
      {!loading && (
        <div className="result-container">
          {error && <p className="error">{error}</p>}
          {result && (
            <div>
              <h5>Here are some potential items:</h5>
              <ul>
                {result.map((link, index) =>
                  link ? (
                    <li key={index}>
                      <a href={link} target="_blank" rel="noopener noreferrer">
                        {link}
                      </a>
                    </li>
                  ) : null
                )}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default PromptInput;
