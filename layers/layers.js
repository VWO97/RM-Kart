ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32632").setExtent([626050.819511, 6658883.601984, 648070.502251, 6674959.566014]);
var wms_layers = [];

var lyr_Topografisknorgeskart4_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://openwms.statkart.no/skwms1/wms.topo4",
    attributions: ' ',
                              params: {
                                "LAYERS": "topo4_WMS",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Topografisk norgeskart 4",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Topografisknorgeskart4_0, 0]);
var lyr_VA_Nes_kommune_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://wms.gisline.no/wms-nes",
    attributions: ' ',
                              params: {
                                "LAYERS": "VA_Nes_kommune",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: "VA_Nes_kommune",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_VA_Nes_kommune_1, 0]);
var lyr_Aarnes_vannverk_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://wms.gisline.no/wms-nes",
    attributions: ' ',
                              params: {
                                "LAYERS": "Aarnes_vannverk",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: "Aarnes_vannverk",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Aarnes_vannverk_2, 0]);

lyr_Topografisknorgeskart4_0.setVisible(true);lyr_VA_Nes_kommune_1.setVisible(true);lyr_Aarnes_vannverk_2.setVisible(true);
var layersList = [lyr_Topografisknorgeskart4_0,lyr_VA_Nes_kommune_1,lyr_Aarnes_vannverk_2];
