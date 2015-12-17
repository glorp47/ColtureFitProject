class SessionsController < ApplicationController

  def new
  end

  def create
     band = Band.find_by_credentials(
       params[:band][:email],
       params[:band][:password]
     )

     if band
       sign_in!(band)
       redirect_to root_path
     else
       flash.now[:errors] = ["Invalid username or password"]
       render :new
     end
  end

 def destroy
   sign_out
   redirect_to new_session_url
 end

end
