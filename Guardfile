guard :minitest, spring: true do


  # with Minitest::Unit
  watch(%r|^test/(.*)\/?test_(.*)\.rb|)
  watch(%r|^lib/(.*)([^/]+)\.rb|)     { |m| "test/#{m[1]}test_#{m[2]}.rb" }
  watch(%r|^test/test_helper\.rb|)    { "test" }

  # Rails 4 - App Files
  watch(%r|^app/controllers/(.*)\.rb|) { |m| "test/controllers/#{m[1]}_test.rb" }
  watch(%r|^app/helpers/(.*)\.rb|)     { |m| "test/helpers/#{m[1]}_test.rb" }
  watch(%r|^app/models/(.*)\.rb|)      { |m| "test/unit/#{m[1]}_test.rb" }

  # Rails 4 - Test Files
  watch(%r|^test/controllers/(.*)\.rb|) { |m| "test/controllers/#{m[1]}.rb" }
  watch(%r|^test/helpers/(.*)\.rb|)     { |m| "test/helpers/#{m[1]}.rb" }
  watch(%r|^test/integration/(.*)\.rb|) { |m| "test/integration/#{m[1]}.rb" }
  watch(%r|^test/mailers/(.*)\.rb|)     { |m| "test/mailers/#{m[1]}.rb" }
  watch(%r|^test/models/(.*)\.rb|)      { |m| "test/models/#{m[1]}.rb" }

end

guard 'livereload' do
  watch(%r{app/views/.+\.(erb|haml|slim)$})
  watch(%r{app/helpers/.+\.rb})
  watch(%r{test/javascripts/.+\.js})
  watch(%r{public/.+\.(css|js|html)})
  watch(%r{config/locales/.+\.yml})
  # Rails Assets Pipeline
  watch(%r{(app|vendor)(/assets/\w+/(.+\.(css|js|html|png|jpg))).*}) { |m| "/assets/#{m[3]}" }
end
