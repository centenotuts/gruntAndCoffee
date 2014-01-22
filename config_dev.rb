require 'toolkit'
require 'breakpoint'

FileUtils.mkdir_p('.serve')

# Set this to the root of your project when deployed:
project_path     = ".serve"
http_path        = "/"
css_dir          = "css"
sass_dir         = "../src/sass"
images_dir       = "images"
javascripts_dir  = "src"
cache_dir        = "../.sass-cache"
relative_assets  = false
disable_warnings = true

# You can select your preferred output style here (can be overridden via the command line):
output_style = :nested

# To enable relative paths to assets via compass helper functions. Uncomment:
# relative_assets = true

# To disable debugging comments that display the original location of your selectors. Uncomment:
line_comments = true

# If you prefer the indented syntax, you might want to regenerate this
# project again passing --syntax sass, or you can uncomment this:
# preferred_syntax = :sass
# and then run:
# sass-convert -R --from scss --to sass sass scss && rm -rf sass && mv scss sass
