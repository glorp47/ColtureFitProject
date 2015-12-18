class Gig < ActiveRecord::Base

  validates :venue_id, :venue_name, :title, :date, :description, presence: true

  has_many :bookings,
  dependent: :destroy

  has_many :bands,
  through: :bookings


end
