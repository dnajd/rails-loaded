require File.expand_path('../boot', __FILE__)

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module RailsLoaded
  class Application < Rails::Application
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.

    # Set Time.zone default to the specified zone and make Active Record auto-convert to this zone.
    # Run "rake -D time" for a list of tasks for finding time zone names. Default is UTC.
    # config.time_zone = 'Central Time (US & Canada)'

    # The default locale is :en and all translations from config/locales/*.rb,yml are auto loaded.
    # config.i18n.load_path += Dir[Rails.root.join('my', 'locales', '*.{rb,yml}').to_s]
    # config.i18n.default_locale = :de

    # Do not swallow errors in after_commit/after_rollback callbacks.
    config.active_record.raise_in_transactional_callbacks = true

    # disabling these
    config.generators.stylesheets = false
    config.generators.javascripts = false

    # filter params
    config.filter_parameters += [:password, :verification]

    ##############################
    # LOGRAGE
    ##############################
    config.lograge.keep_original_rails_log = true
    config.lograge.logger = ActiveSupport::Logger.new "#{Rails.root}/log/lr_#{Rails.env}.log"
    config.lograge.enabled = true
    config.lograge.custom_options = lambda do |event|

      # params
      params = event.payload[:params].reject do |k|
        ['controller', 'action'].include? k
      end

      # options
      hash = {
        time: event.time.iso8601
      }
      event.payload.each do |key, value|
        hash[key] = value unless [:params, :view_runtime, :db_runtime].include? key
      end

      return hash
    end

    # custom formatting
    def format_value(value)
      return value.to_s.gsub('"', '\'').strip
    end
    config.lograge.formatter = ->(data) do
      log_s = ""
      data.each do |key, value|
        unless key==:time or config.filter_parameters.include? key
          log_s << "|#{key}=\"#{format_value(value)}\""
        end
      end
      app_name = Module.nesting.last.to_s.underscore
      "#{data[:time]} app=\"#{app_name}\"#{log_s}"
    end
  end
end
