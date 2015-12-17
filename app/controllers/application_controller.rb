class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  helper_method :current_band, :signed_in?


  def current_band
    @current_band ||= Band.find_by_session_token(session[:session_token])
  end

  def signed_in?
    !!current_band
  end

  def sign_in!(band)
      @current_band = band
      session[:session_token] = band.reset_token!
    end

    def sign_out
      current_band.try(:reset_token!)
      session[:session_token] = nil
    end

    def require_signed_in!
      redirect_to new_session_url unless signed_in?
    end

  def require_signed_out
  end

end
