/** @license
 *
 * SoundManager 2: JavaScript Sound for the Web
 * ----------------------------------------------
 * http://schillmania.com/projects/soundmanager2/
 *
 * Copyright (c) 2007, Scott Schiller. All rights reserved.
 * Code provided under the BSD License:
 * http://schillmania.com/projects/soundmanager2/license.txt
 *
 * V2.97a.20130324+DEV
 */
(function(k,g){function V(V,la){function W(b){return c.preferFlash&&C&&!c.ignoreFlash&&c.flash[b]!==g&&c.flash[b]}function r(b){return function(c){var e=this._s;return!e||!e._a?null:b.call(this,c)}}this.setupOptions={url:V||null,flashVersion:8,debugMode:!0,debugFlash:!1,useConsole:!0,consoleOnly:!0,waitForWindowLoad:!1,bgColor:"#ffffff",useHighPerformance:!1,flashPollingInterval:null,html5PollingInterval:null,flashLoadTimeout:1E3,wmode:null,allowScriptAccess:"always",useFlashBlock:!1,useHTML5Audio:!0,
html5Test:/^(probably|maybe)$/i,preferFlash:!0,noSWFCache:!1,idPrefix:"sound"};this.defaultOptions={autoLoad:!1,autoPlay:!1,from:null,loops:1,onid3:null,onload:null,whileloading:null,onplay:null,onpause:null,onresume:null,whileplaying:null,onposition:null,onstop:null,onfailure:null,onfinish:null,multiShot:!0,multiShotEvents:!1,position:null,pan:0,stream:!0,to:null,type:null,usePolicyFile:!1,volume:100};this.flash9Options={isMovieStar:null,usePeakData:!1,useWaveformData:!1,useEQData:!1,onbufferchange:null,
ondataerror:null};this.movieStarOptions={bufferTime:3,serverURL:null,onconnect:null,duration:null};this.audioFormats={mp3:{type:['audio/mpeg; codecs\x3d"mp3"',"audio/mpeg","audio/mp3","audio/MPA","audio/mpa-robust"],required:!0},mp4:{related:["aac","m4a","m4b"],type:['audio/mp4; codecs\x3d"mp4a.40.2"',"audio/aac","audio/x-m4a","audio/MP4A-LATM","audio/mpeg4-generic"],required:!1},ogg:{type:["audio/ogg; codecs\x3dvorbis"],required:!1},opus:{type:["audio/ogg; codecs\x3dopus","audio/opus"],required:!1},
wav:{type:['audio/wav; codecs\x3d"1"',"audio/wav","audio/wave","audio/x-wav"],required:!1}};this.movieID="sm2-container";this.id=la||"sm2movie";this.debugID="soundmanager-debug";this.debugURLParam=/([#?&])debug=1/i;this.versionNumber="V2.97a.20130324+DEV";this.altURL=this.movieURL=this.version=null;this.enabled=this.swfLoaded=!1;this.oMC=null;this.sounds={};this.soundIDs=[];this.didFlashBlock=this.muted=!1;this.filePattern=null;this.filePatterns={flash8:/\.mp3(\?.*)?$/i,flash9:/\.mp3(\?.*)?$/i};this.features=
{buffering:!1,peakData:!1,waveformData:!1,eqData:!1,movieStar:!1};this.sandbox={};this.html5={usingFlash:null};this.flash={};this.ignoreFlash=this.html5Only=!1;var Ja,c=this,Ka=null,h=null,X,p=navigator.userAgent,La=k.location.href.toString(),n=document,ma,Ma,na,l,u=[],L=!1,M=!1,q=!1,v=!1,oa=!1,N,w,pa,Y,qa,D,E,F,Na,ra,Z,sa,$,ta,G,ua,O,va,aa,H,Oa,wa,Pa,xa,Qa,P=null,ya=null,Q,za,I,ba,ca,s,R=!1,Aa=!1,Ra,Sa,Ta,da=0,S=null,ea,Ua=[],fa,x=null,Va,ga,T,y,ha,Ba,Wa,t,fb=Array.prototype.slice,z=!1,Ca,C,Da,Xa,
A,ia,Ya=0,U=p.match(/(ipad|iphone|ipod)/i),Za=p.match(/android/i),B=p.match(/msie/i),gb=p.match(/webkit/i),ja=p.match(/safari/i)&&!p.match(/chrome/i),Ea=p.match(/opera/i),hb=p.match(/firefox/i),Fa=p.match(/(mobile|pre\/|xoom)/i)||U||Za,$a=!La.match(/usehtml5audio/i)&&!La.match(/sm2\-ignorebadua/i)&&ja&&!p.match(/silk/i)&&p.match(/OS X 10_6_([3-7])/i),Ga=n.hasFocus!==g?n.hasFocus():null,ka=ja&&(n.hasFocus===g||!n.hasFocus()),ab=!ka,bb=/(mp3|mp4|mpa|m4a|m4b)/i,Ha=n.location?n.location.protocol.match(/http/i):
null,cb=!Ha?"http://":"",db=/^\s*audio\/(?:x-)?(?:mpeg4|aac|flv|mov|mp4||m4v|m4a|m4b|mp4v|3gp|3g2)\s*(?:$|;)/i,eb="mpeg4 aac flv mov mp4 m4v f4v m4a m4b mp4v 3gp 3g2".split(" "),ib=RegExp("\\.("+eb.join("|")+")(\\?.*)?$","i");this.mimePattern=/^\s*audio\/(?:x-)?(?:mp(?:eg|3))\s*(?:$|;)/i;this.useAltURL=!Ha;var Ia;try{Ia=Audio!==g&&(Ea&&opera!==g&&10>opera.version()?new Audio(null):new Audio).canPlayType!==g}catch(jb){Ia=!1}this.hasHTML5=Ia;this.setup=function(b){var d=!c.url;b!==g&&q&&x&&c.ok();pa(b);
d&&(O&&b.url!==g)&&c.beginDelayedInit();!O&&(b.url!==g&&"complete"===n.readyState)&&setTimeout(G,1);return c};this.supported=this.ok=function(){return x?q&&!v:c.useHTML5Audio&&c.hasHTML5};this.getMovie=function(b){return X(b)||n[b]||k[b]};this.createSound=function(b,d){function e(){a=ba(a);c.sounds[a.id]=new Ja(a);c.soundIDs.push(a.id);return c.sounds[a.id]}var a,f=null;if(!q||!c.ok())return!1;d!==g&&(b={id:b,url:d});a=w(b);a.url=ea(a.url);void 0===a.id&&(a.id=c.setupOptions.idPrefix+Ya++);if(s(a.id,
!0))return c.sounds[a.id];ga(a)?(f=e(),f._setup_html5(a)):(8<l&&null===a.isMovieStar&&(a.isMovieStar=!(!a.serverURL&&!(a.type&&a.type.match(db)||a.url&&a.url.match(ib)))),a=ca(a,void 0),f=e(),8===l?h._createSound(a.id,a.loops||1,a.usePolicyFile):(h._createSound(a.id,a.url,a.usePeakData,a.useWaveformData,a.useEQData,a.isMovieStar,a.isMovieStar?a.bufferTime:!1,a.loops||1,a.serverURL,a.duration||null,a.autoPlay,!0,a.autoLoad,a.usePolicyFile),a.serverURL||(f.connected=!0,a.onconnect&&a.onconnect.apply(f))),
!a.serverURL&&(a.autoLoad||a.autoPlay)&&f.load(a));!a.serverURL&&a.autoPlay&&f.play();return f};this.destroySound=function(b,d){if(!s(b))return!1;var e=c.sounds[b],a;e._iO={};e.stop();e.unload();for(a=0;a<c.soundIDs.length;a++)if(c.soundIDs[a]===b){c.soundIDs.splice(a,1);break}d||e.destruct(!0);delete c.sounds[b];return!0};this.load=function(b,d){return!s(b)?!1:c.sounds[b].load(d)};this.unload=function(b){return!s(b)?!1:c.sounds[b].unload()};this.onposition=this.onPosition=function(b,d,e,a){return!s(b)?
!1:c.sounds[b].onposition(d,e,a)};this.clearOnPosition=function(b,d,e){return!s(b)?!1:c.sounds[b].clearOnPosition(d,e)};this.start=this.play=function(b,d){var e=null,a=d&&!(d instanceof Object);if(!q||!c.ok())return!1;if(s(b,a))a&&(d={url:d});else{if(!a)return!1;a&&(d={url:d});d&&d.url&&(d.id=b,e=c.createSound(d).play())}null===e&&(e=c.sounds[b].play(d));return e};this.setPosition=function(b,d){return!s(b)?!1:c.sounds[b].setPosition(d)};this.stop=function(b){return!s(b)?!1:c.sounds[b].stop()};this.stopAll=
function(){for(var b in c.sounds)c.sounds.hasOwnProperty(b)&&c.sounds[b].stop()};this.pause=function(b){return!s(b)?!1:c.sounds[b].pause()};this.pauseAll=function(){var b;for(b=c.soundIDs.length-1;0<=b;b--)c.sounds[c.soundIDs[b]].pause()};this.resume=function(b){return!s(b)?!1:c.sounds[b].resume()};this.resumeAll=function(){var b;for(b=c.soundIDs.length-1;0<=b;b--)c.sounds[c.soundIDs[b]].resume()};this.togglePause=function(b){return!s(b)?!1:c.sounds[b].togglePause()};this.setPan=function(b,d){return!s(b)?
!1:c.sounds[b].setPan(d)};this.setVolume=function(b,d){return!s(b)?!1:c.sounds[b].setVolume(d)};this.mute=function(b){var d=0;b instanceof String&&(b=null);if(b)return!s(b)?!1:c.sounds[b].mute();for(d=c.soundIDs.length-1;0<=d;d--)c.sounds[c.soundIDs[d]].mute();return c.muted=!0};this.muteAll=function(){c.mute()};this.unmute=function(b){b instanceof String&&(b=null);if(b)return!s(b)?!1:c.sounds[b].unmute();for(b=c.soundIDs.length-1;0<=b;b--)c.sounds[c.soundIDs[b]].unmute();c.muted=!1;return!0};this.unmuteAll=
function(){c.unmute()};this.toggleMute=function(b){return!s(b)?!1:c.sounds[b].toggleMute()};this.getMemoryUse=function(){var b=0;h&&8!==l&&(b=parseInt(h._getMemoryUse(),10));return b};this.disable=function(b){var d;b===g&&(b=!1);if(v)return!1;v=!0;for(d=c.soundIDs.length-1;0<=d;d--)Pa(c.sounds[c.soundIDs[d]]);N(b);t.remove(k,"load",E);return!0};this.canPlayMIME=function(b){var d;c.hasHTML5&&(d=T({type:b}));!d&&x&&(d=b&&c.ok()?!!(8<l&&b.match(db)||b.match(c.mimePattern)):null);return d};this.canPlayURL=
function(b){var d;c.hasHTML5&&(d=T({url:b}));!d&&x&&(d=b&&c.ok()?!!b.match(c.filePattern):null);return d};this.canPlayLink=function(b){return b.type!==g&&b.type&&c.canPlayMIME(b.type)?!0:c.canPlayURL(b.href)};this.getSoundById=function(b,d){return!b?null:c.sounds[b]};this.onready=function(b,c){if("function"===typeof b)c||(c=k),qa("onready",b,c),D();else throw Q("needFunction","onready");return!0};this.ontimeout=function(b,c){if("function"===typeof b)c||(c=k),qa("ontimeout",b,c),D({type:"ontimeout"});
else throw Q("needFunction","ontimeout");return!0};this._wD=this._writeDebug=function(b,c){return!0};this._debug=function(){};this.reboot=function(b,d){var e,a,f;for(e=c.soundIDs.length-1;0<=e;e--)c.sounds[c.soundIDs[e]].destruct();if(h)try{B&&(ya=h.innerHTML),P=h.parentNode.removeChild(h)}catch(g){}ya=P=x=h=null;c.enabled=O=q=R=Aa=L=M=v=z=c.swfLoaded=!1;c.soundIDs=[];c.sounds={};Ya=0;if(b)u=[];else for(e in u)if(u.hasOwnProperty(e)){a=0;for(f=u[e].length;a<f;a++)u[e][a].fired=!1}c.html5={usingFlash:null};
c.flash={};c.html5Only=!1;c.ignoreFlash=!1;k.setTimeout(function(){ta();d||c.beginDelayedInit()},20);return c};this.reset=function(){return c.reboot(!0,!0)};this.getMoviePercent=function(){return h&&"PercentLoaded"in h?h.PercentLoaded():null};this.beginDelayedInit=function(){oa=!0;G();setTimeout(function(){if(Aa)return!1;aa();$();return Aa=!0},20);F()};this.destruct=function(){c.disable(!0)};Ja=function(b){var d,e,a=this,f,m,J,K,k,n,r=!1,p=[],q=0,v,x,u=null,y;e=d=null;this.sID=this.id=b.id;this.url=
b.url;this._iO=this.instanceOptions=this.options=w(b);this.pan=this.options.pan;this.volume=this.options.volume;this.isHTML5=!1;this._a=null;y=this.url?!1:!0;this.id3={};this._debug=function(){};this.load=function(b){var c=null,d;b!==g?a._iO=w(b,a.options):(b=a.options,a._iO=b,u&&u!==a.url&&(a._iO.url=a.url,a.url=null));a._iO.url||(a._iO.url=a.url);a._iO.url=ea(a._iO.url);d=a.instanceOptions=a._iO;if(!d.url&&!a.url)return a;if(d.url===a.url&&0!==a.readyState&&2!==a.readyState)return 3===a.readyState&&
d.onload&&ia(a,function(){d.onload.apply(a,[!!a.duration])}),a;a.loaded=!1;a.readyState=1;a.playState=0;a.id3={};if(ga(d))c=a._setup_html5(d),c._called_load||(a._html5_canplay=!1,a.url!==d.url&&(a._a.src=d.url,a.setPosition(0)),a._a.autobuffer="auto",a._a.preload="auto",a._a._called_load=!0,d.autoPlay&&a.play());else try{a.isHTML5=!1,a._iO=ca(ba(d)),d=a._iO,8===l?h._load(a.id,d.url,d.stream,d.autoPlay,d.usePolicyFile):h._load(a.id,d.url,!!d.stream,!!d.autoPlay,d.loops||1,!!d.autoLoad,d.usePolicyFile)}catch(e){H({type:"SMSOUND_LOAD_JS_EXCEPTION",
fatal:!0})}a.url=d.url;return a};this.unload=function(){0!==a.readyState&&(a.isHTML5?(K(),a._a&&(a._a.pause(),u=ha(a._a))):8===l?h._unload(a.id,"about:blank"):h._unload(a.id),f());return a};this.destruct=function(b){a.isHTML5?(K(),a._a&&(a._a.pause(),ha(a._a),z||J(),a._a._s=null,a._a=null)):(a._iO.onfailure=null,h._destroySound(a.id));b||c.destroySound(a.id,!0)};this.start=this.play=function(b,c){var d,e,f,m,J;e=!0;e=null;c=c===g?!0:c;b||(b={});a.url&&(a._iO.url=a.url);a._iO=w(a._iO,a.options);a._iO=
w(b,a._iO);a._iO.url=ea(a._iO.url);a.instanceOptions=a._iO;if(!a.isHTML5&&a._iO.serverURL&&!a.connected)return a.getAutoPlay()||a.setAutoPlay(!0),a;ga(a._iO)&&(a._setup_html5(a._iO),k());1===a.playState&&!a.paused&&(d=a._iO.multiShot,d||(a.isHTML5&&a.setPosition(a._iO.position),e=a));if(null!==e)return e;b.url&&b.url!==a.url&&(!a.readyState&&!a.isHTML5&&8===l&&y?y=!1:a.load(a._iO));a.loaded||(0===a.readyState?(a.isHTML5||(a._iO.autoPlay=!0),a.load(a._iO),a.instanceOptions=a._iO):2===a.readyState&&
(e=a));if(null!==e)return e;!a.isHTML5&&(9===l&&0<a.position&&a.position===a.duration)&&(b.position=0);if(a.paused&&0<=a.position&&(!a._iO.serverURL||0<a.position))a.resume();else{a._iO=w(b,a._iO);if(null!==a._iO.from&&null!==a._iO.to&&0===a.instanceCount&&0===a.playState&&!a._iO.serverURL){d=function(){a._iO=w(b,a._iO);a.play(a._iO)};if(a.isHTML5&&!a._html5_canplay)a.load({oncanplay:d}),e=!1;else if(!a.isHTML5&&!a.loaded&&(!a.readyState||2!==a.readyState))a.load({onload:d}),e=!1;if(null!==e)return e;
a._iO=x()}(!a.instanceCount||a._iO.multiShotEvents||a.isHTML5&&a._iO.multiShot&&!z||!a.isHTML5&&8<l&&!a.getAutoPlay())&&a.instanceCount++;a._iO.onposition&&0===a.playState&&n(a);a.playState=1;a.paused=!1;a.position=a._iO.position!==g&&!isNaN(a._iO.position)?a._iO.position:0;a.isHTML5||(a._iO=ca(ba(a._iO)));a._iO.onplay&&c&&(a._iO.onplay.apply(a),r=!0);a.setVolume(a._iO.volume,!0);a.setPan(a._iO.pan,!0);a.isHTML5?2>a.instanceCount?(k(),e=a._setup_html5(),a.setPosition(a._iO.position),e.play()):(f=
new Audio(a._iO.url),m=function(){t.remove(f,"onended",m);a._onfinish(a);ha(f);f=null},J=function(){t.remove(f,"canplay",J);try{f.currentTime=a._iO.position/1E3}catch(b){}f.play()},t.add(f,"ended",m),a._iO.position?t.add(f,"canplay",J):f.play()):(e=h._start(a.id,a._iO.loops||1,9===l?a.position:a.position/1E3,a._iO.multiShot||!1),9===l&&!e&&a._iO.onplayerror&&a._iO.onplayerror.apply(a))}return a};this.stop=function(b){var c=a._iO;1===a.playState&&(a._onbufferchange(0),a._resetOnPosition(0),a.paused=
!1,a.isHTML5||(a.playState=0),v(),c.to&&a.clearOnPosition(c.to),a.isHTML5?a._a&&(b=a.position,a.setPosition(0),a.position=b,a._a.pause(),a.playState=0,a._onTimer(),K()):(h._stop(a.id,b),c.serverURL&&a.unload()),a.instanceCount=0,a._iO={},c.onstop&&c.onstop.apply(a));return a};this.setAutoPlay=function(b){a._iO.autoPlay=b;a.isHTML5||(h._setAutoPlay(a.id,b),b&&!a.instanceCount&&1===a.readyState&&a.instanceCount++)};this.getAutoPlay=function(){return a._iO.autoPlay};this.setPosition=function(b){b===
g&&(b=0);var c=a.isHTML5?Math.max(b,0):Math.min(a.duration||a._iO.duration,Math.max(b,0));a.position=c;b=a.position/1E3;a._resetOnPosition(a.position);a._iO.position=c;if(a.isHTML5){if(a._a){if(a._html5_canplay){if(a._a.currentTime!==b)try{a._a.currentTime=b,(0===a.playState||a.paused)&&a._a.pause()}catch(d){}}else if(b)return a;a.paused&&a._onTimer(!0)}}else b=9===l?a.position:b,a.readyState&&2!==a.readyState&&h._setPosition(a.id,b,a.paused||!a.playState,a._iO.multiShot);return a};this.pause=function(b){if(a.paused||
0===a.playState&&1!==a.readyState)return a;a.paused=!0;a.isHTML5?(a._setup_html5().pause(),K()):(b||b===g)&&h._pause(a.id,a._iO.multiShot);a._iO.onpause&&a._iO.onpause.apply(a);return a};this.resume=function(){var b=a._iO;if(!a.paused)return a;a.paused=!1;a.playState=1;a.isHTML5?(a._setup_html5().play(),k()):(b.isMovieStar&&!b.serverURL&&a.setPosition(a.position),h._pause(a.id,b.multiShot));!r&&b.onplay?(b.onplay.apply(a),r=!0):b.onresume&&b.onresume.apply(a);return a};this.togglePause=function(){if(0===
a.playState)return a.play({position:9===l&&!a.isHTML5?a.position:a.position/1E3}),a;a.paused?a.resume():a.pause();return a};this.setPan=function(b,c){b===g&&(b=0);c===g&&(c=!1);a.isHTML5||h._setPan(a.id,b);a._iO.pan=b;c||(a.pan=b,a.options.pan=b);return a};this.setVolume=function(b,d){b===g&&(b=100);d===g&&(d=!1);a.isHTML5?a._a&&(a._a.volume=Math.max(0,Math.min(1,b/100))):h._setVolume(a.id,c.muted&&!a.muted||a.muted?0:b);a._iO.volume=b;d||(a.volume=b,a.options.volume=b);return a};this.mute=function(){a.muted=
!0;a.isHTML5?a._a&&(a._a.muted=!0):h._setVolume(a.id,0);return a};this.unmute=function(){a.muted=!1;var b=a._iO.volume!==g;a.isHTML5?a._a&&(a._a.muted=!1):h._setVolume(a.id,b?a._iO.volume:a.options.volume);return a};this.toggleMute=function(){return a.muted?a.unmute():a.mute()};this.onposition=this.onPosition=function(b,c,d){p.push({position:parseInt(b,10),method:c,scope:d!==g?d:a,fired:!1});return a};this.clearOnPosition=function(a,b){var c;a=parseInt(a,10);if(isNaN(a))return!1;for(c=0;c<p.length;c++)if(a===
p[c].position&&(!b||b===p[c].method))p[c].fired&&q--,p.splice(c,1)};this._processOnPosition=function(){var b,c;b=p.length;if(!b||!a.playState||q>=b)return!1;for(b-=1;0<=b;b--)c=p[b],!c.fired&&a.position>=c.position&&(c.fired=!0,q++,c.method.apply(c.scope,[c.position]));return!0};this._resetOnPosition=function(a){var b,c;b=p.length;if(!b)return!1;for(b-=1;0<=b;b--)c=p[b],c.fired&&a<=c.position&&(c.fired=!1,q--);return!0};x=function(){var b=a._iO,c=b.from,d=b.to,e,f;f=function(){a.clearOnPosition(d,
f);a.stop()};e=function(){if(null!==d&&!isNaN(d))a.onPosition(d,f)};null!==c&&!isNaN(c)&&(b.position=c,b.multiShot=!1,e());return b};n=function(){var b,c=a._iO.onposition;if(c)for(b in c)if(c.hasOwnProperty(b))a.onPosition(parseInt(b,10),c[b])};v=function(){var b,c=a._iO.onposition;if(c)for(b in c)c.hasOwnProperty(b)&&a.clearOnPosition(parseInt(b,10))};k=function(){a.isHTML5&&Ra(a)};K=function(){a.isHTML5&&Sa(a)};f=function(b){b||(p=[],q=0);r=!1;a._hasTimer=null;a._a=null;a._html5_canplay=!1;a.bytesLoaded=
null;a.bytesTotal=null;a.duration=a._iO&&a._iO.duration?a._iO.duration:null;a.durationEstimate=null;a.buffered=[];a.eqData=[];a.eqData.left=[];a.eqData.right=[];a.failures=0;a.isBuffering=!1;a.instanceOptions={};a.instanceCount=0;a.loaded=!1;a.metadata={};a.readyState=0;a.muted=!1;a.paused=!1;a.peakData={left:0,right:0};a.waveformData={left:[],right:[]};a.playState=0;a.position=null;a.id3={}};f();this._onTimer=function(b){var c,f=!1,g={};if(a._hasTimer||b){if(a._a&&(b||(0<a.playState||1===a.readyState)&&
!a.paused))c=a._get_html5_duration(),c!==d&&(d=c,a.duration=c,f=!0),a.durationEstimate=a.duration,c=1E3*a._a.currentTime||0,c!==e&&(e=c,f=!0),(f||b)&&a._whileplaying(c,g,g,g,g);return f}};this._get_html5_duration=function(){var b=a._iO;return(b=a._a&&a._a.duration?1E3*a._a.duration:b&&b.duration?b.duration:null)&&!isNaN(b)&&Infinity!==b?b:null};this._apply_loop=function(a,b){a.loop=1<b?"loop":""};this._setup_html5=function(b){b=w(a._iO,b);var c=z?Ka:a._a,d=decodeURI(b.url),e;z?d===decodeURI(Ca)&&
(e=!0):d===decodeURI(u)&&(e=!0);if(c){if(c._s)if(z)c._s&&(c._s.playState&&!e)&&c._s.stop();else if(!z&&d===decodeURI(u))return a._apply_loop(c,b.loops),c;e||(f(!1),c.src=b.url,Ca=u=a.url=b.url,c._called_load=!1)}else a._a=b.autoLoad||b.autoPlay?new Audio(b.url):Ea&&10>opera.version()?new Audio(null):new Audio,c=a._a,c._called_load=!1,z&&(Ka=c);a.isHTML5=!0;a._a=c;c._s=a;m();a._apply_loop(c,b.loops);b.autoLoad||b.autoPlay?a.load():(c.autobuffer=!1,c.preload="auto");return c};m=function(){if(a._a._added_events)return!1;
var b;a._a._added_events=!0;for(b in A)A.hasOwnProperty(b)&&a._a&&a._a.addEventListener(b,A[b],!1);return!0};J=function(){var b;a._a._added_events=!1;for(b in A)A.hasOwnProperty(b)&&a._a&&a._a.removeEventListener(b,A[b],!1)};this._onload=function(b){var c=!!b||!a.isHTML5&&8===l&&a.duration;a.loaded=c;a.readyState=c?3:2;a._onbufferchange(0);a._iO.onload&&ia(a,function(){a._iO.onload.apply(a,[c])});return!0};this._onbufferchange=function(b){if(0===a.playState||b&&a.isBuffering||!b&&!a.isBuffering)return!1;
a.isBuffering=1===b;a._iO.onbufferchange&&a._iO.onbufferchange.apply(a);return!0};this._onsuspend=function(){a._iO.onsuspend&&a._iO.onsuspend.apply(a);return!0};this._onfailure=function(b,c,d){a.failures++;if(a._iO.onfailure&&1===a.failures)a._iO.onfailure(a,b,c,d)};this._onfinish=function(){var b=a._iO.onfinish;a._onbufferchange(0);a._resetOnPosition(0);a.instanceCount&&(a.instanceCount--,a.instanceCount||(v(),a.playState=0,a.paused=!1,a.instanceCount=0,a.instanceOptions={},a._iO={},K(),a.isHTML5&&
(a.position=0)),(!a.instanceCount||a._iO.multiShotEvents)&&b&&ia(a,function(){b.apply(a)}))};this._whileloading=function(b,c,d,e){var f=a._iO;a.bytesLoaded=b;a.bytesTotal=c;a.duration=Math.floor(d);a.bufferLength=e;a.durationEstimate=!a.isHTML5&&!f.isMovieStar?f.duration?a.duration>f.duration?a.duration:f.duration:parseInt(a.bytesTotal/a.bytesLoaded*a.duration,10):a.duration;a.isHTML5||(a.buffered=[{start:0,end:a.duration}]);(3!==a.readyState||a.isHTML5)&&f.whileloading&&f.whileloading.apply(a)};
this._whileplaying=function(b,c,d,e,f){var m=a._iO;if(isNaN(b)||null===b)return!1;a.position=Math.max(0,b);a._processOnPosition();!a.isHTML5&&8<l&&(m.usePeakData&&(c!==g&&c)&&(a.peakData={left:c.leftPeak,right:c.rightPeak}),m.useWaveformData&&(d!==g&&d)&&(a.waveformData={left:d.split(","),right:e.split(",")}),m.useEQData&&(f!==g&&f&&f.leftEQ)&&(b=f.leftEQ.split(","),a.eqData=b,a.eqData.left=b,f.rightEQ!==g&&f.rightEQ&&(a.eqData.right=f.rightEQ.split(","))));1===a.playState&&(!a.isHTML5&&(8===l&&!a.position&&
a.isBuffering)&&a._onbufferchange(0),m.whileplaying&&m.whileplaying.apply(a));return!0};this._oncaptiondata=function(b){a.captiondata=b;a._iO.oncaptiondata&&a._iO.oncaptiondata.apply(a,[b])};this._onmetadata=function(b,c){var d={},e,f;e=0;for(f=b.length;e<f;e++)d[b[e]]=c[e];a.metadata=d;a._iO.onmetadata&&a._iO.onmetadata.apply(a)};this._onid3=function(b,c){var d=[],e,f;e=0;for(f=b.length;e<f;e++)d[b[e]]=c[e];a.id3=w(a.id3,d);a._iO.onid3&&a._iO.onid3.apply(a)};this._onconnect=function(b){b=1===b;if(a.connected=
b)a.failures=0,s(a.id)&&(a.getAutoPlay()?a.play(g,a.getAutoPlay()):a._iO.autoLoad&&a.load()),a._iO.onconnect&&a._iO.onconnect.apply(a,[b])};this._ondataerror=function(b){0<a.playState&&a._iO.ondataerror&&a._iO.ondataerror.apply(a)}};va=function(){return n.body||n._docElement||n.getElementsByTagName("div")[0]};X=function(b){return n.getElementById(b)};w=function(b,d){var e=b||{},a,f;a=d===g?c.defaultOptions:d;for(f in a)a.hasOwnProperty(f)&&e[f]===g&&(e[f]="object"!==typeof a[f]||null===a[f]?a[f]:
w(e[f],a[f]));return e};ia=function(b,c){!b.isHTML5&&8===l?k.setTimeout(c,0):c()};Y={onready:1,ontimeout:1,defaultOptions:1,flash9Options:1,movieStarOptions:1};pa=function(b,d){var e,a=!0,f=d!==g,m=c.setupOptions;for(e in b)if(b.hasOwnProperty(e))if("object"!==typeof b[e]||null===b[e]||b[e]instanceof Array||b[e]instanceof RegExp)f&&Y[d]!==g?c[d][e]=b[e]:m[e]!==g?(c.setupOptions[e]=b[e],c[e]=b[e]):Y[e]===g?a=!1:c[e]instanceof Function?c[e].apply(c,b[e]instanceof Array?b[e]:[b[e]]):c[e]=b[e];else if(Y[e]===
g)a=!1;else return pa(b[e],e);return a};t=function(){function b(a){a=fb.call(a);var b=a.length;e?(a[1]="on"+a[1],3<b&&a.pop()):3===b&&a.push(!1);return a}function c(b,d){var g=b.shift(),h=[a[d]];if(e)g[h](b[0],b[1]);else g[h].apply(g,b)}var e=k.attachEvent,a={add:e?"attachEvent":"addEventListener",remove:e?"detachEvent":"removeEventListener"};return{add:function(){c(b(arguments),"add")},remove:function(){c(b(arguments),"remove")}}}();A={abort:r(function(){}),canplay:r(function(){var b=this._s,c;if(b._html5_canplay)return!0;
b._html5_canplay=!0;b._onbufferchange(0);c=b._iO.position!==g&&!isNaN(b._iO.position)?b._iO.position/1E3:null;if(b.position&&this.currentTime!==c)try{this.currentTime=c}catch(e){}b._iO._oncanplay&&b._iO._oncanplay()}),canplaythrough:r(function(){var b=this._s;b.loaded||(b._onbufferchange(0),b._whileloading(b.bytesLoaded,b.bytesTotal,b._get_html5_duration()),b._onload(!0))}),ended:r(function(){this._s._onfinish()}),error:r(function(){this._s._onload(!1)}),loadeddata:r(function(){var b=this._s;!b._loaded&&
!ja&&(b.duration=b._get_html5_duration())}),loadedmetadata:r(function(){}),loadstart:r(function(){this._s._onbufferchange(1)}),play:r(function(){this._s._onbufferchange(0)}),playing:r(function(){this._s._onbufferchange(0)}),progress:r(function(b){var c=this._s,e,a,f=0,f=b.target.buffered;e=b.loaded||0;var g=b.total||1;c.buffered=[];if(f&&f.length){e=0;for(a=f.length;e<a;e++)c.buffered.push({start:1E3*f.start(e),end:1E3*f.end(e)});f=1E3*(f.end(0)-f.start(0));e=Math.min(1,f/(1E3*b.target.duration))}isNaN(e)||
(c._onbufferchange(0),c._whileloading(e,g,c._get_html5_duration()),e&&(g&&e===g)&&A.canplaythrough.call(this,b))}),ratechange:r(function(){}),suspend:r(function(b){var c=this._s;A.progress.call(this,b);c._onsuspend()}),stalled:r(function(){}),timeupdate:r(function(){this._s._onTimer()}),waiting:r(function(){this._s._onbufferchange(1)})};ga=function(b){return b.serverURL||b.type&&W(b.type)?!1:b.type?T({type:b.type}):T({url:b.url})||c.html5Only};ha=function(b){var c;b&&(c=ja&&!U?null:hb?"about:blank":
null,b.src=c,void 0!==b._called_unload&&(b._called_load=!1));z&&(Ca=null);return c};T=function(b){if(!c.useHTML5Audio||!c.hasHTML5)return!1;var d=b.url||null;b=b.type||null;var e=c.audioFormats,a;if(b&&c.html5[b]!==g)return c.html5[b]&&!W(b);if(!y){y=[];for(a in e)e.hasOwnProperty(a)&&(y.push(a),e[a].related&&(y=y.concat(e[a].related)));y=RegExp("\\.("+y.join("|")+")(\\?.*)?$","i")}a=d?d.toLowerCase().match(y):null;!a||!a.length?b&&(d=b.indexOf(";"),a=(-1!==d?b.substr(0,d):b).substr(6)):a=a[1];a&&
c.html5[a]!==g?d=c.html5[a]&&!W(a):(b="audio/"+a,d=c.html5.canPlayType({type:b}),d=(c.html5[a]=d)&&c.html5[b]&&!W(b));return d};Wa=function(){function b(a){var b,e,f=b=!1;if(!d||"function"!==typeof d.canPlayType)return b;if(a instanceof Array){b=0;for(e=a.length;b<e;b++)if(c.html5[a[b]]||d.canPlayType(a[b]).match(c.html5Test))f=!0,c.html5[a[b]]=!0,c.flash[a[b]]=!!a[b].match(bb);b=f}else a=d&&"function"===typeof d.canPlayType?d.canPlayType(a):!1,b=!(!a||!a.match(c.html5Test));return b}if(!c.useHTML5Audio||
!c.hasHTML5)return!1;var d=Audio!==g?Ea&&10>opera.version()?new Audio(null):new Audio:null,e,a,f={},m;m=c.audioFormats;for(e in m)if(m.hasOwnProperty(e)&&(a="audio/"+e,f[e]=b(m[e].type),f[a]=f[e],e.match(bb)?(c.flash[e]=!0,c.flash[a]=!0):(c.flash[e]=!1,c.flash[a]=!1),m[e]&&m[e].related))for(a=m[e].related.length-1;0<=a;a--)f["audio/"+m[e].related[a]]=f[e],c.html5[m[e].related[a]]=f[e],c.flash[m[e].related[a]]=f[e];f.canPlayType=d?b:null;c.html5=w(c.html5,f);return!0};sa={};Q=function(){};ba=function(b){8===
l&&(1<b.loops&&b.stream)&&(b.stream=!1);return b};ca=function(b,c){if(b&&!b.usePolicyFile&&(b.onid3||b.usePeakData||b.useWaveformData||b.useEQData))b.usePolicyFile=!0;return b};ma=function(){return!1};Pa=function(b){for(var c in b)b.hasOwnProperty(c)&&"function"===typeof b[c]&&(b[c]=ma)};xa=function(b){b===g&&(b=!1);(v||b)&&c.disable(b)};Qa=function(b){var d=null;if(b)if(b.match(/\.swf(\?.*)?$/i)){if(d=b.substr(b.toLowerCase().lastIndexOf(".swf?")+4))return b}else b.lastIndexOf("/")!==b.length-1&&
(b+="/");b=(b&&-1!==b.lastIndexOf("/")?b.substr(0,b.lastIndexOf("/")+1):"./")+c.movieURL;c.noSWFCache&&(b+="?ts\x3d"+(new Date).getTime());return b};ra=function(){l=parseInt(c.flashVersion,10);8!==l&&9!==l&&(c.flashVersion=l=8);var b=c.debugMode||c.debugFlash?"_debug.swf":".swf";c.useHTML5Audio&&(!c.html5Only&&c.audioFormats.mp4.required&&9>l)&&(c.flashVersion=l=9);c.version=c.versionNumber+(c.html5Only?" (HTML5-only mode)":9===l?" (AS3/Flash 9)":" (AS2/Flash 8)");8<l?(c.defaultOptions=w(c.defaultOptions,
c.flash9Options),c.features.buffering=!0,c.defaultOptions=w(c.defaultOptions,c.movieStarOptions),c.filePatterns.flash9=RegExp("\\.(mp3|"+eb.join("|")+")(\\?.*)?$","i"),c.features.movieStar=!0):c.features.movieStar=!1;c.filePattern=c.filePatterns[8!==l?"flash9":"flash8"];c.movieURL=(8===l?"soundmanager2.swf":"soundmanager2_flash9.swf").replace(".swf",b);c.features.peakData=c.features.waveformData=c.features.eqData=8<l};Oa=function(b,c){if(!h)return!1;h._setPolling(b,c)};wa=function(){};s=this.getSoundById;
I=function(){var b=[];c.debugMode&&b.push("sm2_debug");c.debugFlash&&b.push("flash_debug");c.useHighPerformance&&b.push("high_performance");return b.join(" ")};za=function(){Q("fbHandler");var b=c.getMoviePercent(),d={type:"FLASHBLOCK"};if(c.html5Only)return!1;c.ok()?c.oMC&&(c.oMC.className=[I(),"movieContainer","swf_loaded"+(c.didFlashBlock?" swf_unblocked":"")].join(" ")):(x&&(c.oMC.className=I()+" movieContainer "+(null===b?"swf_timedout":"swf_error")),c.didFlashBlock=!0,D({type:"ontimeout",ignoreInit:!0,
error:d}),H(d))};qa=function(b,c,e){u[b]===g&&(u[b]=[]);u[b].push({method:c,scope:e||null,fired:!1})};D=function(b){b||(b={type:c.ok()?"onready":"ontimeout"});if(!q&&b&&!b.ignoreInit||"ontimeout"===b.type&&(c.ok()||v&&!b.ignoreInit))return!1;var d={success:b&&b.ignoreInit?c.ok():!v},e=b&&b.type?u[b.type]||[]:[],a=[],f,d=[d],g=x&&!c.ok();b.error&&(d[0].error=b.error);b=0;for(f=e.length;b<f;b++)!0!==e[b].fired&&a.push(e[b]);if(a.length){b=0;for(f=a.length;b<f;b++)a[b].scope?a[b].method.apply(a[b].scope,
d):a[b].method.apply(this,d),g||(a[b].fired=!0)}return!0};E=function(){k.setTimeout(function(){c.useFlashBlock&&za();D();"function"===typeof c.onload&&c.onload.apply(k);c.waitForWindowLoad&&t.add(k,"load",E)},1)};Da=function(){if(C!==g)return C;var b=!1,c=navigator,e=c.plugins,a,f=k.ActiveXObject;if(e&&e.length)(c=c.mimeTypes)&&(c["application/x-shockwave-flash"]&&c["application/x-shockwave-flash"].enabledPlugin&&c["application/x-shockwave-flash"].enabledPlugin.description)&&(b=!0);else if(f!==g&&
!p.match(/MSAppHost/i)){try{a=new f("ShockwaveFlash.ShockwaveFlash")}catch(m){}b=!!a}return C=b};Va=function(){var b,d,e=c.audioFormats;if(U&&p.match(/os (1|2|3_0|3_1)/i))c.hasHTML5=!1,c.html5Only=!0,c.oMC&&(c.oMC.style.display="none");else if(c.useHTML5Audio&&(!c.html5||!c.html5.canPlayType))c.hasHTML5=!1;if(c.useHTML5Audio&&c.hasHTML5)for(d in fa=!0,e)if(e.hasOwnProperty(d)&&e[d].required)if(c.html5.canPlayType(e[d].type)){if(c.preferFlash&&(c.flash[d]||c.flash[e[d].type]))b=!0}else fa=!1,b=!0;
c.ignoreFlash&&(b=!1,fa=!0);c.html5Only=c.hasHTML5&&c.useHTML5Audio&&!b;return!c.html5Only};ea=function(b){var d,e,a=0;if(b instanceof Array){d=0;for(e=b.length;d<e;d++)if(b[d]instanceof Object){if(c.canPlayMIME(b[d].type)){a=d;break}}else if(c.canPlayURL(b[d])){a=d;break}b[a].url&&(b[a]=b[a].url);b=b[a]}return b};Ra=function(b){b._hasTimer||(b._hasTimer=!0,!Fa&&c.html5PollingInterval&&(null===S&&0===da&&(S=setInterval(Ta,c.html5PollingInterval)),da++))};Sa=function(b){b._hasTimer&&(b._hasTimer=!1,
!Fa&&c.html5PollingInterval&&da--)};Ta=function(){var b;if(null!==S&&!da)return clearInterval(S),S=null,!1;for(b=c.soundIDs.length-1;0<=b;b--)c.sounds[c.soundIDs[b]].isHTML5&&c.sounds[c.soundIDs[b]]._hasTimer&&c.sounds[c.soundIDs[b]]._onTimer()};H=function(b){b=b!==g?b:{};"function"===typeof c.onerror&&c.onerror.apply(k,[{type:b.type!==g?b.type:null}]);b.fatal!==g&&b.fatal&&c.disable()};Xa=function(){if(!$a||!Da())return!1;var b=c.audioFormats,d,e;for(e in b)if(b.hasOwnProperty(e)&&("mp3"===e||"mp4"===
e))if(c.html5[e]=!1,b[e]&&b[e].related)for(d=b[e].related.length-1;0<=d;d--)c.html5[b[e].related[d]]=!1};this._setSandboxType=function(b){};this._externalInterfaceOK=function(b,d){if(c.swfLoaded)return!1;c.swfLoaded=!0;ka=!1;$a&&Xa();setTimeout(na,B?100:1)};aa=function(b,d){function e(a,b){return'\x3cparam name\x3d"'+a+'" value\x3d"'+b+'" /\x3e'}if(L&&M)return!1;if(c.html5Only)return ra(),c.oMC=X(c.movieID),na(),M=L=!0,!1;var a=d||c.url,f=c.altURL||a,m=va(),h=I(),k=null,k=n.getElementsByTagName("html")[0],
l,r,q,k=k&&k.dir&&k.dir.match(/rtl/i);b=b===g?c.id:b;ra();c.url=Qa(Ha?a:f);d=c.url;c.wmode=!c.wmode&&c.useHighPerformance?"transparent":c.wmode;if(null!==c.wmode&&(p.match(/msie 8/i)||!B&&!c.useHighPerformance)&&navigator.platform.match(/win32|win64/i))Ua.push(sa.spcWmode),c.wmode=null;m={name:b,id:b,src:d,quality:"high",allowScriptAccess:c.allowScriptAccess,bgcolor:c.bgColor,pluginspage:cb+"www.macromedia.com/go/getflashplayer",title:"JS/Flash audio component (SoundManager 2)",type:"application/x-shockwave-flash",
wmode:c.wmode,hasPriority:"true"};c.debugFlash&&(m.FlashVars="debug\x3d1");c.wmode||delete m.wmode;if(B)a=n.createElement("div"),r=['\x3cobject id\x3d"'+b+'" data\x3d"'+d+'" type\x3d"'+m.type+'" title\x3d"'+m.title+'" classid\x3d"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase\x3d"'+cb+'download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version\x3d6,0,40,0"\x3e',e("movie",d),e("AllowScriptAccess",c.allowScriptAccess),e("quality",m.quality),c.wmode?e("wmode",c.wmode):"",e("bgcolor",
c.bgColor),e("hasPriority","true"),c.debugFlash?e("FlashVars",m.FlashVars):"","\x3c/object\x3e"].join("");else for(l in a=n.createElement("embed"),m)m.hasOwnProperty(l)&&a.setAttribute(l,m[l]);wa();h=I();if(m=va())if(c.oMC=X(c.movieID)||n.createElement("div"),c.oMC.id)q=c.oMC.className,c.oMC.className=(q?q+" ":"movieContainer")+(h?" "+h:""),c.oMC.appendChild(a),B&&(l=c.oMC.appendChild(n.createElement("div")),l.className="sm2-object-box",l.innerHTML=r),M=!0;else{c.oMC.id=c.movieID;c.oMC.className=
"movieContainer "+h;l=h=null;c.useFlashBlock||(c.useHighPerformance?h={position:"fixed",width:"8px",height:"8px",bottom:"0px",left:"0px",overflow:"hidden"}:(h={position:"absolute",width:"6px",height:"6px",top:"-9999px",left:"-9999px"},k&&(h.left=Math.abs(parseInt(h.left,10))+"px")));gb&&(c.oMC.style.zIndex=1E4);if(!c.debugFlash)for(q in h)h.hasOwnProperty(q)&&(c.oMC.style[q]=h[q]);try{B||c.oMC.appendChild(a),m.appendChild(c.oMC),B&&(l=c.oMC.appendChild(n.createElement("div")),l.className="sm2-object-box",
l.innerHTML=r),M=!0}catch(s){throw Error(Q("domError")+" \n"+s.toString());}}return L=!0};$=function(){if(c.html5Only)return aa(),!1;if(h||!c.url)return!1;h=c.getMovie(c.id);h||(P?(B?c.oMC.innerHTML=ya:c.oMC.appendChild(P),P=null,L=!0):aa(c.id,c.url),h=c.getMovie(c.id));"function"===typeof c.oninitmovie&&setTimeout(c.oninitmovie,1);return!0};F=function(){setTimeout(Na,1E3)};Na=function(){var b,d=!1;if(!c.url||R)return!1;R=!0;t.remove(k,"load",F);if(ka&&!Ga)return!1;q||(b=c.getMoviePercent(),0<b&&
100>b&&(d=!0));setTimeout(function(){b=c.getMoviePercent();if(d)return R=!1,k.setTimeout(F,1),!1;!q&&ab&&(null===b?c.useFlashBlock||0===c.flashLoadTimeout?c.useFlashBlock&&za():!c.useFlashBlock&&fa?k.setTimeout(function(){c.setup({preferFlash:!1}).reboot();c.didFlashBlock=!0;c.beginDelayedInit()},1):D({type:"ontimeout",ignoreInit:!0}):0!==c.flashLoadTimeout&&xa(!0))},c.flashLoadTimeout)};Z=function(){if(Ga||!ka)return t.remove(k,"focus",Z),!0;Ga=ab=!0;R=!1;F();t.remove(k,"focus",Z);return!0};N=function(b){if(q)return!1;
if(c.html5Only)return q=!0,E(),!0;var d=!0,e;if(!c.useFlashBlock||!c.flashLoadTimeout||c.getMoviePercent())q=!0,v&&(e={type:!C&&x?"NO_FLASH":"INIT_TIMEOUT"});if(v||b)c.useFlashBlock&&c.oMC&&(c.oMC.className=I()+" "+(null===c.getMoviePercent()?"swf_timedout":"swf_error")),D({type:"ontimeout",error:e,ignoreInit:!0}),H(e),d=!1;v||(c.waitForWindowLoad&&!oa?t.add(k,"load",E):E());return d};Ma=function(){var b,d=c.setupOptions;for(b in d)d.hasOwnProperty(b)&&(c[b]===g?c[b]=d[b]:c[b]!==d[b]&&(c.setupOptions[b]=
c[b]))};na=function(){if(q)return!1;if(c.html5Only)return q||(t.remove(k,"load",c.beginDelayedInit),c.enabled=!0,N()),!0;$();try{h._externalInterfaceTest(!1),Oa(!0,c.flashPollingInterval||(c.useHighPerformance?10:50)),c.debugMode||h._disableDebug(),c.enabled=!0,c.html5Only||t.add(k,"unload",ma)}catch(b){return H({type:"JS_TO_FLASH_EXCEPTION",fatal:!0}),xa(!0),N(),!1}N();t.remove(k,"load",c.beginDelayedInit);return!0};G=function(){if(O)return!1;O=!0;Ma();wa();!C&&c.hasHTML5&&c.setup({useHTML5Audio:!0,
preferFlash:!1});Wa();c.html5.usingFlash=Va();x=c.html5.usingFlash;!C&&x&&(Ua.push(sa.needFlash),c.setup({flashLoadTimeout:1}));n.removeEventListener&&n.removeEventListener("DOMContentLoaded",G,!1);$();return!0};Ba=function(){"complete"===n.readyState&&(G(),n.detachEvent("onreadystatechange",Ba));return!0};ua=function(){oa=!0;t.remove(k,"load",ua)};ta=function(){if(Fa&&(c.setupOptions.useHTML5Audio=!0,c.setupOptions.preferFlash=!1,U||Za&&!p.match(/android\s2\.3/i)))U&&(c.ignoreFlash=!0),z=!0};ta();
Da();t.add(k,"focus",Z);t.add(k,"load",F);t.add(k,"load",ua);n.addEventListener?n.addEventListener("DOMContentLoaded",G,!1):n.attachEvent?n.attachEvent("onreadystatechange",Ba):H({type:"NO_DOM2_EVENTS",fatal:!0})}var la=null;if(void 0===k.SM2_DEFER||!SM2_DEFER)la=new V;k.SoundManager=V;k.soundManager=la})(window);