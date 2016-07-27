# [Article Reader](https://cdn.rawgit.com/TeamGodfather/Reader-Concept/master/ReaderConcept/index.html)

## Features
----

1. Get data
    - NYTimes API TopStories
    - Wikipedia API ( regional info etc )
    - WorldBank openDB API
1. Canvas: Article Presenter
    - Data retrieved from NYTimes APi
    - Headline ( from api )
    - Thumbnail phot ( from api )
    - Short info ( from api )
    - Load article within page ( link to article from api )
    - Sroll through articles left / right ( up/ down ? ( in depth ?? ))

2. Article reader: 
    - Hide Canvas - display this ( article )
    - Show Side Panels

2. Side Panel: Wiki country information
    - Data retrieved from Wikipedia APi
    - Short information about the country in question ( article info above )

3. Side Panel2: WorldBank country info
    - Capital
    - Region
    - Status ( rich / poor etc)
1. Frameworks
    - JQuery: manage dom + ajax requests
    - JQueryUI: dom fancy stuff
    - Handlebars: build side panels off input data
    - Kinetic: manage canvas
    - more ? 
