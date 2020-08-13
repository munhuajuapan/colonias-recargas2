var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_agenciasycolonias_1 = new ol.format.GeoJSON();
var features_agenciasycolonias_1 = format_agenciasycolonias_1.readFeatures(json_agenciasycolonias_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_agenciasycolonias_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_agenciasycolonias_1.addFeatures(features_agenciasycolonias_1);
var lyr_agenciasycolonias_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_agenciasycolonias_1, 
                style: style_agenciasycolonias_1,
                interactive: true,
                title: '<img src="styles/legend/agenciasycolonias_1.png" /> agencias y colonias'
            });
var format_ZonasdeRecargaBajas_2 = new ol.format.GeoJSON();
var features_ZonasdeRecargaBajas_2 = format_ZonasdeRecargaBajas_2.readFeatures(json_ZonasdeRecargaBajas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZonasdeRecargaBajas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZonasdeRecargaBajas_2.addFeatures(features_ZonasdeRecargaBajas_2);
var lyr_ZonasdeRecargaBajas_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZonasdeRecargaBajas_2, 
                style: style_ZonasdeRecargaBajas_2,
                interactive: true,
                title: '<img src="styles/legend/ZonasdeRecargaBajas_2.png" /> Zonas de Recarga Bajas '
            });
var format_ZonasdeRecargaMedias_3 = new ol.format.GeoJSON();
var features_ZonasdeRecargaMedias_3 = format_ZonasdeRecargaMedias_3.readFeatures(json_ZonasdeRecargaMedias_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZonasdeRecargaMedias_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZonasdeRecargaMedias_3.addFeatures(features_ZonasdeRecargaMedias_3);
var lyr_ZonasdeRecargaMedias_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZonasdeRecargaMedias_3, 
                style: style_ZonasdeRecargaMedias_3,
                interactive: true,
                title: '<img src="styles/legend/ZonasdeRecargaMedias_3.png" /> Zonas de Recarga Medias '
            });
var format_ZonasdeRecargaMuyBajas_4 = new ol.format.GeoJSON();
var features_ZonasdeRecargaMuyBajas_4 = format_ZonasdeRecargaMuyBajas_4.readFeatures(json_ZonasdeRecargaMuyBajas_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZonasdeRecargaMuyBajas_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZonasdeRecargaMuyBajas_4.addFeatures(features_ZonasdeRecargaMuyBajas_4);
var lyr_ZonasdeRecargaMuyBajas_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZonasdeRecargaMuyBajas_4, 
                style: style_ZonasdeRecargaMuyBajas_4,
                interactive: true,
                title: '<img src="styles/legend/ZonasdeRecargaMuyBajas_4.png" /> Zonas de Recarga Muy Bajas '
            });
var format_zonas_de_recarga_afectadas_5 = new ol.format.GeoJSON();
var features_zonas_de_recarga_afectadas_5 = format_zonas_de_recarga_afectadas_5.readFeatures(json_zonas_de_recarga_afectadas_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zonas_de_recarga_afectadas_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zonas_de_recarga_afectadas_5.addFeatures(features_zonas_de_recarga_afectadas_5);
var lyr_zonas_de_recarga_afectadas_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_zonas_de_recarga_afectadas_5, 
                style: style_zonas_de_recarga_afectadas_5,
                interactive: true,
                title: '<img src="styles/legend/zonas_de_recarga_afectadas_5.png" /> zonas_de_recarga_afectadas'
            });
var format_Zonas_de_Recarga_Altas_6 = new ol.format.GeoJSON();
var features_Zonas_de_Recarga_Altas_6 = format_Zonas_de_Recarga_Altas_6.readFeatures(json_Zonas_de_Recarga_Altas_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zonas_de_Recarga_Altas_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zonas_de_Recarga_Altas_6.addFeatures(features_Zonas_de_Recarga_Altas_6);
var lyr_Zonas_de_Recarga_Altas_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Zonas_de_Recarga_Altas_6, 
                style: style_Zonas_de_Recarga_Altas_6,
                interactive: true,
                title: '<img src="styles/legend/Zonas_de_Recarga_Altas_6.png" /> Zonas_de_Recarga_Altas'
            });
var format_ZonasdeRecargaMuyAltas_7 = new ol.format.GeoJSON();
var features_ZonasdeRecargaMuyAltas_7 = format_ZonasdeRecargaMuyAltas_7.readFeatures(json_ZonasdeRecargaMuyAltas_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZonasdeRecargaMuyAltas_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZonasdeRecargaMuyAltas_7.addFeatures(features_ZonasdeRecargaMuyAltas_7);
var lyr_ZonasdeRecargaMuyAltas_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZonasdeRecargaMuyAltas_7, 
                style: style_ZonasdeRecargaMuyAltas_7,
                interactive: true,
                title: '<img src="styles/legend/ZonasdeRecargaMuyAltas_7.png" /> Zonas de Recarga Muy Altas '
            });

lyr_OSMStandard_0.setVisible(true);lyr_agenciasycolonias_1.setVisible(false);lyr_ZonasdeRecargaBajas_2.setVisible(false);lyr_ZonasdeRecargaMedias_3.setVisible(false);lyr_ZonasdeRecargaMuyBajas_4.setVisible(false);lyr_zonas_de_recarga_afectadas_5.setVisible(false);lyr_Zonas_de_Recarga_Altas_6.setVisible(false);lyr_ZonasdeRecargaMuyAltas_7.setVisible(false);
var layersList = [lyr_OSMStandard_0,lyr_agenciasycolonias_1,lyr_ZonasdeRecargaBajas_2,lyr_ZonasdeRecargaMedias_3,lyr_ZonasdeRecargaMuyBajas_4,lyr_zonas_de_recarga_afectadas_5,lyr_Zonas_de_Recarga_Altas_6,lyr_ZonasdeRecargaMuyAltas_7];
lyr_agenciasycolonias_1.set('fieldAliases', {'AGENCIA': 'AGENCIA', 'CATEGO': 'CATEGO', 'COLONIA': 'COLONIA', 'CATEG': 'CATEG', 'BENEFICIRI': 'BENEFICIRI', 'ZONA': 'ZONA', 'VALOR': 'VALOR', 'OID_1': 'OID_1', });
lyr_ZonasdeRecargaBajas_2.set('fieldAliases', {'Id': 'Id', 'SUPERFICIE': 'SUPERFICIE', });
lyr_ZonasdeRecargaMedias_3.set('fieldAliases', {'Id': 'Id', 'SUPERFICIE': 'SUPERFICIE', });
lyr_ZonasdeRecargaMuyBajas_4.set('fieldAliases', {'Id': 'Id', 'SUPERFICIE': 'SUPERFICIE', });
lyr_zonas_de_recarga_afectadas_5.set('fieldAliases', {'Id': 'Id', 'SUPERFICIE': 'SUPERFICIE', });
lyr_Zonas_de_Recarga_Altas_6.set('fieldAliases', {'Id': 'Id', 'SUPERFICIE': 'SUPERFICIE', });
lyr_ZonasdeRecargaMuyAltas_7.set('fieldAliases', {'Id': 'Id', 'SUPERFICIE': 'SUPERFICIE', });
lyr_agenciasycolonias_1.set('fieldImages', {'AGENCIA': 'TextEdit', 'CATEGO': 'TextEdit', 'COLONIA': 'TextEdit', 'CATEG': 'TextEdit', 'BENEFICIRI': 'Range', 'ZONA': 'TextEdit', 'VALOR': 'TextEdit', 'OID_1': 'Range', });
lyr_ZonasdeRecargaBajas_2.set('fieldImages', {'Id': '', 'SUPERFICIE': '', });
lyr_ZonasdeRecargaMedias_3.set('fieldImages', {'Id': '', 'SUPERFICIE': '', });
lyr_ZonasdeRecargaMuyBajas_4.set('fieldImages', {'Id': '', 'SUPERFICIE': '', });
lyr_zonas_de_recarga_afectadas_5.set('fieldImages', {'Id': '', 'SUPERFICIE': '', });
lyr_Zonas_de_Recarga_Altas_6.set('fieldImages', {'Id': '', 'SUPERFICIE': '', });
lyr_ZonasdeRecargaMuyAltas_7.set('fieldImages', {'Id': '', 'SUPERFICIE': '', });
lyr_agenciasycolonias_1.set('fieldLabels', {'AGENCIA': 'no label', 'CATEGO': 'no label', 'COLONIA': 'inline label', 'CATEG': 'no label', 'BENEFICIRI': 'no label', 'ZONA': 'no label', 'VALOR': 'no label', 'OID_1': 'no label', });
lyr_ZonasdeRecargaBajas_2.set('fieldLabels', {'Id': 'no label', 'SUPERFICIE': 'no label', });
lyr_ZonasdeRecargaMedias_3.set('fieldLabels', {'Id': 'no label', 'SUPERFICIE': 'no label', });
lyr_ZonasdeRecargaMuyBajas_4.set('fieldLabels', {'Id': 'header label', 'SUPERFICIE': 'no label', });
lyr_zonas_de_recarga_afectadas_5.set('fieldLabels', {'Id': 'no label', 'SUPERFICIE': 'no label', });
lyr_Zonas_de_Recarga_Altas_6.set('fieldLabels', {'Id': 'header label', 'SUPERFICIE': 'header label', });
lyr_ZonasdeRecargaMuyAltas_7.set('fieldLabels', {'Id': 'no label', 'SUPERFICIE': 'inline label', });
lyr_ZonasdeRecargaMuyAltas_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});