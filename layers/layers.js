ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32645").setExtent([470172.824864, 2607267.858385, 519494.824864, 2637281.038032]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ForMangiferaindicaMangoSpecies_1 = new ol.format.GeoJSON();
var features_ForMangiferaindicaMangoSpecies_1 = format_ForMangiferaindicaMangoSpecies_1.readFeatures(json_ForMangiferaindicaMangoSpecies_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32645'});
var jsonSource_ForMangiferaindicaMangoSpecies_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ForMangiferaindicaMangoSpecies_1.addFeatures(features_ForMangiferaindicaMangoSpecies_1);
var lyr_ForMangiferaindicaMangoSpecies_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ForMangiferaindicaMangoSpecies_1, 
                style: style_ForMangiferaindicaMangoSpecies_1,
                popuplayertitle: "For Mangifera indica (Mango) Species",
                interactive: true,
    title: 'For Mangifera indica (Mango) Species<br />\
    <img src="styles/legend/ForMangiferaindicaMangoSpecies_1_0.png" /> 0<br />\
    <img src="styles/legend/ForMangiferaindicaMangoSpecies_1_1.png" /> 1<br />'
        });
var lyr_HabitatSuitabilityModelingofMangiferaindicaMangoSpecies_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "Habitat Suitability Modeling of Mangifera indica (Mango) Species",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/HabitatSuitabilityModelingofMangiferaindicaMangoSpecies_2.png",
    attributions: ' ',
                                projection: 'EPSG:32645',
                                alwaysInRange: true,
                                imageExtent: [479540.000000, 2610280.000000, 514780.000000, 2630380.000000]
                            })
                        });
var format_ForFicusbenghalensisBanyanSpecies_3 = new ol.format.GeoJSON();
var features_ForFicusbenghalensisBanyanSpecies_3 = format_ForFicusbenghalensisBanyanSpecies_3.readFeatures(json_ForFicusbenghalensisBanyanSpecies_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32645'});
var jsonSource_ForFicusbenghalensisBanyanSpecies_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ForFicusbenghalensisBanyanSpecies_3.addFeatures(features_ForFicusbenghalensisBanyanSpecies_3);
var lyr_ForFicusbenghalensisBanyanSpecies_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ForFicusbenghalensisBanyanSpecies_3, 
                style: style_ForFicusbenghalensisBanyanSpecies_3,
                popuplayertitle: "For Ficus benghalensis (Banyan) Species",
                interactive: true,
    title: 'For Ficus benghalensis (Banyan) Species<br />\
    <img src="styles/legend/ForFicusbenghalensisBanyanSpecies_3_0.png" /> 0<br />\
    <img src="styles/legend/ForFicusbenghalensisBanyanSpecies_3_1.png" /> 1<br />'
        });
var lyr_HabitatSuitabilityModelingofFicusbenghalensisBanyanSpecies_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "Habitat Suitability Modeling of Ficus benghalensis (Banyan) Species",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/HabitatSuitabilityModelingofFicusbenghalensisBanyanSpecies_4.png",
    attributions: ' ',
                                projection: 'EPSG:32645',
                                alwaysInRange: true,
                                imageExtent: [479540.000000, 2610280.000000, 514780.000000, 2630380.000000]
                            })
                        });
var format_ForCocosnuciferaCoconutSpecies_5 = new ol.format.GeoJSON();
var features_ForCocosnuciferaCoconutSpecies_5 = format_ForCocosnuciferaCoconutSpecies_5.readFeatures(json_ForCocosnuciferaCoconutSpecies_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32645'});
var jsonSource_ForCocosnuciferaCoconutSpecies_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ForCocosnuciferaCoconutSpecies_5.addFeatures(features_ForCocosnuciferaCoconutSpecies_5);
var lyr_ForCocosnuciferaCoconutSpecies_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ForCocosnuciferaCoconutSpecies_5, 
                style: style_ForCocosnuciferaCoconutSpecies_5,
                popuplayertitle: "For Cocos nucifera (Coconut) Species",
                interactive: true,
    title: 'For Cocos nucifera (Coconut) Species<br />\
    <img src="styles/legend/ForCocosnuciferaCoconutSpecies_5_0.png" /> 0<br />\
    <img src="styles/legend/ForCocosnuciferaCoconutSpecies_5_1.png" /> 1<br />'
        });
var lyr_HabitatSuitabilityModelingofCocosnuciferaCoconutSpecies_6 = new ol.layer.Image({
                            opacity: 1,
                            title: "Habitat Suitability Modeling of Cocos nucifera (Coconut) Species",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/HabitatSuitabilityModelingofCocosnuciferaCoconutSpecies_6.png",
    attributions: ' ',
                                projection: 'EPSG:32645',
                                alwaysInRange: true,
                                imageExtent: [479540.000000, 2610280.000000, 514780.000000, 2630380.000000]
                            })
                        });
var format_ForButeamonospermaPalashSpecies_7 = new ol.format.GeoJSON();
var features_ForButeamonospermaPalashSpecies_7 = format_ForButeamonospermaPalashSpecies_7.readFeatures(json_ForButeamonospermaPalashSpecies_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32645'});
var jsonSource_ForButeamonospermaPalashSpecies_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ForButeamonospermaPalashSpecies_7.addFeatures(features_ForButeamonospermaPalashSpecies_7);
var lyr_ForButeamonospermaPalashSpecies_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ForButeamonospermaPalashSpecies_7, 
                style: style_ForButeamonospermaPalashSpecies_7,
                popuplayertitle: "For Butea monosperma (Palash) Species",
                interactive: true,
    title: 'For Butea monosperma (Palash) Species<br />\
    <img src="styles/legend/ForButeamonospermaPalashSpecies_7_0.png" /> 0<br />\
    <img src="styles/legend/ForButeamonospermaPalashSpecies_7_1.png" /> 1<br />'
        });
var lyr_HabitatSuitabilityModelingofButeamonospermaPalashSpecies_8 = new ol.layer.Image({
                            opacity: 1,
                            title: "Habitat Suitability Modeling of Butea monosperma (Palash) Species",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/HabitatSuitabilityModelingofButeamonospermaPalashSpecies_8.png",
    attributions: ' ',
                                projection: 'EPSG:32645',
                                alwaysInRange: true,
                                imageExtent: [479540.000000, 2610280.000000, 514780.000000, 2630380.000000]
                            })
                        });
var format_ForAzadirachtaindicaNeemSpecies_9 = new ol.format.GeoJSON();
var features_ForAzadirachtaindicaNeemSpecies_9 = format_ForAzadirachtaindicaNeemSpecies_9.readFeatures(json_ForAzadirachtaindicaNeemSpecies_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32645'});
var jsonSource_ForAzadirachtaindicaNeemSpecies_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ForAzadirachtaindicaNeemSpecies_9.addFeatures(features_ForAzadirachtaindicaNeemSpecies_9);
var lyr_ForAzadirachtaindicaNeemSpecies_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ForAzadirachtaindicaNeemSpecies_9, 
                style: style_ForAzadirachtaindicaNeemSpecies_9,
                popuplayertitle: "For Azadirachta indica (Neem) Species",
                interactive: true,
    title: 'For Azadirachta indica (Neem) Species<br />\
    <img src="styles/legend/ForAzadirachtaindicaNeemSpecies_9_0.png" /> 0<br />\
    <img src="styles/legend/ForAzadirachtaindicaNeemSpecies_9_1.png" /> 1<br />'
        });
var lyr_HabitatSuitabilityModelingofAzadirachtaindicaNeemSpecies_10 = new ol.layer.Image({
                            opacity: 1,
                            title: "Habitat Suitability Modeling of Azadirachta indica (Neem) Species",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/HabitatSuitabilityModelingofAzadirachtaindicaNeemSpecies_10.png",
    attributions: ' ',
                                projection: 'EPSG:32645',
                                alwaysInRange: true,
                                imageExtent: [479540.000000, 2610280.000000, 514780.000000, 2630380.000000]
                            })
                        });
var format_ForArtocarpusheterophyllusKathalSpecies_11 = new ol.format.GeoJSON();
var features_ForArtocarpusheterophyllusKathalSpecies_11 = format_ForArtocarpusheterophyllusKathalSpecies_11.readFeatures(json_ForArtocarpusheterophyllusKathalSpecies_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32645'});
var jsonSource_ForArtocarpusheterophyllusKathalSpecies_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ForArtocarpusheterophyllusKathalSpecies_11.addFeatures(features_ForArtocarpusheterophyllusKathalSpecies_11);
var lyr_ForArtocarpusheterophyllusKathalSpecies_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ForArtocarpusheterophyllusKathalSpecies_11, 
                style: style_ForArtocarpusheterophyllusKathalSpecies_11,
                popuplayertitle: "For Artocarpus heterophyllus (Kathal) Species",
                interactive: true,
    title: 'For Artocarpus heterophyllus (Kathal) Species<br />\
    <img src="styles/legend/ForArtocarpusheterophyllusKathalSpecies_11_0.png" /> 0<br />\
    <img src="styles/legend/ForArtocarpusheterophyllusKathalSpecies_11_1.png" /> 1<br />'
        });
var lyr_HabitatSuitabilityModelingofArtocarpusheterophyllusKathalSpecies_12 = new ol.layer.Image({
                            opacity: 1,
                            title: "Habitat Suitability Modeling of Artocarpus heterophyllus (Kathal) Species",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/HabitatSuitabilityModelingofArtocarpusheterophyllusKathalSpecies_12.png",
    attributions: ' ',
                                projection: 'EPSG:32645',
                                alwaysInRange: true,
                                imageExtent: [479540.000000, 2610280.000000, 514780.000000, 2630380.000000]
                            })
                        });
var lyr_SoilType_13 = new ol.layer.Image({
                            opacity: 1,
                            title: "Soil Type",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/SoilType_13.png",
    attributions: ' ',
                                projection: 'EPSG:32645',
                                alwaysInRange: true,
                                imageExtent: [479493.765600, 2609625.792200, 515646.073300, 2630556.075700]
                            })
                        });
var lyr_Slope_14 = new ol.layer.Image({
                            opacity: 1,
                            title: "Slope",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Slope_14.png",
    attributions: ' ',
                                projection: 'EPSG:32645',
                                alwaysInRange: true,
                                imageExtent: [479493.765100, 2609625.789300, 515646.072800, 2630556.072700]
                            })
                        });
var lyr_NDVI_15 = new ol.layer.Image({
                            opacity: 1,
                            title: "NDVI",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/NDVI_15.png",
    attributions: ' ',
                                projection: 'EPSG:32645',
                                alwaysInRange: true,
                                imageExtent: [479493.765100, 2609625.789300, 515646.072800, 2630556.072700]
                            })
                        });
var lyr_NDBI_16 = new ol.layer.Image({
                            opacity: 1,
                            title: "NDBI",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/NDBI_16.png",
    attributions: ' ',
                                projection: 'EPSG:32645',
                                alwaysInRange: true,
                                imageExtent: [479493.765100, 2609625.789300, 515646.072800, 2630556.072700]
                            })
                        });
var lyr_LULC_17 = new ol.layer.Image({
                            opacity: 1,
                            title: "LULC",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/LULC_17.png",
    attributions: ' ',
                                projection: 'EPSG:32645',
                                alwaysInRange: true,
                                imageExtent: [479493.765100, 2609625.789300, 515646.072800, 2630556.072700]
                            })
                        });
var lyr_LST_18 = new ol.layer.Image({
                            opacity: 1,
                            title: "LST",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/LST_18.png",
    attributions: ' ',
                                projection: 'EPSG:32645',
                                alwaysInRange: true,
                                imageExtent: [479493.765100, 2609625.789300, 515646.072800, 2630556.072700]
                            })
                        });
var lyr_BIO19_19 = new ol.layer.Image({
                            opacity: 1,
                            title: "BIO19",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/BIO19_19.png",
    attributions: ' ',
                                projection: 'EPSG:32645',
                                alwaysInRange: true,
                                imageExtent: [479493.765100, 2609625.789300, 515646.072800, 2630556.072700]
                            })
                        });
var lyr_BIO18_20 = new ol.layer.Image({
                            opacity: 1,
                            title: "BIO18",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/BIO18_20.png",
    attributions: ' ',
                                projection: 'EPSG:32645',
                                alwaysInRange: true,
                                imageExtent: [479493.765100, 2609625.789300, 515646.072800, 2630556.072700]
                            })
                        });
var lyr_BIO17_21 = new ol.layer.Image({
                            opacity: 1,
                            title: "BIO17",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/BIO17_21.png",
    attributions: ' ',
                                projection: 'EPSG:32645',
                                alwaysInRange: true,
                                imageExtent: [479493.765100, 2609625.789300, 515646.072800, 2630556.072700]
                            })
                        });
var lyr_BIO16_22 = new ol.layer.Image({
                            opacity: 1,
                            title: "BIO16",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/BIO16_22.png",
    attributions: ' ',
                                projection: 'EPSG:32645',
                                alwaysInRange: true,
                                imageExtent: [479493.765100, 2609625.789300, 515646.072800, 2630556.072700]
                            })
                        });
var lyr_BIO15_23 = new ol.layer.Image({
                            opacity: 1,
                            title: "BIO15",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/BIO15_23.png",
    attributions: ' ',
                                projection: 'EPSG:32645',
                                alwaysInRange: true,
                                imageExtent: [479493.765100, 2609625.789300, 515646.072800, 2630556.072700]
                            })
                        });
var lyr_BIO14_24 = new ol.layer.Image({
                            opacity: 1,
                            title: "BIO14",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/BIO14_24.png",
    attributions: ' ',
                                projection: 'EPSG:32645',
                                alwaysInRange: true,
                                imageExtent: [479493.765100, 2609625.789300, 515646.072800, 2630556.072700]
                            })
                        });
var lyr_BIO13_25 = new ol.layer.Image({
                            opacity: 1,
                            title: "BIO13",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/BIO13_25.png",
    attributions: ' ',
                                projection: 'EPSG:32645',
                                alwaysInRange: true,
                                imageExtent: [479493.765100, 2609625.789300, 515646.072800, 2630556.072700]
                            })
                        });
var lyr_BIO12_26 = new ol.layer.Image({
                            opacity: 1,
                            title: "BIO12",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/BIO12_26.png",
    attributions: ' ',
                                projection: 'EPSG:32645',
                                alwaysInRange: true,
                                imageExtent: [479493.765100, 2609625.789300, 515646.072800, 2630556.072700]
                            })
                        });
var lyr_BIO11_27 = new ol.layer.Image({
                            opacity: 1,
                            title: "BIO11",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/BIO11_27.png",
    attributions: ' ',
                                projection: 'EPSG:32645',
                                alwaysInRange: true,
                                imageExtent: [479493.765100, 2609625.789300, 515646.072800, 2630556.072700]
                            })
                        });
var lyr_BIO10_28 = new ol.layer.Image({
                            opacity: 1,
                            title: "BIO10",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/BIO10_28.png",
    attributions: ' ',
                                projection: 'EPSG:32645',
                                alwaysInRange: true,
                                imageExtent: [479493.765100, 2609625.789300, 515646.072800, 2630556.072700]
                            })
                        });
var lyr_BIO9_29 = new ol.layer.Image({
                            opacity: 1,
                            title: "BIO9",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/BIO9_29.png",
    attributions: ' ',
                                projection: 'EPSG:32645',
                                alwaysInRange: true,
                                imageExtent: [479493.765100, 2609625.789300, 515646.072800, 2630556.072700]
                            })
                        });
var lyr_BIO8_30 = new ol.layer.Image({
                            opacity: 1,
                            title: "BIO8",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/BIO8_30.png",
    attributions: ' ',
                                projection: 'EPSG:32645',
                                alwaysInRange: true,
                                imageExtent: [479493.765100, 2609625.789300, 515646.072800, 2630556.072700]
                            })
                        });
var lyr_BIO7_31 = new ol.layer.Image({
                            opacity: 1,
                            title: "BIO7",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/BIO7_31.png",
    attributions: ' ',
                                projection: 'EPSG:32645',
                                alwaysInRange: true,
                                imageExtent: [479493.765100, 2609625.789300, 515646.072800, 2630556.072700]
                            })
                        });
var lyr_BIO6_32 = new ol.layer.Image({
                            opacity: 1,
                            title: "BIO6",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/BIO6_32.png",
    attributions: ' ',
                                projection: 'EPSG:32645',
                                alwaysInRange: true,
                                imageExtent: [479493.765100, 2609625.789300, 515646.072800, 2630556.072700]
                            })
                        });
var lyr_BIO5_33 = new ol.layer.Image({
                            opacity: 1,
                            title: "BIO5",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/BIO5_33.png",
    attributions: ' ',
                                projection: 'EPSG:32645',
                                alwaysInRange: true,
                                imageExtent: [479493.765100, 2609625.789300, 515646.072800, 2630556.072700]
                            })
                        });
var lyr_BIO4_34 = new ol.layer.Image({
                            opacity: 1,
                            title: "BIO4",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/BIO4_34.png",
    attributions: ' ',
                                projection: 'EPSG:32645',
                                alwaysInRange: true,
                                imageExtent: [479493.765100, 2609625.789300, 515646.072800, 2630556.072700]
                            })
                        });
var lyr_BIO3_35 = new ol.layer.Image({
                            opacity: 1,
                            title: "BIO3",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/BIO3_35.png",
    attributions: ' ',
                                projection: 'EPSG:32645',
                                alwaysInRange: true,
                                imageExtent: [479493.765100, 2609625.789300, 515646.072800, 2630556.072700]
                            })
                        });
var lyr_BIO2_36 = new ol.layer.Image({
                            opacity: 1,
                            title: "BIO2",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/BIO2_36.png",
    attributions: ' ',
                                projection: 'EPSG:32645',
                                alwaysInRange: true,
                                imageExtent: [479493.765100, 2609625.789300, 515646.072800, 2630556.072700]
                            })
                        });
var lyr_BIO1_37 = new ol.layer.Image({
                            opacity: 1,
                            title: "BIO1",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/BIO1_37.png",
    attributions: ' ',
                                projection: 'EPSG:32645',
                                alwaysInRange: true,
                                imageExtent: [479493.765100, 2609625.789300, 515646.072800, 2630556.072700]
                            })
                        });
var lyr_Aspect_38 = new ol.layer.Image({
                            opacity: 1,
                            title: "Aspect",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Aspect_38.png",
    attributions: ' ',
                                projection: 'EPSG:32645',
                                alwaysInRange: true,
                                imageExtent: [479493.765100, 2609625.789300, 515646.072800, 2630556.072700]
                            })
                        });
var lyr_AltitudeElevation_39 = new ol.layer.Image({
                            opacity: 1,
                            title: "Altitude (Elevation)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/AltitudeElevation_39.png",
    attributions: ' ',
                                projection: 'EPSG:32645',
                                alwaysInRange: true,
                                imageExtent: [479493.765100, 2609625.789300, 515646.072800, 2630556.072700]
                            })
                        });
var format_SoilType_40 = new ol.format.GeoJSON();
var features_SoilType_40 = format_SoilType_40.readFeatures(json_SoilType_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32645'});
var jsonSource_SoilType_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SoilType_40.addFeatures(features_SoilType_40);
var lyr_SoilType_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SoilType_40, 
                style: style_SoilType_40,
                popuplayertitle: "Soil Type",
                interactive: true,
    title: 'Soil Type<br />\
    <img src="styles/legend/SoilType_40_0.png" /> 1<br />\
    <img src="styles/legend/SoilType_40_1.png" /> 2<br />\
    <img src="styles/legend/SoilType_40_2.png" /> 3<br />\
    <img src="styles/legend/SoilType_40_3.png" /> 4<br />\
    <img src="styles/legend/SoilType_40_4.png" /> 5<br />'
        });
var lyr_Slope_41 = new ol.layer.Image({
                            opacity: 1,
                            title: "Slope",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Slope_41.png",
    attributions: ' ',
                                projection: 'EPSG:32645',
                                alwaysInRange: true,
                                imageExtent: [479518.491400, 2610254.908600, 514779.814200, 2630400.009900]
                            })
                        });
var lyr_NDVI_42 = new ol.layer.Image({
                            opacity: 1,
                            title: "NDVI",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/NDVI_42.png",
    attributions: ' ',
                                projection: 'EPSG:32645',
                                alwaysInRange: true,
                                imageExtent: [479540.000000, 2610280.000000, 514780.000000, 2630380.000000]
                            })
                        });
var lyr_NDBI_43 = new ol.layer.Image({
                            opacity: 1,
                            title: "NDBI",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/NDBI_43.png",
    attributions: ' ',
                                projection: 'EPSG:32645',
                                alwaysInRange: true,
                                imageExtent: [479540.000000, 2610280.000000, 514780.000000, 2630380.000000]
                            })
                        });
var format_LULC_44 = new ol.format.GeoJSON();
var features_LULC_44 = format_LULC_44.readFeatures(json_LULC_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32645'});
var jsonSource_LULC_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LULC_44.addFeatures(features_LULC_44);
var lyr_LULC_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LULC_44, 
                style: style_LULC_44,
                popuplayertitle: "LULC",
                interactive: true,
    title: 'LULC<br />\
    <img src="styles/legend/LULC_44_0.png" /> 1<br />\
    <img src="styles/legend/LULC_44_1.png" /> 2<br />\
    <img src="styles/legend/LULC_44_2.png" /> 3<br />\
    <img src="styles/legend/LULC_44_3.png" /> 4<br />\
    <img src="styles/legend/LULC_44_4.png" /> 5<br />\
    <img src="styles/legend/LULC_44_5.png" /> 6<br />\
    <img src="styles/legend/LULC_44_6.png" /> 7<br />\
    <img src="styles/legend/LULC_44_7.png" /> 8<br />'
        });
var lyr_LST_45 = new ol.layer.Image({
                            opacity: 1,
                            title: "LST",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/LST_45.png",
    attributions: ' ',
                                projection: 'EPSG:32645',
                                alwaysInRange: true,
                                imageExtent: [479520.000000, 2610270.000000, 514800.000000, 2630400.000000]
                            })
                        });
var lyr_BIO19_46 = new ol.layer.Image({
                            opacity: 1,
                            title: "BIO19",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/BIO19_46.png",
    attributions: ' ',
                                projection: 'EPSG:32645',
                                alwaysInRange: true,
                                imageExtent: [478981.654200, 2610271.290600, 515620.176200, 2630824.607900]
                            })
                        });
var lyr_BIO18_47 = new ol.layer.Image({
                            opacity: 1,
                            title: "BIO18",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/BIO18_47.png",
    attributions: ' ',
                                projection: 'EPSG:32645',
                                alwaysInRange: true,
                                imageExtent: [478981.654200, 2610271.290600, 515620.176200, 2630824.607900]
                            })
                        });
var lyr_BIO17_48 = new ol.layer.Image({
                            opacity: 1,
                            title: "BIO17",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/BIO17_48.png",
    attributions: ' ',
                                projection: 'EPSG:32645',
                                alwaysInRange: true,
                                imageExtent: [478981.654200, 2610271.290600, 515620.176200, 2630824.607900]
                            })
                        });
var lyr_BIO16_49 = new ol.layer.Image({
                            opacity: 1,
                            title: "BIO16",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/BIO16_49.png",
    attributions: ' ',
                                projection: 'EPSG:32645',
                                alwaysInRange: true,
                                imageExtent: [478981.654200, 2610271.290600, 515620.176200, 2630824.607900]
                            })
                        });
var lyr_BIO15_50 = new ol.layer.Image({
                            opacity: 1,
                            title: "BIO15",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/BIO15_50.png",
    attributions: ' ',
                                projection: 'EPSG:32645',
                                alwaysInRange: true,
                                imageExtent: [478981.654200, 2610271.290600, 515620.176200, 2630824.607900]
                            })
                        });
var lyr_BIO14_51 = new ol.layer.Image({
                            opacity: 1,
                            title: "BIO14",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/BIO14_51.png",
    attributions: ' ',
                                projection: 'EPSG:32645',
                                alwaysInRange: true,
                                imageExtent: [478981.654200, 2610271.290600, 515620.176200, 2630824.607900]
                            })
                        });
var lyr_BIO13_52 = new ol.layer.Image({
                            opacity: 1,
                            title: "BIO13",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/BIO13_52.png",
    attributions: ' ',
                                projection: 'EPSG:32645',
                                alwaysInRange: true,
                                imageExtent: [478981.654200, 2610271.290600, 515620.176200, 2630824.607900]
                            })
                        });
var lyr_BIO12_53 = new ol.layer.Image({
                            opacity: 1,
                            title: "BIO12",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/BIO12_53.png",
    attributions: ' ',
                                projection: 'EPSG:32645',
                                alwaysInRange: true,
                                imageExtent: [478981.654200, 2610271.290600, 515620.176200, 2630824.607900]
                            })
                        });
var lyr_BIO11_54 = new ol.layer.Image({
                            opacity: 1,
                            title: "BIO11",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/BIO11_54.png",
    attributions: ' ',
                                projection: 'EPSG:32645',
                                alwaysInRange: true,
                                imageExtent: [478981.654200, 2610271.290600, 515620.176200, 2630824.607900]
                            })
                        });
var lyr_BIO10_55 = new ol.layer.Image({
                            opacity: 1,
                            title: "BIO10",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/BIO10_55.png",
    attributions: ' ',
                                projection: 'EPSG:32645',
                                alwaysInRange: true,
                                imageExtent: [478981.654200, 2610271.290600, 515620.176200, 2630824.607900]
                            })
                        });
var lyr_BIO9_56 = new ol.layer.Image({
                            opacity: 1,
                            title: "BIO9",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/BIO9_56.png",
    attributions: ' ',
                                projection: 'EPSG:32645',
                                alwaysInRange: true,
                                imageExtent: [479493.765100, 2609625.789300, 515646.072800, 2630556.072700]
                            })
                        });
var lyr_BIO8_57 = new ol.layer.Image({
                            opacity: 1,
                            title: "BIO8",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/BIO8_57.png",
    attributions: ' ',
                                projection: 'EPSG:32645',
                                alwaysInRange: true,
                                imageExtent: [479493.765100, 2609625.789300, 515646.072800, 2630556.072700]
                            })
                        });
var lyr_BIO7_58 = new ol.layer.Image({
                            opacity: 1,
                            title: "BIO7",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/BIO7_58.png",
    attributions: ' ',
                                projection: 'EPSG:32645',
                                alwaysInRange: true,
                                imageExtent: [479493.765100, 2609625.789300, 515646.072800, 2630556.072700]
                            })
                        });
var lyr_BIO6_59 = new ol.layer.Image({
                            opacity: 1,
                            title: "BIO6",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/BIO6_59.png",
    attributions: ' ',
                                projection: 'EPSG:32645',
                                alwaysInRange: true,
                                imageExtent: [479493.765100, 2609625.789300, 515646.072800, 2630556.072700]
                            })
                        });
var lyr_BIO5_60 = new ol.layer.Image({
                            opacity: 1,
                            title: "BIO5",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/BIO5_60.png",
    attributions: ' ',
                                projection: 'EPSG:32645',
                                alwaysInRange: true,
                                imageExtent: [479493.765100, 2609625.789300, 515646.072800, 2630556.072700]
                            })
                        });
var lyr_BIO4_61 = new ol.layer.Image({
                            opacity: 1,
                            title: "BIO4",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/BIO4_61.png",
    attributions: ' ',
                                projection: 'EPSG:32645',
                                alwaysInRange: true,
                                imageExtent: [479493.765100, 2609625.789300, 515646.072800, 2630556.072700]
                            })
                        });
var lyr_BIO3_62 = new ol.layer.Image({
                            opacity: 1,
                            title: "BIO3",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/BIO3_62.png",
    attributions: ' ',
                                projection: 'EPSG:32645',
                                alwaysInRange: true,
                                imageExtent: [479493.765100, 2609625.789300, 515646.072800, 2630556.072700]
                            })
                        });
var lyr_BIO2_63 = new ol.layer.Image({
                            opacity: 1,
                            title: "BIO2",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/BIO2_63.png",
    attributions: ' ',
                                projection: 'EPSG:32645',
                                alwaysInRange: true,
                                imageExtent: [479493.765100, 2609625.789300, 515646.072800, 2630556.072700]
                            })
                        });
var lyr_BIO1_64 = new ol.layer.Image({
                            opacity: 1,
                            title: "BIO1",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/BIO1_64.png",
    attributions: ' ',
                                projection: 'EPSG:32645',
                                alwaysInRange: true,
                                imageExtent: [479493.765100, 2609625.789300, 515646.072800, 2630556.072700]
                            })
                        });
var lyr_Aspect_65 = new ol.layer.Image({
                            opacity: 1,
                            title: "Aspect",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Aspect_65.png",
    attributions: ' ',
                                projection: 'EPSG:32645',
                                alwaysInRange: true,
                                imageExtent: [479518.491400, 2610254.913700, 514779.814200, 2630400.015000]
                            })
                        });
var lyr_AltitudeElevation_66 = new ol.layer.Image({
                            opacity: 1,
                            title: "Altitude (Elevation)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/AltitudeElevation_66.png",
    attributions: ' ',
                                projection: 'EPSG:32645',
                                alwaysInRange: true,
                                imageExtent: [479518.491400, 2610254.913700, 514779.814200, 2630400.015000]
                            })
                        });
var format_OccurrencePointofMagniferaindicaMango_67 = new ol.format.GeoJSON();
var features_OccurrencePointofMagniferaindicaMango_67 = format_OccurrencePointofMagniferaindicaMango_67.readFeatures(json_OccurrencePointofMagniferaindicaMango_67, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32645'});
var jsonSource_OccurrencePointofMagniferaindicaMango_67 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OccurrencePointofMagniferaindicaMango_67.addFeatures(features_OccurrencePointofMagniferaindicaMango_67);
var lyr_OccurrencePointofMagniferaindicaMango_67 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OccurrencePointofMagniferaindicaMango_67, 
                style: style_OccurrencePointofMagniferaindicaMango_67,
                popuplayertitle: "Occurrence Point of Magnifera indica (Mango)",
                interactive: true,
                title: '<img src="styles/legend/OccurrencePointofMagniferaindicaMango_67.png" /> Occurrence Point of Magnifera indica (Mango)'
            });
var format_OccurrencePointofFicusbenghalenisBanyan_68 = new ol.format.GeoJSON();
var features_OccurrencePointofFicusbenghalenisBanyan_68 = format_OccurrencePointofFicusbenghalenisBanyan_68.readFeatures(json_OccurrencePointofFicusbenghalenisBanyan_68, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32645'});
var jsonSource_OccurrencePointofFicusbenghalenisBanyan_68 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OccurrencePointofFicusbenghalenisBanyan_68.addFeatures(features_OccurrencePointofFicusbenghalenisBanyan_68);
var lyr_OccurrencePointofFicusbenghalenisBanyan_68 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OccurrencePointofFicusbenghalenisBanyan_68, 
                style: style_OccurrencePointofFicusbenghalenisBanyan_68,
                popuplayertitle: "Occurrence Point of Ficus benghalenis (Banyan)",
                interactive: true,
                title: '<img src="styles/legend/OccurrencePointofFicusbenghalenisBanyan_68.png" /> Occurrence Point of Ficus benghalenis (Banyan)'
            });
var format_OccurrencePointofCocosnuciferaCoconut_69 = new ol.format.GeoJSON();
var features_OccurrencePointofCocosnuciferaCoconut_69 = format_OccurrencePointofCocosnuciferaCoconut_69.readFeatures(json_OccurrencePointofCocosnuciferaCoconut_69, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32645'});
var jsonSource_OccurrencePointofCocosnuciferaCoconut_69 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OccurrencePointofCocosnuciferaCoconut_69.addFeatures(features_OccurrencePointofCocosnuciferaCoconut_69);
var lyr_OccurrencePointofCocosnuciferaCoconut_69 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OccurrencePointofCocosnuciferaCoconut_69, 
                style: style_OccurrencePointofCocosnuciferaCoconut_69,
                popuplayertitle: "Occurrence Point of Cocos nucifera (Coconut)",
                interactive: true,
                title: '<img src="styles/legend/OccurrencePointofCocosnuciferaCoconut_69.png" /> Occurrence Point of Cocos nucifera (Coconut)'
            });
var format_OccurrencePointofButeamonospermaPalash_70 = new ol.format.GeoJSON();
var features_OccurrencePointofButeamonospermaPalash_70 = format_OccurrencePointofButeamonospermaPalash_70.readFeatures(json_OccurrencePointofButeamonospermaPalash_70, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32645'});
var jsonSource_OccurrencePointofButeamonospermaPalash_70 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OccurrencePointofButeamonospermaPalash_70.addFeatures(features_OccurrencePointofButeamonospermaPalash_70);
var lyr_OccurrencePointofButeamonospermaPalash_70 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OccurrencePointofButeamonospermaPalash_70, 
                style: style_OccurrencePointofButeamonospermaPalash_70,
                popuplayertitle: "Occurrence Point of Butea monosperma (Palash)",
                interactive: true,
                title: '<img src="styles/legend/OccurrencePointofButeamonospermaPalash_70.png" /> Occurrence Point of Butea monosperma (Palash)'
            });
var format_OccurrencePointofAzadirachtaindicaNeem_71 = new ol.format.GeoJSON();
var features_OccurrencePointofAzadirachtaindicaNeem_71 = format_OccurrencePointofAzadirachtaindicaNeem_71.readFeatures(json_OccurrencePointofAzadirachtaindicaNeem_71, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32645'});
var jsonSource_OccurrencePointofAzadirachtaindicaNeem_71 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OccurrencePointofAzadirachtaindicaNeem_71.addFeatures(features_OccurrencePointofAzadirachtaindicaNeem_71);
var lyr_OccurrencePointofAzadirachtaindicaNeem_71 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OccurrencePointofAzadirachtaindicaNeem_71, 
                style: style_OccurrencePointofAzadirachtaindicaNeem_71,
                popuplayertitle: "Occurrence Point of Azadirachta indica (Neem)",
                interactive: true,
                title: '<img src="styles/legend/OccurrencePointofAzadirachtaindicaNeem_71.png" /> Occurrence Point of Azadirachta indica (Neem)'
            });
var format_OccurrencePointofArtocarpusheterophyllusKathal_72 = new ol.format.GeoJSON();
var features_OccurrencePointofArtocarpusheterophyllusKathal_72 = format_OccurrencePointofArtocarpusheterophyllusKathal_72.readFeatures(json_OccurrencePointofArtocarpusheterophyllusKathal_72, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32645'});
var jsonSource_OccurrencePointofArtocarpusheterophyllusKathal_72 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OccurrencePointofArtocarpusheterophyllusKathal_72.addFeatures(features_OccurrencePointofArtocarpusheterophyllusKathal_72);
var lyr_OccurrencePointofArtocarpusheterophyllusKathal_72 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OccurrencePointofArtocarpusheterophyllusKathal_72, 
                style: style_OccurrencePointofArtocarpusheterophyllusKathal_72,
                popuplayertitle: "Occurrence Point of Artocarpus heterophyllus (Kathal)",
                interactive: true,
                title: '<img src="styles/legend/OccurrencePointofArtocarpusheterophyllusKathal_72.png" /> Occurrence Point of Artocarpus heterophyllus (Kathal)'
            });
var format_Study_Area_73 = new ol.format.GeoJSON();
var features_Study_Area_73 = format_Study_Area_73.readFeatures(json_Study_Area_73, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32645'});
var jsonSource_Study_Area_73 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Study_Area_73.addFeatures(features_Study_Area_73);
var lyr_Study_Area_73 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Study_Area_73, 
                style: style_Study_Area_73,
                popuplayertitle: "Study_Area",
                interactive: true,
                title: '<img src="styles/legend/Study_Area_73.png" /> Study_Area'
            });
var group_Shp_Files = new ol.layer.Group({
                                layers: [lyr_OccurrencePointofMagniferaindicaMango_67,lyr_OccurrencePointofFicusbenghalenisBanyan_68,lyr_OccurrencePointofCocosnuciferaCoconut_69,lyr_OccurrencePointofButeamonospermaPalash_70,lyr_OccurrencePointofAzadirachtaindicaNeem_71,lyr_OccurrencePointofArtocarpusheterophyllusKathal_72,lyr_Study_Area_73,],
                                fold: "open",
                                title: "Shp_Files"});
var group_Input_Data_Set = new ol.layer.Group({
                                layers: [lyr_SoilType_40,lyr_Slope_41,lyr_NDVI_42,lyr_NDBI_43,lyr_LULC_44,lyr_LST_45,lyr_BIO19_46,lyr_BIO18_47,lyr_BIO17_48,lyr_BIO16_49,lyr_BIO15_50,lyr_BIO14_51,lyr_BIO13_52,lyr_BIO12_53,lyr_BIO11_54,lyr_BIO10_55,lyr_BIO9_56,lyr_BIO8_57,lyr_BIO7_58,lyr_BIO6_59,lyr_BIO5_60,lyr_BIO4_61,lyr_BIO3_62,lyr_BIO2_63,lyr_BIO1_64,lyr_Aspect_65,lyr_AltitudeElevation_66,],
                                fold: "open",
                                title: "Input_Data_Set"});
var group_Resampled_Data_Set = new ol.layer.Group({
                                layers: [lyr_SoilType_13,lyr_Slope_14,lyr_NDVI_15,lyr_NDBI_16,lyr_LULC_17,lyr_LST_18,lyr_BIO19_19,lyr_BIO18_20,lyr_BIO17_21,lyr_BIO16_22,lyr_BIO15_23,lyr_BIO14_24,lyr_BIO13_25,lyr_BIO12_26,lyr_BIO11_27,lyr_BIO10_28,lyr_BIO9_29,lyr_BIO8_30,lyr_BIO7_31,lyr_BIO6_32,lyr_BIO5_33,lyr_BIO4_34,lyr_BIO3_35,lyr_BIO2_36,lyr_BIO1_37,lyr_Aspect_38,lyr_AltitudeElevation_39,],
                                fold: "open",
                                title: "Resampled_Data_Set"});
var group_Output_Data_Set = new ol.layer.Group({
                                layers: [lyr_ForMangiferaindicaMangoSpecies_1,lyr_HabitatSuitabilityModelingofMangiferaindicaMangoSpecies_2,lyr_ForFicusbenghalensisBanyanSpecies_3,lyr_HabitatSuitabilityModelingofFicusbenghalensisBanyanSpecies_4,lyr_ForCocosnuciferaCoconutSpecies_5,lyr_HabitatSuitabilityModelingofCocosnuciferaCoconutSpecies_6,lyr_ForButeamonospermaPalashSpecies_7,lyr_HabitatSuitabilityModelingofButeamonospermaPalashSpecies_8,lyr_ForAzadirachtaindicaNeemSpecies_9,lyr_HabitatSuitabilityModelingofAzadirachtaindicaNeemSpecies_10,lyr_ForArtocarpusheterophyllusKathalSpecies_11,lyr_HabitatSuitabilityModelingofArtocarpusheterophyllusKathalSpecies_12,],
                                fold: "open",
                                title: "Output_Data_Set"});

lyr_OSMStandard_0.setVisible(true);lyr_ForMangiferaindicaMangoSpecies_1.setVisible(true);lyr_HabitatSuitabilityModelingofMangiferaindicaMangoSpecies_2.setVisible(true);lyr_ForFicusbenghalensisBanyanSpecies_3.setVisible(true);lyr_HabitatSuitabilityModelingofFicusbenghalensisBanyanSpecies_4.setVisible(true);lyr_ForCocosnuciferaCoconutSpecies_5.setVisible(true);lyr_HabitatSuitabilityModelingofCocosnuciferaCoconutSpecies_6.setVisible(true);lyr_ForButeamonospermaPalashSpecies_7.setVisible(true);lyr_HabitatSuitabilityModelingofButeamonospermaPalashSpecies_8.setVisible(true);lyr_ForAzadirachtaindicaNeemSpecies_9.setVisible(true);lyr_HabitatSuitabilityModelingofAzadirachtaindicaNeemSpecies_10.setVisible(true);lyr_ForArtocarpusheterophyllusKathalSpecies_11.setVisible(true);lyr_HabitatSuitabilityModelingofArtocarpusheterophyllusKathalSpecies_12.setVisible(true);lyr_SoilType_13.setVisible(true);lyr_Slope_14.setVisible(true);lyr_NDVI_15.setVisible(true);lyr_NDBI_16.setVisible(true);lyr_LULC_17.setVisible(true);lyr_LST_18.setVisible(true);lyr_BIO19_19.setVisible(true);lyr_BIO18_20.setVisible(true);lyr_BIO17_21.setVisible(true);lyr_BIO16_22.setVisible(true);lyr_BIO15_23.setVisible(true);lyr_BIO14_24.setVisible(true);lyr_BIO13_25.setVisible(true);lyr_BIO12_26.setVisible(true);lyr_BIO11_27.setVisible(true);lyr_BIO10_28.setVisible(true);lyr_BIO9_29.setVisible(true);lyr_BIO8_30.setVisible(true);lyr_BIO7_31.setVisible(true);lyr_BIO6_32.setVisible(true);lyr_BIO5_33.setVisible(true);lyr_BIO4_34.setVisible(true);lyr_BIO3_35.setVisible(true);lyr_BIO2_36.setVisible(true);lyr_BIO1_37.setVisible(true);lyr_Aspect_38.setVisible(true);lyr_AltitudeElevation_39.setVisible(true);lyr_SoilType_40.setVisible(true);lyr_Slope_41.setVisible(true);lyr_NDVI_42.setVisible(true);lyr_NDBI_43.setVisible(true);lyr_LULC_44.setVisible(true);lyr_LST_45.setVisible(true);lyr_BIO19_46.setVisible(true);lyr_BIO18_47.setVisible(true);lyr_BIO17_48.setVisible(true);lyr_BIO16_49.setVisible(true);lyr_BIO15_50.setVisible(true);lyr_BIO14_51.setVisible(true);lyr_BIO13_52.setVisible(true);lyr_BIO12_53.setVisible(true);lyr_BIO11_54.setVisible(true);lyr_BIO10_55.setVisible(true);lyr_BIO9_56.setVisible(true);lyr_BIO8_57.setVisible(true);lyr_BIO7_58.setVisible(true);lyr_BIO6_59.setVisible(true);lyr_BIO5_60.setVisible(true);lyr_BIO4_61.setVisible(true);lyr_BIO3_62.setVisible(true);lyr_BIO2_63.setVisible(true);lyr_BIO1_64.setVisible(true);lyr_Aspect_65.setVisible(true);lyr_AltitudeElevation_66.setVisible(true);lyr_OccurrencePointofMagniferaindicaMango_67.setVisible(true);lyr_OccurrencePointofFicusbenghalenisBanyan_68.setVisible(true);lyr_OccurrencePointofCocosnuciferaCoconut_69.setVisible(true);lyr_OccurrencePointofButeamonospermaPalash_70.setVisible(true);lyr_OccurrencePointofAzadirachtaindicaNeem_71.setVisible(true);lyr_OccurrencePointofArtocarpusheterophyllusKathal_72.setVisible(true);lyr_Study_Area_73.setVisible(true);
var layersList = [lyr_OSMStandard_0,group_Output_Data_Set,group_Resampled_Data_Set,group_Input_Data_Set,group_Shp_Files];
lyr_ForMangiferaindicaMangoSpecies_1.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'Habitat Suitability of Mangifera indica (Mango) Species': 'Habitat Suitability of Mangifera indica (Mango) Species', });
lyr_ForFicusbenghalensisBanyanSpecies_3.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'Habitat Suitability of Ficus benghalensis (Banyan) Species': 'Habitat Suitability of Ficus benghalensis (Banyan) Species', });
lyr_ForCocosnuciferaCoconutSpecies_5.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'Habitat Suitability  of Cocos nucifera (Coconut) Species': 'Habitat Suitability  of Cocos nucifera (Coconut) Species', });
lyr_ForButeamonospermaPalashSpecies_7.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'Habitat Suitability For Butea monosperma (Palash) Species': 'Habitat Suitability For Butea monosperma (Palash) Species', });
lyr_ForAzadirachtaindicaNeemSpecies_9.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'Habitat Suitability For Azadirachta indica (Neem) Species': 'Habitat Suitability For Azadirachta indica (Neem) Species', });
lyr_ForArtocarpusheterophyllusKathalSpecies_11.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'Habitat Suitability For Artocarpus heterophyllus (Kathal) Species': 'Habitat Suitability For Artocarpus heterophyllus (Kathal) Species', });
lyr_SoilType_40.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'Soil Type': 'Soil Type', });
lyr_LULC_44.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'Land Use': 'Land Use', });
lyr_OccurrencePointofMagniferaindicaMango_67.set('fieldAliases', {'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_OccurrencePointofFicusbenghalenisBanyan_68.set('fieldAliases', {'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_OccurrencePointofCocosnuciferaCoconut_69.set('fieldAliases', {'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_OccurrencePointofButeamonospermaPalash_70.set('fieldAliases', {'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_OccurrencePointofAzadirachtaindicaNeem_71.set('fieldAliases', {'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_OccurrencePointofArtocarpusheterophyllusKathal_72.set('fieldAliases', {'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_Study_Area_73.set('fieldAliases', {'Municipal': 'Municipal', 'Area': 'Area', });
lyr_ForMangiferaindicaMangoSpecies_1.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', 'Habitat Suitability of Mangifera indica (Mango) Species': 'TextEdit', });
lyr_ForFicusbenghalensisBanyanSpecies_3.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', 'Habitat Suitability of Ficus benghalensis (Banyan) Species': 'TextEdit', });
lyr_ForCocosnuciferaCoconutSpecies_5.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', 'Habitat Suitability  of Cocos nucifera (Coconut) Species': 'TextEdit', });
lyr_ForButeamonospermaPalashSpecies_7.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', 'Habitat Suitability For Butea monosperma (Palash) Species': 'TextEdit', });
lyr_ForAzadirachtaindicaNeemSpecies_9.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', 'Habitat Suitability For Azadirachta indica (Neem) Species': '', });
lyr_ForArtocarpusheterophyllusKathalSpecies_11.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', 'Habitat Suitability For Artocarpus heterophyllus (Kathal) Species': 'TextEdit', });
lyr_SoilType_40.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', 'Soil Type': 'TextEdit', });
lyr_LULC_44.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', 'Land Use': 'TextEdit', });
lyr_OccurrencePointofMagniferaindicaMango_67.set('fieldImages', {'Latitude': '', 'Longitude': '', });
lyr_OccurrencePointofFicusbenghalenisBanyan_68.set('fieldImages', {'Latitude': '', 'Longitude': '', });
lyr_OccurrencePointofCocosnuciferaCoconut_69.set('fieldImages', {'Latitude': '', 'Longitude': '', });
lyr_OccurrencePointofButeamonospermaPalash_70.set('fieldImages', {'Latitude': '', 'Longitude': '', });
lyr_OccurrencePointofAzadirachtaindicaNeem_71.set('fieldImages', {'Latitude': '', 'Longitude': '', });
lyr_OccurrencePointofArtocarpusheterophyllusKathal_72.set('fieldImages', {'Latitude': '', 'Longitude': '', });
lyr_Study_Area_73.set('fieldImages', {'Municipal': 'TextEdit', 'Area': 'TextEdit', });
lyr_ForMangiferaindicaMangoSpecies_1.set('fieldLabels', {'fid': 'hidden field', 'DN': 'hidden field', 'Habitat Suitability of Mangifera indica (Mango) Species': 'inline label - visible with data', });
lyr_ForFicusbenghalensisBanyanSpecies_3.set('fieldLabels', {'fid': 'hidden field', 'DN': 'hidden field', 'Habitat Suitability of Ficus benghalensis (Banyan) Species': 'inline label - visible with data', });
lyr_ForCocosnuciferaCoconutSpecies_5.set('fieldLabels', {'fid': 'hidden field', 'DN': 'hidden field', 'Habitat Suitability  of Cocos nucifera (Coconut) Species': 'inline label - visible with data', });
lyr_ForButeamonospermaPalashSpecies_7.set('fieldLabels', {'fid': 'hidden field', 'DN': 'hidden field', 'Habitat Suitability For Butea monosperma (Palash) Species': 'inline label - visible with data', });
lyr_ForAzadirachtaindicaNeemSpecies_9.set('fieldLabels', {'fid': 'hidden field', 'DN': 'hidden field', 'Habitat Suitability For Azadirachta indica (Neem) Species': 'inline label - visible with data', });
lyr_ForArtocarpusheterophyllusKathalSpecies_11.set('fieldLabels', {'fid': 'hidden field', 'DN': 'hidden field', 'Habitat Suitability For Artocarpus heterophyllus (Kathal) Species': 'inline label - visible with data', });
lyr_SoilType_40.set('fieldLabels', {'fid': 'hidden field', 'DN': 'hidden field', 'Soil Type': 'inline label - visible with data', });
lyr_LULC_44.set('fieldLabels', {'fid': 'hidden field', 'DN': 'hidden field', 'Land Use': 'inline label - visible with data', });
lyr_OccurrencePointofMagniferaindicaMango_67.set('fieldLabels', {'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', });
lyr_OccurrencePointofFicusbenghalenisBanyan_68.set('fieldLabels', {'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', });
lyr_OccurrencePointofCocosnuciferaCoconut_69.set('fieldLabels', {'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', });
lyr_OccurrencePointofButeamonospermaPalash_70.set('fieldLabels', {'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', });
lyr_OccurrencePointofAzadirachtaindicaNeem_71.set('fieldLabels', {'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', });
lyr_OccurrencePointofArtocarpusheterophyllusKathal_72.set('fieldLabels', {'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', });
lyr_Study_Area_73.set('fieldLabels', {'Municipal': 'inline label - visible with data', 'Area': 'inline label - visible with data', });
lyr_Study_Area_73.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});