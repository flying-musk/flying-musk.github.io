import{r as e}from"./index.c1a5c498.js";import{_ as a}from"./SubTitle.11cb64b0.js";import{h as l,A as s,o as d,q as m,x as r,a as t,w as c,G as o,H as i,C as p,Q as n,r as u,c as b}from"./element-plus.4376cb67.js";const h={id:"manage_member",class:"h-full reactive"},x={class:"flex flex-col gap-y-3 md:gap-y-4 md:bg-white md:h-full md:p-3 rounded-md border"},g={class:"flex justify-between md:items-center flex-col md:flex-row gap-y-3"},f={class:"flex flex-col md:flex-row md:items-center gap-y-3 md:gap-x-3"},v={class:"grid gap-1 md:gap-2"},w={class:"flex gap-1 md:gap-2 items-center"},y=r("small",{class:"text-gray-500 w-[100px] text-[13px]"},"查找會員",-1),V={class:"border"},_={class:"grid gap-1 md:gap-2"},S={class:"flex gap-1 md:gap-2 items-center"},k=r("small",{class:"text-gray-500 w-[100px] text-[13px]"},"會員基本資料",-1),D={class:"border"},I={class:"grid gap-1 md:gap-2"},j={class:"flex gap-1 md:gap-2 items-center"},M=r("small",{class:"text-gray-500 w-[100px] text-[13px]"},"會員營運資料",-1),U={class:"border"},T={__name:"index",setup(T){const{proxy:q}=n(),A=l({search:{keyword:"",column:"",columns:[{value:"",label:"全部"},{value:"birth",label:"生日"},{value:"idnumber",label:"會員編號"},{value:"email",label:"電子信箱"}]},memberInfo:{id:""},memberData:{id:""}});s((()=>{C.handleSearchMember()}));const C={handleSearchMember:async()=>{const{code:a,data:l,msg:s}=await(a=>e({url:"api/sys/mbop.php",method:"post",data:a}))({action:"info_member",id:"354745"});2===a||3===a||q.$message({type:"error",message:s})}};return(e,l)=>{const s=u("el-option"),n=u("el-select"),T=u("el-button"),q=u("el-input");return d(),m("div",h,[r("div",x,[r("header",g,[r("div",f,[t(a,{title:"會員管理",class:"min-w-fit"})])]),r("div",v,[r("div",w,[y,t(q,{modelValue:A.search.keyword,"onUpdate:modelValue":l[1]||(l[1]=e=>A.search.keyword=e),placeholder:"Search Text",class:"input-with-select"},{prepend:c((()=>[t(n,{modelValue:A.search.column,"onUpdate:modelValue":l[0]||(l[0]=e=>A.search.column=e),placeholder:"Select",style:{width:"115px"}},{default:c((()=>[(d(!0),m(o,null,i(A.search.columns,(e=>(d(),b(s,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),append:c((()=>[t(T,{icon:"Search"})])),_:1},8,["modelValue"])]),r("div",V," keyword: "+p(A.search.keyword)+", column: "+p(A.search.column),1)]),r("div",_,[r("div",S,[k,t(q,{modelValue:A.memberInfo.id,"onUpdate:modelValue":l[2]||(l[2]=e=>A.memberInfo.id=e),placeholder:"Member ID",class:"input-with-select"},{append:c((()=>[t(T,{icon:"Search"})])),_:1},8,["modelValue"])]),r("div",D,p(A.memberInfo.id),1)]),r("div",I,[r("div",j,[M,t(q,{modelValue:A.memberData.id,"onUpdate:modelValue":l[3]||(l[3]=e=>A.memberData.id=e),placeholder:"Member ID",class:"input-with-select"},{append:c((()=>[t(T,{icon:"Search"})])),_:1},8,["modelValue"])]),r("div",U,p(A.memberData.id),1)])])])}}};export{T as default};