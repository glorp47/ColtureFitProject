class Api::ImagesController < ApplicationController

  def index
    @images = Image.all
    render :index
  end

  def show
    @image = Image.find(params[:id])
    render json: image
  end

  def create
    @image = Image.new(image_params)
    if @image.save
      render :show
    else
    render json: @image.errors.full_messages
    end
  end

  def update
    image = Image.update!(image_params)
    render json: image
  end

  def destroy
    @image = Image.find(params[:id])
    @image.destroy
    render :show
  end


  private

  def image_params
    params.require(:image).permit(:fan_id, :title, :long_bio, :date_made,
    :link_src, :thumbnail)
  end


end
