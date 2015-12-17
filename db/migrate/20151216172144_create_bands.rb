class CreateBands < ActiveRecord::Migration
  def change
    create_table :bands do |t|
      t.string :email, null: false
      t.string :username, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :short_bio
      t.text :long_bio
      t.integer :location_zip, null: false
      t.string :genre, null: false
      t.text :discography
      t.text :members
      t.timestamps null: false
    end
    add_index :bands, :genre
    add_index :bands, :email, unique: true
    add_index :bands, :username
    add_index :bands, :session_token
    add_index :bands, :location_zip
  end
end
