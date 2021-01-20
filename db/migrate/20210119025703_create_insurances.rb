class CreateInsurances < ActiveRecord::Migration[6.0]
  def change
    create_table :insurances do |t|
      t.string :nombre
      t.integer :phone
      t.string :policy
      t.belongs_to :pet, null: false, foreign_key: true

      t.timestamps
    end
  end
end
