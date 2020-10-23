class CreateKanjiParts < ActiveRecord::Migration[6.0]
  def change
    create_table :kanji_parts do |t|
      t.references :kanji, null: false, foreign_key: true
      t.references :part, null: false, foreign_key: true

      t.timestamps
    end
  end
end
