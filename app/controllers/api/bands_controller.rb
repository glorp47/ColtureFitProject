class Api::BandsController < ApplicationController

  def index
    @bands = Band.all
    render :index
  end

  def show
    @band = Band.find(params[:id])
    render :show
  end

  def create
    @band = Band.new(band_params)
    if @band.save
      render :show
    else
      render json: @band.errors.full_messages
    end
  end

  def update
    band = Band.update!(band_params)
    render json: band
  end

  def destroy
    @band = Band.find(params[:id])
    @band.destroy
    render :show
  end

  private

  def band_params
    params.require(:band).permit(:genre, :members, :password,
    :email, :location_zip, :account_type, :short_bio, :long_bio, :username)
  end

end
