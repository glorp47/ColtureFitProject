class CreateVideos < ActiveRecord::Migration
  def change
    create_table :videos do |t|
      t.integer :band_id, null: false
      t.integer :song_id
      t.string :title, null: false
      t.text :long_bio
      t.datetime :date_made, null: false
      t.string :link_src, null: false
      t.timestamps null: false
    end
    add_index :videos, :band_id
    add_index :videos, :song_id
    add_index :videos, :title
    add_index :videos, :date_made
  end
end
