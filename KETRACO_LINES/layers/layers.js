var wms_layers = [];

        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'GoogleHybrid_0',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });var format_County_1 = new ol.format.GeoJSON();
var features_County_1 = format_County_1.readFeatures(json_County_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_County_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_County_1.addFeatures(features_County_1);var lyr_County_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_County_1, 
                style: style_County_1,
                title: '<img src="styles/legend/County_1.png" /> County'
            });var format_KENYA_2 = new ol.format.GeoJSON();
var features_KENYA_2 = format_KENYA_2.readFeatures(json_KENYA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KENYA_2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_KENYA_2.addFeatures(features_KENYA_2);var lyr_KENYA_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KENYA_2, 
                style: style_KENYA_2,
                title: '<img src="styles/legend/KENYA_2.png" /> KENYA'
            });var format_Tullow_Pipeline_3 = new ol.format.GeoJSON();
var features_Tullow_Pipeline_3 = format_Tullow_Pipeline_3.readFeatures(json_Tullow_Pipeline_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tullow_Pipeline_3 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Tullow_Pipeline_3.addFeatures(features_Tullow_Pipeline_3);var lyr_Tullow_Pipeline_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Tullow_Pipeline_3, 
                style: style_Tullow_Pipeline_3,
                title: '<img src="styles/legend/Tullow_Pipeline_3.png" /> Tullow_Pipeline'
            });var format_PowerInput_AGI_4 = new ol.format.GeoJSON();
var features_PowerInput_AGI_4 = format_PowerInput_AGI_4.readFeatures(json_PowerInput_AGI_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PowerInput_AGI_4 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_PowerInput_AGI_4.addFeatures(features_PowerInput_AGI_4);var lyr_PowerInput_AGI_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PowerInput_AGI_4, 
                style: style_PowerInput_AGI_4,
                title: '<img src="styles/legend/PowerInput_AGI_4.png" /> PowerInput_AGI'
            });var format_220kvtransmission_MAX_5 = new ol.format.GeoJSON();
var features_220kvtransmission_MAX_5 = format_220kvtransmission_MAX_5.readFeatures(json_220kvtransmission_MAX_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_220kvtransmission_MAX_5 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_220kvtransmission_MAX_5.addFeatures(features_220kvtransmission_MAX_5);var lyr_220kvtransmission_MAX_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_220kvtransmission_MAX_5, 
                style: style_220kvtransmission_MAX_5,
                title: '<img src="styles/legend/220kvtransmission_MAX_5.png" /> 220kvtransmission_MAX'
            });var format_132kvtransmission_MAX_6 = new ol.format.GeoJSON();
var features_132kvtransmission_MAX_6 = format_132kvtransmission_MAX_6.readFeatures(json_132kvtransmission_MAX_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_132kvtransmission_MAX_6 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_132kvtransmission_MAX_6.addFeatures(features_132kvtransmission_MAX_6);var lyr_132kvtransmission_MAX_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_132kvtransmission_MAX_6, 
                style: style_132kvtransmission_MAX_6,
                title: '<img src="styles/legend/132kvtransmission_MAX_6.png" /> 132kvtransmission_MAX'
            });var format_SGRPHASE1TRANSMISSIONLINESACTUALPOSITION_7 = new ol.format.GeoJSON();
var features_SGRPHASE1TRANSMISSIONLINESACTUALPOSITION_7 = format_SGRPHASE1TRANSMISSIONLINESACTUALPOSITION_7.readFeatures(json_SGRPHASE1TRANSMISSIONLINESACTUALPOSITION_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SGRPHASE1TRANSMISSIONLINESACTUALPOSITION_7 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_SGRPHASE1TRANSMISSIONLINESACTUALPOSITION_7.addFeatures(features_SGRPHASE1TRANSMISSIONLINESACTUALPOSITION_7);var lyr_SGRPHASE1TRANSMISSIONLINESACTUALPOSITION_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SGRPHASE1TRANSMISSIONLINESACTUALPOSITION_7, 
                style: style_SGRPHASE1TRANSMISSIONLINESACTUALPOSITION_7,
                title: '<img src="styles/legend/SGRPHASE1TRANSMISSIONLINESACTUALPOSITION_7.png" /> SGR PHASE 1 TRANSMISSION LINES ACTUAL POSITION'
            });var format_SGRPHASE1TRANSMISSIONLINESECTION_8 = new ol.format.GeoJSON();
var features_SGRPHASE1TRANSMISSIONLINESECTION_8 = format_SGRPHASE1TRANSMISSIONLINESECTION_8.readFeatures(json_SGRPHASE1TRANSMISSIONLINESECTION_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SGRPHASE1TRANSMISSIONLINESECTION_8 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_SGRPHASE1TRANSMISSIONLINESECTION_8.addFeatures(features_SGRPHASE1TRANSMISSIONLINESECTION_8);var lyr_SGRPHASE1TRANSMISSIONLINESECTION_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SGRPHASE1TRANSMISSIONLINESECTION_8, 
                style: style_SGRPHASE1TRANSMISSIONLINESECTION_8,
                title: '<img src="styles/legend/SGRPHASE1TRANSMISSIONLINESECTION_8.png" /> SGR PHASE 1 TRANSMISSION LINE SECTION'
            });var format_SGRPHASE1TemporaryPlaces_9 = new ol.format.GeoJSON();
var features_SGRPHASE1TemporaryPlaces_9 = format_SGRPHASE1TemporaryPlaces_9.readFeatures(json_SGRPHASE1TemporaryPlaces_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SGRPHASE1TemporaryPlaces_9 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_SGRPHASE1TemporaryPlaces_9.addFeatures(features_SGRPHASE1TemporaryPlaces_9);var lyr_SGRPHASE1TemporaryPlaces_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SGRPHASE1TemporaryPlaces_9, 
                style: style_SGRPHASE1TemporaryPlaces_9,
                title: '<img src="styles/legend/SGRPHASE1TemporaryPlaces_9.png" /> SGR PHASE 1 Temporary Places'
            });var format_SGRPHASE1PointFeatures_10 = new ol.format.GeoJSON();
var features_SGRPHASE1PointFeatures_10 = format_SGRPHASE1PointFeatures_10.readFeatures(json_SGRPHASE1PointFeatures_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SGRPHASE1PointFeatures_10 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_SGRPHASE1PointFeatures_10.addFeatures(features_SGRPHASE1PointFeatures_10);var lyr_SGRPHASE1PointFeatures_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SGRPHASE1PointFeatures_10, 
                style: style_SGRPHASE1PointFeatures_10,
                title: '<img src="styles/legend/SGRPHASE1PointFeatures_10.png" /> SGR PHASE 1 Point Features'
            });var format_SGRPHASE1HVMETERINGSUBSTATION_11 = new ol.format.GeoJSON();
var features_SGRPHASE1HVMETERINGSUBSTATION_11 = format_SGRPHASE1HVMETERINGSUBSTATION_11.readFeatures(json_SGRPHASE1HVMETERINGSUBSTATION_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SGRPHASE1HVMETERINGSUBSTATION_11 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_SGRPHASE1HVMETERINGSUBSTATION_11.addFeatures(features_SGRPHASE1HVMETERINGSUBSTATION_11);var lyr_SGRPHASE1HVMETERINGSUBSTATION_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SGRPHASE1HVMETERINGSUBSTATION_11, 
                style: style_SGRPHASE1HVMETERINGSUBSTATION_11,
                title: '<img src="styles/legend/SGRPHASE1HVMETERINGSUBSTATION_11.png" /> SGR PHASE 1 HV METERING SUBSTATION'
            });var format_SGRPHASE1COASTLINE_12 = new ol.format.GeoJSON();
var features_SGRPHASE1COASTLINE_12 = format_SGRPHASE1COASTLINE_12.readFeatures(json_SGRPHASE1COASTLINE_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SGRPHASE1COASTLINE_12 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_SGRPHASE1COASTLINE_12.addFeatures(features_SGRPHASE1COASTLINE_12);var lyr_SGRPHASE1COASTLINE_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SGRPHASE1COASTLINE_12, 
                style: style_SGRPHASE1COASTLINE_12,
                title: '<img src="styles/legend/SGRPHASE1COASTLINE_12.png" /> SGR PHASE 1 COAST LINE'
            });var format_SGRPHASE1GEF66Akmz_13 = new ol.format.GeoJSON();
var features_SGRPHASE1GEF66Akmz_13 = format_SGRPHASE1GEF66Akmz_13.readFeatures(json_SGRPHASE1GEF66Akmz_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SGRPHASE1GEF66Akmz_13 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_SGRPHASE1GEF66Akmz_13.addFeatures(features_SGRPHASE1GEF66Akmz_13);var lyr_SGRPHASE1GEF66Akmz_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SGRPHASE1GEF66Akmz_13, 
                style: style_SGRPHASE1GEF66Akmz_13,
                title: '<img src="styles/legend/SGRPHASE1GEF66Akmz_13.png" /> SGR PHASE 1 ~GEF66A.kmz'
            });var format_SGRPHASE1GEDACFkmz_14 = new ol.format.GeoJSON();
var features_SGRPHASE1GEDACFkmz_14 = format_SGRPHASE1GEDACFkmz_14.readFeatures(json_SGRPHASE1GEDACFkmz_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SGRPHASE1GEDACFkmz_14 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_SGRPHASE1GEDACFkmz_14.addFeatures(features_SGRPHASE1GEDACFkmz_14);var lyr_SGRPHASE1GEDACFkmz_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SGRPHASE1GEDACFkmz_14, 
                style: style_SGRPHASE1GEDACFkmz_14,
                title: '<img src="styles/legend/SGRPHASE1GEDACFkmz_14.png" /> SGR PHASE 1 ~GEDACF.kmz'
            });var format_SGRPHASE1GED3ABkmz_15 = new ol.format.GeoJSON();
var features_SGRPHASE1GED3ABkmz_15 = format_SGRPHASE1GED3ABkmz_15.readFeatures(json_SGRPHASE1GED3ABkmz_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SGRPHASE1GED3ABkmz_15 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_SGRPHASE1GED3ABkmz_15.addFeatures(features_SGRPHASE1GED3ABkmz_15);var lyr_SGRPHASE1GED3ABkmz_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SGRPHASE1GED3ABkmz_15, 
                style: style_SGRPHASE1GED3ABkmz_15,
                title: '<img src="styles/legend/SGRPHASE1GED3ABkmz_15.png" /> SGR PHASE 1 ~GED3AB.kmz'
            });var format_SGRPHASE1GECA96kmz_16 = new ol.format.GeoJSON();
var features_SGRPHASE1GECA96kmz_16 = format_SGRPHASE1GECA96kmz_16.readFeatures(json_SGRPHASE1GECA96kmz_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SGRPHASE1GECA96kmz_16 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_SGRPHASE1GECA96kmz_16.addFeatures(features_SGRPHASE1GECA96kmz_16);var lyr_SGRPHASE1GECA96kmz_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SGRPHASE1GECA96kmz_16, 
                style: style_SGRPHASE1GECA96kmz_16,
                title: '<img src="styles/legend/SGRPHASE1GECA96kmz_16.png" /> SGR PHASE 1 ~GECA96.kmz'
            });var format_SGRPHASE1GEA99Ekmz_17 = new ol.format.GeoJSON();
var features_SGRPHASE1GEA99Ekmz_17 = format_SGRPHASE1GEA99Ekmz_17.readFeatures(json_SGRPHASE1GEA99Ekmz_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SGRPHASE1GEA99Ekmz_17 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_SGRPHASE1GEA99Ekmz_17.addFeatures(features_SGRPHASE1GEA99Ekmz_17);var lyr_SGRPHASE1GEA99Ekmz_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SGRPHASE1GEA99Ekmz_17, 
                style: style_SGRPHASE1GEA99Ekmz_17,
                title: '<img src="styles/legend/SGRPHASE1GEA99Ekmz_17.png" /> SGR PHASE 1 ~GEA99E.kmz'
            });var format_SGRPHASE1GE8867kmz_18 = new ol.format.GeoJSON();
var features_SGRPHASE1GE8867kmz_18 = format_SGRPHASE1GE8867kmz_18.readFeatures(json_SGRPHASE1GE8867kmz_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SGRPHASE1GE8867kmz_18 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_SGRPHASE1GE8867kmz_18.addFeatures(features_SGRPHASE1GE8867kmz_18);var lyr_SGRPHASE1GE8867kmz_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SGRPHASE1GE8867kmz_18, 
                style: style_SGRPHASE1GE8867kmz_18,
                title: '<img src="styles/legend/SGRPHASE1GE8867kmz_18.png" /> SGR PHASE 1 ~GE8867.kmz'
            });var format_SGRPHASE1GE8309kmz_19 = new ol.format.GeoJSON();
var features_SGRPHASE1GE8309kmz_19 = format_SGRPHASE1GE8309kmz_19.readFeatures(json_SGRPHASE1GE8309kmz_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SGRPHASE1GE8309kmz_19 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_SGRPHASE1GE8309kmz_19.addFeatures(features_SGRPHASE1GE8309kmz_19);var lyr_SGRPHASE1GE8309kmz_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SGRPHASE1GE8309kmz_19, 
                style: style_SGRPHASE1GE8309kmz_19,
                title: '<img src="styles/legend/SGRPHASE1GE8309kmz_19.png" /> SGR PHASE 1 ~GE8309.kmz'
            });var format_SGRPHASE1GE4FABkmz_20 = new ol.format.GeoJSON();
var features_SGRPHASE1GE4FABkmz_20 = format_SGRPHASE1GE4FABkmz_20.readFeatures(json_SGRPHASE1GE4FABkmz_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SGRPHASE1GE4FABkmz_20 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_SGRPHASE1GE4FABkmz_20.addFeatures(features_SGRPHASE1GE4FABkmz_20);var lyr_SGRPHASE1GE4FABkmz_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SGRPHASE1GE4FABkmz_20, 
                style: style_SGRPHASE1GE4FABkmz_20,
                title: '<img src="styles/legend/SGRPHASE1GE4FABkmz_20.png" /> SGR PHASE 1 ~GE4FAB.kmz'
            });var format_SGRPHASE1GE4EB8kmz_21 = new ol.format.GeoJSON();
var features_SGRPHASE1GE4EB8kmz_21 = format_SGRPHASE1GE4EB8kmz_21.readFeatures(json_SGRPHASE1GE4EB8kmz_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SGRPHASE1GE4EB8kmz_21 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_SGRPHASE1GE4EB8kmz_21.addFeatures(features_SGRPHASE1GE4EB8kmz_21);var lyr_SGRPHASE1GE4EB8kmz_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SGRPHASE1GE4EB8kmz_21, 
                style: style_SGRPHASE1GE4EB8kmz_21,
                title: '<img src="styles/legend/SGRPHASE1GE4EB8kmz_21.png" /> SGR PHASE 1 ~GE4EB8.kmz'
            });var format_SGRPHASE1GE2A4Ekmz_22 = new ol.format.GeoJSON();
var features_SGRPHASE1GE2A4Ekmz_22 = format_SGRPHASE1GE2A4Ekmz_22.readFeatures(json_SGRPHASE1GE2A4Ekmz_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SGRPHASE1GE2A4Ekmz_22 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_SGRPHASE1GE2A4Ekmz_22.addFeatures(features_SGRPHASE1GE2A4Ekmz_22);var lyr_SGRPHASE1GE2A4Ekmz_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SGRPHASE1GE2A4Ekmz_22, 
                style: style_SGRPHASE1GE2A4Ekmz_22,
                title: '<img src="styles/legend/SGRPHASE1GE2A4Ekmz_22.png" /> SGR PHASE 1 ~GE2A4E.kmz'
            });var format_KETRACO_LINES_23 = new ol.format.GeoJSON();
var features_KETRACO_LINES_23 = format_KETRACO_LINES_23.readFeatures(json_KETRACO_LINES_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KETRACO_LINES_23 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_KETRACO_LINES_23.addFeatures(features_KETRACO_LINES_23);var lyr_KETRACO_LINES_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KETRACO_LINES_23, 
                style: style_KETRACO_LINES_23,
    title: 'KETRACO_LINES<br />\
    <img src="styles/legend/KETRACO_LINES_23_0.png" /> 132kV<br />\
    <img src="styles/legend/KETRACO_LINES_23_1.png" /> 220kV<br />\
    <img src="styles/legend/KETRACO_LINES_23_2.png" /> 400kV<br />\
    <img src="styles/legend/KETRACO_LINES_23_3.png" /> 500HVDC<br />'
        });var format_KETRACO_SUBSTATIONS_38567_24 = new ol.format.GeoJSON();
var features_KETRACO_SUBSTATIONS_38567_24 = format_KETRACO_SUBSTATIONS_38567_24.readFeatures(json_KETRACO_SUBSTATIONS_38567_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KETRACO_SUBSTATIONS_38567_24 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_KETRACO_SUBSTATIONS_38567_24.addFeatures(features_KETRACO_SUBSTATIONS_38567_24);cluster_KETRACO_SUBSTATIONS_38567_24 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_KETRACO_SUBSTATIONS_38567_24
});var lyr_KETRACO_SUBSTATIONS_38567_24 = new ol.layer.Vector({
                declutter: true,
                source:cluster_KETRACO_SUBSTATIONS_38567_24, 
                style: style_KETRACO_SUBSTATIONS_38567_24,
                title: '<img src="styles/legend/KETRACO_SUBSTATIONS_38567_24.png" /> KETRACO_SUBSTATIONS_38567'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_County_1.setVisible(true);lyr_KENYA_2.setVisible(true);lyr_Tullow_Pipeline_3.setVisible(true);lyr_PowerInput_AGI_4.setVisible(true);lyr_220kvtransmission_MAX_5.setVisible(true);lyr_132kvtransmission_MAX_6.setVisible(true);lyr_SGRPHASE1TRANSMISSIONLINESACTUALPOSITION_7.setVisible(true);lyr_SGRPHASE1TRANSMISSIONLINESECTION_8.setVisible(true);lyr_SGRPHASE1TemporaryPlaces_9.setVisible(true);lyr_SGRPHASE1PointFeatures_10.setVisible(true);lyr_SGRPHASE1HVMETERINGSUBSTATION_11.setVisible(true);lyr_SGRPHASE1COASTLINE_12.setVisible(true);lyr_SGRPHASE1GEF66Akmz_13.setVisible(true);lyr_SGRPHASE1GEDACFkmz_14.setVisible(true);lyr_SGRPHASE1GED3ABkmz_15.setVisible(true);lyr_SGRPHASE1GECA96kmz_16.setVisible(true);lyr_SGRPHASE1GEA99Ekmz_17.setVisible(true);lyr_SGRPHASE1GE8867kmz_18.setVisible(true);lyr_SGRPHASE1GE8309kmz_19.setVisible(true);lyr_SGRPHASE1GE4FABkmz_20.setVisible(true);lyr_SGRPHASE1GE4EB8kmz_21.setVisible(true);lyr_SGRPHASE1GE2A4Ekmz_22.setVisible(true);lyr_KETRACO_LINES_23.setVisible(true);lyr_KETRACO_SUBSTATIONS_38567_24.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_County_1,lyr_KENYA_2,lyr_Tullow_Pipeline_3,lyr_PowerInput_AGI_4,lyr_220kvtransmission_MAX_5,lyr_132kvtransmission_MAX_6,lyr_SGRPHASE1TRANSMISSIONLINESACTUALPOSITION_7,lyr_SGRPHASE1TRANSMISSIONLINESECTION_8,lyr_SGRPHASE1TemporaryPlaces_9,lyr_SGRPHASE1PointFeatures_10,lyr_SGRPHASE1HVMETERINGSUBSTATION_11,lyr_SGRPHASE1COASTLINE_12,lyr_SGRPHASE1GEF66Akmz_13,lyr_SGRPHASE1GEDACFkmz_14,lyr_SGRPHASE1GED3ABkmz_15,lyr_SGRPHASE1GECA96kmz_16,lyr_SGRPHASE1GEA99Ekmz_17,lyr_SGRPHASE1GE8867kmz_18,lyr_SGRPHASE1GE8309kmz_19,lyr_SGRPHASE1GE4FABkmz_20,lyr_SGRPHASE1GE4EB8kmz_21,lyr_SGRPHASE1GE2A4Ekmz_22,lyr_KETRACO_LINES_23,lyr_KETRACO_SUBSTATIONS_38567_24];
lyr_County_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'COUNTY3_': 'COUNTY3_', 'COUNTY3_ID': 'COUNTY3_ID', 'COUNTY': 'COUNTY', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_KENYA_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'COUNTY3_': 'COUNTY3_', 'COUNTY3_ID': 'COUNTY3_ID', 'COUNTY': 'COUNTY', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Tullow_Pipeline_3.set('fieldAliases', {'id': 'id', });
lyr_PowerInput_AGI_4.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_220kvtransmission_MAX_5.set('fieldAliases', {'ENTITY': 'ENTITY', 'HANDLE': 'HANDLE', 'LAYER': 'LAYER', 'COLOR': 'COLOR', 'LINETYPE': 'LINETYPE', 'ELEVATION': 'ELEVATION', 'THICKNESS': 'THICKNESS', 'TEXT': 'TEXT', });
lyr_132kvtransmission_MAX_6.set('fieldAliases', {'ENTITY': 'ENTITY', 'HANDLE': 'HANDLE', 'LAYER': 'LAYER', 'COLOR': 'COLOR', 'LINETYPE': 'LINETYPE', 'ELEVATION': 'ELEVATION', 'THICKNESS': 'THICKNESS', 'TEXT': 'TEXT', });
lyr_SGRPHASE1TRANSMISSIONLINESACTUALPOSITION_7.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_SGRPHASE1TRANSMISSIONLINESECTION_8.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_SGRPHASE1TemporaryPlaces_9.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_SGRPHASE1PointFeatures_10.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_SGRPHASE1HVMETERINGSUBSTATION_11.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_SGRPHASE1COASTLINE_12.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_SGRPHASE1GEF66Akmz_13.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_SGRPHASE1GEDACFkmz_14.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_SGRPHASE1GED3ABkmz_15.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_SGRPHASE1GECA96kmz_16.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_SGRPHASE1GEA99Ekmz_17.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_SGRPHASE1GE8867kmz_18.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_SGRPHASE1GE8309kmz_19.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_SGRPHASE1GE4FABkmz_20.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_SGRPHASE1GE4EB8kmz_21.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_SGRPHASE1GE2A4Ekmz_22.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_KETRACO_LINES_23.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'LINE_NAME': 'LINE_NAME', 'Length': 'Length', 'STATUS': 'STATUS', 'VOLTAGE_1': 'VOLTAGE_1', 'COMM_DATE': 'COMM_DATE', });
lyr_KETRACO_SUBSTATIONS_38567_24.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'VOLTAGE': 'VOLTAGE', 'COMM_DATE_': 'COMM_DATE_', 'SUB_NAME': 'SUB_NAME', 'STATUS': 'STATUS', });
lyr_County_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'COUNTY3_': 'TextEdit', 'COUNTY3_ID': 'TextEdit', 'COUNTY': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_KENYA_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'COUNTY3_': 'TextEdit', 'COUNTY3_ID': 'TextEdit', 'COUNTY': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Tullow_Pipeline_3.set('fieldImages', {'id': 'TextEdit', });
lyr_PowerInput_AGI_4.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'snippet': 'TextEdit', });
lyr_220kvtransmission_MAX_5.set('fieldImages', {'ENTITY': 'TextEdit', 'HANDLE': 'TextEdit', 'LAYER': 'TextEdit', 'COLOR': 'TextEdit', 'LINETYPE': 'TextEdit', 'ELEVATION': 'TextEdit', 'THICKNESS': 'TextEdit', 'TEXT': 'TextEdit', });
lyr_132kvtransmission_MAX_6.set('fieldImages', {'ENTITY': 'TextEdit', 'HANDLE': 'TextEdit', 'LAYER': 'TextEdit', 'COLOR': 'TextEdit', 'LINETYPE': 'TextEdit', 'ELEVATION': 'TextEdit', 'THICKNESS': 'TextEdit', 'TEXT': 'TextEdit', });
lyr_SGRPHASE1TRANSMISSIONLINESACTUALPOSITION_7.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMode': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'snippet': 'TextEdit', });
lyr_SGRPHASE1TRANSMISSIONLINESECTION_8.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMode': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'snippet': 'TextEdit', });
lyr_SGRPHASE1TemporaryPlaces_9.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMode': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_SGRPHASE1PointFeatures_10.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMode': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_SGRPHASE1HVMETERINGSUBSTATION_11.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMode': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'snippet': 'TextEdit', });
lyr_SGRPHASE1COASTLINE_12.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMode': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'snippet': 'TextEdit', });
lyr_SGRPHASE1GEF66Akmz_13.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMode': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_SGRPHASE1GEDACFkmz_14.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMode': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_SGRPHASE1GED3ABkmz_15.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMode': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_SGRPHASE1GECA96kmz_16.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMode': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_SGRPHASE1GEA99Ekmz_17.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMode': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_SGRPHASE1GE8867kmz_18.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMode': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_SGRPHASE1GE8309kmz_19.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMode': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_SGRPHASE1GE4FABkmz_20.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMode': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_SGRPHASE1GE4EB8kmz_21.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMode': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_SGRPHASE1GE2A4Ekmz_22.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMode': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_KETRACO_LINES_23.set('fieldImages', {'OBJECTID': 'TextEdit', 'LINE_NAME': 'TextEdit', 'Length': 'TextEdit', 'STATUS': 'TextEdit', 'VOLTAGE_1': 'TextEdit', 'COMM_DATE': 'TextEdit', });
lyr_KETRACO_SUBSTATIONS_38567_24.set('fieldImages', {'OBJECTID': 'TextEdit', 'VOLTAGE': 'TextEdit', 'COMM_DATE_': 'TextEdit', 'SUB_NAME': 'TextEdit', 'STATUS': 'TextEdit', });
lyr_County_1.set('fieldLabels', {'OBJECTID': 'no label', 'AREA': 'no label', 'PERIMETER': 'no label', 'COUNTY3_': 'no label', 'COUNTY3_ID': 'no label', 'COUNTY': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_KENYA_2.set('fieldLabels', {'OBJECTID': 'no label', 'AREA': 'no label', 'PERIMETER': 'no label', 'COUNTY3_': 'no label', 'COUNTY3_ID': 'no label', 'COUNTY': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Tullow_Pipeline_3.set('fieldLabels', {'id': 'no label', });
lyr_PowerInput_AGI_4.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'snippet': 'no label', });
lyr_220kvtransmission_MAX_5.set('fieldLabels', {'ENTITY': 'no label', 'HANDLE': 'no label', 'LAYER': 'no label', 'COLOR': 'no label', 'LINETYPE': 'no label', 'ELEVATION': 'no label', 'THICKNESS': 'no label', 'TEXT': 'no label', });
lyr_132kvtransmission_MAX_6.set('fieldLabels', {'ENTITY': 'no label', 'HANDLE': 'no label', 'LAYER': 'no label', 'COLOR': 'no label', 'LINETYPE': 'no label', 'ELEVATION': 'no label', 'THICKNESS': 'no label', 'TEXT': 'no label', });
lyr_SGRPHASE1TRANSMISSIONLINESACTUALPOSITION_7.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'snippet': 'no label', });
lyr_SGRPHASE1TRANSMISSIONLINESECTION_8.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'snippet': 'no label', });
lyr_SGRPHASE1TemporaryPlaces_9.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_SGRPHASE1PointFeatures_10.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_SGRPHASE1HVMETERINGSUBSTATION_11.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'snippet': 'no label', });
lyr_SGRPHASE1COASTLINE_12.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'snippet': 'no label', });
lyr_SGRPHASE1GEF66Akmz_13.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_SGRPHASE1GEDACFkmz_14.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_SGRPHASE1GED3ABkmz_15.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_SGRPHASE1GECA96kmz_16.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_SGRPHASE1GEA99Ekmz_17.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_SGRPHASE1GE8867kmz_18.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_SGRPHASE1GE8309kmz_19.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_SGRPHASE1GE4FABkmz_20.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_SGRPHASE1GE4EB8kmz_21.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_SGRPHASE1GE2A4Ekmz_22.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_KETRACO_LINES_23.set('fieldLabels', {'OBJECTID': 'no label', 'LINE_NAME': 'no label', 'Length': 'no label', 'STATUS': 'no label', 'VOLTAGE_1': 'no label', 'COMM_DATE': 'no label', });
lyr_KETRACO_SUBSTATIONS_38567_24.set('fieldLabels', {'OBJECTID': 'no label', 'VOLTAGE': 'no label', 'COMM_DATE_': 'no label', 'SUB_NAME': 'no label', 'STATUS': 'no label', });
lyr_KETRACO_SUBSTATIONS_38567_24.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});