class DeleteDiscographyFromBandsTable < ActiveRecord::Migration
  def change
    remove_column :bands, :discography
  end
end
