class Api::DocumentsController < ApplicationController
    before_action :set_document, except: [:index, :create]
  
    def index
      render json: @pet.document
    end
  
    def show
      render json: @document 
    end
  
    def create
      @document = @pet.documents.new()
      @document.title = params [:title]
      @document.description = params [:description]
      @document.pic = params [:pic]
      file = params [:file]
      if file && file != ""
        begin
          ext = File.extname(file.tempfile)
          cloud_image = Cloudinary::Uploader.upload(
            file, 
            public_id: file.original_filename, 
            secure: true
          )
          @document.pic = cloud_image['secure_url']
          if @document.save
            render json: @document
          else
            render json: { errors: @document.errors }, status: :unprocessable_entity
          end
        rescue => e
          render json: { errors: e }, status: 422
        end
      else
        @document.avatar = 'https://images.unsplash.com/photo-1493916665398-143bdeabe500?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8YW5pbWFsc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
        if @document.save
          render json: @document
        else
          render json: { errors: @document.errors }, status: :unprocessable_entity
        end
      end
  
    end
  
    def update
        @document = @pet.documents.new()
        @document.title = params [:title]
        @document.description = params [:description]
        @document.pic = params [:pic]
      file = params [:file]
      if file && file != ""
        begin
          ext = File.extname(file.tempfile)
          cloud_image = Cloudinary::Uploader.upload(
            file, 
            public_id: file.original_filename, 
            secure: true
          )
          @document.pic = cloud_image['secure_url']
          if @document.save
            render json: @document
          else
            render json: { errors: @document.errors }, status: :unprocessable_entity
          end
        rescue => e
          render json: { errors: e }, status: 422
        end
      else
        @document.avatar = 'https://images.unsplash.com/photo-1493916665398-143bdeabe500?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8YW5pbWFsc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
        if @document.save
          render json: @document
        else
          render json: { errors: @document.errors }, status: :unprocessable_entity
        end
      end
  
    end
  
  
    def destroy
      @document.destroy
      render json: { message: 'document Released'}
    end
  
  private
    def set_document
      @document = @pet.documents.find(params[:id])
    end
end
