"use client";
import React, { forwardRef } from "react";


const FormField = forwardRef(({ label, type, ...props }, ref) => {
  // <>
  //   <label htmlFor={id} className="form-label">{label}</label>
  //   <input type={type} id={id} className="form-input" aria-label={label} />
  // </>
  return (
    <div className="input-group">
      <label htmlFor={`${type}Input`} className="input-label">{label}</label>
      <input
        type={type}
        id={`${type}Input`}
        className="input-field"
        placeholder={label}
        aria-label={label}
        ref={ref}
        {...props}
      />
      <style jsx>{`
        .input-group {
          display: flex;
          flex-direction: column;
          margin-bottom: 25px;
        }
        .input-label {
          font-family: Inter, sans-serif;
          line-height: 1;
          font-weight: 700;
          margin-bottom: 12px;
        }
        .input-field {
          border-radius: 3px;
          background-color: #f6f3f3;
          min-height: 30px;
          padding: 5px 10px;
          border: none;
          font-weight: 400;
          color:#000;
        }
      `}</style>
    </div>
  );
});

FormField.displayName = "FormField";




export default FormField;