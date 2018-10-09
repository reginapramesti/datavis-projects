// title      : World
// author     : Derrick Oswald
// license    : Public Domain
// description: a globe
// date       : 22.12.2013
// file       : globe.jscad

include('maths_geodesic.jscad');

// Small scale world data from http://www.naturalearthdata.com converted to GeoJSON with QGIS (http://www.qgis.org/.)
var Globe = {
  'type': 'FeatureCollection',
  'features': [
    { 'type': 'Feature', 'properties': { 'scalerank': 0, 'featurecla': 'Coastline' }, 'geometry': { 'type': 'MultiPolygon', 'coordinates': [ [ -180.0, -84.71338 ], [ -179.942499356179042, -84.721443373552503 ], [ -179.058677334691168, -84.139411716649136 ], [ -177.2567718171058, -84.452932631363922 ], [ -176.084672818077706, -84.099259128758348 ], [ -175.829882168662607, -84.117914320815714 ], [ -174.382502814815666, -84.534323012223638 ], [ -173.116559414745495, -84.117914320815714 ], [ -172.889105598012804, -84.06101856886238 ], [ -169.951222907571378, -83.884646905450211 ], [ -168.999988980158719, -84.117914320815714 ], [ -168.530198534193289, -84.237390232274535 ], [ -167.022099372403432, -84.570496514827937 ], [ -164.182143521155098, -84.825209649594598 ], [ -161.929774543281468, -85.138730564309384 ], [ -158.071379564424888, -85.373910007669707 ], [ -155.192252977499322, -85.099559828632152 ], [ -150.942098965438049, -85.295516859882923 ], [ -148.533072883071611, -85.609037774597738 ], [ -145.888919033777199, -85.315102227721567 ], [ -143.107719286044727, -85.040752048683999 ], [ -142.892280239819883, -84.570496514827937 ], [ -146.829068366463247, -84.531274102718413 ], [ -150.060731574483981, -84.296146335790382 ], [ -150.902928229760789, -83.904232273288827 ], [ -153.586201138300169, -83.688689874199397 ], [ -153.409906989536438, -83.238019708182009 ], [ -153.037759162386521, -82.826520277841809 ], [ -152.665637173452751, -82.454191583178854 ], [ -152.861516690055083, -82.042692152838669 ], [ -154.526298794553924, -81.768393650233406 ], [ -155.290179816692415, -81.415650323409054 ], [ -156.837449714159533, -81.102129408694282 ], [ -154.408786587522229, -81.16093718864245 ], [ -152.097661506132766, -81.004150893068882 ], [ -150.648292609642596, -81.337308852054591 ], [ -148.865998298112032, -81.04337330517842 ], [ -147.220749885019501, -80.671044610515466 ], [ -146.41774980363607, -80.33793832796205 ], [ -146.770286424731239, -79.926438897621864 ], [ -148.062946540296309, -79.652088718584309 ], [ -149.53190080462511, -79.358204848140431 ], [ -151.588416104112497, -79.299397068192278 ], [ -153.390321621697836, -79.162247816889646 ], [ -155.329376390585793, -79.064269301264247 ], [ -155.975667691044123, -78.691940606601307 ], [ -157.268301968393018, -78.378419691886506 ], [ -158.051768358370111, -78.025676365062182 ], [ -158.365134243788049, -76.889208266099303 ], [ -157.875474209606409, -76.98723845815698 ], [ -156.974573127246032, -77.300759372871781 ], [ -155.329376390585793, -77.202729180814103 ], [ -153.742832404576831, -77.065579929511472 ], [ -152.920246955354799, -77.496664727690273 ], [ -151.333780483994303, -77.39873788849718 ], [ -150.001949632751973, -77.183143812975473 ], [ -148.748486091080309, -76.908845310370211 ], [ -147.612483080008047, -76.575739027816795 ], [ -146.104409756434308, -76.477760512191409 ], [ -146.143528815679247, -76.105431817528455 ], [ -146.496091274990562, -75.733154799297807 ], [ -146.202310757411254, -75.380411472473469 ], [ -144.909624803630038, -75.204039809061314 ], [ -144.322037930255306, -75.537197768047022 ], [ -142.79435340062679, -75.341240736796237 ], [ -141.638765021715926, -75.086475925597298 ], [ -140.209007331280503, -75.066890557758683 ], [ -138.8575911121996, -74.968912042133283 ], [ -137.506200731334815, -74.733784275205267 ], [ -136.428902147346122, -74.518241876115866 ], [ -135.214583503135543, -74.302699477026451 ], [ -134.431194627806889, -74.361455580542312 ], [ -133.745655077022889, -74.439848728329082 ], [ -132.257167121287779, -74.302699477026451 ], [ -130.925310431829303, -74.479019464006328 ], [ -129.554283006693623, -74.459434096167712 ], [ -128.242037523289923, -74.322284844865067 ], [ -126.890621304209006, -74.420263360490466 ], [ -125.402081672041589, -74.518241876115866 ], [ -124.011494717283426, -74.479019464006328 ], [ -122.562151659009402, -74.498604831844943 ], [ -121.073612026841985, -74.518241876115866 ], [ -119.702558763490146, -74.479019464006328 ], [ -118.684145474098045, -74.185083917130157 ], [ -117.469800991671335, -74.028349297988896 ], [ -116.216311611783496, -74.243891697078297 ], [ -115.021552497195387, -74.067520033666142 ], [ -113.944331427855118, -73.714828383274096 ], [ -113.29798845096451, -74.028349297988896 ], [ -112.945451829869356, -74.381040948380928 ], [ -112.29908301476263, -74.714198907366637 ], [ -111.261058519315753, -74.420263360490466 ], [ -110.06632524294379, -74.792540378721128 ], [ -108.714909023862873, -74.910104262185129 ], [ -107.559346483168127, -75.184454441222684 ], [ -106.149148322355202, -75.125698337706837 ], [ -104.876073574628748, -74.949326674294667 ], [ -103.367948574622716, -74.988497409971899 ], [ -102.016506517325652, -75.125698337706837 ], [ -100.645530768622251, -75.302018324686699 ], [ -100.116699998763366, -74.870933526507898 ], [ -100.763042975653974, -74.537827243954482 ], [ -101.252703009835628, -74.185083917130157 ], [ -102.545337287184552, -74.106742445775666 ], [ -103.113312954504522, -73.734413751112726 ], [ -103.328752000729338, -73.362085056449772 ], [ -103.681288621824493, -72.617531019988462 ], [ -102.917485114334454, -72.754680271291093 ], [ -101.605239630930782, -72.813436374806955 ], [ -100.312527838933406, -72.754680271291093 ], [ -99.137379930400073, -72.911414890432354 ], [ -98.118889126359534, -73.205350437308525 ], [ -97.688036872126048, -73.558042087700557 ], [ -96.336594814828956, -73.61684986764871 ], [ -95.043960537480032, -73.479700616346079 ], [ -93.672907274128207, -73.283743585095294 ], [ -92.439003262078998, -73.166179701631279 ], [ -91.420564134470766, -73.40130746855931 ], [ -90.08873328322845, -73.32291432077254 ], [ -89.226951260113012, -72.558723240040308 ], [ -88.423951178729595, -73.00939340605774 ], [ -87.268336961602586, -73.185765069469909 ], [ -86.014821743498615, -73.087786553844509 ], [ -85.192236294276569, -73.479700616346079 ], [ -83.879990810872897, -73.518871352023325 ], [ -82.665646328446158, -73.636435235487326 ], [ -81.470913052074195, -73.851977634576741 ], [ -80.687446662097102, -73.479700616346079 ], [ -80.295790981756994, -73.126957289521755 ], [ -79.296885545555071, -73.518871352023325 ], [ -77.925858120419377, -73.420892836397925 ], [ -76.907367316378838, -73.636435235487326 ], [ -76.221879442027145, -73.969541518040742 ], [ -74.890048590784843, -73.871614678847649 ], [ -73.852024095337981, -73.656020603325956 ], [ -72.833533291297442, -73.40130746855931 ], [ -71.619214647086864, -73.264158217256679 ], [ -70.209042324490071, -73.146542657360371 ], [ -68.935915900331338, -73.00939340605774 ], [ -67.956621670184191, -72.793851006968339 ], [ -67.36906063502559, -72.480330092253539 ], [ -67.134036220962145, -72.049245294074737 ], [ -67.251548427993868, -71.637745863734537 ], [ -67.564940151627937, -71.245831801232981 ], [ -67.917476772723091, -70.853917738731411 ], [ -68.230842658141015, -70.462055352662134 ], [ -68.485452440043076, -70.109312025837809 ], [ -68.544208543558938, -69.717397963336239 ], [ -68.44628170436583, -69.325535577266962 ], [ -67.976232876238953, -68.953206882604007 ], [ -67.584499681250406, -68.541707452263822 ], [ -67.427842576757598, -68.149845066194544 ], [ -67.623670416927652, -67.718760268015743 ], [ -67.741182623959361, -67.326846205514173 ], [ -67.251548427993868, -66.876176039496741 ], [ -66.703183966728659, -66.582240492620571 ], [ -66.056815151621905, -66.209963474389909 ], [ -65.371327277270197, -65.89639088324283 ], [ -64.568275519454488, -65.602507012798938 ], [ -64.176542324465942, -65.171422214620137 ], [ -63.628152024984587, -64.897072035582582 ], [ -63.001394415932594, -64.642307224383643 ], [ -62.041685553624056, -64.583551120867781 ], [ -61.414927944572078, -64.270030206152981 ], [ -60.709854702381762, -64.074073174902196 ], [ -59.887269253159715, -63.956509291438188 ], [ -59.16258480491463, -63.701744480239256 ], [ -58.594557461162367, -63.388223565524456 ], [ -57.811142747617566, -63.270659682060447 ], [ -57.223581712458966, -63.525424493259386 ], [ -57.595729539608882, -63.858530775812795 ], [ -58.614142829000983, -64.15246632268898 ], [ -59.045072597882907, -64.368008721778381 ], [ -59.789342413966622, -64.211222426204841 ], [ -60.611927863188654, -64.309200941830227 ], [ -61.297415737540362, -64.544328708758258 ], [ -62.022100185785447, -64.799093519957182 ], [ -62.511760219967094, -65.093029066833367 ], [ -62.64885779483744, -65.484943129334937 ], [ -62.590127529537725, -65.857220147565585 ], [ -62.120078701410833, -66.190326430119001 ], [ -62.805566575762548, -66.425505873479324 ], [ -63.745690070232442, -66.503847344833801 ], [ -64.294106207929957, -66.83700530381951 ], [ -64.881693081304704, -67.150474542102003 ], [ -65.508424852140536, -67.581611016713111 ], [ -65.665081956633358, -67.953888034943759 ], [ -65.312545335538189, -68.365335788851667 ], [ -64.783714565679304, -68.678908379998745 ], [ -63.961103278241126, -68.913984470494484 ], [ -63.197299770751087, -69.227557061641562 ], [ -62.785955369707779, -69.61941944771084 ], [ -62.570516323482948, -69.991748142373794 ], [ -62.276735805903655, -70.383662204875364 ], [ -61.806661139560632, -70.71676848742878 ], [ -61.512906460197478, -71.089045505659428 ], [ -61.375808885327132, -72.010074558397491 ], [ -61.081976691315546, -72.382351576628153 ], [ -61.003661058177201, -72.774265639129709 ], [ -60.690269334543153, -73.166179701631279 ], [ -60.827366909413485, -73.69524301543548 ], [ -61.375808885327132, -74.106742445775666 ], [ -61.963369920485725, -74.439848728329082 ], [ -63.295200771728034, -74.576997979631713 ], [ -63.745690070232442, -74.929741306456052 ], [ -64.352836473229672, -75.262847589009468 ], [ -65.860987311451851, -75.635124607240115 ], [ -67.192818162694152, -75.791910902813669 ], [ -68.44628170436583, -76.00745330190307 ], [ -69.797723761662908, -76.22299570099247 ], [ -70.600723843046325, -76.634495131332656 ], [ -72.20677568224545, -76.673665867009902 ], [ -73.969536302369704, -76.634495131332656 ], [ -75.555976935514067, -76.712888279119426 ], [ -77.24037024606767, -76.712888279119426 ], [ -76.926978522433615, -77.104802341620996 ], [ -75.399293992805099, -77.28107065216858 ], [ -74.282876349571467, -77.555420831206135 ], [ -73.656118740519489, -77.908112481598167 ], [ -74.772536383753121, -78.221633396312967 ], [ -76.496100429983983, -78.123654880687567 ], [ -77.925858120419377, -78.378419691886506 ], [ -77.984665900367531, -78.789919122226692 ], [ -78.02378495961247, -79.181833184728262 ], [ -76.848637051079123, -79.514939467281678 ], [ -76.633223843070454, -79.88721648551234 ], [ -75.360097418911721, -80.25954518017528 ], [ -73.244851854124619, -80.416331475748834 ], [ -71.442946336539279, -80.690629978354096 ], [ -70.013162807887724, -81.004150893068882 ], [ -68.191646084247623, -81.317671807783668 ], [ -65.704278530526736, -81.474458103357222 ], [ -63.256030036050802, -81.748756605962484 ], [ -61.552025519442424, -82.042692152838669 ], [ -59.691415574773515, -82.375850111824363 ], [ -58.712121344626368, -82.846105645680424 ], [ -58.222487148660875, -83.218434340343379 ], [ -57.00811682801799, -82.86569101351904 ], [ -55.362894253141619, -82.571755466642855 ], [ -53.619770677288287, -82.258234551928069 ], [ -51.543644171746131, -82.003521417161423 ], [ -49.76134986021556, -81.729171238123868 ], [ -47.273930630062374, -81.709585870285252 ], [ -44.825707973802594, -81.846735121587869 ], [ -42.808363409992438, -82.081914564948192 ], [ -42.16202043310183, -81.650829766769377 ], [ -40.771433478343667, -81.356894219893206 ], [ -38.244817674297096, -81.337308852054591 ], [ -36.266669684380332, -81.121714776532912 ], [ -34.386396857224369, -80.906172377443497 ], [ -32.310296189898366, -80.769023126140866 ], [ -30.097097947702011, -80.592651462728696 ], [ -28.549802212018733, -80.33793832796205 ], [ -29.254901292425203, -79.985195001137726 ], [ -29.685805223090984, -79.632503350745694 ], [ -29.685805223090984, -79.260226332515032 ], [ -31.624808315546659, -79.299397068192278 ], [ -33.68132361503406, -79.456131687333524 ], [ -35.63991207532834, -79.456131687333524 ], [ -35.914107225069031, -79.083854669102877 ], [ -35.777009650198693, -78.339248956209275 ], [ -35.326546189910431, -78.123654880687567 ], [ -33.896762661258876, -77.888527113759551 ], [ -32.212369350705259, -77.653451023263813 ], [ -30.998050706494666, -77.359515476387642 ], [ -29.783732062284088, -77.065579929511472 ], [ -28.882779303491418, -76.673665867009902 ], [ -27.511751878355724, -76.497345880030025 ], [ -26.160335659274793, -76.360144952295101 ], [ -25.474821946706953, -76.281803480940624 ], [ -23.927552049239821, -76.242581068831086 ], [ -22.458597784911039, -76.105431817528455 ], [ -21.224693772861826, -75.90947478627767 ], [ -20.010375128651233, -75.674347019349653 ], [ -18.913542853256232, -75.439219252421623 ], [ -17.5229817367142, -75.125698337706837 ], [ -16.641588507544014, -74.792540378721128 ], [ -15.701490851290259, -74.498604831844943 ], [ -15.407710333710952, -74.106742445775666 ], [ -16.46532019699643, -73.871614678847649 ], [ -16.112783575901275, -73.460115248507464 ], [ -15.446855231172053, -73.146542657360371 ], [ -14.408804897509043, -72.950585626109586 ], [ -13.311972622114027, -72.715457859181569 ], [ -12.293507656289634, -72.401936944466769 ], [ -11.510067104528686, -72.010074558397491 ], [ -11.020432908563194, -71.539767348109152 ], [ -10.295774298534253, -71.265417169071597 ], [ -9.101015183946146, -71.324224949019751 ], [ -8.611380987980638, -71.657331231573167 ], [ -7.416621873392529, -71.696501967250398 ], [ -7.377451137715283, -71.324224949019751 ], [ -6.86823157391116, -70.932310886518181 ], [ -5.790984666354775, -71.030289402143566 ], [ -5.536374884452712, -71.40261809680652 ], [ -4.341667446296896, -71.461374200322382 ], [ -3.048981492515679, -71.285054213342505 ], [ -1.795492112627841, -71.167438653446197 ], [ -0.659489101555607, -71.226246433394351 ], [ -0.228636847322093, -71.637745863734537 ], [ 0.868195428072909, -71.304639581181135 ], [ 1.886686232113448, -71.128267917768966 ], [ 3.022637566753389, -70.991118666466335 ], [ 4.139055209987021, -70.853917738731411 ], [ 5.15754601402756, -70.61878997180338 ], [ 6.273911980828899, -70.462055352662134 ], [ 7.135719842160483, -70.246512953572733 ], [ 7.7428662451577, -69.893769626748394 ], [ 8.487110223025269, -70.148534437947333 ], [ 9.525134718472117, -70.01133351021241 ], [ 10.249845004933347, -70.481640720500749 ], [ 10.817820672253333, -70.834332370892781 ], [ 11.953823683325595, -70.63837533964201 ], [ 12.404287143613857, -70.246512953572733 ], [ 13.422777947654367, -69.972162774535178 ], [ 14.734997592841919, -70.03091887805104 ], [ 15.126756626046614, -70.40324757271398 ], [ 15.949342075268646, -70.03091887805104 ], [ 17.026588982825047, -69.913354994587024 ], [ 18.201711053142247, -69.874184258909779 ], [ 19.259372592860018, -69.893769626748394 ], [ 20.375738559661357, -70.01133351021241 ], [ 21.452985467217758, -70.070141290160564 ], [ 21.923034295344621, -70.40324757271398 ], [ 22.56940311045139, -70.69718311959015 ], [ 23.666183709414099, -70.520811456177995 ], [ 24.841357456163593, -70.481640720500749 ], [ 25.977308790803562, -70.481640720500749 ], [ 27.09372643403719, -70.462055352662134 ], [ 28.092580193806807, -70.32485442492721 ], [ 29.150241733524577, -70.207290541463195 ], [ 30.031583286262475, -69.93294036242564 ], [ 30.97173261894855, -69.756620375445763 ], [ 31.990171746556772, -69.658641859820378 ], [ 32.75405276869526, -69.384291680782823 ], [ 33.302443068176615, -68.835642999140006 ], [ 33.8704187354966, -68.502588393018883 ], [ 34.90849490737574, -68.659271335727837 ], [ 35.30020226414814, -69.012014662552161 ], [ 36.162010125479725, -69.247142429480192 ], [ 37.200034620926573, -69.168749281693422 ], [ 37.90510786311691, -69.521440932085454 ], [ 38.649403517416744, -69.776205743284393 ], [ 39.667894321457283, -69.541077976356362 ], [ 40.020430942552451, -69.109941501745269 ], [ 40.921357863128968, -68.933621514765392 ], [ 41.959434035008115, -68.600515232211976 ], [ 42.93870242693913, -68.463314304477052 ], [ 44.113876173688624, -68.267408949658559 ], [ 44.897290887233417, -68.051866550569159 ], [ 45.719928012887756, -67.816738783641128 ], [ 46.50334272643255, -67.601196384551727 ], [ 47.443440382686298, -67.718760268015743 ], [ 48.344418979695121, -67.366068617623711 ], [ 48.990736118369561, -67.091718438586156 ], [ 49.930885451055644, -67.111303806424772 ], [ 50.753470900277676, -66.876176039496741 ], [ 50.949324578663862, -66.523484389104709 ], [ 51.791547072156817, -66.249134210067155 ], [ 52.614132521378878, -66.05317717881637 ], [ 53.613037957580786, -65.89639088324283 ], [ 54.533550245995905, -65.818049411888353 ], [ 55.414943475166126, -65.8768055154042 ], [ 56.355041131419881, -65.9747840310296 ], [ 57.158092889235576, -66.249134210067155 ], [ 57.255968051996398, -66.680219008245956 ], [ 58.137361281166591, -67.013325290799372 ], [ 58.744507684163807, -67.287675469836927 ], [ 59.939318475184223, -67.405239353300942 ], [ 60.6052209816973, -67.679589532338497 ], [ 61.427806430919333, -67.953888034943759 ], [ 62.387489455011718, -68.012695814891913 ], [ 63.190489536395148, -67.816738783641128 ], [ 64.052349074158997, -67.405239353300942 ], [ 64.992446730412752, -67.620730075958051 ], [ 65.971715122343767, -67.738345635854358 ], [ 66.911864455029814, -67.855909519318374 ], [ 67.891132846960801, -67.934302667105143 ], [ 68.890038283162738, -67.934302667105143 ], [ 69.71262373238477, -68.972792250442637 ], [ 69.673452996707539, -69.227557061641562 ], [ 69.555940789675816, -69.678227227658994 ], [ 68.596257765583431, -69.93294036242564 ], [ 67.812739699174045, -70.305269057088594 ], [ 67.949888950476662, -70.69718311959015 ], [ 69.066306593710294, -70.677546075319242 ], [ 68.929157342407677, -71.069460137820812 ], [ 68.419989455035847, -71.441788832483766 ], [ 67.949888950476662, -71.853288262823952 ], [ 68.713769972615154, -72.166809177538738 ], [ 69.869306675093725, -72.264787693164138 ], [ 71.024895054004588, -72.088416029751968 ], [ 71.573285353485971, -71.696501967250398 ], [ 71.906288283174803, -71.324224949019751 ], [ 72.454626906223865, -71.01070403430495 ], [ 73.081410353492004, -70.71676848742878 ], [ 73.336020135394051, -70.364025160604442 ], [ 73.864876743469097, -69.874184258909779 ], [ 74.491556837872622, -69.776205743284393 ], [ 75.627559848944884, -69.737035007607147 ], [ 76.626465285146793, -69.61941944771084 ], [ 77.644904412755039, -69.462684828569593 ], [ 78.134538608720533, -69.070770766068023 ], [ 78.428370802732132, -68.698442071405083 ], [ 79.11385867708384, -68.326216729606713 ], [ 80.093127069014827, -68.071503594840067 ], [ 80.935349562507781, -67.875546563589282 ], [ 81.483791538421428, -67.542388604603573 ], [ 82.051767205741413, -67.366068617623711 ], [ 82.776425815770352, -67.209282322050157 ], [ 83.775331251972261, -67.307260837675557 ], [ 84.676206496116492, -67.209282322050157 ], [ 85.6555265644798, -67.091718438586156 ], [ 86.752358839874802, -67.150474542102003 ], [ 87.477017449903741, -66.876176039496741 ], [ 87.986288690140157, -66.209911797957616 ], [ 88.358410679073941, -66.484261976995171 ], [ 88.828407830768526, -66.954569187283511 ], [ 89.670630324261481, -67.150474542102003 ], [ 90.630365024786158, -67.228867689888787 ], [ 91.590099725310836, -67.111303806424772 ], [ 92.608538852919082, -67.189696954211541 ], [ 93.548636509172837, -67.209282322050157 ], [ 94.175419956440962, -67.111303806424772 ], [ 95.01759077350161, -67.170111586372926 ], [ 95.781471795640101, -67.385653985462326 ], [ 96.682398716216625, -67.248504734159695 ], [ 97.759645623772983, -67.248504734159695 ], [ 98.680209588620443, -67.111303806424772 ], [ 99.718182407634998, -67.248504734159695 ], [ 100.384188267012661, -66.915346775173987 ], [ 100.893356154384477, -66.582240492620571 ], [ 101.578895705168506, -66.307890313583016 ], [ 102.832410923272477, -65.563284600689414 ], [ 103.478676385514618, -65.700485528424338 ], [ 104.242557407653095, -65.9747840310296 ], [ 104.908459914166187, -66.327527357853924 ], [ 106.181560500108787, -66.934932143012603 ], [ 107.160880568472066, -66.954569187283511 ], [ 108.08139285688722, -66.954569187283511 ], [ 109.15863976444362, -66.83700530381951 ], [ 110.235834995567714, -66.699804376084586 ], [ 111.058472121222053, -66.425505873479324 ], [ 111.743959995573732, -66.131570326603139 ], [ 112.860377638807364, -66.092347914493615 ], [ 113.604673293107226, -65.8768055154042 ], [ 114.388088006652026, -66.072762546654985 ], [ 114.89730757045615, -66.386283461369786 ], [ 115.602380812646459, -66.699804376084586 ], [ 116.699161411609182, -66.66063364040734 ], [ 117.384700962393168, -66.915346775173987 ], [ 118.579460076981292, -67.170111586372926 ], [ 119.832923618652984, -67.268090101998311 ], [ 120.870999790532125, -67.189696954211541 ], [ 121.654414504076925, -66.876176039496741 ], [ 122.320368687022281, -66.562655124781955 ], [ 123.221295607598847, -66.484261976995171 ], [ 124.122274204607621, -66.621462904730095 ], [ 125.160247023622219, -66.719389743923202 ], [ 126.100396356308238, -66.562655124781955 ], [ 127.001426629749332, -66.562655124781955 ], [ 127.882768182487254, -66.66063364040734 ], [ 128.803280470902394, -66.75861215603274 ], [ 129.70425906791121, -66.582240492620571 ], [ 130.781454299035317, -66.425505873479324 ], [ 131.799945103075856, -66.386283461369786 ], [ 132.935896437715826, -66.386283461369786 ], [ 133.856460402563243, -66.2883049457444 ], [ 134.757387323139767, -66.209963474389909 ], [ 135.031582472880416, -65.720070896262953 ], [ 135.070753208557676, -65.308571465922768 ], [ 135.69748497939355, -65.58286996852803 ], [ 135.87380496637337, -66.033591810977754 ], [ 136.206704543197645, -66.44509124131794 ], [ 136.618048944240968, -66.778197523871356 ], [ 137.460271437733923, -66.954569187283511 ], [ 138.596222772373892, -66.895761407335371 ], [ 139.908442417561389, -66.876176039496741 ], [ 140.809421014570205, -66.817368259548587 ], [ 142.121692336190051, -66.817368259548587 ], [ 143.061841668876127, -66.797782891709971 ], [ 144.374061314063624, -66.83700530381951 ], [ 145.490427280864992, -66.915346775173987 ], [ 146.195552199487622, -67.228867689888787 ], [ 145.999698521101379, -67.601196384551727 ], [ 146.646067336208148, -67.895131931427912 ], [ 147.723262567332256, -68.130259698355928 ], [ 148.839628534133624, -68.385024509554867 ], [ 150.132314487914812, -68.561292820102452 ], [ 151.483704868779569, -68.718130792108283 ], [ 152.5022473492524, -68.874813734817238 ], [ 153.638198683892369, -68.894502455520438 ], [ 154.284567498999138, -68.561292820102452 ], [ 155.165857375304711, -68.835642999140006 ], [ 155.929790073875495, -69.149215590287085 ], [ 156.811131626613417, -69.384291680782823 ], [ 158.025527785472434, -69.482270196408209 ], [ 159.181012811518713, -69.599834079872224 ], [ 159.670698683916498, -69.991748142373794 ], [ 160.806650018556468, -70.22687590930181 ], [ 161.570479364262667, -70.579619236126149 ], [ 162.686897007496242, -70.736353855267396 ], [ 163.842433709974841, -70.71676848742878 ], [ 164.919680617531242, -70.775524590944642 ], [ 166.114439732119365, -70.755939223106012 ], [ 167.309095493842904, -70.834332370892781 ], [ 168.425616489941092, -70.971481622195427 ], [ 169.463589308955704, -71.206661065555735 ], [ 170.501665480834845, -71.40261809680652 ], [ 171.206790399457475, -71.696501967250398 ], [ 171.08922651599346, -72.088416029751968 ], [ 170.560421584350706, -72.441159356576293 ], [ 170.109958124062416, -72.891829522593724 ], [ 169.757369826534955, -73.24452117298577 ], [ 169.28732099840812, -73.656020603325956 ], [ 167.975101353220566, -73.812806898899495 ], [ 167.387488641629659, -74.165498549291527 ], [ 166.094802687848471, -74.381040948380928 ], [ 165.644390903992473, -74.772955010882498 ], [ 164.958851353208473, -75.145283705545452 ], [ 164.234192743179563, -75.458804620260253 ], [ 163.822796665703947, -75.870304050600438 ], [ 163.568238560234192, -76.242581068831086 ], [ 163.470260044608807, -76.69330291128081 ], [ 163.489897088879758, -77.065579929511472 ], [ 164.057872756199714, -77.457442315580735 ], [ 164.273363478856822, -77.829771010243689 ], [ 164.74346398341595, -78.182514337068014 ], [ 166.604125604517151, -78.319611911938352 ], [ 166.995781284857287, -78.750748386549461 ], [ 165.193875767271948, -78.907483005690708 ], [ 163.666217075859549, -79.123025404780108 ], [ 161.766384719081145, -79.162247816889646 ], [ 160.924162225588191, -79.730481866371079 ], [ 160.747893915040606, -80.200737400227126 ], [ 160.316964146158682, -80.573066094890081 ], [ 159.788210890948221, -80.945394789553035 ], [ 161.120015903974377, -81.278501072106451 ], [ 161.629287144210821, -81.690000502446622 ], [ 162.490991652677792, -82.062277520677284 ], [ 163.705336135104517, -82.395435479662993 ], [ 165.095948928078826, -82.708956394377807 ], [ 166.604125604517151, -83.022477309092579 ], [ 168.895665318067955, -83.33599822380738 ], [ 169.40478152900755, -83.825890801934349 ], [ 172.283933954149234, -84.04143320102375 ], [ 172.477048781623978, -84.117914320815714 ], [ 173.22408328683531, -84.413710219254398 ], [ 175.985671828513034, -84.158997084487751 ], [ 178.277211542063895, -84.472517999202552 ], [ 180.0, -84.71338 ] ] } },
  ]
};

var radii = [100, 75, 54, 28, 10, 0];
var scales = [1, 0.85, 0.6, 0.45, 0.2, 0];
var layerspacing = [25, 18, 26, 21, 10];

// Given vectors A = (a1, a2, a3); B = (b1, b2, b3);
// The cross product
// A x B = (a2b3 - a3b2, a3b1 - a1b3, a1b2 - a2b1); a vector quantity
function cross (a, b) {
  return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
}

function norm (v) {
  var d = Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]);
  if (clean(d) === 0.0) { d = 1.0; }
  return ([v[0] / d, v[1] / d, v[2] / d]);
}

function diff (a, b) {
  return ([b[0] - a[0], b[1] - a[1], b[2] - a[2]]);
}

function plus (a, b) {
  return ([b[0] + a[0], b[1] + a[1], b[2] + a[2]]);
}

// Functions below are implemented by Regina
function scaleVector (v, k) {
    return ([v[0] * k[0], v[1] * k[1], v[2] * k[2]]);
}

function addRandomNoise(v) {
    var difference = 3;
    return ([v[0] + (Math.random() * 2 - 1) * difference, v[1] + (Math.random() * 2 - 1) * difference, v[2] + (Math.random() * 2 - 1) * difference]);
}

function getParameterDefinitions () {
  return ([
    {name: 'outerrad', type: 'float', initial: 100.0, caption: 'Globe outer radius'},
    {name: 'innerrad', type: 'float', initial: 95, caption: 'Globe inner radius'},
    {name: 'thickness', type: 'float', initial: 0.1, caption: 'Ratio of solid thickness to globe radius'},
  ]);
}

function main (parameters) {
    
  console.log(Date.now());
  var outerrad = parameters.outerrad;
  var innerrad = parameters.innerrad;
  var thickness = parameters.thickness;
  var solids = [];
  
  var innerTranslate = 0;
  var outerTranslate = layerspacing[0];
//   for (var i = 0; i < Globe.features.length; i++) {
  for (var i = 0; i < scales.length - 1; i++) {
    var feature = Globe.features[0];
    if (Number(feature.properties.scalerank) < 3) {
      var geometry = feature.geometry;
      if (geometry.type === 'MultiPolygon') {
        var coords = geometry.coordinates;
        var t = [
          [0, 1, 2],
          [2, 3, 0],
          [4, 7, 6],
          [6, 5, 4],
          [0, 4, 1],
          [1, 4, 5],
          [1, 5, 2],
          [2, 5, 6],
          [2, 6, 3],
          [3, 6, 7],
          [3, 7, 0],
          [0, 7, 4]
        ];
        
        
        var innerprev = sph_to_cart(sph(coords[0][0], 90.0 - coords[0][1], innerrad));
        var outerprev = sph_to_cart(sph(coords[0][0], 90.0 - coords[0][1], innerrad));
        // var innerprev = sph_to_cart(sph(coords[0][0], 90.0 - coords[0][1], innerrad));
        // var outerprev = sph_to_cart(sph(coords[0][0], 90.0 - coords[0][1], outerrad));
        // var outerprev = plus(innerprev, [0, 0, 5]);
        
        // outerprev = addRandomNoise(outerprev);
        
        innerprev[2] += innerTranslate;
        outerprev[2] += outerTranslate;
        
        innerprev = scaleVector(innerprev, [scales[i], scales[i], 1]);
        outerprev = scaleVector(outerprev, [scales[i+1], scales[i+1], 1]);
        
        for (var j = 1; j < coords.length; j++) {
          var innernext = sph_to_cart(sph(coords[j + 0][0], 90.0 - coords[j + 0][1], innerrad));
          var outernext = sph_to_cart(sph(coords[j + 0][0], 90.0 - coords[j + 0][1], innerrad));
        //   var innernext = sph_to_cart(sph(coords[j + 0][0], 90.0 - coords[j + 0][1], innerrad));
        //   var outernext = sph_to_cart(sph(coords[j + 0][0], 90.0 - coords[j + 0][1], outerrad));
        //   var outernext = plus(innernext, [0, 0, 5]);

          
        //   outernext = addRandomNoise(outernext);
          
          innernext[2] += innerTranslate;//scales[i] * 100;
          outernext[2] += outerTranslate;//scales[i] * 100;
          
          
        //   innerprev = scaleVector(innerprev, scales[i]);
        //   outerprev = scaleVector(outerprev, scales[i]);
        
          innernext = scaleVector(innernext, [scales[i], scales[i], 1]);
          outernext = scaleVector(outernext, [scales[i+1], scales[i+1], 1]);
          
          var delta = norm(cross(diff(outerprev, innerprev), diff(outerprev, outernext)));
          delta = [delta[0] * thickness, delta[1] * thickness, delta[2] * thickness];
          
          // Flatten out the model
        //   innernext[2] = 0;
        //   innerprev[2] = 2;
        //   outernext[2] = 0;
        //   outerprev[2] = 2;
          
          var p = [
            innerprev,
            innernext,
            outernext,
            outerprev,
            plus(delta, innerprev),
            plus(delta, innernext),
            plus(delta, outernext),
            plus(delta, outerprev)
          ];
          var poly = polyhedron({points: p, triangles: t});
          poly = poly.setColor(0.5, 0.7, 1);
          solids.push(poly);
          innerprev = innernext;
          outerprev = outernext;
        }
      }
    }
    innerTranslate = outerTranslate;
    outerTranslate += layerspacing[i+1];
  }
  
  // Just to figure out which way is positive x axis.
//   solids.push(cube().translate([1, 1, 1]));
  
  return (solids);
}


