class CreateUsers < ActiveRecord::Migration[7.2]
  def change
    create_table :users, :id => false do |t|
      t.integer :id, :primary_key => true
      t.string :name
      t.string :gender
      t.string :age

      t.timestamps
    end
  end
end
