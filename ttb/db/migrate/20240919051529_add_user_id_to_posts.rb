class AddUserIdToPosts < ActiveRecord::Migration[7.2]
  def change
    # 一時的にnull: falseを外してuser_idカラムを追加
    add_reference :posts, :user, foreign_key: true

    # 既存のレコードに対してデフォルトのuser_idを設定
    reversible do |dir|
      dir.up do
        default_user = User.first
        Post.update_all(user_id: default_user.id) if default_user.present?
      end
    end

    # null: false制約を追加
    change_column_null :posts, :user_id, false
  end
end
