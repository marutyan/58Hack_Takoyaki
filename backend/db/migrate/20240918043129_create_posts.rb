class CreatePosts < ActiveRecord::Migration[7.2]
  def change
    create_table :posts, :id => false do |t|
      t.integer :id, :primary_key => true
      t.string :title
      t.string :content
      t.string :category

      t.timestamps :timestamps
    end
  end
end
