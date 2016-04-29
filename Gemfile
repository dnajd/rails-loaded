source 'https://rubygems.org'

###################
# stock rails
###################

gem 'rails', '4.2.6' 					    # Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'sass-rails'                  # Use SCSS for stylesheets
gem 'uglifier'             				# Use Uglifier as compressor for JavaScript assets

gem 'coffee-rails'                # Use CoffeeScript for .coffee assets and views
gem 'sprockets-rails', '< 3.0'
# gem 'therubyracer', platforms: :ruby 	# See https://github.com/rails/execjs#readme for more supported runtimes

gem 'jquery-rails'						        # Use jquery as the JavaScript library
gem 'turbolinks'						          # Turbolinks makes following links in your web application faster. Read more: https://github.com/rails/turbolinks
gem 'jbuilder'                        # Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'sdoc', '~> 0.4.0', group: :doc		# bundle exec rake doc:rails generates the API under doc/api.

# gem 'bcrypt', '~> 3.1.7'						        # Use ActiveModel has_secure_password
# gem 'unicorn'									              # Use Unicorn as the app server
# gem 'capistrano-rails', group: :development	# Use Capistrano for deployment

group :production do
  gem 'pg'
end

group :development do
  gem 'web-console'                   # Access an IRB console on exception pages or by using <%= console %> in views
end

group :development, :test do

  gem 'sqlite3'                     # Use sqlite3 as the database for Active Record
  gem 'byebug'                      # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'spring'                      # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'mocha'                       # mocking in tests
  gem 'faker'
end

###################
# design
###################

gem 'bourbon'                               # CSS3 Sass mixins
gem 'neat'                                  # Sass responsive grid]
gem 'refills'                               # refills
gem 'font-awesome-rails'                    # Multi-purpose icon fonts
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
  gem 'guard-livereload', require: false
  gem 'jasmine'
  gem 'jasmine-jquery-rails'

end

