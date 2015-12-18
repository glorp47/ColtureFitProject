class Image < ActiveRecord::Base

  belongs_to :band
  validates :band_id, presence: true


end
