class Favorite < ApplicationRecord
  belongs_to :user
  belongs_to :post

  validate :user_can_only_favorite_one_tweet

  private

  def user_can_only_favorite_one_tweet
    if user.favorites.exists?
      errors.add(:user_id, "は他のツイートにお気に入りを付けています。")
    end
  end

end