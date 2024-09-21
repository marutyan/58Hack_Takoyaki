import css from 'styled-jsx/css';

export default css.global`
  .user-type-selection {
    background-color: #fff;
    display: flex;
    max-width: 360px;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    padding: 55px 61px 359px;
  }

  .progress-indicators {
    align-self: center;
    display: flex;
    width: 102px;
    max-width: 100%;
    gap: 20px;
    justify-content: space-between;
  }

  .indicator {
    border-radius: 50%;
    display: flex;
    width: 10px;
    height: 10px;
  }

  .indicator-active {
    background-color: #e29d36;
  }

  .indicator-inactive {
    background-color: #d9d9d9;
  }

  .title {
    color: #000;
    text-align: center;
    align-self: center;
    margin-top: 60px;
    font: 700 30px/1 Inter, sans-serif;
  }

  .option-button {
    align-self: stretch;
    border-radius: 3px;
    background-color: #f6f3f3;
    margin-top: 37px;
    min-height: 30px;
    color: #000;
    white-space: nowrap;
    padding: 5px 10px;
    font: 400 14px Noto Sans JP, -apple-system, Roboto, Helvetica, sans-serif;
  }

  .next-button {
    align-self: stretch;
    border-radius: 3px;
    background-color: #e29d36;
    margin-top: 37px;
    min-height: 30px;
    color: #fff;
    white-space: nowrap;
    padding: 5px 10px;
    font: 700 14px Noto Sans JP, -apple-system, Roboto, Helvetica, sans-serif;
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
  
  .form-container {
    display: flex;
    flex-direction: column;
    align-items: stretch; 
    gap: 15px; 
    margin-top: 20px; 
    width: 100%; 
      padding: 22px 10px; 
    border: 1px solid #b3b3b3;
    border-radius: 4px; /* 修正: 角を少し丸くする */
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
`;