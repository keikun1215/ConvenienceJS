module.exports={string:{random:(t)=>{let o={};for(let i=0;i<t.length;i++){let r=Math.floor(Math.random()*10000000);if(!o[r]){o[r]=t[i]}else{i--}}return Object.values(o).join('')},reverse:(t)=>{return t.split("").reverse().join("")},newReplace:(t,g)=>{let r=t;for(const i of g){let a=i.split(":");let e=new RegExp(a[0],"g")let p=r.replace(e,a[1]);r=p}return r},punc:(t,g)=>{return t.split('').join(g)},encode:(t,code)=>{if(code=="url"){return encodeURI(t)}else if(code=="utf-8"){return encodeURIComponent(t)}else if(code=="base64"){return btoa(encodeURIComponent(t))}else{throw new TypeError("Invalid charset")}},decode:(t,code)=>{if(code=="url"){return decodeURI(t)}else if(code=="utf-8"){return decodeURIComponent(t)}else if(code=="base64"){return decodeURIComponent(atob(t))}else{throw new TypeError("Invalid charset")}},netaLang:{encode:{yuuLang:(txt)=>{const jaconv=require('jaconv')const ntxt=jaconv.toHiragana(txt)const fourSlice=ntxt.match(/.{1,4}/g);const strEfct=Math.floor(Math.random()*4)let result='';for(const txts of fourSlice){const rand=Math.floor(Math.random()*txts.length)const alf=jaconv.toHebon(txts.split('')[rand]).toLowerCase().split('')[0]const yuuLang=txts.slice(0,rand)+alf+txts.slice(rand);result+=yuuLang.slice(0,rand+1)+yuuLang.slice(rand+2)}if(strEfct==0){return result}if(strEfct==1){return result+"」"}if(strEfct==2){return result+"、"}if(strEfct==3){return result+"、れ"}}},decode:{yuuLang:(txt)=>{console.error("\u001b[31mYuu語はむずかしすぎて翻訳できません:\u001b[0m"+txt)return txt}}}},math:{newRandom:(m,mx)=>{return Math.floor(Math.random()*(mx+1-m))+m},seedRandom:(s)=>{class XORS{constructor(seed=88675123){this.x=123456789;this.y=362436069;this.z=521288629;this.w=seed}next(){const t=this.x^(this.x<<11);this.x=this.y;this.y=this.z;this.z=this.w;return this.w=(this.w^(this.w>>>19))^(t^(t>>>8))}nextInt(min,max){const r=Math.abs(this.next());return min+(r%(max+1-min))}}let rand=new XORS(s)return rand.next()}}}
