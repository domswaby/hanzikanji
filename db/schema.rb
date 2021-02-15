# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_09_28_114315) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"


  create_table "hanzi_parts", force: :cascade do |t|
    t.bigint "hanzi_id", null: false
    t.bigint "part_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["hanzi_id"], name: "index_hanzi_parts_on_hanzi_id"
    t.index ["part_id"], name: "index_hanzi_parts_on_part_id"
  end

  create_table "hanzis", force: :cascade do |t|
    t.string "char"
    t.string "meaning"
    t.string "story"
    t.integer "number"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "kanji_parts", force: :cascade do |t|
    t.bigint "kanji_id", null: false
    t.bigint "part_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["kanji_id"], name: "index_kanji_parts_on_kanji_id"
    t.index ["part_id"], name: "index_kanji_parts_on_part_id"
  end

  create_table "kanjis", force: :cascade do |t|
    t.string "char"
    t.string "meaning"
    t.string "story"
    t.integer "number"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "parts", force: :cascade do |t|
    t.string "part"
    t.string "meaning"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end


  add_foreign_key "hanzi_parts", "hanzis"
  add_foreign_key "hanzi_parts", "parts"
  add_foreign_key "kanji_parts", "kanjis"
  add_foreign_key "kanji_parts", "parts"

end
