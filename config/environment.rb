# Load the Rails application.
require File.expand_path('../application', __FILE__)

# Initialize the Rails application.
Rails.application.initialize!

# ENV for jasmine gem
ENV['JASMINE_CONFIG_PATH'] = 'test/javascripts/support/jasmine.yml'
