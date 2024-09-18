class PostsController < ApplicationController
  before_action :set_post, only: [:edit, :update, :destroy]

  def index
    @posts = Post.all
  end

  def new
    @post = Post.new
  end

  def create
    @post = Post.new(post_params)
    if @post.save
      redirect_to posts_path
    else
      render :new
    end
  end

  def edit
    @post = Post.find(params[:id])
  end

  # 記事を更新するアクション
  def update
    if @post.update(post_params)
      redirect_to posts_path
    else
      render :edit
    end
  end

  # 記事を削除するアクション
  def destroy
    @post = Post.find(params[:id])
    @post.destroy
    redirect_to posts_path
  end

  private

  def post_params
    params.require(:post).permit(:title, :content, :category)
  end

  def set_post
    @post = Post.find(params[:id])
  end
end