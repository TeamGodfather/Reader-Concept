function createArticle(options) {
    options = options || {};
    options.headline = options.headline || 'Placeholder';
    options.image = options.image || "http://livinginthefuture.org/blog/wp-content/uploads/2016/04/earth-stars.jpg";
    options.width = options.width || 630;
    options.height = options.height || 420;
    options.positionX = options.positionX || 330;
    options.positionY = options.positionY || 220;
    options.imageWidth = options.imageWidth || 240;
    options.imageHeight = options.imageHeight || 160;
    options.abstract = options.abstract || 'placeholder abstract';
    options.articleUrl = options.articleUrl || '../../index.html';

    var container,
        image,
        text,
        abstract;

    container = createContainer(options);
    image = createImage(options);
    text = createText(options);
    abstract = createAbstract(options);

    kineticLayer.add(container);
    kineticLayer.add(text);
    kineticLayer.add(abstract);
    kineticLayer.draw();

    kineticLayer.on('dblclick', function () {
        expandArticle(options);
    });
}

function createImage(options) {
    var imageObg = new Image();
    imageObg.onload = function () {
        var image = new Kinetic.Image({
            x: options.positionX + (options.width - options.imageWidth) / 2,
            y: options.positionY + (options.height - options.imageHeight) / 2,
            image: imageObg,
            width: options.imageWidth,
            height: options.imageHeight,
            offset: {
                x: options.width / 2,
                y: options.height / 2
            }
        });
        kineticLayer.add(image);
        kineticLayer.draw();
    };
    imageObg.src = options.image;
}

function createAbstract(options) {
    var text = new Kinetic.Text({
        text: options.abstract,
        x: options.positionX,
        y: options.positionY + options.height - 150,
        fontSize: 16,
        padding: 50,
        width: options.width,
        height: options.height,
        align: 'center',
        fill: '#333333',
        fontFamily: 'Segoe UI',
        offset: {
            x: options.width / 2,
            y: options.height / 2
        }
    });
    return text;
}

function createText(options) {
    var text = new Kinetic.Text({
        text: options.headline,
        x: options.positionX,
        y: options.positionY,
        fontSize: 20,
        padding: 50,
        width: options.width,
        height: options.height,
        align: 'center',
        fill: '#333333',
        fontFamily: 'Segoe UI',
        offset: {
            x: options.width / 2,
            y: options.height / 2
        }
    });
    return text;
}

function createContainer(options) {
    var container = new Kinetic.Rect({
        x: options.positionX,
        y: options.positionY,
        width: options.width,
        height: options.height,
        fill: 'rgba(33,33,33,0.00)',
        offset: {
            x: options.width / 2,
            y: options.height / 2
        }
    });
    return container;
}