"use client";
const ProgressIndicator = ({ steps, currentStep }) => {
    return (
      <div className="progress-indicator">
        {[...Array(steps)].map((_, index) => (
          <div
            key={index}
            className={`step ${index + 1 === currentStep ? 'active' : ''}`}
          />
        ))}
        <style jsx>{`
          .progress-indicator {
            align-self: center;
            display: flex;
            width: 103px;
            max-width: 100%;
            gap: 20px;
            justify-content: space-between;
          }
          .step {
            background-color: #d9d9d9;
            border-radius: 50%;
            width: 10px;
            height: 10px;
          }
          .step.active {
            background-color: #e29d36;
          }
        `}</style>
      </div>
    );
  };
  
  export default ProgressIndicator;
  