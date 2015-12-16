class Band < ActiveRecord::Base

  has_many :albums,
  dependent: destroy

  has_many :songs,
  dependent: destroy

end
