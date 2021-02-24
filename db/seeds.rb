# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "Cleaning database..."

Episode.destroy_all
Section.destroy_all
Course.destroy_all


puts "Craeting new database..."
puts "All done!"


course = Course.create(title: 'Hello world Course', description: 'create ruby app with react')

section = Section.create(title: 'Chapter 1', course: course )

episodes = Episode.create([
  { title: 'First video', description: 'lorem ipsum  111', url: 'https://www.youtube.com/embed/5-sGyjQK78Y', section: section },
  { title: 'Second video', description: 'lorem ipsum 2222', url: 'https://www.youtube.com/embed/5-sGyjQK78Y', section: section },
  { title: 'Video 3', description: 'lorem ipsum 333', url: 'https://www.youtube.com/embed/5-sGyjQK78Y', section: section },
  { title: 'Video 4', description: 'lorem ipsum 44444', url: 'https://www.youtube.com/embed/5-sGyjQK78Y', section: section }
])

