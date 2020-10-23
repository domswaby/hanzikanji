class CreateParts < ActiveRecord::Migration[6.0]
  def change
    create_table :parts do |t|
      t.string :part
      t.string :meaning

      t.timestamps
    end
  end
end
