;FLAVOR:UltiGCode
;TIME:0
;MATERIAL:0
;MATERIAL2:0
;NOZZLE_DIAMETER:0.4
;Generated with Cura_SteamEngine 3.5.0
M82 ;absolute extrusion mode

G92 E0
G10
;LAYER_COUNT:0
M107
;Version _2.6 of the firmware can abort the print too early if the file ends
;too soon. However if the file hasn't ended yet because there are comments at
;the end of the file, it won't abort yet. Therefore we have to put at least 512
;bytes at the end of the g-code so that the file is not yet finished by the
;time that the motion planner gets flushed. With firmware version _3.3 this
;should be fixed, so this comment wouldn't be necessary any more. Now we have
;to pad this text to make precisely 512 bytes.
M82 ;absolute extrusion mode
;End of Gcode
