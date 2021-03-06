'use strict';

angular.module('longCalculatorApp')
 .factory('windowsFactory', function() {
    return {
        newWindow : function(nameWindow, widthWindow, heightWindow, wallLossWindow, numberFramesWindow, lineWindow) {
            var summandSocaloFijo = 0;
            var summandSocaloCorredizo = 0;
            var summandCabezalFijo = 0;
            var summandCabezalCorredizo = 0;
            
            var subtrahendRielSuperior = 0;
            var subtrahendRielInferior = 0;
            var subtrahendPierna = 0;
            var subtrahendGancho = 0;
            
            var rielSuperiorQuantity = 1;
            var rielInferiorQuantity = 1;
            var jambaQuantity = 2;
            var piernaQuantity = 0;
            var ganchoQuantity = 0;
            var cabezalFijoQuantity = 0;
            var cabezalCorredizoQuantity = 0;
            var socaloFijoQuantity = 0;
            var socaloCorredizoQuantity = 0;
            
            var cabezalFijoEquation = 's';
            var socaloFijoEquation = 's';
            
            if(lineWindow == "Linea 20") {
                subtrahendRielSuperior = 12;
                subtrahendRielInferior = 12;
                subtrahendPierna = 24;
                subtrahendGancho = 24;
                
                if(numberFramesWindow == "2") {
                    summandCabezalCorredizo = 6;
                    summandSocaloCorredizo = 6;
                }
                else if(numberFramesWindow == "3") {
                    summandCabezalFijo = 3;
                    summandCabezalCorredizo = 10;
                    summandSocaloFijo = 3;
                    summandSocaloCorredizo = 10;
                    
                    cabezalFijoEquation = 'Cabezal Corredizo + ' + summandCabezalFijo;
                    socaloFijoEquation = 'Socalo Corredizo + ' + summandSocaloFijo;
                }
                else if(numberFramesWindow == "4") {
                    summandCabezalCorredizo = 5;
                    summandSocaloCorredizo = 5;
                }
            }
            else if(lineWindow == "Linea 25") {
                subtrahendRielSuperior = 18;
                subtrahendRielInferior = 18;
                subtrahendPierna = 33;
                subtrahendGancho = 33;
                
                if(numberFramesWindow == "2") {
                    summandCabezalCorredizo = 13;
                    summandSocaloCorredizo = 13;
                }
                else if(numberFramesWindow == "3") {
                    summandCabezalFijo = -3;
                    summandCabezalCorredizo = 21;
                    summandSocaloFijo = -3;
                    summandSocaloCorredizo = 21;
                    
                    cabezalFijoEquation = 'Cabezal Corredizo ' + summandCabezalFijo;
                    socaloFijoEquation = 'Socalo Corredizo ' + summandSocaloFijo;
                }
                else if(numberFramesWindow == "4") {
                    summandCabezalCorredizo = 11;
                    summandSocaloCorredizo = 11;
                }
            }
            
            if(numberFramesWindow == "2") {
                piernaQuantity = 2;
                ganchoQuantity = 2;
                cabezalFijoQuantity = 1;
                cabezalCorredizoQuantity = 1;
                socaloFijoQuantity = 1;
                socaloCorredizoQuantity = 1;
                
                cabezalFijoEquation = '(Riel Superior / ' + numberFramesWindow + ') + ' + summandCabezalCorredizo;
                socaloFijoEquation = '(Riel Superior / ' + numberFramesWindow + ') + ' + summandSocaloCorredizo;
            }
            else if(numberFramesWindow == "3") {
                piernaQuantity = 2;
                ganchoQuantity = 4;
                cabezalFijoQuantity = 1;
                cabezalCorredizoQuantity = 2;
                socaloFijoQuantity = 1;
                socaloCorredizoQuantity = 2;
            }
            else if(numberFramesWindow == "4") {
                piernaQuantity = 4;
                ganchoQuantity = 4;
                cabezalFijoQuantity = 4;
                socaloFijoQuantity = 4;
                cabezalFijoQuantity = 2;
                cabezalCorredizoQuantity = 2;
                socaloFijoQuantity = 2;
                socaloCorredizoQuantity = 2;
                
                cabezalFijoEquation = '(Riel Superior / ' + numberFramesWindow + ') + ' + summandCabezalCorredizo;
                socaloFijoEquation = '(Riel Superior / ' + numberFramesWindow + ') + ' + summandSocaloCorredizo;
            }
            
            return {
                name : nameWindow,
                width : widthWindow,
                height : heightWindow,
                wallLoss : wallLossWindow,
                line : lineWindow,
                numberFrames : numberFramesWindow,
                rielSuperior : {
                    long: widthWindow - wallLossWindow - subtrahendRielSuperior,
                    quantity: rielSuperiorQuantity,
                    equation: 'Ancho - Perdida por Pared - ' + subtrahendRielSuperior
                },
                rielInferior : {
                    long: widthWindow - wallLossWindow -subtrahendRielInferior,
                    quantity: rielInferiorQuantity,
                    equation: 'Ancho - Perdida por Pared - ' + subtrahendRielInferior
                },
                jamba : {
                    long: heightWindow - wallLossWindow,
                    quantity: jambaQuantity,
                    equation: 'Alto - Perdida por Pared'
                },
                pierna : {
                    long: heightWindow - wallLossWindow - subtrahendPierna,
                    quantity: piernaQuantity,
                    equation: 'Jamba - ' + subtrahendPierna
                },
                gancho : {
                    long: heightWindow - wallLossWindow - subtrahendGancho,
                    quantity: ganchoQuantity,
                    equation: 'Jamba - ' + subtrahendGancho
                },
                cabezalFijo : {
                    long: parseFloat((((widthWindow - wallLossWindow - subtrahendRielSuperior) / numberFramesWindow) + summandCabezalCorredizo + summandCabezalFijo).toFixed(1)/1),
                    quantity: cabezalFijoQuantity,
                    equation: cabezalFijoEquation
                },
                cabezalCorredizo : {
                    long: (((widthWindow - wallLossWindow - subtrahendRielSuperior) / numberFramesWindow) + summandCabezalCorredizo).toFixed(1)/1,
                    quantity: cabezalCorredizoQuantity,
                    equation: '(Riel Superior / ' + numberFramesWindow + ') + ' + summandCabezalCorredizo
                },
                socaloFijo : {
                    long: (((widthWindow - wallLossWindow - subtrahendRielSuperior) / numberFramesWindow) + summandSocaloCorredizo + summandSocaloFijo).toFixed(1)/1,
                    quantity: socaloFijoQuantity,
                    equation: socaloFijoEquation
                },
                socaloCorredizo : {
                    long: (((widthWindow - wallLossWindow - subtrahendRielSuperior) / numberFramesWindow) + summandSocaloCorredizo).toFixed(1)/1,
                    quantity: socaloCorredizoQuantity,
                    equation: '(Riel Superior / ' + numberFramesWindow + ') + ' + summandSocaloCorredizo
                }
            };
        }
    };
});