class SessionsController < ApplicationController

  def new
  end

  def create
     fan = Fan.find_by_credentials(
       params[:fan][:email],
       params[:fan][:password]
     )

     if fan
       sign_in!(fan)
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
