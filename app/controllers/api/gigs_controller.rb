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
      gig = Gig.create!(gig_params)
      render json: gig
    end

    def update
      gig = Gig.update!(gig_params)
      render json: gig
    end

    private

    def gig_params
      params.require(:gig).permit(:title, :date, :description)
    end

end
