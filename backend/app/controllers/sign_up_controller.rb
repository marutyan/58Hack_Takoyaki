class SignUpController < ApplicationController
  #メールアドレスとパスワード、名前、学年、性別を受け取って、ユーザーを作成するその後ログインしてセッションをJsonで返す
  def create
    user = User.new(user_params)

    if user.save
      session[:user_id] = user.id
      render json: { status: :ok, logged_in: true, user: user }
    else
      render json: { status: 401, errors: user.errors.full_messages }
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :name, :age, :gender)
  end
end