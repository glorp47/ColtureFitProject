class Api::AlbumsController < ApplicationController

  def index
    @albums = Album.all
    render :index
  end

  def show
    @album = Album.find(params[:id])
    render :show
  end

  def create
    album = Album.create!(album_params)
    render json: album
  end

  def update
    album = Album.update!(album_params)
    render json: album
  end

  private

  def album_params
    params.require(:album).permit(:band_id, :title, :long_bio, :date_made,
    :link_src, :img_src)
  end

end
