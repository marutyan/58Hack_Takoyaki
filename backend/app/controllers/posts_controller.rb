class PostsController < ApplicationController
  # before_action :authenticate_user!
  before_action :set_post, only: [:edit, :update, :destroy]
  before_action :authorize_user!, only: [:edit, :update, :destroy]

  def index
    @posts = Post.all

    @posts = Post.all.includes(:favorites)

    @posts = Post.includes(:user).all

    @category_counts_by_age = User.joins(:posts)
                                    .group('users.age', 'posts.category')
                                    .count

    @chart_data = @category_counts_by_age.map do |(age, category), count|
      { age: age, category: category, count: count }
    end

    
    render json: @posts
  end

  def new
    @post = Post.new
  end

  def create
    # ユーザーが既にPostを持っているかどうかをチェック
    if current_user.posts.exists?
      redirect_to posts_path, alert: '1人のユーザーは1つのPostしか作成できません。'
    else
      @post = current_user.posts.new(post_params)
      if @post.save
        #redirect_to @post, notice: 'Postが作成されました。'
        redirect_to posts_path
      else
        render :new
      end
    end
  end

  def edit
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
    @post.destroy
    redirect_to posts_path
  end

  def my_posts
    @posts = current_user.posts
  end

  private

  def post_params
    params.require(:post).permit(:title, :content, :category)
  end

  def authorize_user!
    unless @post.user == current_user
      redirect_to posts_path, alert: '他のユーザーの投稿を編集または削除することはできません。'
    end
  end

  def set_post
    @post = Post.find(params[:id])
  end
end