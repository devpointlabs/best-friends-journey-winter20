class Api::DocumentsController < ApplicationController
    before_action :set_pet, except: [:index, :create]
  
    def index
      render json: current_user.pets
    end
  
    def show
      render json: @pet 
    end
  
    def create
      @pet = current_user.pets.new()
      @pet.nombre = params[:nombre]
      @pet.age = params [:age]
      @pet.animal = params [:animal]
      @pet.color = params [:color]
      @pet.weight = params [:weight]
      @pet.sex = params [:sex]
      @pet.service = params [:service]
      file = params [:file]
      if file && file != ""
        begin
          ext = File.extname(file.tempfile)
          cloud_image = Cloudinary::Uploader.upload(
            file, 
            public_id: file.original_filename, 
            secure: true
          )
          @pet.pic = cloud_image['secure_url']
          if @pet.save
            render json: @pet
          else
            render json: { errors: @pet.errors }, status: :unprocessable_entity
          end
        rescue => e
          render json: { errors: e }, status: 422
        end
      else
        @pet.avatar = 'https://images.unsplash.com/photo-1493916665398-143bdeabe500?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8YW5pbWFsc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
        if @pet.save
          render json: @pet
        else
          render json: { errors: @pet.errors }, status: :unprocessable_entity
        end
      end
  
    end
  
    def update
      @pet = current_user.pets.new()
      @pet.nombre = params[:nombre]
      @pet.age = params [:age]
      @pet.animal = params [:animal]
      @pet.color = params [:color]
      @pet.weight = params [:weight]
      @pet.sex = params [:sex]
      @pet.service = params [:service]
      file = params [:file]
      if file && file != ""
        begin
          ext = File.extname(file.tempfile)
          cloud_image = Cloudinary::Uploader.upload(
            file, 
            public_id: file.original_filename, 
            secure: true
          )
          @pet.pic = cloud_image['secure_url']
          if @pet.save
            render json: @pet
          else
            render json: { errors: @pet.errors }, status: :unprocessable_entity
          end
        rescue => e
          render json: { errors: e }, status: 422
        end
      else
        @pet.avatar = 'https://images.unsplash.com/photo-1493916665398-143bdeabe500?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8YW5pbWFsc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
        if @pet.save
          render json: @pet
        else
          render json: { errors: @pet.errors }, status: :unprocessable_entity
        end
      end
  
    end
  
  
    def destroy
      @pet.destroy
      render json: { message: 'Pet Released'}
    end
  
  private
    def set_pet
      @pet = current_user.pets.find(params[:id])
    end
end
