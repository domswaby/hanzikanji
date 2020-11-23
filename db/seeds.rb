# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Thanzi.delete_all
# Kanji.delete_all
# Hanzi.delete_all
# Part.delete_all
# Kanji.delete_all
# Airline.delete_all
# Review.delete_all

if Part.count == 0
  path = File.join(File.dirname(__FILE__), './k_and_t_and_s_hanzi_parts.json')
  records = JSON.parse(File.read(path))
  part = Part.create(records)
  puts 'Parts are seeded'
end

if Kanji.count == 0
  count = 0
  path = File.join(File.dirname(__FILE__), './kanji_stories_medium_with_markup.json')
  records = JSON.parse(File.read(path))

  records.each do |record|
    puts "This is the a record: #{record}"
    new_record = {
      :kanji => record["kanji"],
      :meaning => record["meaning"],
      :story => record["story"],
      :number => record["number"]
    }

    new_kanji = Kanji.create!(new_record)

    record["parts"].each do |part|
      next if !part["meaning"]
      new_part_for_kanji = Part.find_by(part: part["part"], meaning: part["meaning"])
      if !new_part_for_kanji
        count+=1
        next
      end
      new_kanji.parts << new_part_for_kanji
    end

    new_kanji.save

  end
  # kanji = Kanji.create(records)
  puts 'Kanji are seeded'
  puts "#{count} parts not found"
end


if Hanzi.count == 0
  count = 0
  path = File.join(File.dirname(__FILE__), './t_and_s_hanzi_medium.json')
  records = JSON.parse(File.read(path))

  records.each do |record|
    puts "This is the a record: #{record}"
    new_record = {
      :hanzi => record["hanzi"],
      :meaning => record["meaning"],
      :story => record["story"],
      :number => record["number"]
    }

    new_hanzi = Hanzi.create!(new_record)

    record["parts"].each do |part|
      next if !part["meaning"]
      new_part_for_hanzi = Part.find_by(part: part["part"], meaning: part["meaning"])
      if !new_part_for_hanzi
        count+=1
        next
      end
      new_hanzi.parts << new_part_for_hanzi
    end

    new_hanzi.save

  end
  # kanji = Kanji.create(records)
  puts 'Hanzi are seeded'
  puts '${count} parts not found'
end



if Airline.count == 0
  airlines = Airline.create([
                              {
                                name: 'United Airlines',
                                image_url: 'https://open-flights.s3.amazonaws.com/United-Airlines.png'
                              },
                              {
                                name: 'Southwest',
                                image_url: 'https://open-flights.s3.amazonaws.com/Southwest-Airlines.png'
                              },
                              {
                                name: 'Delta',
                                image_url: 'https://open-flights.s3.amazonaws.com/Delta.png'
                              },
                              {
                                name: 'Alaska Airlines',
                                image_url: 'https://open-flights.s3.amazonaws.com/Alaska-Airlines.png'
                              },
                              {
                                name: 'JetBlue',
                                image_url: 'https://open-flights.s3.amazonaws.com/JetBlue.png'
                              },
                              {
                                name: 'American Airlines',
                                image_url: 'https://open-flights.s3.amazonaws.com/American-Airlines.png'
                              }
                            ])
end

if Review.count == 0
  reviews = Review.create([
                            {
                              title: 'Shitty ariline',
                              score: '5',
                              airline_id: '1',
                              description: "Let's go!"
                            },
                            {
                              title: 'Cool ariline',
                              score: '10',
                              airline_id: '2',
                              description: "Let's chill!"
                            }
                          ])
end
