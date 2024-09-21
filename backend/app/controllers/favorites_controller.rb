class FavoritesController < ApplicationController
  before_action :set_post

  def index
    @favorites = current_user.favorites

    render json: @favorites
  end

  def create
    # ユーザーが他の投稿にお気に入りを付けていないか確認
    if current_user.favorites.exists?
      render json: { error: '他の投稿に既にお気に入りを付けています。' }, status: :forbidden
    else
      favorite = @post.favorites.new(user: current_user)
      if favorite.save
        render json: favorite, status: :created
      else
        render json: favorite.errors, status: :unprocessable_entity
      end
    end
  end

  def destroy
    favorite = @post.favorites.find_by(user: current_user)
    if favorite.destroy
      render json: { message: 'お気に入りを解除しました。' }, status: :ok
    else
      render json: { error: 'お気に入りを解除できませんでした。' }, status: :unprocessable_entity
    end
  end

  private

  def set_post
    @post = Post.find(params[:post_id])
  end
end