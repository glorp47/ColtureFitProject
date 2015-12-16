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
    band = Band.create!(band_params)
    render json: band
  end

  def update
    band = Band.update!(band_params)
    render json: band
  end

  private

  def band_params
    params.require(:band).permit(:fan_id, :discography, :genre, :members)
  end

end
