# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


if Part.count == 0
  path = File.join(File.dirname(__FILE__), './k_and_t_and_s_hanzi_parts.json')
  records = JSON.parse(File.read(path))
  part = Part.create(records)
  puts 'Parts are seeded'
end

if Kanji.count == 0
  count = 0
  count2 = 0
  count3 = 0
  path = File.join(File.dirname(__FILE__), './kanji_stories_medium_with_markup_2.json')
  records = JSON.parse(File.read(path))

  records.each do |record|
    # puts "This is the a record: #{record}"
    new_record = {
      :char => record["char"],
      :meaning => record["meaning"],
      :story => record["story"],
      :number => record["number"]
    }

    new_kanji = Kanji.create!(new_record)

    record["parts"].each do |part|

      if part["meaning"].empty?
        count3+=1
        next
      end

      new_part_for_kanji = Part.find_by(part: part["part"], meaning: part["meaning"])

      if !new_part_for_kanji
        count+=1
        next
      end
      new_kanji.parts << new_part_for_kanji
      count2+=1
    end

    new_kanji.save

  end
  # kanji = Kanji.create(records)
  puts 'Kanji are seeded'
  puts "#{count} parts not found"
  puts "#{count2} parts added"
  puts "#{count3} meanings absent"
end


if Hanzi.count == 0
  count = 0
  count2 = 0
  count3 = 0
  path = File.join(File.dirname(__FILE__), './t_and_s_hanzi_medium_with_markup_2.json')
  records = JSON.parse(File.read(path))

  records.each do |record|
    # puts "This is the a record: #{record}"
    new_record = {
      :char => record["char"],
      :meaning => record["meaning"],
      :story => record["story"],
      :number => record["number"]
    }

    new_hanzi = Hanzi.create!(new_record)

    record["parts"].each do |part|
      if part["meaning"].empty?
        count3+=1
        next
      end
      new_part_for_hanzi = Part.find_by(part: part["part"], meaning: part["meaning"])
      if !new_part_for_hanzi
        count+=1
        next
      end
      new_hanzi.parts << new_part_for_hanzi
      count2+=1
    end

    new_hanzi.save

  end
  # kanji = Kanji.create(records)
  puts 'Hanzi are seeded'
  puts "#{count} parts not found"
  puts "#{count2} parts added"
  puts "#{count3} meanings absent"
end
