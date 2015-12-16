class Api::SongsController < ApplicationController

  def index
    @songs = Song.all
    render :index
  end

  def show
    @song = Song.find(params[:id])
    render json: song
  end

  def create
    @song = Song.new(song_params)
    if @song.save
      render :show
    else
    render json: @song.errors.full_messages
    end
  end

  def update
    song = Song.update!(song_params)
    render json: song
  end

  def destroy
    @song = Song.find(params[:id])
    @song.destroy
    render :show
  end


  private

  def song_params
    params.require(:song).permit(:band_id, :album_id, :title, :long_bio, :date_made, :link_src)
  end


end
