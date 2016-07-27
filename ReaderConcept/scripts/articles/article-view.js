function expandArticle(options) {
    var articleContainer = $('<div />')
        .attr('id', 'expanded-article')
        .css({
            'position': 'absolute',
            'top': '0',
            'left': '0',
            'width': '100%',
            'height': '100%',
            'background-color': 'rgba(33,33,33,0.77)'
        })
        .appendTo('body');

    articleContainer.load(options.articleUrl);
}