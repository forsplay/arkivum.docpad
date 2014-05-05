# GitHub of Arkivum.docpad
![Arkivum.com homepage screenshot](https://googledrive.com/host/0B9LVk4xbDIJTbV8xNUIwVkZHOXM/Screenshot%20%281%29.png "Arkivum.com homepage screenshot")

made from [YUI Purecss](http://purecss.io/) skeleton for [DocPad](https://github.com/bevry/docpad).

### Modules

Arkivum.com uses the following DocPad plugins:
- [docpad-plugin-cleanurls](https://github.com/docpad/docpad-plugin-cleanurls)
- [docpad-plugin-coffeescript](https://github.com/docpad/docpad-plugin-coffeescript)
- [docpad-plugin-eco](https://github.com/docpad/docpad-plugin-eco)
- [docpad-plugin-marked](https://github.com/docpad/docpad-plugin-marked)
- [docpad-plugin-partials](https://github.com/docpad/docpad-plugin-partials)
- [docpad-plugin-text](https://github.com/docpad/docpad-plugin-text)
- [docpad-plugin-ghpages](https://github.com/docpad/docpad-plugin-ghpages)
- [docpad-plugin-iconmonstr](https://github.com/mikeumus/docpad-plugin-iconmonstr)
- [docpad-plugin-sitemap](https://github.com/docpad/docpad-plugin-sitemap)
- [docpad-plugin-menu](https://github.com/sergeche/docpad-plugin-menu) - Customized in `plugins` folder

and the [moment.js](https://github.com/moment/moment) module.

## Getting Started

1. [Install Node.js](http://nodejs.org/download/) (includes NPM with install)

1. [Install DocPad](https://github.com/bevry/docpad)

1. Clone the project and run the server

	``` bash
	git clone git://github.com/MassDistributionMedia/arkivum.docpad.git
	cd arkivum.docpad
	npm install
	docpad run
	```

1. Open [http://localhost:9778/](http://localhost:9778/) locally in a internet browser. We recommend [Google Chrome](https://www.google.com/intl/en/chrome/browser/) or [Mozilla Firefox](http://www.mozilla.org/en-US/firefox/new/?f=26&utm_expid=71153379-28.ZuzIY8GHTdmX0QtrDFcQLQ.1&utm_referrer=https%3A%2F%2Fwww.google.com%2F). 

1. Start hacking away by modifying the [`src`](https://github.com/MassDistributionMedia/arkivum.docpad/tree/master/src) directory

## Theming

#### Skeleton Origin

As mentioned above arkivum.docpad was sculpted from the [YUI Purecss](http://purecss.io/) DocPad skeleton. 

#### Default template

All pages use the [default page template](https://github.com/MassDistributionMedia/arkivum.docpad/blob/master/src/layouts/default.html.eco) found via the following path: [`arkivum.docpad/src/layouts/default.html.eco`](https://github.com/MassDistributionMedia/arkivum.docpad/blob/master/src/layouts/default.html.eco).

For example the ["post"](https://github.com/MassDistributionMedia/arkivum.docpad/blob/master/src/layouts/post.html.eco) page template's meta data uses the default theme as below:
```
---
layout: default
---
```
The default template makes up the header, footer and containing structure for the sidebar partials and inner [`@content`](https://github.com/MassDistributionMedia/arkivum.docpad/blob/master/src/layouts/default.html.eco#L98).

#### Sidebar partials

Both the left and right sidebars are their own partials, [`left-sidebar.html.eco`](https://github.com/MassDistributionMedia/arkivum.docpad/blob/master/src/partials/left-sidebar.html.eco) & [`right-sidebar.html.eco`](https://github.com/MassDistributionMedia/arkivum.docpad/blob/master/src/partials/right-sidebar.html.eco)

#### Layout Breakdown 
![arkivum homepage break down](https://googledrive.com/host/0B9LVk4xbDIJTbV8xNUIwVkZHOXM/Home%20%20%20Arkivum.png)

## Images

All images are SVGs excluding only the header/footer background images and the 100% Guaranteed image which are located at [`src/files/images`](https://github.com/MassDistributionMedia/arkivum.docpad/tree/master/src/files/images).
Arkivum header and stamp logos are stored as SVG code in partials at [`src/partials`](https://github.com/MassDistributionMedia/arkivum.docpad/tree/master/src/partials):
- [arkivum-logo.html](https://github.com/MassDistributionMedia/arkivum.docpad/blob/master/src/partials/arkivum-logo.html)
- [arkivum-A-stamp.html](https://github.com/MassDistributionMedia/arkivum.docpad/blob/master/src/partials/arkivum-A-stamp.html)

The blue checkmark SVGs are as a svg file at [`src/files/images/check-6-blue-icon.svg`](https://github.com/MassDistributionMedia/arkivum.docpad/blob/master/src/files/images/check-6-blue-icon.svg).
The remainder of the SVG icons such as the social or contact icons originate from the [iconmonstr DocPad plugin](https://github.com/mikeumus/docpad-plugin-iconmonstr). 

## Fonts

arkivum.docpad uses the family of Din Pro fonts as per Arkivum's branding. These are located at [`src/files/fonts`](https://github.com/MassDistributionMedia/arkivum.docpad/tree/master/src/files/fonts).

## UK Privacy Compliance
[CookieConsent](https://github.com/silktide/cookieconsent#cookie-consent) works by detecting a cookie containing the user's consent choice. Due to inconsistency problems with detection, a timer (in [`right-sidebar.html.eco`](https://github.com/MassDistributionMedia/arkivum.docpad/blob/master/src/partials/right-sidebar.html.eco)) was added to manually detect the cookie. YouTube video, LeadForensics, Google Analytics, ShareThis are all linked to CookieConsent. Also modified the [ShareThis](https://github.com/MassDistributionMedia/arkivum.docpad/blob/master/src/files/scripts/sharethis.buttons.js) and [LeadForensics](https://github.com/MassDistributionMedia/arkivum.docpad/blob/master/src/files/scripts/leadforensics.modified.js) scripts in order to comply with UK privacy laws by implementing async loading.

## Event of the Week
See [Issue #2](https://github.com/MassDistributionMedia/arkivum.docpad/issues/2).

## Sidebar Menu UX
See [Issue #4](https://github.com/MassDistributionMedia/arkivum.docpad/issues/4).


## How to handle common errors

#### Latest DocPad version is failing
1. Delete the `/node_modules` folder.
1. In `package.json` set the DocPad dependency to the last known safe/working version. 
1. Run the command `npm install` then `docpad run`.

#### I'm getting EMFILE errors

[See here for the reason why and the solution](http://docpad.org/docs/troubleshoot#i-m-getting-emfile-too-many-open-files)


## License
Copyright 2013 [Arkivum](http://arkivum.com/). All rights reserved.
