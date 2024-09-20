"use client";
const InputField = ({ label, id }) => {
    return (
      <div className="input-group">
        <label htmlFor={id} className="label">
          {label}
        </label>
        <input type="text" id={id} className="input" />
        <style jsx>{`
          .input-group {
            margin-top: 32px;
          }
          .label {
            color: #000;
            text-align: center;
            align-self: start;
            font: 700 14px/1 Inter, sans-serif;
            display: block;
            margin-bottom: 10px;
          }
          .input {
            align-self: stretch;
            border-radius: 3px;
            background-color: #f6f3f3;
            min-height: 30px;
            width: 100%;
            color: #000;
            padding: 5px 10px;
            font: 400 14px Noto Sans JP, -apple-system, Roboto, Helvetica, sans-serif;
            border: none;
          }
        `}</style>
      </div>
    );
  };
  
  export default InputField;
  