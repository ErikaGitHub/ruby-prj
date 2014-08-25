class SearchController < ApplicationController
  def pharmacy
  	lat = params[:lat].to_f
  	lng = params[:lng].to_f

  	@closest = Pharmacy.closest(:origin => [lat,lng])

  	respond_to do |format|
  		format.json {
  			render json: @closest
  		}
  		format.html {}
  	end

  end
end
