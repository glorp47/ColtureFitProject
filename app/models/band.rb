class Band < ActiveRecord::Base

  has_many :albums,
  dependent: :destroy

  has_many :songs,
  dependent: :destroy

  has_many :bookings,
  dependent: :destroy

end
