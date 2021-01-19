class Api::InsurancesController < ApplicationController
  before_action :set_pet
  before_action :set_insurance, only: [:show, :update, :destroy]

  def index
    render json: @pet.insurances
  end

  def show
    render json: @insurance
  end

  def create
    @insurance = @pet.insurances.new(insurance_params)
    if @insurance.save
      render json: @insurance
    else
      render json: { errors: @insurance.errors }, status: :unprocessable_entity
    end
  end
  
  def update
    if @insurance.update(insurance_params)
      render json: @insurance
    else
      render json: { errors: @insurance.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @insurance.destroy
    render json: { message: 'insurance deleted'}
  end

  private
    def set_pet
      @pet = pet.find(params[:pet_id])
    end

    def set_insurance
      @insurance = @pet.insurances.find(params[:id])
    end

    def insurance_params
      params.require(:insurance).permit(:nombre, :phone, :policy )
    end
end
