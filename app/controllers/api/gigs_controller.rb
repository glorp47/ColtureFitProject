class Api::GigsController < ApplicationController


    def index
      @gigs = Gig.all
      render :index
    end

    def show
      @gig = Gig.find(params[:id])
      render :show
    end

    def create
      @gig = Gig.new(gig_params)
      if @gig.save
        render :show
      else
      render json: @gig.errors.full_messages
      end
    end

    def update
      gig = Gig.update!(gig_params)
      render json: gig
    end

    def destroy
      @gig = Gig.find(params[:id])
      @gig.destroy
      render :show
    end

    private

    def gig_params
      params.require(:gig).permit(:title, :date, :description,
      :geo_lat, :geo_lng, :address, :location_zip)
    end

end
