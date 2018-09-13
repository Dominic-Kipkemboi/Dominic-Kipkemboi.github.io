var wms_layers = [];

        var lyr_OpenTopoMap_0 = new ol.layer.Tile({
            'title': 'OpenTopoMap_0',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: '<a href="https://www.openstreetmap.org/copyright">Kartendaten: © OpenStreetMap-Mitwirkende, SRTM | Kartendarstellung: © OpenTopoMap (CC-BY-SA)</a>'})],
                url: 'https://a.tile.opentopomap.org/{z}/{x}/{y}.png'
            })
        });var format_KENYA_1 = new ol.format.GeoJSON();
var features_KENYA_1 = format_KENYA_1.readFeatures(json_KENYA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KENYA_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_KENYA_1.addFeatures(features_KENYA_1);var lyr_KENYA_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KENYA_1, 
                style: style_KENYA_1,
                title: '<img src="styles/legend/KENYA_1.png" /> KENYA'
            });var format_500MLAPSETCORRIDOR_2 = new ol.format.GeoJSON();
var features_500MLAPSETCORRIDOR_2 = format_500MLAPSETCORRIDOR_2.readFeatures(json_500MLAPSETCORRIDOR_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_500MLAPSETCORRIDOR_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_500MLAPSETCORRIDOR_2.addFeatures(features_500MLAPSETCORRIDOR_2);var lyr_500MLAPSETCORRIDOR_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_500MLAPSETCORRIDOR_2, 
                style: style_500MLAPSETCORRIDOR_2,
                title: '<img src="styles/legend/500MLAPSETCORRIDOR_2.png" /> 500M LAPSET CORRIDOR'
            });var format_KETRACO_LINES_3 = new ol.format.GeoJSON();
var features_KETRACO_LINES_3 = format_KETRACO_LINES_3.readFeatures(json_KETRACO_LINES_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KETRACO_LINES_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_KETRACO_LINES_3.addFeatures(features_KETRACO_LINES_3);var lyr_KETRACO_LINES_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KETRACO_LINES_3, 
                style: style_KETRACO_LINES_3,
    title: 'KETRACO_LINES<br />\
    <img src="styles/legend/KETRACO_LINES_3_0.png" /> 132kV<br />\
    <img src="styles/legend/KETRACO_LINES_3_1.png" /> 220kV<br />\
    <img src="styles/legend/KETRACO_LINES_3_2.png" /> 400kV<br />\
    <img src="styles/legend/KETRACO_LINES_3_3.png" /> 500HVDC<br />'
        });var format_220kvKPLCNETWORK_4 = new ol.format.GeoJSON();
var features_220kvKPLCNETWORK_4 = format_220kvKPLCNETWORK_4.readFeatures(json_220kvKPLCNETWORK_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_220kvKPLCNETWORK_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_220kvKPLCNETWORK_4.addFeatures(features_220kvKPLCNETWORK_4);var lyr_220kvKPLCNETWORK_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_220kvKPLCNETWORK_4, 
                style: style_220kvKPLCNETWORK_4,
                title: '<img src="styles/legend/220kvKPLCNETWORK_4.png" /> 220kv KPLC NETWORK'
            });var format_132kvKPLCNETWORK_5 = new ol.format.GeoJSON();
var features_132kvKPLCNETWORK_5 = format_132kvKPLCNETWORK_5.readFeatures(json_132kvKPLCNETWORK_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_132kvKPLCNETWORK_5 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_132kvKPLCNETWORK_5.addFeatures(features_132kvKPLCNETWORK_5);var lyr_132kvKPLCNETWORK_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_132kvKPLCNETWORK_5, 
                style: style_132kvKPLCNETWORK_5,
                title: '<img src="styles/legend/132kvKPLCNETWORK_5.png" /> 132kv KPLC NETWORK'
            });var format_Tullow_Pipeline_6 = new ol.format.GeoJSON();
var features_Tullow_Pipeline_6 = format_Tullow_Pipeline_6.readFeatures(json_Tullow_Pipeline_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tullow_Pipeline_6 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Tullow_Pipeline_6.addFeatures(features_Tullow_Pipeline_6);var lyr_Tullow_Pipeline_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Tullow_Pipeline_6, 
                style: style_Tullow_Pipeline_6,
                title: '<img src="styles/legend/Tullow_Pipeline_6.png" /> Tullow_Pipeline'
            });var format_KETRACO_SUBSTATIONS_7 = new ol.format.GeoJSON();
var features_KETRACO_SUBSTATIONS_7 = format_KETRACO_SUBSTATIONS_7.readFeatures(json_KETRACO_SUBSTATIONS_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KETRACO_SUBSTATIONS_7 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_KETRACO_SUBSTATIONS_7.addFeatures(features_KETRACO_SUBSTATIONS_7);cluster_KETRACO_SUBSTATIONS_7 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_KETRACO_SUBSTATIONS_7
});var lyr_KETRACO_SUBSTATIONS_7 = new ol.layer.Vector({
                declutter: true,
                source:cluster_KETRACO_SUBSTATIONS_7, 
                style: style_KETRACO_SUBSTATIONS_7,
                title: '<img src="styles/legend/KETRACO_SUBSTATIONS_7.png" /> KETRACO_SUBSTATIONS'
            });var format_PowerInput_AGI_8 = new ol.format.GeoJSON();
var features_PowerInput_AGI_8 = format_PowerInput_AGI_8.readFeatures(json_PowerInput_AGI_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PowerInput_AGI_8 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_PowerInput_AGI_8.addFeatures(features_PowerInput_AGI_8);cluster_PowerInput_AGI_8 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_PowerInput_AGI_8
});var lyr_PowerInput_AGI_8 = new ol.layer.Vector({
                declutter: true,
                source:cluster_PowerInput_AGI_8, 
                style: style_PowerInput_AGI_8,
                title: '<img src="styles/legend/PowerInput_AGI_8.png" /> PowerInput_AGI'
            });

lyr_KENYA_1.setVisible(true);lyr_500MLAPSETCORRIDOR_2.setVisible(true);lyr_KETRACO_LINES_3.setVisible(true);lyr_220kvKPLCNETWORK_4.setVisible(true);lyr_132kvKPLCNETWORK_5.setVisible(true);lyr_Tullow_Pipeline_6.setVisible(true);lyr_KETRACO_SUBSTATIONS_7.setVisible(true);lyr_PowerInput_AGI_8.setVisible(true);
var layersList = [lyr_OpenTopoMap_0,lyr_KENYA_1,lyr_500MLAPSETCORRIDOR_2,lyr_KETRACO_LINES_3,lyr_220kvKPLCNETWORK_4,lyr_132kvKPLCNETWORK_5,lyr_Tullow_Pipeline_6,lyr_KETRACO_SUBSTATIONS_7,lyr_PowerInput_AGI_8];
lyr_KENYA_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'COUNTY3_': 'COUNTY3_', 'COUNTY3_ID': 'COUNTY3_ID', 'COUNTY': 'COUNTY', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_500MLAPSETCORRIDOR_2.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_KETRACO_LINES_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'LINE_NAME': 'LINE_NAME', 'Length': 'Length', 'STATUS': 'STATUS', 'VOLTAGE_1': 'VOLTAGE_1', 'COMM_DATE': 'COMM_DATE', });
lyr_220kvKPLCNETWORK_4.set('fieldAliases', {'ENTITY': 'ENTITY', 'HANDLE': 'HANDLE', 'LAYER': 'LAYER', 'COLOR': 'COLOR', 'LINETYPE': 'LINETYPE', 'ELEVATION': 'ELEVATION', 'THICKNESS': 'THICKNESS', 'TEXT': 'TEXT', });
lyr_132kvKPLCNETWORK_5.set('fieldAliases', {'ENTITY': 'ENTITY', 'HANDLE': 'HANDLE', 'LAYER': 'LAYER', 'COLOR': 'COLOR', 'LINETYPE': 'LINETYPE', 'ELEVATION': 'ELEVATION', 'THICKNESS': 'THICKNESS', 'TEXT': 'TEXT', });
lyr_Tullow_Pipeline_6.set('fieldAliases', {'id': 'id', });
lyr_KETRACO_SUBSTATIONS_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAME': 'NAME', 'Substation': 'Substation', 'VOLTAGE': 'VOLTAGE', 'COMM_DATE_': 'COMM_DATE_', 'SUB_NAME': 'SUB_NAME', });
lyr_PowerInput_AGI_8.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_KENYA_1.set('fieldImages', {'OBJECTID': '', 'AREA': '', 'PERIMETER': '', 'COUNTY3_': '', 'COUNTY3_ID': '', 'COUNTY': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_500MLAPSETCORRIDOR_2.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_KETRACO_LINES_3.set('fieldImages', {'OBJECTID': '', 'LINE_NAME': '', 'Length': '', 'STATUS': '', 'VOLTAGE_1': '', 'COMM_DATE': '', });
lyr_220kvKPLCNETWORK_4.set('fieldImages', {'ENTITY': '', 'HANDLE': '', 'LAYER': '', 'COLOR': '', 'LINETYPE': '', 'ELEVATION': '', 'THICKNESS': '', 'TEXT': '', });
lyr_132kvKPLCNETWORK_5.set('fieldImages', {'ENTITY': '', 'HANDLE': '', 'LAYER': '', 'COLOR': '', 'LINETYPE': '', 'ELEVATION': '', 'THICKNESS': '', 'TEXT': '', });
lyr_Tullow_Pipeline_6.set('fieldImages', {'id': '', });
lyr_KETRACO_SUBSTATIONS_7.set('fieldImages', {'OBJECTID': '', 'NAME': 'TextEdit', 'Substation': '', 'VOLTAGE': '', 'COMM_DATE_': '', 'SUB_NAME': '', });
lyr_PowerInput_AGI_8.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'snippet': '', });
lyr_KENYA_1.set('fieldLabels', {'OBJECTID': 'no label', 'AREA': 'no label', 'PERIMETER': 'no label', 'COUNTY3_': 'no label', 'COUNTY3_ID': 'no label', 'COUNTY': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_500MLAPSETCORRIDOR_2.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_KETRACO_LINES_3.set('fieldLabels', {'OBJECTID': 'no label', 'LINE_NAME': 'no label', 'Length': 'no label', 'STATUS': 'no label', 'VOLTAGE_1': 'no label', 'COMM_DATE': 'no label', });
lyr_220kvKPLCNETWORK_4.set('fieldLabels', {'ENTITY': 'no label', 'HANDLE': 'no label', 'LAYER': 'no label', 'COLOR': 'no label', 'LINETYPE': 'no label', 'ELEVATION': 'no label', 'THICKNESS': 'no label', 'TEXT': 'no label', });
lyr_132kvKPLCNETWORK_5.set('fieldLabels', {'ENTITY': 'no label', 'HANDLE': 'no label', 'LAYER': 'no label', 'COLOR': 'no label', 'LINETYPE': 'no label', 'ELEVATION': 'no label', 'THICKNESS': 'no label', 'TEXT': 'no label', });
lyr_Tullow_Pipeline_6.set('fieldLabels', {'id': 'no label', });
lyr_KETRACO_SUBSTATIONS_7.set('fieldLabels', {'OBJECTID': 'no label', 'NAME': 'no label', 'Substation': 'no label', 'VOLTAGE': 'no label', 'COMM_DATE_': 'no label', 'SUB_NAME': 'no label', });
lyr_PowerInput_AGI_8.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'snippet': 'no label', });
lyr_PowerInput_AGI_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});