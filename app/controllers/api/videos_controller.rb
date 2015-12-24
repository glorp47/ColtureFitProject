class Api::VideosController < ApplicationController

  def index
     @videos = Video.all
     render :index
   end

   def show
     @video = Video.find(params[:id])
     render json: video
   end

   def create
     @video = Video.new(video_params)
     if @video.save
       render :show
     else
     render json: @video.errors.full_messages
     end
   end

   def update
     video = Video.update!(video_params)
     render json: video
   end

   def destroy
     @video = Video.find(params[:id])
     @video.destroy
     render :show
   end

   private

   def video_params
     params.require(:video).permit(:band_id, :link_src, :title, :long_bio, :date_made)
   end


end
