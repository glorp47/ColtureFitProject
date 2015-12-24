class DeleteZipFromGigsTable < ActiveRecord::Migration
  def change
    remove_column :gigs, :location_zip
  end
end
