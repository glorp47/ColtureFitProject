class Api::VenuesController < ApplicationController

  def index
      @venues = Venue.all
      render :index
    end

    def show
      @venue = Venue.find(params[:id])
      render json: venue
    end

    def create
      @venue = Venue.new(venue_params)
      if @venue.save
        render :show
      else
      render json: @venue.errors.full_messages
      end
    end

    def update
      venue = Venue.update!(venue_params)
      render json: venue
    end

    def destroy
      @venue = Venue.find(params[:id])
      @venue.destroy
      render :show
    end

    private

    def venue_params
      params.require(:venue).permit(:fan_id, :geo_lat, :geo_lng, :address)
    end

end
