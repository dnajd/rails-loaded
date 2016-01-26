source 'https://rubygems.org'

###################
# stock rails
###################

gem 'rails', '4.2.1' 					# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'sass-rails', '~> 5.0' 				# Use SCSS for stylesheets
gem 'uglifier', '>= 1.3.0' 				# Use Uglifier as compressor for JavaScript assets

gem 'coffee-rails', '~> 4.1.0' 			# Use CoffeeScript for .coffee assets and views

gem 'therubyracer', platforms: :ruby 	# See https://github.com/rails/execjs#readme for more supported runtimes

gem 'jquery-rails'						# Use jquery as the JavaScript library
gem 'turbolinks'						# Turbolinks makes following links in your web application faster. Read more: https://github.com/rails/turbolinks
gem 'jbuilder', '~> 2.0'				# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'sdoc', '~> 0.4.0', group: :doc		# bundle exec rake doc:rails generates the API under doc/api.

# gem 'bcrypt', '~> 3.1.7'						# Use ActiveModel has_secure_password
# gem 'unicorn'									# Use Unicorn as the app server
# gem 'capistrano-rails', group: :development	# Use Capistrano for deployment

group :production do
  gem 'pg'
end

group :development, :test do

  gem 'sqlite3'               # Use sqlite3 as the database for Active Record
  gem 'byebug'                # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'web-console', '~> 2.0' # Access an IRB console on exception pages or by using <%= console %> in views
  gem 'spring'                # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'mocha'                 # mocking in tests

end

###################
# design
###################

gem 'bourbon', '~> 4.0.1'                   # CSS3 Sass mixins
gem 'neat', '~> 1.6.0'                      # Sass responsive grid
gem 'refills'                               # refills
gem 'font-awesome-rails', '~> 4.2.0'        # Multi-purpose icon fonts
gem 'sht_rails'                             # js handlebar templates



###################
# logging
###################

gem "lograge"

###################
# testing
###################

group :development, :test do

  gem 'guard'
  gem 'guard-minitest'
  gem 'guard-livereload', '2.3.0', require: false
  gem 'jasmine'
  gem 'jasmine-jquery-rails'

end

