class Post < ApplicationRecord
  belongs_to :user
  has_many :favorites, dependent: :destroy

  validates :title, presence: true
  validates :content, presence: true
  validates :category, presence: true

  validate :user_can_only_have_one_post, on: :create

  def favorited?(user)
    favorites.exists?(user_id: user.id)
  end

  private

  def user_can_only_have_one_post
    if user.posts.exists?
      errors.add(:user, 'は既にPostを持っています。')
    end
  end

end
