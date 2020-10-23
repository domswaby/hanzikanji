class CreateThanzis < ActiveRecord::Migration[6.0]
  def change
    create_table :thanzis do |t|
      t.string :hanzi
      t.string :meaning
      t.text :story
      t.integer :number

      t.timestamps
    end
  end
end
