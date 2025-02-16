source "https://rubygems.org"

# Uncomment the next line to use GitHub Pages (recommended for GitHub Pages)
gem "github-pages", group: :jekyll_plugins

# If you need a specific version of Jekyll, you can specify it here, but generally, it’s best to use the version provided by GitHub Pages.
# gem "jekyll", "~> 4.4.1"   # Uncomment if you do not want to use the GitHub Pages version

# Default theme for new Jekyll sites
gem "minima", "~> 2.5"

# Plugins
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
  gem "jekyll-multiple-languages-plugin" # Add your other plugins here
end

# Windows and JRuby specific dependencies for time zone data
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1", :platforms => [:mingw, :x64_mingw, :mswin]

# Lock `http_parser.rb` gem to `v0.6.x` for JRuby builds
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]

# Webrick for serving the site locally
gem "webrick", "~> 1.9"

# Optional theme
gem "jekyll-theme-cayman" # You can change this to another theme of your choice
