class AddSocialMediaToBandsTable < ActiveRecord::Migration
  def change
    add_column :bands, :twitter, :string
    add_column :bands, :facebook, :string
    add_column :bands, :instagram, :string
  end
end
