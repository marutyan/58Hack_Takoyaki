Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins 'http://127.0.0.1:3000'
    resource '*', methods: :any, headers: :any
  end
end