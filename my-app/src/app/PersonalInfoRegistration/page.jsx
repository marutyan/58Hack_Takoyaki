"use client";
import ProgressIndicator from './ProgressIndicator';
import InputField from './InputField';
import Button from './Button';

const PersonalInfoRegistration = () => {
  return (
    <main className="personal-info-registration">
      <ProgressIndicator steps={3} currentStep={3} />
      <h1 className="title">個人情報入力</h1>
      <form>
        <InputField label="学年" id="grade" />
        <InputField label="性別" id="gender" />
        <Button type="submit">登録</Button>
      </form>
      <style jsx>{`
        .personal-info-registration {
          background-color: #fff;
          display: flex;
          flex-direction: column;
          max-width: 360px;
          overflow: hidden;
          padding: 55px 59px 350px;
        }
        .title {
          color: #000;
          text-align: center;
          align-self: center;
          margin-top: 60px;
          font: 700 30px/1 Inter, sans-serif;
        }
      `}</style>
    </main>
  );
};

export default PersonalInfoRegistration;
