class PressItem < ActiveRecord::Base

  validates :band_id, :title, :publisher, :body, presence: true
  belongs_to :band

end
