# nodezeug

Playing around with node js.

Based on https://app.pluralsight.com/library/courses/play-by-play-node-web-api-john-papa-sam-artioli/table-of-contents

#Notes from the pluralsight course

## Managing node and npm
``
npm init -y
``
The `-y` flag takes all default answers. Creates the `package.json`

Version used in tutorial is `4.2.2`

See all packages that can be installed on https://www.npmjs.com/

Installing while maintaining the 'package.json':
`npm install -save express`   

In `package.json` we get entries like:
``
"express": "^4.13.3"
``
That means make sure we have express, at least version `4.13.3` (or higher).

Think of adding `node_modules` into `.gitignore`.

## Alias
´´
gr --> git add / commit / push
``

##  Tools & Helpers
* `nodemon`: A tool to check code files `npm install -g nodemon`
* JSONview: A Chrom plugin to view JSON documents pretty printed: https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc?hl=en
* `forever`: makes a node script run forever. Restarts it when it stops.

## Bootstrap themes
* https://www.bootstrapzero.com/
* http://themes.getbootstrap.com/
* http://startbootstrap.com/

##Bracket Editor
* Free & Open Source
* http://brackets.io/
* Nice Features:
   * Knows JSHint & JSCS
   * `cmd` & `L` beautifies all the code
* Theme: 
	* get it here: http://github.com/David5i6/Brackets-Delkos-Dark-Theme
* Extensions
	* Beautify: `Cmd + Shift + L` makes the code look nice
	* Brackets files tabs: Have file tabs at the top instead of the left bar
	* Brackets Icons
	* Brackets CSS color preview
	* Brackets Snippets (by edc)
    * Brackets Outline: Shows a TOC for many file type (i.e. Markdown)
	
	
	
   
