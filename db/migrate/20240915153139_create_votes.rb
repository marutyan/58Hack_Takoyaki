class CreateVotes < ActiveRecord::Migration[7.2]
  def change
    create_table :votes, :id => false do |t|
      t.integer :id, :primary_key => true
      t.string :votePostId
      t.string :userId

      t.timestamps
    end
  end
end
