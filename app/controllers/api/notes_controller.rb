class Api::NotesController < ApplicationController
    before_action :set_note, except: [:index, :create]

    def index
        render json: current_user.notes
      end
    
      def show
        render json: @note
      end
    
      def create
        @note = current_user.notes.new()
        @note.title = params[:title]
        @note.body = params [:body]
        file = params [:file]
          end
        end
    
      end
    
      def update
        @note = current_user.notes.new()
        @note.title = params[:title]
        @note.body = params [:body]
        file = params [:file]
        end
    
      end
    
    
      def destroy
        @note.destroy
        render json: { message: 'Note deleted'}
      end
    
    private
      def set_note
        @note = current_user.notes.find(params[:id])
      end
    
    end

end
