import React, { forwardRef } from 'react';

const Select = forwardRef(({ label, id, children, ...props }, ref) => {
  return (
    <div className="select-group">
      <label htmlFor={id} className="select-label">{label}</label>
      <select id={id} className="select-field" ref={ref} {...props}>
        {children}
      </select>
      <style jsx>{`
        .select-group {
          display: flex;
          flex-direction: column;
          margin-bottom: 25px;
        }
        .select-label {
          font-family: Inter, sans-serif;
          line-height: 1;
          font-weight: 700;
          margin-bottom: 12px;
        }
        .select-field {
          border-radius: 3px;
          background-color: #f6f3f3;
          color: #000;
          min-height: 30px;
          padding: 5px 10px;
          border: none;
          font-weight: 400;
        }
      `}</style>
    </div>
  );
});

Select.displayName = "Select";

export default Select;