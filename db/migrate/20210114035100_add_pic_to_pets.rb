class AddPicToPets < ActiveRecord::Migration[6.0]
  def change
    add_column :pets, :pic, :string
  end
end
