class BandsController < ApplicationController

  def new
    @band = Band.new
  end

  def create
    @band = Band.new(band_params)
    if @band.save
      sign_in!(@band)
      redirect_to root_path
    else
      flash.now[:errors] = @band.errors.full_messages
      render :new
    end
  end

  private
  def band_params
    params.require(:band).permit(:discography, :genre, :members,
    :password, :email, :location_zip, :account_type, :short_bio, :long_bio, :username)
  end

end
