class CreateDocuments < ActiveRecord::Migration[6.0]
  def change
    create_table :documents do |t|
      t.string :title
      t.text :description
      t.string :picture
      t.belongs_to :pet, null: false, foreign_key: true

      t.timestamps
    end
  end
end
