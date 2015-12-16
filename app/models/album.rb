class Album < ActiveRecord::Base

  validates :band_id, :title, :date_made, presence: true

  has_many :songs,
  dependent: destroy
  belongs_to :band

end
