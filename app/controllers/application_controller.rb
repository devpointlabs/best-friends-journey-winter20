class ApplicationController < ActionController::API
	include DeviseTokenAuth::Concerns::SetUserByToken
	# before_action :authenticate_user!
	before_action :configure_permitted_parameters, if: :devise_controller?

	protected 
		# params.require(:sign_up).permit(:email, :password)
		# params.require(:sign_up).permit(:email, :password..., :address, :phone)
		def configure_permitted_parameters 
			devise_parameter_sanitizer.permit(:sign_up, keys: [:address, :phone])
		end
end
