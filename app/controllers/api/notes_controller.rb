class Api::NotesController < ApplicationController
  before_action :set_pet
  before_action :set_note, only: [:show, :update, :destroy]

  def index
    render json: @pet.notes
  end

  def show
    render json: @note
  end

  def create
    @note = @pet.notes.new(note_params)
    if @note.save
      render json: @note
    else
      render json: { errors: @note.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @note.update(note_params)
      render json: @note
    else
      render json: { errors: @note.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @note.destroy
    render json: { message: 'note deleted'}
  end

  private
    def set_pet
      @pet = pet.find(params[:pet_id])
    end

    def set_note
      @note = @pet.notes.find(params[:id])
    end

    def note_params
      params.require(:note).permit(:title, :body)
    end
end

