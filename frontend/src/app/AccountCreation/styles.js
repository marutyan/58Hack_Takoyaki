// import css from 'styled-jsx/css';

// export default css.global`
//   .account-creation-screen {
//     background-color: #fff;
//     display: flex;
//     max-width: 360px;
//     flex-direction: column;
//     overflow: hidden;
//     align-items: center;
//     padding: 55px 45px 138px;
//   }

//   .progress-indicators {
//     display: flex;
//     width: 103px;
//     max-width: 100%;
//     gap: 20px;
//     justify-content: space-between;
//   }

//   .indicator {
//     border-radius: 50%;
//     display: flex;
//     width: 10px;
//     height: 10px;
//   }

//   .indicator-inactive {
//     background-color: #d9d9d9;
//   }

//   .indicator-active {
//     background-color: #e29d36;
//   }

//   .page-title {
//     color: #000;
//     text-align: center;
//     margin-top: 60px;
//     font: 700 30px/1 Inter, sans-serif;
//   }

//   .form-container {
//     border-radius: 4px;
//     align-self: stretch;
//     display: flex;
//     margin-top: 60px;
//     width: 100%;
//     flex-direction: column;
//     color: #000;
//     white-space: nowrap;
//     padding: 31px 16px;
//     font: 700 14px Noto Sans JP, -apple-system, Roboto, Helvetica, sans-serif;
//     border: 1px solid #b3b3b3;
//   }

//   .form-label {
//     font-family: Inter, sans-serif;
//     line-height: 1;
//     text-align: center;
//     align-self: start;
//   }

//   .form-input {
//     align-self: stretch;
//     border-radius: 3px;
//     background-color: #f6f3f3;
//     margin-top: 9px;
//     min-height: 30px;
//     gap: 10px;
//     overflow: hidden;
//     font-weight: 400;
//     padding: 5px 10px;
//   }

//   .submit-button {
//     align-self: stretch;
//     border-radius: 3px;
//     background-color: #e29d36;
//     margin-top: 37px;
//     min-height: 30px;
//     gap: 10px;
//     color: #fff;
//     padding: 5px 10px;
//   }

//   .visually-hidden {
//     position: absolute;
//     width: 1px;
//     height: 1px;
//     padding: 0;
//     margin: -1px;
//     overflow: hidden;
//     clip: rect(0, 0, 0, 0);
//     white-space: nowrap;
//     border: 0;
//   }
// `;
import css from 'styled-jsx/css';

export default css.global`
  .account-creation-screen {
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 100%; /* 全画面幅に対応 */
    padding: 10vh 5vw; /* ビューポートに基づくパディング */
    box-sizing: border-box;
    overflow: hidden;
  }

  .progress-indicators {
    display: flex;
    width: 25%; /* 相対幅を使用してレスポンシブ対応 */
    justify-content: space-between;
    gap: 1vw; /* ビューポート幅に基づいたギャップ */
  }

  .indicator {
    border-radius: 50%;
    flex: 1; /* レスポンシブなサイズ調整 */
    height: 1.5vw;
    width: 1.5vw;
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
    margin-top: 5vh; /* ビューポート高さに基づいたマージン */
    font: 700 5vw/1 Inter, sans-serif; /* フォントサイズをビューポートに基づいて設定 */
  }

    .form-container {
      border-radius: 4px;
      display: flex;
      flex-direction: column;
      width: 100%;
      max-width: 400px; /* 最大幅を制限しつつ、レスポンシブ対応 */
      padding: 5vh 2vw; /* ビューポートに基づくパディング */
      margin-top: 5vh;
      color: #000;
      white-space: nowrap;
      font: 700 14px Noto Sans JP, -apple-system, Roboto, Helvetica, sans-serif;
      border: 1px solid #b3b3b3;
   }

  .form-label {
    font-family: Inter, sans-serif;
    line-height: 1;
    text-align: left;
    margin-bottom: 1vw; /* 相対的な余白を追加 */
  }

  .form-input {
    width: 100%; /* フレックスボックス内での自動調整 */
    border-radius: 3px;
    background-color: #f6f3f3;
    margin-top: 1vh; /* 相対的な間隔 */
    min-height: 5vh; /* 最小高さを設定 */
    padding: 1vw; /* ビューポートに基づくパディング */
    font-weight: 400;
  }

  .submit-button {
    width: 100%; /* ボタンを自動的に伸縮 */
    border-radius: 3px;
    background-color: #e29d36;
    margin-top: 2vh;
    padding: 1.5vw 2vw;
    color: #fff;
    text-align: center;
    font-size: 1.2vw;
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

  /* メディアクエリでモバイル用に調整 */
  @media (max-width: 600px) {
    .form-container {
      padding: 10vw 5vw; /* モバイル向けにパディングを調整 */
    }

    .page-title {
      font-size: 6vw; /* モバイルで大きなフォント */
    }

    .submit-button {
      font-size: 4vw; /* ボタンのテキストサイズを調整 */
    }

    .indicator {
      height: 2.5vw;
      width: 2.5vw; /* インジケーターのサイズを調整 */
    }
  }
`;
