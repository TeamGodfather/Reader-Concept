
function initializeApp() {
    var kineticCanvasId = 'kinetic-canvas',
        canvas,
        container,
        root;

    canvas = $('<div />')
        .attr('id', kineticCanvasId)
        .css({
            'width': stageWidth,
            'height': stageHeight
        })
        .draggable({
            axis: 'x',
            revert: true
        });

    wrapper = $('<section />')
        .attr('id', 'canvas-container')
        .css('height', stageHeight)
        .append(canvas)
        .appendTo('#content');

    kineticStage = new Kinetic.Stage({
        container: kineticCanvasId,
        width: stageWidth,
        height: stageHeight
    });

    kineticLayer = new Kinetic.Layer();
    kineticStage.add(kineticLayer);
}