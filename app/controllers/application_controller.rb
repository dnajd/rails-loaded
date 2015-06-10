class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  before_filter :guid

  def guid
    # only if it doesn't exist already?
    if session[:guid].blank?
      session[:guid] = SecureRandom.urlsafe_base64
    end
    return session[:guid]
  end

  def append_info_to_payload(payload)
    super
    payload[:host] = request.host
    payload[:guid] = guid
    payload[:env] = Rails.env.to_s
    payload[:level] = Rails.logger.level

  end
end
