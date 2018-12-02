var size = 0;
var placement = 'point';
function categories_KETRACO_LINES_20(feature, value, size, resolution, labelText,
                       labelFont, labelFill) {
                switch(value.toString()) {case '132kV':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(26,246,239,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case '220kV':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(54,41,236,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case '400kV':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(237,19,41,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case '500HVDC':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(224,116,229,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;}};

var style_KETRACO_LINES_20 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("VOLTAGE_1");
    var labelText = "";
    size = 0;
    var labelFont = "10.725px \'MS Shell Dlg 2\', sans-serif";
    var labelFill = "rgba(0, 0, 0, 1)";
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'line';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_KETRACO_LINES_20(feature, value, size, resolution, labelText,
                          labelFont, labelFill);

    return style;
};
