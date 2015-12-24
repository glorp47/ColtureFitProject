class TakeOffBookingAddGigForBand < ActiveRecord::Migration
  def change
    add_column :gigs, :band_id, :integer, null: false
    add_index :gigs, :band_id
  end
end
