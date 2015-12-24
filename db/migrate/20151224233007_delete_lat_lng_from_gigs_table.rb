class DeleteLatLngFromGigsTable < ActiveRecord::Migration
  def change
    remove_column :gigs, :geo_lat
    remove_column :gigs, :geo_lng
  end
end
