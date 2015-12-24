class Gig < ActiveRecord::Base

  validates :band_id, :venue_name, :title, :date, :description, presence: true

  belongs_to :band


end
