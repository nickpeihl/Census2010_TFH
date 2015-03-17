var fs = require('fs');
var shp2stl = require('shp2stl');

var file = 'Census2010_TFH.shp';

shp2stl.shp2stl(file,
                {
                  width: 100, //in STL arbitrary units, but typically 3D printers use mm
                  height: 10,
                  extraBaseHeight: 0,
                  extrudeBy: "POP10",
                  simplification: .8,

                  binary: true,
                  cutoutHoles: false,
                  verbose: true,
                  extrusionMode: 'straight'
                },
                function(err, stl) {
                  fs.writeFileSync('Census2010_TFH.stl',  stl);
                }
               );
