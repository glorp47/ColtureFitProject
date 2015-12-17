class CreateImages < ActiveRecord::Migration
  def change
    create_table :images do |t|
      t.integer :band_id, null: false
      t.string :title
      t.text :long_bio
      t.datetime :date_made
      t.string :link_src
      t.string :thumbnail
      t.timestamps null: false
    end
    add_index :images, :band_id
  end
end
