# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create(username: 'John', email: 'john@email.com', password: '12345')
user2 = User.create(username: 'Jane', email: 'jane@mail.net', password: 'password')

recipe1 = Recipe.create(title: 'Good Cake', instructions: 'bake cake')
recipe2 = Recipe.create(title: 'Great Spagetti', instructions: 'stir pasta')
recipe3 = Recipe.create(title: 'Best BBQ', instructions: 'smoke pork')

recipe1.ingredients << Ingredient.create(name: 'flour', amount: '2 cups')
recipe1.ingredients << Ingredient.create(name: 'sugar', amount: '3/4 cup')
recipe2.ingredients << Ingredient.create(name: 'pasta', amount: '1 box')
recipe2.ingredients << Ingredient.create(name: 'tomtato', amount: '1/2 lb')
recipe3.ingredients << Ingredient.create(name: 'paprika', amount: '1 tblsp')

user1.recipes << recipe1
user1.recipes << recipe2
user2.recipes << recipe3
