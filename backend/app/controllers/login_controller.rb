class LoginController < ApplicationController
  def create
    #　メールアドレスとパスワードを取得して、認証して、セッションをJsonで返す
    user = User.find_by(email: params[:email])
    if user&.valid_password?(params[:password])
      session[:user_id] = user.id
      render json: { status: :ok, logged_in: true, user: user }
    else
      render status: :unauthorized, json: { status: 401 }
    end
  end
end
