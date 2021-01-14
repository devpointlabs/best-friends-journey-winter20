class CreatePets < ActiveRecord::Migration[6.0]
  def change
    create_table :pets do |t|
      t.string :nombre
      t.integer :age
      t.string :animal
      t.string :color
      t.float :weight
      t.string :sex
      t.boolean :service
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
