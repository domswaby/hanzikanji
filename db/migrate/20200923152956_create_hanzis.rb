class CreateHanzis < ActiveRecord::Migration[6.0]
  def change
    create_table :hanzis do |t|
      t.string :char
      t.string :meaning
      t.string :story
      t.integer :number

      t.timestamps
    end
  end
end
