# The DocPad Configuration File
# It is simply a CoffeeScript Object which is parsed by CSON
docpadConfig = {

	# =================================
	# Template Data
	# These are variables that will be accessible via our templates
	# To access one of these within our templates, refer to the FAQ: https://github.com/bevry/docpad/wiki/FAQ

	templateData:

		# Specify some site properties
		site:
			# The production url of our website
			url: "http://absdemo.com"

			# Here are some old site urls that you would like to redirect from
			oldUrls: ['']

			# The default title of our website
			title: "Arkivum"

			# The website description (for SEO)
			description: """
				Every bit archived. 
				"""

			# The website keywords (for SEO) separated by commas
			keywords: """
				arkivum
				"""

			# The website author's name
			author: "MDM"

			# The website author's email
			email: "mike@mdm.cm"

			# Styles
			styles: [
				"http://yui.yahooapis.com/pure/0.2.0/pure-min.css"
				"/styles/style.css"
			]

			# Scripts
			scripts: [
				"http://yui.yahooapis.com/3.12.0/build/yui/yui-min.js"
				"http://code.jquery.com/jquery-1.10.1.min.js"
				"/scripts/script.js"
			]



		# -----------------------------
		# Helper Functions

		# Get the prepared site/document title
		# Often we would like to specify particular formatting to our page's title
		# we can apply that formatting here
		getPreparedTitle: ->
			# if we have a document title, then we should use that and suffix the site's title onto it
			if @document.title
				"#{@document.title} | #{@site.title}"
			# if our document does not have it's own title, then we should just use the site's title
			else
				@site.title

		# Get the prepared site/document description
		getPreparedDescription: ->
			# if we have a document description, then we should use that, otherwise use the site's description
			@document.description or @site.description

		# Get the prepared site/document keywords
		getPreparedKeywords: ->
			# Merge the document keywords with the site keywords
			@site.keywords.concat(@document.keywords or []).join(', ')


	# =================================
	# Collections
	# These are special collections that our website makes available to us

	collections:
		# Pages & Posts, default DocPad collections
		pages: (database) ->
			database.findAllLive({pageOrder: $exists: true}, [pageOrder:1,title:1])

		posts: (database) ->
			database.findAllLive({tags:$has:'post'}, [date:-1])

		# Case Studies, Brochures, Whitepapers, Videos, Arkivum collections
		casestudies: (database) ->
			database.findAllLive({casestudy: $exists: true}, [casestudy:1,title:1])

		brochures: (database) ->
			database.findAllLive({brochure: $exists: true}, [brochure:1,title:1])

		whitepapers: (database) ->
			database.findAllLive({whitepaper: $exists: true}, [whitepaper:1,title:1])

		videos: (database) ->
			database.findAllLive({video: $exists: true}, [video:1,title:1])

		# Menu drop down collections
		left_sidebar_menu: (database) ->
			database.findAllLive({tags:$has:'left_sidebar_menu-item'}, [date:-1])

		mobilemenu: (database) ->
			database.findAllLive({mobileMenu: $exists: true}, [mobileMenu:1,title:1])


	# =================================
	# DocPad Events

	# Here we can define handlers for events that DocPad fires
	# You can find a full listing of events on the DocPad Wiki
	events:

		# Server Extend
		# Used to add our own custom routes to the server before the docpad routes are added
		serverExtend: (opts) ->
			# Extract the server from the options
			{server} = opts
			docpad = @docpad

			# As we are now running in an event,
			# ensure we are using the latest copy of the docpad configuraiton
			# and fetch our urls from it
			latestConfig = docpad.getConfig()
			oldUrls = latestConfig.templateData.site.oldUrls or []
			newUrl = latestConfig.templateData.site.url

			# Redirect any requests accessing one of our sites oldUrls to the new site url
			server.use (req,res,next) ->
				if req.headers.host in oldUrls
					res.redirect(newUrl+req.url, 301)
				else
					next()

	# =================================
    # Plugin Configuration

    # Skip Unsupported Plugins
    # Set to `false` to load all plugins whether or not they are compatible with our DocPad version or not
    skipUnsupportedPlugins: false  # default: true

	# Enabled Plugins
	enabledPlugins: 
		# False to disable. True to enable. 
		circleeffects: false

	plugins:
	    ghpages:
	        deployRemote: 'origin'
	        deployBranch: 'gh-pages'

}


# Export our DocPad Configuration
module.exports = docpadConfig
