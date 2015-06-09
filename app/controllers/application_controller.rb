class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  before_filter :create_guid

  def create_guid
    # only if it doesn't exist already?
    if session[:guid].blank?
      session[:guid] = SecureRandom.urlsafe_base64
    end
  end

  def append_info_to_payload(payload)
    super
    payload[:host] = request.host
  end
end
