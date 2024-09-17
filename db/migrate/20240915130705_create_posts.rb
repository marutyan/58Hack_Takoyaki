class CreatePosts < ActiveRecord::Migration[7.2]
  def change
    create_table :posts, :id => false do |t|
      t.integer :id, :primary_key => true
      t.string :title
      t.text :content
      t.string :category
      t.string :age

      t.timestamps
    end
  end
end
