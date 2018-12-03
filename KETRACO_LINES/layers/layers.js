var wms_layers = [];

        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'GoogleHybrid_0',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>'})],
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });var format_SGRPHASE1TRANSMISSIONLINESACTUALPOSITION_1 = new ol.format.GeoJSON();
var features_SGRPHASE1TRANSMISSIONLINESACTUALPOSITION_1 = format_SGRPHASE1TRANSMISSIONLINESACTUALPOSITION_1.readFeatures(json_SGRPHASE1TRANSMISSIONLINESACTUALPOSITION_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SGRPHASE1TRANSMISSIONLINESACTUALPOSITION_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_SGRPHASE1TRANSMISSIONLINESACTUALPOSITION_1.addFeatures(features_SGRPHASE1TRANSMISSIONLINESACTUALPOSITION_1);var lyr_SGRPHASE1TRANSMISSIONLINESACTUALPOSITION_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SGRPHASE1TRANSMISSIONLINESACTUALPOSITION_1, 
                style: style_SGRPHASE1TRANSMISSIONLINESACTUALPOSITION_1,
                title: '<img src="styles/legend/SGRPHASE1TRANSMISSIONLINESACTUALPOSITION_1.png" /> SGR PHASE 1 TRANSMISSION LINES ACTUAL POSITION'
            });var format_SGRPHASE1TRANSMISSIONLINESECTION_2 = new ol.format.GeoJSON();
var features_SGRPHASE1TRANSMISSIONLINESECTION_2 = format_SGRPHASE1TRANSMISSIONLINESECTION_2.readFeatures(json_SGRPHASE1TRANSMISSIONLINESECTION_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SGRPHASE1TRANSMISSIONLINESECTION_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_SGRPHASE1TRANSMISSIONLINESECTION_2.addFeatures(features_SGRPHASE1TRANSMISSIONLINESECTION_2);var lyr_SGRPHASE1TRANSMISSIONLINESECTION_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SGRPHASE1TRANSMISSIONLINESECTION_2, 
                style: style_SGRPHASE1TRANSMISSIONLINESECTION_2,
                title: '<img src="styles/legend/SGRPHASE1TRANSMISSIONLINESECTION_2.png" /> SGR PHASE 1 TRANSMISSION LINE SECTION'
            });var format_SGRPHASE1TemporaryPlaces_3 = new ol.format.GeoJSON();
var features_SGRPHASE1TemporaryPlaces_3 = format_SGRPHASE1TemporaryPlaces_3.readFeatures(json_SGRPHASE1TemporaryPlaces_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SGRPHASE1TemporaryPlaces_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_SGRPHASE1TemporaryPlaces_3.addFeatures(features_SGRPHASE1TemporaryPlaces_3);var lyr_SGRPHASE1TemporaryPlaces_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SGRPHASE1TemporaryPlaces_3, 
                style: style_SGRPHASE1TemporaryPlaces_3,
                title: '<img src="styles/legend/SGRPHASE1TemporaryPlaces_3.png" /> SGR PHASE 1 Temporary Places'
            });var format_SGRPHASE1COASTLINE_4 = new ol.format.GeoJSON();
var features_SGRPHASE1COASTLINE_4 = format_SGRPHASE1COASTLINE_4.readFeatures(json_SGRPHASE1COASTLINE_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SGRPHASE1COASTLINE_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_SGRPHASE1COASTLINE_4.addFeatures(features_SGRPHASE1COASTLINE_4);var lyr_SGRPHASE1COASTLINE_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SGRPHASE1COASTLINE_4, 
                style: style_SGRPHASE1COASTLINE_4,
                title: '<img src="styles/legend/SGRPHASE1COASTLINE_4.png" /> SGR PHASE 1 COAST LINE'
            });var format_SGRPHASE1GEF66Akmz_5 = new ol.format.GeoJSON();
var features_SGRPHASE1GEF66Akmz_5 = format_SGRPHASE1GEF66Akmz_5.readFeatures(json_SGRPHASE1GEF66Akmz_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SGRPHASE1GEF66Akmz_5 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_SGRPHASE1GEF66Akmz_5.addFeatures(features_SGRPHASE1GEF66Akmz_5);var lyr_SGRPHASE1GEF66Akmz_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SGRPHASE1GEF66Akmz_5, 
                style: style_SGRPHASE1GEF66Akmz_5,
                title: '<img src="styles/legend/SGRPHASE1GEF66Akmz_5.png" /> SGR PHASE 1 ~GEF66A.kmz'
            });var format_SGRPHASE1GEDACFkmz_6 = new ol.format.GeoJSON();
var features_SGRPHASE1GEDACFkmz_6 = format_SGRPHASE1GEDACFkmz_6.readFeatures(json_SGRPHASE1GEDACFkmz_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SGRPHASE1GEDACFkmz_6 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_SGRPHASE1GEDACFkmz_6.addFeatures(features_SGRPHASE1GEDACFkmz_6);var lyr_SGRPHASE1GEDACFkmz_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SGRPHASE1GEDACFkmz_6, 
                style: style_SGRPHASE1GEDACFkmz_6,
                title: '<img src="styles/legend/SGRPHASE1GEDACFkmz_6.png" /> SGR PHASE 1 ~GEDACF.kmz'
            });var format_SGRPHASE1GED3ABkmz_7 = new ol.format.GeoJSON();
var features_SGRPHASE1GED3ABkmz_7 = format_SGRPHASE1GED3ABkmz_7.readFeatures(json_SGRPHASE1GED3ABkmz_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SGRPHASE1GED3ABkmz_7 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_SGRPHASE1GED3ABkmz_7.addFeatures(features_SGRPHASE1GED3ABkmz_7);var lyr_SGRPHASE1GED3ABkmz_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SGRPHASE1GED3ABkmz_7, 
                style: style_SGRPHASE1GED3ABkmz_7,
                title: '<img src="styles/legend/SGRPHASE1GED3ABkmz_7.png" /> SGR PHASE 1 ~GED3AB.kmz'
            });var format_SGRPHASE1GECA96kmz_8 = new ol.format.GeoJSON();
var features_SGRPHASE1GECA96kmz_8 = format_SGRPHASE1GECA96kmz_8.readFeatures(json_SGRPHASE1GECA96kmz_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SGRPHASE1GECA96kmz_8 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_SGRPHASE1GECA96kmz_8.addFeatures(features_SGRPHASE1GECA96kmz_8);var lyr_SGRPHASE1GECA96kmz_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SGRPHASE1GECA96kmz_8, 
                style: style_SGRPHASE1GECA96kmz_8,
                title: '<img src="styles/legend/SGRPHASE1GECA96kmz_8.png" /> SGR PHASE 1 ~GECA96.kmz'
            });var format_SGRPHASE1GEA99Ekmz_9 = new ol.format.GeoJSON();
var features_SGRPHASE1GEA99Ekmz_9 = format_SGRPHASE1GEA99Ekmz_9.readFeatures(json_SGRPHASE1GEA99Ekmz_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SGRPHASE1GEA99Ekmz_9 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_SGRPHASE1GEA99Ekmz_9.addFeatures(features_SGRPHASE1GEA99Ekmz_9);var lyr_SGRPHASE1GEA99Ekmz_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SGRPHASE1GEA99Ekmz_9, 
                style: style_SGRPHASE1GEA99Ekmz_9,
                title: '<img src="styles/legend/SGRPHASE1GEA99Ekmz_9.png" /> SGR PHASE 1 ~GEA99E.kmz'
            });var format_SGRPHASE1GE8867kmz_10 = new ol.format.GeoJSON();
var features_SGRPHASE1GE8867kmz_10 = format_SGRPHASE1GE8867kmz_10.readFeatures(json_SGRPHASE1GE8867kmz_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SGRPHASE1GE8867kmz_10 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_SGRPHASE1GE8867kmz_10.addFeatures(features_SGRPHASE1GE8867kmz_10);var lyr_SGRPHASE1GE8867kmz_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SGRPHASE1GE8867kmz_10, 
                style: style_SGRPHASE1GE8867kmz_10,
                title: '<img src="styles/legend/SGRPHASE1GE8867kmz_10.png" /> SGR PHASE 1 ~GE8867.kmz'
            });var format_SGRPHASE1GE8309kmz_11 = new ol.format.GeoJSON();
var features_SGRPHASE1GE8309kmz_11 = format_SGRPHASE1GE8309kmz_11.readFeatures(json_SGRPHASE1GE8309kmz_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SGRPHASE1GE8309kmz_11 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_SGRPHASE1GE8309kmz_11.addFeatures(features_SGRPHASE1GE8309kmz_11);var lyr_SGRPHASE1GE8309kmz_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SGRPHASE1GE8309kmz_11, 
                style: style_SGRPHASE1GE8309kmz_11,
                title: '<img src="styles/legend/SGRPHASE1GE8309kmz_11.png" /> SGR PHASE 1 ~GE8309.kmz'
            });var format_SGRPHASE1GE4FABkmz_12 = new ol.format.GeoJSON();
var features_SGRPHASE1GE4FABkmz_12 = format_SGRPHASE1GE4FABkmz_12.readFeatures(json_SGRPHASE1GE4FABkmz_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SGRPHASE1GE4FABkmz_12 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_SGRPHASE1GE4FABkmz_12.addFeatures(features_SGRPHASE1GE4FABkmz_12);var lyr_SGRPHASE1GE4FABkmz_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SGRPHASE1GE4FABkmz_12, 
                style: style_SGRPHASE1GE4FABkmz_12,
                title: '<img src="styles/legend/SGRPHASE1GE4FABkmz_12.png" /> SGR PHASE 1 ~GE4FAB.kmz'
            });var format_SGRPHASE1GE4EB8kmz_13 = new ol.format.GeoJSON();
var features_SGRPHASE1GE4EB8kmz_13 = format_SGRPHASE1GE4EB8kmz_13.readFeatures(json_SGRPHASE1GE4EB8kmz_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SGRPHASE1GE4EB8kmz_13 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_SGRPHASE1GE4EB8kmz_13.addFeatures(features_SGRPHASE1GE4EB8kmz_13);var lyr_SGRPHASE1GE4EB8kmz_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SGRPHASE1GE4EB8kmz_13, 
                style: style_SGRPHASE1GE4EB8kmz_13,
                title: '<img src="styles/legend/SGRPHASE1GE4EB8kmz_13.png" /> SGR PHASE 1 ~GE4EB8.kmz'
            });var format_SGRPHASE1GE2A4Ekmz_14 = new ol.format.GeoJSON();
var features_SGRPHASE1GE2A4Ekmz_14 = format_SGRPHASE1GE2A4Ekmz_14.readFeatures(json_SGRPHASE1GE2A4Ekmz_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SGRPHASE1GE2A4Ekmz_14 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_SGRPHASE1GE2A4Ekmz_14.addFeatures(features_SGRPHASE1GE2A4Ekmz_14);var lyr_SGRPHASE1GE2A4Ekmz_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SGRPHASE1GE2A4Ekmz_14, 
                style: style_SGRPHASE1GE2A4Ekmz_14,
                title: '<img src="styles/legend/SGRPHASE1GE2A4Ekmz_14.png" /> SGR PHASE 1 ~GE2A4E.kmz'
            });var format_220kvtransmission_MAX_15 = new ol.format.GeoJSON();
var features_220kvtransmission_MAX_15 = format_220kvtransmission_MAX_15.readFeatures(json_220kvtransmission_MAX_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_220kvtransmission_MAX_15 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_220kvtransmission_MAX_15.addFeatures(features_220kvtransmission_MAX_15);var lyr_220kvtransmission_MAX_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_220kvtransmission_MAX_15, 
                style: style_220kvtransmission_MAX_15,
                title: '<img src="styles/legend/220kvtransmission_MAX_15.png" /> 220kvtransmission_MAX'
            });var format_132kvtransmission_MAX_16 = new ol.format.GeoJSON();
var features_132kvtransmission_MAX_16 = format_132kvtransmission_MAX_16.readFeatures(json_132kvtransmission_MAX_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_132kvtransmission_MAX_16 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_132kvtransmission_MAX_16.addFeatures(features_132kvtransmission_MAX_16);var lyr_132kvtransmission_MAX_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_132kvtransmission_MAX_16, 
                style: style_132kvtransmission_MAX_16,
                title: '<img src="styles/legend/132kvtransmission_MAX_16.png" /> 132kvtransmission_MAX'
            });var format_KETRACO_LINES_17 = new ol.format.GeoJSON();
var features_KETRACO_LINES_17 = format_KETRACO_LINES_17.readFeatures(json_KETRACO_LINES_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KETRACO_LINES_17 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_KETRACO_LINES_17.addFeatures(features_KETRACO_LINES_17);var lyr_KETRACO_LINES_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KETRACO_LINES_17, 
                style: style_KETRACO_LINES_17,
    title: 'KETRACO_LINES<br />\
    <img src="styles/legend/KETRACO_LINES_17_0.png" /> 132kV<br />\
    <img src="styles/legend/KETRACO_LINES_17_1.png" /> 220kV<br />\
    <img src="styles/legend/KETRACO_LINES_17_2.png" /> 400kV<br />\
    <img src="styles/legend/KETRACO_LINES_17_3.png" /> 500HVDC<br />'
        });var format_KETRACO_SUBSTATIONS_18 = new ol.format.GeoJSON();
var features_KETRACO_SUBSTATIONS_18 = format_KETRACO_SUBSTATIONS_18.readFeatures(json_KETRACO_SUBSTATIONS_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KETRACO_SUBSTATIONS_18 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_KETRACO_SUBSTATIONS_18.addFeatures(features_KETRACO_SUBSTATIONS_18);cluster_KETRACO_SUBSTATIONS_18 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_KETRACO_SUBSTATIONS_18
});var lyr_KETRACO_SUBSTATIONS_18 = new ol.layer.Vector({
                declutter: true,
                source:cluster_KETRACO_SUBSTATIONS_18, 
                style: style_KETRACO_SUBSTATIONS_18,
                title: '<img src="styles/legend/KETRACO_SUBSTATIONS_18.png" /> KETRACO_SUBSTATIONS'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_SGRPHASE1TRANSMISSIONLINESACTUALPOSITION_1.setVisible(true);lyr_SGRPHASE1TRANSMISSIONLINESECTION_2.setVisible(true);lyr_SGRPHASE1TemporaryPlaces_3.setVisible(true);lyr_SGRPHASE1COASTLINE_4.setVisible(true);lyr_SGRPHASE1GEF66Akmz_5.setVisible(true);lyr_SGRPHASE1GEDACFkmz_6.setVisible(true);lyr_SGRPHASE1GED3ABkmz_7.setVisible(true);lyr_SGRPHASE1GECA96kmz_8.setVisible(true);lyr_SGRPHASE1GEA99Ekmz_9.setVisible(true);lyr_SGRPHASE1GE8867kmz_10.setVisible(true);lyr_SGRPHASE1GE8309kmz_11.setVisible(true);lyr_SGRPHASE1GE4FABkmz_12.setVisible(true);lyr_SGRPHASE1GE4EB8kmz_13.setVisible(true);lyr_SGRPHASE1GE2A4Ekmz_14.setVisible(true);lyr_220kvtransmission_MAX_15.setVisible(true);lyr_132kvtransmission_MAX_16.setVisible(true);lyr_KETRACO_LINES_17.setVisible(true);lyr_KETRACO_SUBSTATIONS_18.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_SGRPHASE1TRANSMISSIONLINESACTUALPOSITION_1,lyr_SGRPHASE1TRANSMISSIONLINESECTION_2,lyr_SGRPHASE1TemporaryPlaces_3,lyr_SGRPHASE1COASTLINE_4,lyr_SGRPHASE1GEF66Akmz_5,lyr_SGRPHASE1GEDACFkmz_6,lyr_SGRPHASE1GED3ABkmz_7,lyr_SGRPHASE1GECA96kmz_8,lyr_SGRPHASE1GEA99Ekmz_9,lyr_SGRPHASE1GE8867kmz_10,lyr_SGRPHASE1GE8309kmz_11,lyr_SGRPHASE1GE4FABkmz_12,lyr_SGRPHASE1GE4EB8kmz_13,lyr_SGRPHASE1GE2A4Ekmz_14,lyr_220kvtransmission_MAX_15,lyr_132kvtransmission_MAX_16,lyr_KETRACO_LINES_17,lyr_KETRACO_SUBSTATIONS_18];
lyr_SGRPHASE1TRANSMISSIONLINESACTUALPOSITION_1.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_SGRPHASE1TRANSMISSIONLINESECTION_2.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_SGRPHASE1TemporaryPlaces_3.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_SGRPHASE1COASTLINE_4.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_SGRPHASE1GEF66Akmz_5.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_SGRPHASE1GEDACFkmz_6.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_SGRPHASE1GED3ABkmz_7.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_SGRPHASE1GECA96kmz_8.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_SGRPHASE1GEA99Ekmz_9.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_SGRPHASE1GE8867kmz_10.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_SGRPHASE1GE8309kmz_11.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_SGRPHASE1GE4FABkmz_12.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_SGRPHASE1GE4EB8kmz_13.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_SGRPHASE1GE2A4Ekmz_14.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_220kvtransmission_MAX_15.set('fieldAliases', {'ENTITY': 'ENTITY', 'HANDLE': 'HANDLE', 'LAYER': 'LAYER', 'COLOR': 'COLOR', 'LINETYPE': 'LINETYPE', 'ELEVATION': 'ELEVATION', 'THICKNESS': 'THICKNESS', 'TEXT': 'TEXT', });
lyr_132kvtransmission_MAX_16.set('fieldAliases', {'ENTITY': 'ENTITY', 'HANDLE': 'HANDLE', 'LAYER': 'LAYER', 'COLOR': 'COLOR', 'LINETYPE': 'LINETYPE', 'ELEVATION': 'ELEVATION', 'THICKNESS': 'THICKNESS', 'TEXT': 'TEXT', });
lyr_KETRACO_LINES_17.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'LINE_NAME': 'LINE_NAME', 'Length': 'Length', 'STATUS': 'STATUS', 'VOLTAGE_1': 'VOLTAGE_1', 'COMM_DATE': 'COMM_DATE', });
lyr_KETRACO_SUBSTATIONS_18.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'VOLTAGE': 'VOLTAGE', 'COMM_DATE_': 'COMM_DATE_', 'SUB_NAME': 'SUB_NAME', 'STATUS': 'STATUS', });
lyr_SGRPHASE1TRANSMISSIONLINESACTUALPOSITION_1.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMode': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'snippet': 'TextEdit', });
lyr_SGRPHASE1TRANSMISSIONLINESECTION_2.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMode': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'snippet': 'TextEdit', });
lyr_SGRPHASE1TemporaryPlaces_3.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMode': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_SGRPHASE1COASTLINE_4.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMode': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'snippet': 'TextEdit', });
lyr_SGRPHASE1GEF66Akmz_5.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMode': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_SGRPHASE1GEDACFkmz_6.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMode': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_SGRPHASE1GED3ABkmz_7.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMode': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_SGRPHASE1GECA96kmz_8.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMode': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_SGRPHASE1GEA99Ekmz_9.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMode': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_SGRPHASE1GE8867kmz_10.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMode': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_SGRPHASE1GE8309kmz_11.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMode': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_SGRPHASE1GE4FABkmz_12.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMode': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_SGRPHASE1GE4EB8kmz_13.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMode': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_SGRPHASE1GE2A4Ekmz_14.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMode': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_220kvtransmission_MAX_15.set('fieldImages', {'ENTITY': 'TextEdit', 'HANDLE': 'TextEdit', 'LAYER': 'TextEdit', 'COLOR': 'TextEdit', 'LINETYPE': 'TextEdit', 'ELEVATION': 'TextEdit', 'THICKNESS': 'TextEdit', 'TEXT': 'TextEdit', });
lyr_132kvtransmission_MAX_16.set('fieldImages', {'ENTITY': 'TextEdit', 'HANDLE': 'TextEdit', 'LAYER': 'TextEdit', 'COLOR': 'TextEdit', 'LINETYPE': 'TextEdit', 'ELEVATION': 'TextEdit', 'THICKNESS': 'TextEdit', 'TEXT': 'TextEdit', });
lyr_KETRACO_LINES_17.set('fieldImages', {'OBJECTID': 'TextEdit', 'LINE_NAME': 'TextEdit', 'Length': 'TextEdit', 'STATUS': 'TextEdit', 'VOLTAGE_1': 'TextEdit', 'COMM_DATE': 'TextEdit', });
lyr_KETRACO_SUBSTATIONS_18.set('fieldImages', {'OBJECTID': 'TextEdit', 'VOLTAGE': 'TextEdit', 'COMM_DATE_': 'TextEdit', 'SUB_NAME': 'TextEdit', 'STATUS': 'TextEdit', });
lyr_SGRPHASE1TRANSMISSIONLINESACTUALPOSITION_1.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'snippet': 'no label', });
lyr_SGRPHASE1TRANSMISSIONLINESECTION_2.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'snippet': 'no label', });
lyr_SGRPHASE1TemporaryPlaces_3.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_SGRPHASE1COASTLINE_4.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'snippet': 'no label', });
lyr_SGRPHASE1GEF66Akmz_5.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_SGRPHASE1GEDACFkmz_6.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_SGRPHASE1GED3ABkmz_7.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_SGRPHASE1GECA96kmz_8.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_SGRPHASE1GEA99Ekmz_9.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_SGRPHASE1GE8867kmz_10.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_SGRPHASE1GE8309kmz_11.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_SGRPHASE1GE4FABkmz_12.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_SGRPHASE1GE4EB8kmz_13.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_SGRPHASE1GE2A4Ekmz_14.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_220kvtransmission_MAX_15.set('fieldLabels', {'ENTITY': 'no label', 'HANDLE': 'no label', 'LAYER': 'no label', 'COLOR': 'no label', 'LINETYPE': 'no label', 'ELEVATION': 'no label', 'THICKNESS': 'no label', 'TEXT': 'no label', });
lyr_132kvtransmission_MAX_16.set('fieldLabels', {'ENTITY': 'no label', 'HANDLE': 'no label', 'LAYER': 'no label', 'COLOR': 'no label', 'LINETYPE': 'no label', 'ELEVATION': 'no label', 'THICKNESS': 'no label', 'TEXT': 'no label', });
lyr_KETRACO_LINES_17.set('fieldLabels', {'OBJECTID': 'no label', 'LINE_NAME': 'no label', 'Length': 'no label', 'STATUS': 'no label', 'VOLTAGE_1': 'no label', 'COMM_DATE': 'no label', });
lyr_KETRACO_SUBSTATIONS_18.set('fieldLabels', {'OBJECTID': 'no label', 'VOLTAGE': 'no label', 'COMM_DATE_': 'no label', 'SUB_NAME': 'no label', 'STATUS': 'no label', });
lyr_KETRACO_SUBSTATIONS_18.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});