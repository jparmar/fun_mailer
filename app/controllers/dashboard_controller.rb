class DashboardController < ApplicationController
  def index
     @categories = Category.all
     @quotes = Quote.all
  end
  
  def getQuotes
    @category_quotes = Quote.where(:category_id => params[:id]).all

    render :partial => "category_quotes", :object => @category_quotes
  end
  
  def getImages
    @category_images = Photo.where(:category_id => params[:id]).all

    render :partial => "category_images", :object => @category_images
  end
  
  def getQuote
    @category_quote = Quote.where(:id => params[:id]).all

  
    # render :partial => "category_quotes", :object => @category_quotes
  end
end
