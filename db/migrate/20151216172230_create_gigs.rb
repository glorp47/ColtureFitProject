class CreateGigs < ActiveRecord::Migration
  def change
    create_table :gigs do |t|

      t.decimal :geo_lat, null: false
      t.decimal :geo_lng, null: false
      t.integer :location_zip, null: false
      t.string :address, null: false
      t.string :title, null: false
      t.string :venue_name, null: false
      t.datetime :date, null: false
      t.text :description, null: false
      t.timestamps null: false
    end
    add_index :gigs, :title
    add_index :gigs, :date
    add_index :gigs, :location_zip
  end
end
