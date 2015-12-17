class Band < ActiveRecord::Base


  belongs_to :fan

  has_many :albums,
  dependent: :destroy

  has_many :songs,
  dependent: :destroy

  has_many :bookings,
  dependent: :destroy


  validates :username, :password_digest, :session_token, :location_zip, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :genre, presence: true, inclusion: {in: %w(rap electronic punk indie hardrock
    jazz funk randb metal country singersongwriter reggae symphonic traditionalworld)}
  validates :email, uniqueness: true, presence: true

  attr_reader :password

  has_one :band,
  dependent: :destroy
  has_one :venue,
  dependent: :destroy
  has_many :press_items,
  dependent: :destroy
  has_many :images,
  dependent: :destroy
  has_many :videos,
  dependent: :destroy

  after_initialize :ensure_token

  def self.find_by_credentials(email, password)
    band = Band.find_by(email: email)
    band.try(:valid_password?, password) ? band: nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_token!
    self.session_token = generate_token
    self.save!
    self.session_token
  end

  private
  def ensure_token
    self.session_token ||= generate_token
  end

  def generate_token
    SecureRandom.urlsafe_base64(16)
  end

end
