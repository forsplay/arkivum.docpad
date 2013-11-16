var trk_sw = escape(screen.width).substring(0, 6);
var trk_sh = escape(screen.height).substring(0, 6);
var trk_ref = escape(document.referrer).substring(0, 1100);
var trk_tit = escape(document.title).substring(0, 200);
trk_tit = trk_tit.replace(/\%u00a0/g, '');
trk_tit = trk_tit.replace(/\%u2122/g, '');
trk_tit = trk_tit.replace(/\%u[0-9][0-9][0-9][0-9]/g, '');
var trk_loc = escape(document.location).substring(0, 200);
var trk_agn = escape(navigator.appName).substring(0, 100);
var trk_lng = window.navigator.userLanguage || window.navigator.language;
var trk_agv = escape(navigator.userAgent + '.lfcd' + screen.colorDepth + '.lflng' + trk_lng).substring(0, 1000);
var trk_dom = escape(document.domain).substring(0, 200);
var trk_user = '8303';
var trk_cookie = document.cookie;

var trk_img = 'https://secure.leadforensics.com/images/track/' + trk_user + '.png';
var trk_link = trk_img + '?trk_user=' + trk_user + '&trk_sw=' + trk_sw + '&trk_sh=' + trk_sh + '&trk_ref=' + trk_ref + '&trk_tit=' + trk_tit + '&trk_loc=' + trk_loc + '&trk_agn=' + trk_agn + '&trk_agv=' + trk_agv + '&trk_dom=' + trk_dom + '&trk_cookie=' + trk_cookie;

var trk_ele = document.createElement("img");
trk_ele.src = trk_link;
trk_ele.height = 1;
trk_ele.width = 1;
trk_ele.border = 0;
trk_ele.style.display = "none";
document.body.appendChild(trk_ele);