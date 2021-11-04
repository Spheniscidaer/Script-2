/*
  下载链接：https://autovideo.autohome.com.cn/signnew/register/index.html?uid=105091440&pvareaid=6850761&shareplatform=weixin
[rewrite_local]
#闪辆
https://newvideo.autohome.com.cn/openapi/activity-api/checkin/query_list.* url script-request-body https://raw.fastgit.org/LubooC/Script/blob/main/sl.js
[MITM]
hostname = newvideo.autohome.com.cn
#loon
https://newvideo.autohome.com.cn/openapi/activity-api/checkin/query_list.* url script-request-body https://raw.fastgit.org/LubooC/Script/blob/main/sl.js, requires-body=true, timeout=10, tag=萝卜闪辆
#surge
闪辆 = type=https://newvideo.autohome.com.cn/openapi/activity-api/checkin/query_list.*,requires-body=1,max-size=0,script-path=https://raw.fastgit.org/byxiaopeng/myscripts/main/fhxz.jshttps://raw.fastgit.org/LubooC/Script/blob/main/sl.js,script-update-interval=0
*/

// [task_local]
//#闪辆
// 10 0 * * * https://raw.fastgit.org/LubooC/Script/blob/main/sl.js, tag=闪辆, enabled=true


const $ = new Env('萝卜闪辆');
let status;
status = (status = ($.getval("fhxzstatus") || "1")) > 1 ? `${status}` : ""; // 账号扩展字符
let slckArr = []
let time = Math.round(Date.now() / 1000)
let slck = $.isNode() ? (process.env.slurl ? process.env.slurl : "") :($.getdata('slurl') ? $.getdata('slurl') : "")
let slcks = ""
let rcontent = ['哇~','爱了','哈哈哈']
let uid = '',taskId='',sp_list,i
let deviceid = ''
let uticket = ''
//
!(async() => {
  if (typeof $request !== "undefined") { 
    fhxzck()
  } else {
    if (!$.isNode()) {  
      slckArr.push($.getdata('slurl'))
      let slcount = ($.getval('slcount') || '1');
      for (let i = 2; i <= slcount; i++) {
        slckArr.push($.getdata(`slurl${i}`))
      }
      console.log(`-------------共${slckArr.length}个账号-------------\n`)
      for (let i = 0; i < slckArr.length; i++) {
        if (slckArr[i]) {
          slck = slckArr[i];
          $.index = i + 1;
          console.log(`\n开始【闪辆账户 ${$.index}】`)
          await rw();
          $.log(`------------------任务结束------------------`)
        
        }
      }
    } else {
      if (process.env.slurl && process.env.slurl.indexOf('@') > -1) {
        slckArr = process.env.slurl.split('@');
        console.log(`您选择的是用"@"隔开\n`)
      } else {
        slcks = [process.env.slurl]
      };
      Object.keys(slcks).forEach((item) => {
        if (slcks[item]) {
          slckArr.push(slcks[item])
        }
      })
      console.log(`共${slckArr.length}个账号`)
      for (let k = 0; k < slckArr.length; k++) {
        $.message = ""
        slurl = slckArr[k]
        $.index = k + 1;
        console.log(`\n开始【闪辆账户 ${$.index}】`)
        uid = slurl.match(/uid=\S+&/)[0]
        deviceid = slurl.match(/deviceid=\S+&/)[0]
        uticket = slurl.match(/uticket=\S+/)[0]
        await rw();
      $.log(`------------------任务结束------------------`)
      }
    }
  }
})()
  .catch ((e) => $.logErr(e))
  .finally(() => $.done())


//获取cookie
function fhxzck() {
   $.msg("ces")
  if ($request.url.indexOf("checkin") > -1 && $request.url.indexOf("query_list") > -1 && $request.url.indexOf("appid=") > -1) {
    const slurl = $request.url
    if (slurl) $.setdata(slurl, `slurl${status}`)
    $.log(slurl)
    $.msg($.name, "", `闪辆${status}数据获取成功`)
  }
}

//任务
async function rw(){
  return new Promise((resolve) => {
    let url = {
      url: `https://newvideo.autohome.com.cn/openapi/activity-api/task/query_list?${uid}${deviceid}taskType=0`,
    }
    $.get(url, async (err, resp, data) => {
      try {
        result = JSON.parse(data);
        let taskDetailDtoList =  result.result.taskDetailDtoList
        await daka()
        for (let i = 0; i < taskDetailDtoList.length; i++) { 
          console.log(`任务：`+taskDetailDtoList[i].taskName);
          if(taskDetailDtoList[i].completeNum < taskDetailDtoList[i].totalNum){
            console.log('当前进度：'+taskDetailDtoList[i].completeNum+'/'+taskDetailDtoList[i].totalNum);
            console.log('去完成');
            await kqrw(taskDetailDtoList[i].taskId,taskDetailDtoList[i].totalNum-taskDetailDtoList[i].completeNum) 
            await $.wait(1000)
          }else{
            console.log('已完成');
          }  
      }
      
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve()
      }
    }, 0)
  })
}
//开启任务
function kqrw(taskId,num){
  return new Promise((resolve) => {
    let url = {
      url: 'https://newvideo.autohome.com.cn/openapi/activity-api/task/start_task?'+deviceid+'_appid=ydsp',
      body: 'uid='+uid+'&taskId='+taskId,
      headers: {
        'Content-Type':'application/x-www-form-urlencoded',
      }
    }
    $.post(url, async (err, resp, data) => {
      try {
        result = JSON.parse(data);
        if(result.returncode == 0){
          await splist()
          await $.wait(1000)
          let cout = 0
          do{
            //看视频
            if(taskId == 1){
              await ksp()
              cout++
              await $.wait(1000)
            }
            //点赞视频
            if(taskId == 120){
              await dzsp(cout)
              cout++
              await $.wait(1000)
            }
            //发表评论
            if(taskId == 121){
              await fbpl(cout)
              cout++
              await $.wait(3000)
            }

          }while(cout < num)
        
        }else{
          console.log('任务失败');
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve()
      }
    }, 0)
  })
}i

//点赞视频
function dzsp(cout){
  return new Promise((resolve) => {
    let url = {
      url: 'https://newvideo.autohome.com.cn/api/like/dolike',
      body:deviceid+'imei=5c4cf4e7668b9986c2a201c2a498ebc38e93397b&is_like=1'+uticket+'&vid='+sp_list[cout].id,
      headers: {
        'Content-Type':'application/x-www-form-urlencoded',
      }
    }
    $.post(url, async (err, resp, data) => {
      try {
        result = JSON.parse(data);
        console.log('点赞：'+result.message);
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve()
      }
    }, 0)
  })
}
//打卡
function daka(){
  return new Promise((resolve) => {
    let url = {
      url: 'https://newvideo.autohome.com.cn/openapi/activity-api/checkin/checkin?_appid=ydsp&deviceid=&version=1.4.0&pm=1',
      body:uticket,
      headers: {
        'Content-Type':'application/x-www-form-urlencoded',
      }
    }
    $.post(url, async (err, resp, data) => {
      try {
        result = JSON.parse(data);
        console.log('签到：'+result.message);
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve()
      }
    }, 0)
  })
}

//视频列表
function splist(){
  return new Promise((resolve) => {
    let url = {
      url: 'https://newvideo.autohome.com.cn/openapi/recommend/task_hot_video',
    }
    $.get(url, async (err, resp, data) => {
      try {
        result = JSON.parse(data);
        if(result.returncode == 0){
          console.log('获取视频列表成功！');
        }
        sp_list = result.result
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve()
      }
    }, 0)
  })
}

//发表评论
function fbpl(cout){
  return new Promise((resolve) => {
    let url = {
      url: 'https://newvideo.autohome.com.cn/api/comment/add',
      body:deviceid+'rcontent='+rcontent[cout]+uticket+'&vid='+sp_list[cout].id,
      headers: {
        'Content-Type':'application/x-www-form-urlencoded',
      }
    }
    $.post(url, async (err, resp, data) => {
      try {
        result = JSON.parse(data);
        console.log('评论任务：'+result.message);
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve()
      }
    }, 0)
  })
}

//看视频任务
function ksp(){
  return new Promise((resolve) => {
    let url = {
      url: 'https://newvideo.autohome.com.cn/openapi/activity-api/task/task_video_commit',
      body:'_appid=ydsp.iosv2&_sign=27867EE9CDD9C4C53C53898477A91853&_timestamp=1635927486'+deviceid+'playDuration=60&pm=1&taskId=1'+uid+'version=1.4.0',
      headers: {
        'Content-Type':'application/x-www-form-urlencoded',
      }
    }
    $.post(url, async (err, resp, data) => {
      try {
        result = JSON.parse(data);
        console.log('看视频任务：'+result.message);
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve()
      }
    }, 0)
  })
}

function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.encoding="utf-8",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}isShadowrocket(){return"undefined"!=typeof $rocket}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){if(t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){let s=require("iconv-lite");this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:i,statusCode:r,headers:o,rawBody:h}=t;e(null,{status:i,statusCode:r,headers:o,rawBody:h},s.decode(h,this.encoding))},t=>{const{message:i,response:r}=t;e(i,r,r&&s.decode(r.rawBody,this.encoding))})}}post(t,e=(()=>{})){const s=t.method?t.method.toLocaleLowerCase():"post";if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient[s](t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method=s,this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){let i=require("iconv-lite");this.initGotEnv(t);const{url:r,...o}=t;this.got[s](r,o).then(t=>{const{statusCode:s,statusCode:r,headers:o,rawBody:h}=t;e(null,{status:s,statusCode:r,headers:o,rawBody:h},i.decode(h,this.encoding))},t=>{const{message:s,response:r}=t;e(s,r,r&&i.decode(r.rawBody,this.encoding))})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack):this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
