class RootController < ApplicationController
  def index; end

  def greeting
    render json: { greeting: Greeting.all.sample.message }
  end
end
