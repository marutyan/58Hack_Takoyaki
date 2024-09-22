import css from 'styled-jsx/css';

export default css.global`
  .user-type-selection {
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    padding: 20px; /* パディングを柔軟に */
    width: 100%; /* 幅を100%に */
    max-width: 360px; /* 最大幅を360pxに */
    margin: 0 auto; /* 横中央に配置 */
    box-sizing: border-box; /* パディングとボーダーを含めてサイズを計算 */
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
    margin-top: 30px; /* マージンを少し減らす */
    font: 700 30px/1 Inter, sans-serif;
  }

  .option-button {
    align-self: stretch;
    border-radius: 3px;
    background-color: #f6f3f3;
    margin-top: 20px; /* マージンを少し減らす */
    min-height: 40px; /* ボタンの高さを調整 */
    color: #000;
    white-space: nowrap;
    padding: 10px;
    font: 400 14px Noto Sans JP, -apple-system, Roboto, Helvetica, sans-serif;
  }

  .next-button {
    align-self: stretch;
    border-radius: 3px;
    background-color: #e29d36;
    margin-top: 20px;
    min-height: 40px;
    color: #fff;
    white-space: nowrap;
    padding: 10px;
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
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  /* メディアクエリでレスポンシブ対応 */

  /* スマートフォン（600px以下） */
  @media (max-width: 600px) {
    .user-type-selection {
      padding: 15px; /* パディングを縮小 */
      max-width: 100%; /* 幅を100%に */
    }

    .title {
      font-size: 24px; /* タイトルのフォントサイズを小さく */
    }

    .option-button,
    .next-button {
      padding: 8px; /* ボタンのパディングを縮小 */
      font-size: 12px; /* フォントサイズを小さく */
    }
  }

  /* タブレット（601pxから1024px） */
  @media (min-width: 601px) and (max-width: 1024px) {
    .user-type-selection {
      padding: 25px;
      max-width: 80%; /* 幅を80%に */
    }

    .title {
      font-size: 28px; /* タイトルのフォントサイズを調整 */
    }

    .option-button,
    .next-button {
      padding: 10px;
      font-size: 14px; /* フォントサイズを標準に */
    }
  }

  /* デスクトップ（1025px以上） */
  @media (min-width: 1025px) {
    .user-type-selection {
      padding: 30px;
      max-width: 100%; /* 幅を50%にして広めに */
    }

    .title {
      font-size: 30px; /* タイトルのフォントサイズを標準に */
    }

    .option-button,
    .next-button {
      padding: 12px;
      font-size: 16px; /* ボタンのフォントサイズを大きく */
    }
  }
`;
