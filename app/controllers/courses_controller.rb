class CoursesController < ApplicationController
    skip_before_action :verify_authenticity_token
    def index
        render json: Course.all
    end
    def show
        render json: Course.find(params["id"])
    end
    def create
        render json: Course.create(params["course"])
    end
    def delete
        render json: Course.delete(params["id"])
    end
    def update
        render json: Course.update(params["id"], params["course"])
    end
end
