class Venue < ActiveRecord::Base

  validates :fan_id, :geo_lat, :geo_lng, :address, presence: true

  belongs_to :fan
  has_many :gigs,
  dependent: destroy

  has_many :bookings,
  through: :gigs



end
