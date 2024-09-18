import css from 'styled-jsx/css';

export default css.global`
  .account-creation-screen {
    background-color: #fff;
    display: flex;
    max-width: 360px;
    flex-direction: column;
    overflow: hidden;
    align-items: center;
    padding: 55px 45px 138px;
  }

  .progress-indicators {
    display: flex;
    width: 103px;
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

  .indicator-inactive {
    background-color: #d9d9d9;
  }

  .indicator-active {
    background-color: #e29d36;
  }

  .page-title {
    color: #000;
    text-align: center;
    margin-top: 60px;
    font: 700 30px/1 Inter, sans-serif;
  }

  .form-container {
    border-radius: 4px;
    align-self: stretch;
    display: flex;
    margin-top: 60px;
    width: 100%;
    flex-direction: column;
    color: #000;
    white-space: nowrap;
    padding: 31px 16px;
    font: 700 14px Noto Sans JP, -apple-system, Roboto, Helvetica, sans-serif;
    border: 1px solid #b3b3b3;
  }

  .form-label {
    font-family: Inter, sans-serif;
    line-height: 1;
    text-align: center;
    align-self: start;
  }

  .form-input {
    align-self: stretch;
    border-radius: 3px;
    background-color: #f6f3f3;
    margin-top: 9px;
    min-height: 30px;
    gap: 10px;
    overflow: hidden;
    font-weight: 400;
    padding: 5px 10px;
  }

  .submit-button {
    align-self: stretch;
    border-radius: 3px;
    background-color: #e29d36;
    margin-top: 37px;
    min-height: 30px;
    gap: 10px;
    color: #fff;
    padding: 5px 10px;
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
`;