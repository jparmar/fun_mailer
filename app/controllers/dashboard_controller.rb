class DashboardController < ApplicationController
  def index
     @quotes = Quote.all
  end
end
