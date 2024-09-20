class FavoritesController < ApplicationController
  before_action :set_post

  def create
    # ユーザーが他の投稿にお気に入りを付けていないか確認
    if current_user.favorites.exists?
      redirect_to posts_path, alert: '他の投稿に既にお気に入りを付けています。'
    else
      favorite = @post.favorites.new(user: current_user)
      if favorite.save
        redirect_to posts_path, notice: 'お気に入りに追加しました。'
      else
        redirect_to posts_path, alert: 'お気に入りに追加できませんでした。'
      end
    end
  end

  def destroy
    favorite = @post.favorites.find_by(user: current_user)
    if favorite.destroy
      redirect_to posts_path, notice: 'お気に入りを解除しました。'
    else
      redirect_to posts_path, alert: 'お気に入りを解除できませんでした。'
    end
  end

  private

  def set_post
    @post = Post.find(params[:post_id])
  end
end
