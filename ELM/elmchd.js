// 饿了么吃货豆
//需要点外卖同学的福利
//脚本说明：目前只支持部分任务，500，1000吃货豆换无门槛外卖红包
//https://h5.ele.me/svip/task-list url script-request-header https://cdn.jsdelivr.net/gh/LubooC/Script@main/ELM/elmchd.js
//青龙环境变量  export elmck='0.3'
//抓包 h5.ele.me 域名下的任何url 请求头中的Cookie
//获取数据 饿了么App->我的-> 赚吃货豆
// 多账户 @
//脚本  5 12,18 * * *  https://cdn.jsdelivr.net/gh/LubooC/Script@main/ELM/elmchd.js
// 更新 2021-11-24
const _0x478665=_0x54fd;(function(_0x472bea,_0xe45cb2){const _0x5cb642=_0x54fd,_0x5cc2b2=_0x472bea();while(!![]){try{const _0x2a65db=-parseInt(_0x5cb642(0x21f))/0x1*(parseInt(_0x5cb642(0x1b7))/0x2)+-parseInt(_0x5cb642(0x209))/0x3+parseInt(_0x5cb642(0x21e))/0x4+parseInt(_0x5cb642(0x24d))/0x5+parseInt(_0x5cb642(0x238))/0x6+parseInt(_0x5cb642(0x204))/0x7+-parseInt(_0x5cb642(0x235))/0x8*(parseInt(_0x5cb642(0x1d1))/0x9);if(_0x2a65db===_0xe45cb2)break;else _0x5cc2b2['push'](_0x5cc2b2['shift']());}catch(_0x1ee157){_0x5cc2b2['push'](_0x5cc2b2['shift']());}}}(_0x39f3,0xbe5a6));const $=new Env(_0x478665(0x262));function _0x54fd(_0x1d2f48,_0x2f4a93){const _0x39f39e=_0x39f3();return _0x54fd=function(_0x54fd36,_0x449add){_0x54fd36=_0x54fd36-0x1b0;let _0x43be91=_0x39f39e[_0x54fd36];return _0x43be91;},_0x54fd(_0x1d2f48,_0x2f4a93);}let status;status=(status=$['getval']('fhxzstatus')||'1')>0x1?''+status:'';let elmckArr=[],time=Math[_0x478665(0x252)](Date['now']()/0x3e8),elmck=$[_0x478665(0x217)]()?process[_0x478665(0x25a)][_0x478665(0x20c)]?process['env'][_0x478665(0x20c)]:'':$[_0x478665(0x1bb)](_0x478665(0x20c))?$[_0x478665(0x1bb)]('elmck'):'',elmcks='',acceptTagCode,queryTagCode,num=rand(0xa,0x63);!(async()=>{const _0x314f4a=_0x478665;if(typeof $request!==_0x314f4a(0x1fb))fhxzck();else{if(!$[_0x314f4a(0x217)]()){elmckArr['push']($['getdata'](_0x314f4a(0x20c)));let _0x26d702=$['getval']('elmcount')||'1';for(let _0xa15728=0x2;_0xa15728<=_0x26d702;_0xa15728++){elmckArr[_0x314f4a(0x1bc)]($['getdata'](_0x314f4a(0x20c)+_0xa15728));}console[_0x314f4a(0x269)](_0x314f4a(0x236)+elmckArr['length']+_0x314f4a(0x24a));for(let _0x3e6aa1=0x0;_0x3e6aa1<elmckArr[_0x314f4a(0x22a)];_0x3e6aa1++){elmckArr[_0x3e6aa1]&&(elmck=elmckArr[_0x3e6aa1],$[_0x314f4a(0x1be)]=_0x3e6aa1+0x1,console['log'](_0x314f4a(0x220)+$['index']+'】'),await tagcode(),await supportor(),await user(),console[_0x314f4a(0x269)](_0x314f4a(0x253)),await menu(),console[_0x314f4a(0x269)](_0x314f4a(0x240)),await user(),$[_0x314f4a(0x269)](_0x314f4a(0x219)));}}else{process[_0x314f4a(0x25a)][_0x314f4a(0x20c)]&&process[_0x314f4a(0x25a)][_0x314f4a(0x20c)][_0x314f4a(0x1b8)]('@')>-0x1?(elmckArr=process[_0x314f4a(0x25a)][_0x314f4a(0x20c)][_0x314f4a(0x218)]('@'),console[_0x314f4a(0x269)](_0x314f4a(0x242))):elmcks=[process[_0x314f4a(0x25a)]['elmck']];;Object[_0x314f4a(0x22d)](elmcks)[_0x314f4a(0x249)](_0x2e9f40=>{const _0x1ed104=_0x314f4a;elmcks[_0x2e9f40]&&elmckArr[_0x1ed104(0x1bc)](elmcks[_0x2e9f40]);}),console[_0x314f4a(0x269)]('共'+elmckArr['length']+_0x314f4a(0x20f));for(let _0x90c696=0x0;_0x90c696<elmckArr[_0x314f4a(0x22a)];_0x90c696++){$[_0x314f4a(0x1ea)]='',elmck=elmckArr[_0x90c696],$[_0x314f4a(0x1be)]=_0x90c696+0x1,console['log'](_0x314f4a(0x220)+$['index']+'】'),await tagcode(),await supportor(),await user(),console[_0x314f4a(0x269)](_0x314f4a(0x1fc)),await menu(),console[_0x314f4a(0x269)]('任务已完成'),await user(),$[_0x314f4a(0x269)](_0x314f4a(0x219));}}}})()[_0x478665(0x24f)](_0x29cf04=>$[_0x478665(0x1e2)](_0x29cf04))['finally'](()=>$[_0x478665(0x225)]());function fhxzck(){const _0x3faa86=_0x478665;if($request[_0x3faa86(0x201)][_0x3faa86(0x1b8)](_0x3faa86(0x22f))>-0x1&&$request[_0x3faa86(0x201)][_0x3faa86(0x1b8)](_0x3faa86(0x259))>-0x1&&$request['url'][_0x3faa86(0x1b8)](_0x3faa86(0x1e5))>-0x1){const _0x463b0c=$request[_0x3faa86(0x201)];if(_0x463b0c)$[_0x3faa86(0x25f)](_0x463b0c,_0x3faa86(0x1b3)+status);$[_0x3faa86(0x269)](_0x463b0c),$[_0x3faa86(0x1f5)]($['name'],'','闪辆'+status+_0x3faa86(0x1e3));}}function supportor(){return new Promise(_0x5071bc=>{const _0xaec53e=_0x54fd;let _0x337bdf={'url':_0xaec53e(0x1b0),'body':'{\x22ownerId\x22:\x22bfb0188\x22,\x22fromOfficialAccount\x22:false,\x22referUserId\x22:\x22\x22,\x22restaurantId\x22:\x22\x22,\x22referCode\x22:\x22\x22,\x22referChannelCode\x22:\x22\x22,\x22referChannelType\x22:\x22\x22,\x22fromWeChatApp\x22:false,\x22bizType\x22:\x221\x22,\x22v\x22:\x222.9\x22,\x22chInfo\x22:\x22ch_app_chsub_Kouling\x22,\x22actId\x22:\x221\x22,\x22longitude\x22:113.387138366699'+num+_0xaec53e(0x1fa)+num+'}','headers':{'Cookie':elmck,'Host':'h5.ele.me','f-refer':_0xaec53e(0x1ef),'Accept':'application/json,\x20text/plain,\x20*/*','x-shard':_0xaec53e(0x1f2),'bx-umidToken':_0xaec53e(0x243),'bx-ua':'140#mduoUlx7zzPr1Qo2+bNuKtN8s7afQemsOQzhofihLm/fELepctQNikx6B66rNDIU4FgMlp1zz/yOZVjLIzrxo2Nxath/zzrb22U3lp1xzASiVXE/tFzx2Dc33Q/R8HBP2IwNfm7cOuF9yG7+SW4hkGZAgDcVJF5+swrqx3pyQ7D26bWmF1+MFD9jjjaoBpuiHJM+vQvV6Ptb/zVreKIZam7+2wMeiFJXQxHf9sG9BnCDArdBRUbI41rxrHxCfL7nHtAou2z2jyTfg1bGbi6VnkQbb5EadkB9clAeiIh0mYLg8rLeWzNDDQYidZLCpM6TYn2wdUPeO7qknLRPKoJldLml+Z+TA2PYUurnDrC5vX/IBocrJnADo9NsT1XUnXdek8cymmbO4psEnwe+loACorSRTWzerjvLa5/zenhbI9ihza2ozyyzxM0sVAOQhnz5xPv62WmoDKTh2lwg+3v5yfFg1PpoD3BirZlqAIzmTd5q0X2onsAbnMKJtEl9RPu5r2xwmKJ7cPHBVwDyVgtsTnPs+QhodSFdyzGr/X9BgENdRdVNveplWneJMO7M13J2KAMDyziEVHjcrtbSYv/qmldpHxVNj1r6P8kwiKaO2FKj7f7yVa/3KbQ9JdgoTcOCcE+y7bLRyDXQiC609oixOl5PWuG8zW4uJj3GI+GwUjVlI/8R3kzIizpsssg1VejIDP9PMO0BN5kNTilSFwTeSC0dThTw8OW6ZVvWQl4qXQgi4LZSfxhchU/sFCwEpZwJ1kjcVUkHYOsOKzeaVgrhmY+uaMc1F07jS08DzsIsv9ghv7XuLtpp73VhQhNWcM8DaWaYkF4GBENmKgu0lBmblCe3E7GD+AT0mCytRDyWXTXrkh4DdGXJNTvvhDMJKi56KBlnwXtzG1Q==','f-pTraceId':_0xaec53e(0x1c2),'Accept-Language':_0xaec53e(0x1f8),'Accept-Encoding':_0xaec53e(0x1f9),'Content-Type':_0xaec53e(0x22b),'Origin':_0xaec53e(0x26b),'x-ua':_0xaec53e(0x1e4),'User-Agent':_0xaec53e(0x23d),'Referer':'https://tb.ele.me/wow/alsc/mod/d5275789de46503ba0908a9d?e=1&open_type=miniapp&inviterId=bfb0188&actId=1&_ltracker_f=hjb_app_grzx&chInfo=ch_app_chsub_Kouling','Content-Length':'294','Connection':'keep-alive'}};$[_0xaec53e(0x264)](_0x337bdf,async(_0x223ca4,_0x265e70,_0x5e94a5)=>{const _0x3d0bec=_0xaec53e;try{let _0x16e756=JSON[_0x3d0bec(0x1c8)](_0x5e94a5);console['log'](_0x16e756[_0x3d0bec(0x1ea)]);}catch(_0x1db88c){$['logErr'](_0x1db88c,_0x265e70);}finally{_0x5071bc();}},0x0);});}function _0x39f3(){const _0x5c74e2=['8YxwPns','-------------共','object','4070850YqTPxw','moduleList','null','iconv-lite','substr','Rajax/1\x20Apple/iPhone12,1\x20iOS/14.2\x20Eleme/10.0.5\x20ID/448AA663-DF5F-4E03-A189-4C9BB5FD4362;\x20IsJailbroken/1\x20ASI/E8769D4C-6979-416E-A9DC-02FC21E319B6\x20Mozilla/5.0\x20(iPhone;\x20CPU\x20iPhone\x20OS\x2014_2\x20like\x20Mac\x20OS\x20X)\x20AppleWebKit/605.1.15\x20(KHTML,\x20like\x20Gecko)\x20Mobile/15E148\x20AliApp(ELMC/10.0.5)\x20UT4Aplus/0.0.6\x20WindVane/8.7.2\x20828x1792\x20WK','wait','%22,%22extra%22:%7B%22missionDefId%22:','任务已完成','name','您选择的是用\x22@\x22隔开\x0a','T2gAZs4Ps_oSpJevFLBlo77x7ARE80DOi2OR4CX-q2Qbu7RqyrAyaJy9xpBUAFMO780=','toStr','stringify','write','POST','set-cookie','forEach','个账号-------------\x0a','outputJson','exports','4858840uamQJT',',\x20错误!','catch','rawBody','application/x-www-form-urlencoded','round','获取任务','writedata','lodash_get','decode','%22%7D%7D&bizCode=biz_code_main&longitude=113.38713836669','media-url','query_list','env','getTime','data','loaddata','trim','setdata','body','toObj','饿了么吃货豆','https://h5.ele.me/restapi/biz.svip_scene/svip/engine/queryTrafficSupply?tagParams[]=%7B%22tagCode%22:%22','post','statusCode','utf-8',',%22missionType%22:%22','abs','log','getval','https://tb.ele.me','method','setValueForKey','ckjar','lodash_set','got','https://h5.ele.me/restapi/alpaca/v1/recommend/supportor','match','GET','slurl','path','*/*','随机等待15~16.5秒','167260wXanCY','indexOf','https://h5.ele.me/restapi/biz.svip_bonus/v1/users/supervip/pea/queryAccountBalance?types=[%22PEA_ACCOUNT%22]&longitude=113.387138366699','timeout','getdata','push','missionDefId','index','encoding','&latitude=22.931276321411','Content-Type','WVNet_WV_13-15-158','valueForKey','count','join','assign','headers','parse','cron','subTitle','getMinutes','toString','runScript','startTime','slice','success','12808521pjaQZn','redirect','toLocaleLowerCase','isQuanX','isSurge','http',',\x20结束!\x20🕛\x20','random','readFileSync','getSeconds','@chavy_boxjs_userCfgs.httpapi_timeout','&latitude=22.9312763214111','isMuteLog','accountInfos','cktough','$attr','writeFileSync','logErr','数据获取成功','RenderWay/H5\x20AppName/elmc\x20DeviceId/448AA663-DF5F-4E03-A189-4C9BB5FD4362\x20AppExtraInfo/%7B%22miniWua%22%3A%22HHnB_f6cyu2TXzDlOfOS%2BoF4NpNyH1S5mG8wfvcfSiZzdUIJ5nAr1ZIrX%2B%2F2c6rHOq4jdNG82B1nn9z5h5XJw2GUl4PcxZIHUk8Blou%2BOYzi1fxWyoKuEyqQ0e2MG2tE%2BWKqu%2B8Pieqr6ulcLl0%2BYafoUJrkDq8qQkyF%2F%2FhWSlizydXE%3D%22%2C%22umidToken%22%3A%22ci5LJE1LOrB9NTV9SKsfGQEDHTSJq52I%22%2C%22ttid%22%3A%22201200%40eleme_iphone_10.0.5%22%2C%22deviceUUID%22%3A%22448AA663-DF5F-4E03-A189-4C9BB5FD4362%22%2C%22utdid%22%3A%22XduzDP3Smv8DACNs2ftz3fmt%22%7D\x20Longitude/113.37393474757583\x20Latitude/22.978917585685476','appid=',',%22missionCollectionId%22:','isShadowrocket','Content-Length','replace','message','get','isMute','https://h5.ele.me/restapi/biz.growth_finetune/v1/finetune/operate?bizScenarioCode=home_ch_tasklist&longitude=113.387138366699','%22%7D&bizCode=biz_card_main&longitude=113.387138366699','wv_h5','mediaUrl','openUrl','loc=113.37393474757583,22.978917585685476','setjson','cookieJar','msg','content','concat','zh-cn','gzip,\x20deflate,\x20br',',\x22latitude\x22:22.9312763214111','undefined','获取任务【目前只支持部分任务】','getMonth','box.dat','/v1/scripting/evaluate','Cookie','url','existsSync','当前吃货豆：','10424057jTeNkr','getFullYear','receiveStatus','logs','initGotEnv','1663092UHwUop','send','reduce','elmck','任务：','getScript','个账号','exec','isLoon','open-url','isNeedRewrite','then','xmessage','dataFile','isNode','split','------------------任务结束------------------','http://','stack','queryTagCode','test','143900aAltla','5omlOop','\x0a开始【饿了么账户\x20','logSeparator','resolve','acceptTagCode','string','done','cwd','code','getMilliseconds','attribute','length','application/json;charset=utf-8','fetch','keys','任务失败：','checkin','opts','status','call','missionType','setval'];_0x39f3=function(){return _0x5c74e2;};return _0x39f3();}function tagcode(){return new Promise(_0x3cfbcd=>{const _0x45cf39=_0x54fd;let _0x411e8d={'url':_0x45cf39(0x1ed)+num+_0x45cf39(0x1dc)+num,'headers':{'Cookie':elmck}};$[_0x45cf39(0x1eb)](_0x411e8d,async(_0x3d6c2a,_0x27ca9d,_0x3d9af5)=>{const _0x3ee42b=_0x45cf39;try{let _0x43ea53=JSON[_0x3ee42b(0x1c8)](_0x3d9af5);_0x43ea53['success']&&(queryTagCode=_0x43ea53[_0x3ee42b(0x24b)]['moduleList'][0x2][_0x3ee42b(0x1f6)]['$attr'][_0x3ee42b(0x21c)],acceptTagCode=_0x43ea53[_0x3ee42b(0x24b)][_0x3ee42b(0x239)][0x2]['content'][_0x3ee42b(0x1e0)][_0x3ee42b(0x223)],console[_0x3ee42b(0x269)]('tagCode获取成功'));}catch(_0x3228c6){$['logErr'](_0x3228c6,_0x27ca9d);}finally{_0x3cfbcd();}},0x0);});}function user(){return new Promise(_0x4bfd56=>{const _0x21fde0=_0x54fd;let _0x410911={'url':_0x21fde0(0x1b9)+num+_0x21fde0(0x1dc)+num,'headers':{'Cookie':elmck}};$[_0x21fde0(0x1eb)](_0x410911,async(_0x505b38,_0x504ad3,_0x2e7ee7)=>{const _0xddbd6b=_0x21fde0;try{let _0x577a0a=JSON['parse'](_0x2e7ee7);_0x577a0a[_0xddbd6b(0x1d0)]&&console[_0xddbd6b(0x269)](_0xddbd6b(0x203)+_0x577a0a[_0xddbd6b(0x1de)][0x0][_0xddbd6b(0x1c4)]);}catch(_0x8a476b){$[_0xddbd6b(0x1e2)](_0x8a476b,_0x504ad3);}finally{_0x4bfd56();}},0x0);});}function menu(){return new Promise(_0xc31bcf=>{const _0x1d9081=_0x54fd;let _0x20c045={'url':_0x1d9081(0x263)+queryTagCode+_0x1d9081(0x1ee)+num+_0x1d9081(0x1dc)+num,'headers':{'Cookie':elmck}};$['get'](_0x20c045,async(_0x2c9aa2,_0x2f7730,_0x5c6378)=>{const _0x2774d4=_0x1d9081;try{let _0x15f067=JSON[_0x2774d4(0x1c8)](_0x5c6378);if(_0x15f067[_0x2774d4(0x227)]==0xc8){let _0x4277d3=_0x15f067[_0x2774d4(0x25c)][0x0][_0x2774d4(0x25c)];for(let _0x4051a5=0x0;_0x4051a5<_0x4277d3[_0x2774d4(0x22a)];_0x4051a5++){if(_0x4277d3[_0x4051a5][_0x2774d4(0x229)][_0x2774d4(0x206)]=='TORECEIVE'){let _0x34c690=_0x4277d3[_0x4051a5][_0x2774d4(0x229)][_0x2774d4(0x233)];if(_0x34c690=='SIMPLESIGNIN'){console[_0x2774d4(0x269)](_0x2774d4(0x20d)+_0x4277d3[_0x4051a5][_0x2774d4(0x229)][_0x2774d4(0x1ca)]);let _0x5e08af=_0x4277d3[_0x4051a5][_0x2774d4(0x229)][_0x2774d4(0x1bd)],_0x226ea7=_0x4277d3[_0x4051a5][_0x2774d4(0x229)]['missionCollectionId'];await running(_0x5e08af,_0x226ea7,_0x34c690),console[_0x2774d4(0x269)](_0x2774d4(0x1b6));let _0x109321=rand(0x3afc,0x4074);await $['wait'](_0x109321);}}}}}catch(_0x5eb6fa){$[_0x2774d4(0x1e2)](_0x5eb6fa,_0x2f7730);}finally{_0xc31bcf();}},0x0);});}function running(_0xc7f038,_0x4a6230,_0x168b21){return new Promise(_0x13eee3=>{const _0x434f4e=_0x54fd;let _0x30f4b3={'url':'https://h5.ele.me/restapi/biz.svip_scene/svip/engine/xSupply?params[]=%7B%22tagCode%22:%22'+acceptTagCode+_0x434f4e(0x23f)+_0xc7f038+_0x434f4e(0x1e6)+_0x4a6230+_0x434f4e(0x267)+_0x168b21+_0x434f4e(0x257)+num+_0x434f4e(0x1c0)+num,'headers':{'Cookie':elmck}};$[_0x434f4e(0x1eb)](_0x30f4b3,async(_0x292741,_0x33662a,_0x49fef7)=>{const _0x562638=_0x434f4e;try{let _0x5641fb=JSON[_0x562638(0x1c8)](_0x49fef7);_0x5641fb[_0x562638(0x25c)][0x0][_0x562638(0x229)][_0x562638(0x227)]?console['log'](_0x5641fb[_0x562638(0x25c)][0x0][_0x562638(0x229)][_0x562638(0x1ea)]):console[_0x562638(0x269)](_0x562638(0x22e)+_0x5641fb[_0x562638(0x25c)][0x0][_0x562638(0x215)]);}catch(_0x4d9ac3){$[_0x562638(0x1e2)](_0x4d9ac3,_0x33662a);}finally{_0x13eee3();}},0x0);});}function rand(_0x4c2e5d,_0x1fd637){const _0x229cf7=_0x478665;return parseInt(Math[_0x229cf7(0x1d8)]()*(_0x1fd637-_0x4c2e5d+0x1)+_0x4c2e5d,0xa);}function Env(_0x19b085,_0x40cbc5){const _0x44ca93=_0x478665;class _0x1cd3d1{constructor(_0x49773d){this['env']=_0x49773d;}[_0x44ca93(0x20a)](_0x273828,_0x328a89=_0x44ca93(0x1b2)){const _0x1180c4=_0x44ca93;_0x273828=_0x1180c4(0x224)==typeof _0x273828?{'url':_0x273828}:_0x273828;let _0x5a8787=this[_0x1180c4(0x1eb)];return'POST'===_0x328a89&&(_0x5a8787=this[_0x1180c4(0x264)]),new Promise((_0xc7e9a4,_0x445f68)=>{_0x5a8787['call'](this,_0x273828,(_0x71bcad,_0x43e811,_0x45e2e9)=>{_0x71bcad?_0x445f68(_0x71bcad):_0xc7e9a4(_0x43e811);});});}[_0x44ca93(0x1eb)](_0x5a4d88){const _0x4cd9e9=_0x44ca93;return this[_0x4cd9e9(0x20a)]['call'](this[_0x4cd9e9(0x25a)],_0x5a4d88);}[_0x44ca93(0x264)](_0x4feb5e){const _0x189b3d=_0x44ca93;return this[_0x189b3d(0x20a)][_0x189b3d(0x232)](this[_0x189b3d(0x25a)],_0x4feb5e,_0x189b3d(0x247));}}return new class{constructor(_0x2a72cb,_0x5bd0aa){const _0xa4941a=_0x44ca93;this[_0xa4941a(0x241)]=_0x2a72cb,this[_0xa4941a(0x1d6)]=new _0x1cd3d1(this),this['data']=null,this['dataFile']=_0xa4941a(0x1fe),this[_0xa4941a(0x207)]=[],this[_0xa4941a(0x1ec)]=!0x1,this['isNeedRewrite']=!0x1,this[_0xa4941a(0x221)]='\x0a',this[_0xa4941a(0x1bf)]=_0xa4941a(0x266),this[_0xa4941a(0x1ce)]=new Date()[_0xa4941a(0x25b)](),Object[_0xa4941a(0x1c6)](this,_0x5bd0aa),this[_0xa4941a(0x269)]('','🔔'+this[_0xa4941a(0x241)]+',\x20开始!');}[_0x44ca93(0x217)](){const _0x46e1bb=_0x44ca93;return _0x46e1bb(0x1fb)!=typeof module&&!!module[_0x46e1bb(0x24c)];}[_0x44ca93(0x1d4)](){const _0x5f361c=_0x44ca93;return _0x5f361c(0x1fb)!=typeof $task;}[_0x44ca93(0x1d5)](){const _0x26cc52=_0x44ca93;return _0x26cc52(0x1fb)!=typeof $httpClient&&_0x26cc52(0x1fb)==typeof $loon;}['isLoon'](){const _0x450c7a=_0x44ca93;return _0x450c7a(0x1fb)!=typeof $loon;}[_0x44ca93(0x1e7)](){const _0x50db7f=_0x44ca93;return _0x50db7f(0x1fb)!=typeof $rocket;}[_0x44ca93(0x261)](_0x2e26f2,_0x51dd1c=null){try{return JSON['parse'](_0x2e26f2);}catch{return _0x51dd1c;}}[_0x44ca93(0x244)](_0x5b4c2d,_0xd4c518=null){const _0x3610ba=_0x44ca93;try{return JSON[_0x3610ba(0x245)](_0x5b4c2d);}catch{return _0xd4c518;}}['getjson'](_0x5a9b19,_0x579157){const _0x856427=_0x44ca93;let _0x1411c2=_0x579157;const _0x5cc45b=this[_0x856427(0x1bb)](_0x5a9b19);if(_0x5cc45b)try{_0x1411c2=JSON[_0x856427(0x1c8)](this[_0x856427(0x1bb)](_0x5a9b19));}catch{}return _0x1411c2;}[_0x44ca93(0x1f3)](_0x79cb27,_0x17f38a){const _0x33f132=_0x44ca93;try{return this[_0x33f132(0x25f)](JSON['stringify'](_0x79cb27),_0x17f38a);}catch{return!0x1;}}[_0x44ca93(0x20e)](_0x276307){return new Promise(_0x313ecd=>{const _0x33b72c=_0x54fd;this[_0x33b72c(0x1eb)]({'url':_0x276307},(_0x5a1a2a,_0x22cc6e,_0x15dc18)=>_0x313ecd(_0x15dc18));});}[_0x44ca93(0x1cd)](_0x491951,_0xedff05){const _0x3adfdf=_0x44ca93;return new Promise(_0x5a4c4b=>{const _0x21d750=_0x54fd;let _0x5478bd=this[_0x21d750(0x1bb)]('@chavy_boxjs_userCfgs.httpapi');_0x5478bd=_0x5478bd?_0x5478bd[_0x21d750(0x1e9)](/\n/g,'')[_0x21d750(0x25e)]():_0x5478bd;let _0x55b0ef=this[_0x21d750(0x1bb)](_0x21d750(0x1db));_0x55b0ef=_0x55b0ef?0x1*_0x55b0ef:0x14,_0x55b0ef=_0xedff05&&_0xedff05[_0x21d750(0x1ba)]?_0xedff05[_0x21d750(0x1ba)]:_0x55b0ef;const [_0x2f8c2c,_0x3934e9]=_0x5478bd[_0x21d750(0x218)]('@'),_0x3e7c5f={'url':_0x21d750(0x21a)+_0x3934e9+_0x21d750(0x1ff),'body':{'script_text':_0x491951,'mock_type':_0x21d750(0x1c9),'timeout':_0x55b0ef},'headers':{'X-Key':_0x2f8c2c,'Accept':_0x21d750(0x1b5)}};this['post'](_0x3e7c5f,(_0x51cec0,_0x4ef5fb,_0x29dd38)=>_0x5a4c4b(_0x29dd38));})[_0x3adfdf(0x24f)](_0x4db6c2=>this[_0x3adfdf(0x1e2)](_0x4db6c2));}[_0x44ca93(0x25d)](){const _0x15a02a=_0x44ca93;if(!this[_0x15a02a(0x217)]())return{};{this['fs']=this['fs']?this['fs']:require('fs'),this[_0x15a02a(0x1b4)]=this[_0x15a02a(0x1b4)]?this[_0x15a02a(0x1b4)]:require(_0x15a02a(0x1b4));const _0x185211=this[_0x15a02a(0x1b4)]['resolve'](this['dataFile']),_0x1b8ff1=this[_0x15a02a(0x1b4)]['resolve'](process[_0x15a02a(0x226)](),this['dataFile']),_0x5e1dd6=this['fs']['existsSync'](_0x185211),_0x5d26a2=!_0x5e1dd6&&this['fs'][_0x15a02a(0x202)](_0x1b8ff1);if(!_0x5e1dd6&&!_0x5d26a2)return{};{const _0x5d7208=_0x5e1dd6?_0x185211:_0x1b8ff1;try{return JSON[_0x15a02a(0x1c8)](this['fs'][_0x15a02a(0x1d9)](_0x5d7208));}catch(_0x592881){return{};}}}}[_0x44ca93(0x254)](){const _0x1f7623=_0x44ca93;if(this['isNode']()){this['fs']=this['fs']?this['fs']:require('fs'),this[_0x1f7623(0x1b4)]=this[_0x1f7623(0x1b4)]?this[_0x1f7623(0x1b4)]:require(_0x1f7623(0x1b4));const _0x6ea07a=this[_0x1f7623(0x1b4)][_0x1f7623(0x222)](this[_0x1f7623(0x216)]),_0x52e740=this[_0x1f7623(0x1b4)]['resolve'](process['cwd'](),this[_0x1f7623(0x216)]),_0x1f30c7=this['fs'][_0x1f7623(0x202)](_0x6ea07a),_0x32db14=!_0x1f30c7&&this['fs'][_0x1f7623(0x202)](_0x52e740),_0x5500d6=JSON[_0x1f7623(0x245)](this[_0x1f7623(0x25c)]);_0x1f30c7?this['fs'][_0x1f7623(0x1e1)](_0x6ea07a,_0x5500d6):_0x32db14?this['fs'][_0x1f7623(0x1e1)](_0x52e740,_0x5500d6):this['fs'][_0x1f7623(0x1e1)](_0x6ea07a,_0x5500d6);}}[_0x44ca93(0x255)](_0x21dafa,_0xacf182,_0xa926a){const _0x170075=_0x44ca93,_0x19aff2=_0xacf182[_0x170075(0x1e9)](/\[(\d+)\]/g,'.$1')[_0x170075(0x218)]('.');let _0x12d0c3=_0x21dafa;for(const _0x45b7fa of _0x19aff2)if(_0x12d0c3=Object(_0x12d0c3)[_0x45b7fa],void 0x0===_0x12d0c3)return _0xa926a;return _0x12d0c3;}[_0x44ca93(0x26f)](_0x1a9109,_0x46df52,_0x3ba584){const _0x1c8944=_0x44ca93;return Object(_0x1a9109)!==_0x1a9109?_0x1a9109:(Array['isArray'](_0x46df52)||(_0x46df52=_0x46df52['toString']()[_0x1c8944(0x1b1)](/[^.[\]]+/g)||[]),_0x46df52[_0x1c8944(0x1cf)](0x0,-0x1)[_0x1c8944(0x20b)]((_0x37e9d7,_0xdf5870,_0x2eda88)=>Object(_0x37e9d7[_0xdf5870])===_0x37e9d7[_0xdf5870]?_0x37e9d7[_0xdf5870]:_0x37e9d7[_0xdf5870]=Math[_0x1c8944(0x268)](_0x46df52[_0x2eda88+0x1])>>0x0==+_0x46df52[_0x2eda88+0x1]?[]:{},_0x1a9109)[_0x46df52[_0x46df52[_0x1c8944(0x22a)]-0x1]]=_0x3ba584,_0x1a9109);}[_0x44ca93(0x1bb)](_0x160f39){const _0x56f4ee=_0x44ca93;let _0x20703d=this[_0x56f4ee(0x26a)](_0x160f39);if(/^@/['test'](_0x160f39)){const [,_0x33d408,_0x383a5c]=/^@(.*?)\.(.*?)$/['exec'](_0x160f39),_0x59dc86=_0x33d408?this['getval'](_0x33d408):'';if(_0x59dc86)try{const _0x24a307=JSON[_0x56f4ee(0x1c8)](_0x59dc86);_0x20703d=_0x24a307?this[_0x56f4ee(0x255)](_0x24a307,_0x383a5c,''):_0x20703d;}catch(_0x7210e2){_0x20703d='';}}return _0x20703d;}['setdata'](_0x1100a7,_0x298e31){const _0x4d9a5c=_0x44ca93;let _0xa0ce8c=!0x1;if(/^@/['test'](_0x298e31)){const [,_0x172e82,_0x1c970e]=/^@(.*?)\.(.*?)$/[_0x4d9a5c(0x210)](_0x298e31),_0x51f9f0=this[_0x4d9a5c(0x26a)](_0x172e82),_0x16ec84=_0x172e82?_0x4d9a5c(0x23a)===_0x51f9f0?null:_0x51f9f0||'{}':'{}';try{const _0xe09cd0=JSON['parse'](_0x16ec84);this[_0x4d9a5c(0x26f)](_0xe09cd0,_0x1c970e,_0x1100a7),_0xa0ce8c=this[_0x4d9a5c(0x234)](JSON['stringify'](_0xe09cd0),_0x172e82);}catch(_0x3c92c3){const _0x4fc22d={};this[_0x4d9a5c(0x26f)](_0x4fc22d,_0x1c970e,_0x1100a7),_0xa0ce8c=this[_0x4d9a5c(0x234)](JSON[_0x4d9a5c(0x245)](_0x4fc22d),_0x172e82);}}else _0xa0ce8c=this[_0x4d9a5c(0x234)](_0x1100a7,_0x298e31);return _0xa0ce8c;}[_0x44ca93(0x26a)](_0x2a193f){const _0x18172c=_0x44ca93;return this[_0x18172c(0x1d5)]()||this[_0x18172c(0x211)]()?$persistentStore['read'](_0x2a193f):this[_0x18172c(0x1d4)]()?$prefs[_0x18172c(0x1c3)](_0x2a193f):this['isNode']()?(this[_0x18172c(0x25c)]=this[_0x18172c(0x25d)](),this[_0x18172c(0x25c)][_0x2a193f]):this[_0x18172c(0x25c)]&&this[_0x18172c(0x25c)][_0x2a193f]||null;}['setval'](_0x45c248,_0x221bdc){const _0x6aca79=_0x44ca93;return this[_0x6aca79(0x1d5)]()||this[_0x6aca79(0x211)]()?$persistentStore[_0x6aca79(0x246)](_0x45c248,_0x221bdc):this[_0x6aca79(0x1d4)]()?$prefs[_0x6aca79(0x26d)](_0x45c248,_0x221bdc):this[_0x6aca79(0x217)]()?(this[_0x6aca79(0x25c)]=this['loaddata'](),this[_0x6aca79(0x25c)][_0x221bdc]=_0x45c248,this[_0x6aca79(0x254)](),!0x0):this[_0x6aca79(0x25c)]&&this['data'][_0x221bdc]||null;}[_0x44ca93(0x208)](_0xee08bb){const _0x278c5b=_0x44ca93;this['got']=this[_0x278c5b(0x270)]?this[_0x278c5b(0x270)]:require(_0x278c5b(0x270)),this['cktough']=this[_0x278c5b(0x1df)]?this['cktough']:require('tough-cookie'),this[_0x278c5b(0x26e)]=this[_0x278c5b(0x26e)]?this[_0x278c5b(0x26e)]:new this['cktough']['CookieJar'](),_0xee08bb&&(_0xee08bb[_0x278c5b(0x1c7)]=_0xee08bb[_0x278c5b(0x1c7)]?_0xee08bb['headers']:{},void 0x0===_0xee08bb['headers'][_0x278c5b(0x200)]&&void 0x0===_0xee08bb[_0x278c5b(0x1f4)]&&(_0xee08bb['cookieJar']=this[_0x278c5b(0x26e)]));}['get'](_0x4a0ac9,_0x4f5066=()=>{}){const _0x62d058=_0x44ca93;if(_0x4a0ac9[_0x62d058(0x1c7)]&&(delete _0x4a0ac9[_0x62d058(0x1c7)][_0x62d058(0x1c1)],delete _0x4a0ac9[_0x62d058(0x1c7)][_0x62d058(0x1e8)]),this[_0x62d058(0x1d5)]()||this[_0x62d058(0x211)]())this[_0x62d058(0x1d5)]()&&this[_0x62d058(0x213)]&&(_0x4a0ac9['headers']=_0x4a0ac9[_0x62d058(0x1c7)]||{},Object[_0x62d058(0x1c6)](_0x4a0ac9[_0x62d058(0x1c7)],{'X-Surge-Skip-Scripting':!0x1})),$httpClient['get'](_0x4a0ac9,(_0x1a65ee,_0x33d1f6,_0x223ccb)=>{const _0x48f538=_0x62d058;!_0x1a65ee&&_0x33d1f6&&(_0x33d1f6[_0x48f538(0x260)]=_0x223ccb,_0x33d1f6[_0x48f538(0x265)]=_0x33d1f6[_0x48f538(0x231)]),_0x4f5066(_0x1a65ee,_0x33d1f6,_0x223ccb);});else{if(this[_0x62d058(0x1d4)]())this[_0x62d058(0x213)]&&(_0x4a0ac9['opts']=_0x4a0ac9[_0x62d058(0x230)]||{},Object[_0x62d058(0x1c6)](_0x4a0ac9[_0x62d058(0x230)],{'hints':!0x1})),$task[_0x62d058(0x22c)](_0x4a0ac9)['then'](_0x1d469e=>{const {statusCode:_0x560758,statusCode:_0x136f5a,headers:_0xb33ddf,body:_0x287ab0}=_0x1d469e;_0x4f5066(null,{'status':_0x560758,'statusCode':_0x136f5a,'headers':_0xb33ddf,'body':_0x287ab0},_0x287ab0);},_0x29051b=>_0x4f5066(_0x29051b));else{if(this[_0x62d058(0x217)]()){let _0x1be3fc=require(_0x62d058(0x23b));this[_0x62d058(0x208)](_0x4a0ac9),this[_0x62d058(0x270)](_0x4a0ac9)['on'](_0x62d058(0x1d2),(_0x508a64,_0x5e5798)=>{const _0x3fb601=_0x62d058;try{if(_0x508a64[_0x3fb601(0x1c7)][_0x3fb601(0x248)]){const _0x43e56c=_0x508a64[_0x3fb601(0x1c7)][_0x3fb601(0x248)]['map'](this[_0x3fb601(0x1df)][_0x3fb601(0x200)][_0x3fb601(0x1c8)])[_0x3fb601(0x1cc)]();_0x43e56c&&this[_0x3fb601(0x26e)]['setCookieSync'](_0x43e56c,null),_0x5e5798['cookieJar']=this[_0x3fb601(0x26e)];}}catch(_0x5d3b61){this[_0x3fb601(0x1e2)](_0x5d3b61);}})[_0x62d058(0x214)](_0x53267f=>{const _0x504832=_0x62d058,{statusCode:_0x1d36fd,statusCode:_0xa04b8a,headers:_0x3ed36d,rawBody:_0x1351af}=_0x53267f;_0x4f5066(null,{'status':_0x1d36fd,'statusCode':_0xa04b8a,'headers':_0x3ed36d,'rawBody':_0x1351af},_0x1be3fc[_0x504832(0x256)](_0x1351af,this[_0x504832(0x1bf)]));},_0x5784c2=>{const _0x46a9f8=_0x62d058,{message:_0x202a9a,response:_0x1f9065}=_0x5784c2;_0x4f5066(_0x202a9a,_0x1f9065,_0x1f9065&&_0x1be3fc['decode'](_0x1f9065['rawBody'],this[_0x46a9f8(0x1bf)]));});}}}}[_0x44ca93(0x264)](_0x111a2e,_0x4df377=()=>{}){const _0x4a3872=_0x44ca93,_0x458654=_0x111a2e[_0x4a3872(0x26c)]?_0x111a2e[_0x4a3872(0x26c)][_0x4a3872(0x1d3)]():_0x4a3872(0x264);if(_0x111a2e[_0x4a3872(0x260)]&&_0x111a2e[_0x4a3872(0x1c7)]&&!_0x111a2e[_0x4a3872(0x1c7)][_0x4a3872(0x1c1)]&&(_0x111a2e['headers']['Content-Type']=_0x4a3872(0x251)),_0x111a2e[_0x4a3872(0x1c7)]&&delete _0x111a2e[_0x4a3872(0x1c7)]['Content-Length'],this[_0x4a3872(0x1d5)]()||this[_0x4a3872(0x211)]())this[_0x4a3872(0x1d5)]()&&this[_0x4a3872(0x213)]&&(_0x111a2e[_0x4a3872(0x1c7)]=_0x111a2e[_0x4a3872(0x1c7)]||{},Object['assign'](_0x111a2e['headers'],{'X-Surge-Skip-Scripting':!0x1})),$httpClient[_0x458654](_0x111a2e,(_0x2e3fbc,_0x4e9c06,_0x3144f7)=>{const _0xe1f676=_0x4a3872;!_0x2e3fbc&&_0x4e9c06&&(_0x4e9c06['body']=_0x3144f7,_0x4e9c06[_0xe1f676(0x265)]=_0x4e9c06[_0xe1f676(0x231)]),_0x4df377(_0x2e3fbc,_0x4e9c06,_0x3144f7);});else{if(this[_0x4a3872(0x1d4)]())_0x111a2e['method']=_0x458654,this['isNeedRewrite']&&(_0x111a2e['opts']=_0x111a2e[_0x4a3872(0x230)]||{},Object[_0x4a3872(0x1c6)](_0x111a2e[_0x4a3872(0x230)],{'hints':!0x1})),$task[_0x4a3872(0x22c)](_0x111a2e)[_0x4a3872(0x214)](_0x17bf55=>{const {statusCode:_0x26f1a8,statusCode:_0x17f92a,headers:_0x317fd5,body:_0x27c864}=_0x17bf55;_0x4df377(null,{'status':_0x26f1a8,'statusCode':_0x17f92a,'headers':_0x317fd5,'body':_0x27c864},_0x27c864);},_0x10e8b5=>_0x4df377(_0x10e8b5));else{if(this[_0x4a3872(0x217)]()){let _0x3b20d1=require('iconv-lite');this[_0x4a3872(0x208)](_0x111a2e);const {url:_0x110f0d,..._0x3e902e}=_0x111a2e;this[_0x4a3872(0x270)][_0x458654](_0x110f0d,_0x3e902e)[_0x4a3872(0x214)](_0x13a6c4=>{const _0x59f9c0=_0x4a3872,{statusCode:_0x156000,statusCode:_0x21d1e9,headers:_0x3e32f4,rawBody:_0x27b0c1}=_0x13a6c4;_0x4df377(null,{'status':_0x156000,'statusCode':_0x21d1e9,'headers':_0x3e32f4,'rawBody':_0x27b0c1},_0x3b20d1[_0x59f9c0(0x256)](_0x27b0c1,this[_0x59f9c0(0x1bf)]));},_0x2053db=>{const _0x29fee3=_0x4a3872,{message:_0x162fba,response:_0x51565d}=_0x2053db;_0x4df377(_0x162fba,_0x51565d,_0x51565d&&_0x3b20d1[_0x29fee3(0x256)](_0x51565d[_0x29fee3(0x250)],this[_0x29fee3(0x1bf)]));});}}}}['time'](_0x2165ec,_0x1d77a7=null){const _0x2ca1f1=_0x44ca93,_0x3670b3=_0x1d77a7?new Date(_0x1d77a7):new Date();let _0xf850b8={'M+':_0x3670b3['getMonth']()+0x1,'d+':_0x3670b3['getDate'](),'H+':_0x3670b3['getHours'](),'m+':_0x3670b3[_0x2ca1f1(0x1cb)](),'s+':_0x3670b3[_0x2ca1f1(0x1da)](),'q+':Math['floor']((_0x3670b3[_0x2ca1f1(0x1fd)]()+0x3)/0x3),'S':_0x3670b3[_0x2ca1f1(0x228)]()};/(y+)/[_0x2ca1f1(0x21d)](_0x2165ec)&&(_0x2165ec=_0x2165ec[_0x2ca1f1(0x1e9)](RegExp['$1'],(_0x3670b3[_0x2ca1f1(0x205)]()+'')[_0x2ca1f1(0x23c)](0x4-RegExp['$1'][_0x2ca1f1(0x22a)])));for(let _0x55a056 in _0xf850b8)new RegExp('('+_0x55a056+')')['test'](_0x2165ec)&&(_0x2165ec=_0x2165ec[_0x2ca1f1(0x1e9)](RegExp['$1'],0x1==RegExp['$1'][_0x2ca1f1(0x22a)]?_0xf850b8[_0x55a056]:('00'+_0xf850b8[_0x55a056])[_0x2ca1f1(0x23c)]((''+_0xf850b8[_0x55a056])[_0x2ca1f1(0x22a)])));return _0x2165ec;}[_0x44ca93(0x1f5)](_0x8bd7cd=_0x19b085,_0x2ecf52='',_0x33bd5e='',_0x588760){const _0x31ca04=_0x44ca93,_0x10e300=_0x3cbcde=>{const _0x1b5df3=_0x54fd;if(!_0x3cbcde)return _0x3cbcde;if('string'==typeof _0x3cbcde)return this[_0x1b5df3(0x211)]()?_0x3cbcde:this[_0x1b5df3(0x1d4)]()?{'open-url':_0x3cbcde}:this[_0x1b5df3(0x1d5)]()?{'url':_0x3cbcde}:void 0x0;if(_0x1b5df3(0x237)==typeof _0x3cbcde){if(this[_0x1b5df3(0x211)]()){let _0x34668b=_0x3cbcde[_0x1b5df3(0x1f1)]||_0x3cbcde[_0x1b5df3(0x201)]||_0x3cbcde[_0x1b5df3(0x212)],_0x4091e3=_0x3cbcde[_0x1b5df3(0x1f0)]||_0x3cbcde[_0x1b5df3(0x258)];return{'openUrl':_0x34668b,'mediaUrl':_0x4091e3};}if(this['isQuanX']()){let _0xbdfce5=_0x3cbcde[_0x1b5df3(0x212)]||_0x3cbcde[_0x1b5df3(0x201)]||_0x3cbcde[_0x1b5df3(0x1f1)],_0x541986=_0x3cbcde[_0x1b5df3(0x258)]||_0x3cbcde[_0x1b5df3(0x1f0)];return{'open-url':_0xbdfce5,'media-url':_0x541986};}if(this[_0x1b5df3(0x1d5)]()){let _0x4dcca2=_0x3cbcde[_0x1b5df3(0x201)]||_0x3cbcde[_0x1b5df3(0x1f1)]||_0x3cbcde[_0x1b5df3(0x212)];return{'url':_0x4dcca2};}}};if(this[_0x31ca04(0x1ec)]||(this[_0x31ca04(0x1d5)]()||this[_0x31ca04(0x211)]()?$notification[_0x31ca04(0x264)](_0x8bd7cd,_0x2ecf52,_0x33bd5e,_0x10e300(_0x588760)):this[_0x31ca04(0x1d4)]()&&$notify(_0x8bd7cd,_0x2ecf52,_0x33bd5e,_0x10e300(_0x588760))),!this[_0x31ca04(0x1dd)]){let _0x80090a=['','==============📣系统通知📣=============='];_0x80090a[_0x31ca04(0x1bc)](_0x8bd7cd),_0x2ecf52&&_0x80090a[_0x31ca04(0x1bc)](_0x2ecf52),_0x33bd5e&&_0x80090a[_0x31ca04(0x1bc)](_0x33bd5e),console[_0x31ca04(0x269)](_0x80090a[_0x31ca04(0x1c5)]('\x0a')),this['logs']=this['logs'][_0x31ca04(0x1f7)](_0x80090a);}}[_0x44ca93(0x269)](..._0x360487){const _0xfd486a=_0x44ca93;_0x360487[_0xfd486a(0x22a)]>0x0&&(this[_0xfd486a(0x207)]=[...this[_0xfd486a(0x207)],..._0x360487]),console[_0xfd486a(0x269)](_0x360487[_0xfd486a(0x1c5)](this[_0xfd486a(0x221)]));}[_0x44ca93(0x1e2)](_0x59eb7b,_0x1d9f1a){const _0x4900ca=_0x44ca93,_0x1f6089=!this[_0x4900ca(0x1d5)]()&&!this[_0x4900ca(0x1d4)]()&&!this[_0x4900ca(0x211)]();_0x1f6089?this[_0x4900ca(0x269)]('','❗️'+this[_0x4900ca(0x241)]+_0x4900ca(0x24e),_0x59eb7b[_0x4900ca(0x21b)]):this['log']('','❗️'+this[_0x4900ca(0x241)]+_0x4900ca(0x24e),_0x59eb7b);}[_0x44ca93(0x23e)](_0x3a9808){return new Promise(_0x255b67=>setTimeout(_0x255b67,_0x3a9808));}[_0x44ca93(0x225)](_0x1b694c={}){const _0x17c7f4=_0x44ca93,_0x4e2b99=new Date()['getTime'](),_0x25ecf3=(_0x4e2b99-this[_0x17c7f4(0x1ce)])/0x3e8;this['log']('','🔔'+this[_0x17c7f4(0x241)]+_0x17c7f4(0x1d7)+_0x25ecf3+'\x20秒'),this[_0x17c7f4(0x269)](),(this[_0x17c7f4(0x1d5)]()||this['isQuanX']()||this['isLoon']())&&$done(_0x1b694c);}}(_0x19b085,_0x40cbc5);}
