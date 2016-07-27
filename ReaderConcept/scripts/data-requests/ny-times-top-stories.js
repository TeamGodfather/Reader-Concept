function requestTopStories() {
    var url = "https://api.nytimes.com/svc/topstories/v2/world.json";
    url += '?' + $.param({
        'api-key': apiKey
    });
    $.ajax({
        url: url,
        method: 'GET',
    }).done(function (result) {
        console.log(result);
        topStoriesFromAPI = result;
        var options = {
            headline: topStoriesFromAPI.results[7].title,
            abstract: topStoriesFromAPI.results[7].abstract,
            image: topStoriesFromAPI.results[7].multimedia[3].url
            // imageWidth: topStoriesFromAPI.results[5].multimedia[3].width,
            // imageHeight: topStoriesFromAPI.results[5].multimedia[3].height
        };
        createArticle(options);
    }).fail(function (err) {
        throw err;
    });
}