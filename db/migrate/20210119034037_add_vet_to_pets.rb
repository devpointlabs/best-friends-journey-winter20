class AddVetToPets < ActiveRecord::Migration[6.0]
  def change
    add_column :pets, :vet, :string
  end
end
