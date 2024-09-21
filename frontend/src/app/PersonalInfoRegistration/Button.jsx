"use client";
const Button = ({ children, type = 'button' }) => {
    return (
      <button type={type} className="button">
        {children}
        <style jsx>{`
          .button {
            align-self: stretch;
            border-radius: 3px;
            background-color: #e29d36;
            margin-top: 32px;
            min-height: 30px;
            width: 100%;
            color: #fff;
            padding: 5px 10px;
            font: 700 14px Noto Sans JP, -apple-system, Roboto, Helvetica, sans-serif;
            border: none;
            cursor: pointer;
          }
        `}</style>
      </button>
    );
  };
  
  export default Button;
  