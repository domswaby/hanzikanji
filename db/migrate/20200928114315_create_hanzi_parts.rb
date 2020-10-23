class CreateHanziParts < ActiveRecord::Migration[6.0]
  def change
    create_table :hanzi_parts do |t|
      t.references :hanzi, null: false, foreign_key: true
      t.references :part, null: false, foreign_key: true

      t.timestamps
    end
  end
end
