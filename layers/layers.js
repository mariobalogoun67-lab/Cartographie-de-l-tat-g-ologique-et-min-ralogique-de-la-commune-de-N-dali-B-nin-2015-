var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_Dcoupmasque_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Découpé (masque)<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Dcoupmasque_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [228864.146613, 1048558.252732, 313240.218199, 1117670.043190]
        })
    });
var format_Cheflieuarrondissement_2 = new ol.format.GeoJSON();
var features_Cheflieuarrondissement_2 = format_Cheflieuarrondissement_2.readFeatures(json_Cheflieuarrondissement_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cheflieuarrondissement_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cheflieuarrondissement_2.addFeatures(features_Cheflieuarrondissement_2);
var lyr_Cheflieuarrondissement_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cheflieuarrondissement_2, 
                style: style_Cheflieuarrondissement_2,
                popuplayertitle: 'Chef lieu arrondissement',
                interactive: true,
                title: '<img src="styles/legend/Cheflieuarrondissement_2.png" /> Chef lieu arrondissement'
            });
var format_Ndali_3 = new ol.format.GeoJSON();
var features_Ndali_3 = format_Ndali_3.readFeatures(json_Ndali_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ndali_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ndali_3.addFeatures(features_Ndali_3);
var lyr_Ndali_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ndali_3, 
                style: style_Ndali_3,
                popuplayertitle: 'N\'dali',
                interactive: true,
                title: '<img src="styles/legend/Ndali_3.png" /> N\'dali'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Dcoupmasque_1.setVisible(true);lyr_Cheflieuarrondissement_2.setVisible(true);lyr_Ndali_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Dcoupmasque_1,lyr_Cheflieuarrondissement_2,lyr_Ndali_3];
lyr_Cheflieuarrondissement_2.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'ARROND_L': 'ARROND_L', 'ARROND_C': 'ARROND_C', 'ARROND_L_A': 'ARROND_L_A', 'DENSITE': 'DENSITE', 'Z_PROJET_C': 'Z_PROJET_C', 'pop': 'pop', 'km': 'km', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Ndali_3.set('fieldAliases', {'ID_': 'ID_', 'NAME1_': 'NAME1_', 'PARTS_': 'PARTS_', 'POINTS_': 'POINTS_', 'LENGTH_': 'LENGTH_', 'AREA_': 'AREA_', 'CUTTURE': 'CUTTURE', 'P_CULT': 'P_CULT', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'HECTARES': 'HECTARES', 'DIVISION_T': 'DIVISION_T', 'DéPARTEME': 'DéPARTEME', 'Population': 'Population', 'Comm': 'Comm', });
lyr_Cheflieuarrondissement_2.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'ARROND_L': 'TextEdit', 'ARROND_C': 'TextEdit', 'ARROND_L_A': 'TextEdit', 'DENSITE': 'TextEdit', 'Z_PROJET_C': 'TextEdit', 'pop': 'TextEdit', 'km': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Ndali_3.set('fieldImages', {'ID_': 'TextEdit', 'NAME1_': 'TextEdit', 'PARTS_': 'Range', 'POINTS_': 'Range', 'LENGTH_': 'TextEdit', 'AREA_': 'TextEdit', 'CUTTURE': 'TextEdit', 'P_CULT': 'Range', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'HECTARES': 'TextEdit', 'DIVISION_T': 'TextEdit', 'DéPARTEME': 'TextEdit', 'Population': 'TextEdit', 'Comm': 'TextEdit', });
lyr_Cheflieuarrondissement_2.set('fieldLabels', {'OBJECTID_1': 'no label', 'ARROND_L': 'header label - always visible', 'ARROND_C': 'no label', 'ARROND_L_A': 'no label', 'DENSITE': 'no label', 'Z_PROJET_C': 'no label', 'pop': 'no label', 'km': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Ndali_3.set('fieldLabels', {'ID_': 'no label', 'NAME1_': 'header label - always visible', 'PARTS_': 'no label', 'POINTS_': 'no label', 'LENGTH_': 'no label', 'AREA_': 'no label', 'CUTTURE': 'no label', 'P_CULT': 'no label', 'AREA': 'no label', 'PERIMETER': 'header label - always visible', 'HECTARES': 'header label - always visible', 'DIVISION_T': 'no label', 'DéPARTEME': 'header label - always visible', 'Population': 'header label - always visible', 'Comm': 'no label', });
lyr_Ndali_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});