import{o as e,q as a,x as t,C as l,a0 as s,h as d,a3 as n,f as c,A as o,a4 as i,a as r,w as u,D as m,T as p,U as g,_ as f,G as h,H as v,u as y,Q as x,r as D}from"./element-plus.4376cb67.js";import{r as b,_ as Y}from"./index.c1a5c498.js";import{_ as w}from"./SubTitle.11cb64b0.js";const _=e=>b({url:"api/sys/travelcal.php",method:"post",data:e}),M={class:"bg-white border rounded-lg p-3 space-y-3 leading-6 tracking-widest text-center md:text-left"},k={class:"text-primary-500 text-sm font-medium"},C={class:"font-bold text-gray-700 text-xl inline-flex items-center space-x-2"},j={__name:"CardDetailMainSection",props:{title:{type:String,default:""},value:{type:String,default:""}},setup:d=>(n,c)=>(e(),a("div",M,[t("p",k,l(d.title),1),t("p",C,[t("span",null,l(d.value)+"笔",1),t("span",null,[s(n.$slots,"icon")])])]))};const T={id:"travelcal-setting",class:"h-full reactive"},S={class:"flex flex-col gap-y-3 md:gap-y-6 md:bg-white md:h-full md:p-3 rounded-md"},V={class:"flex justify-center md:justify-start items-center"},A={class:"flex flex-col md:flex-row md:items-center gap-y-3 md:gap-x-3"},F={class:"flex flex-col md:flex-row gap-3 items-center bg-white rounded-lg shadow-md shadow-gray-400/20 p-6"},$={class:"hidden md:flex flex-row gap-x-3 py-3"},U={class:"block"},q={class:"block pt-3"},G={class:"block"},H={class:"block pt-3"},I={class:"space-y-3 md:space-y-6"},O={class:"flex flex-col md:flex-row gap-3 items-center shadow-md bg-white md:bg-gray-50 justify-between py-2 px-3 rounded-lg tracking-wide"},Q=["textContent"],z={class:"grid md:grid-cols-3 gap-3"};var B=Y({__name:"index",setup(s){const{proxy:b}=x(),Y=d({loading:!0,selectedDateType:"custom",selectedDate:[n().subtract(1,"year").format("YYYY-MM-DD"),n().format("YYYY-MM-DD")],count:{data:{},msg:""},csv:[]}),M=c((()=>Y.selectedDate.length>1?Y.selectedDate[0]:null)),k=c((()=>Y.selectedDate.length>1?Y.selectedDate[1]:null)),C=c((()=>Y.selectedDate.length>1?`travel-${Y.selectedDate[0]}-${Y.selectedDate[1]}.csv`:"data.csv")),B=c((()=>Object.values(Y.count.data).filter((e=>"0"!==e)).length>0));o((()=>{J.handleFetchAll()}));const E=e=>e.getTime()<Date.parse("2018-11-01"),J={handleChangeSelectedDate:e=>{const a={week:n().subtract(7,"day").format("YYYY-MM-DD"),month:n().subtract(1,"month").format("YYYY-MM-DD"),season:n().subtract(3,"month").format("YYYY-MM-DD"),custom:n().subtract(1,"year").format("YYYY-MM-DD")};Y.selectedDate=[a[e],n().format("YYYY-MM-DD")],J.handleFetchAll()},handleFetchAll:async()=>{Y.loading=!0;const e={date_begin:M.value,date_end:k.value},{code:a,data:t={},msg:l}=await _(e);setTimeout((()=>{Y.loading=!1}),1500),1===a?(Y.count={data:t,msg:l},J.handleDownload()):b.$message({type:"error",message:l})},handleDownload:async()=>{const e=!M.value||!k.value,a=!B.value;if(e||a)return;const t={action:"getclsinfo",date_begin:M.value,date_end:k.value},l=(await _(t)).split(/[\n]/),s=l[1].split(","),d=l.splice(2,l.length).map((e=>s.reduce(((a,t,l)=>{const s=(e=e.replace(/\"/g,"")).split(",");return a[t]=s[l],i(a)}),{})));Y.csv=d}};return(s,d)=>{const n=D("el-radio-button"),c=D("el-radio-group"),o=D("el-date-picker"),i=D("el-skeleton-item"),x=D("el-button"),b=D("download-csv"),_=D("el-skeleton");return e(),a("div",T,[t("div",S,[t("header",V,[t("div",A,[r(w,{title:"旅游统计",class:"min-w-fit"}),r(c,{modelValue:Y.selectedDateType,"onUpdate:modelValue":d[0]||(d[0]=e=>Y.selectedDateType=e),onChange:J.handleChangeSelectedDate},{default:u((()=>[r(n,{label:"week"},{default:u((()=>[m("近七天")])),_:1}),r(n,{label:"month"},{default:u((()=>[m("上個月")])),_:1}),r(n,{label:"season"},{default:u((()=>[m("前三個月")])),_:1}),r(n,{label:"custom"},{default:u((()=>[m("自訂區間")])),_:1})])),_:1},8,["modelValue","onChange"]),r(f,{name:"bounce",duration:550},{default:u((()=>[p(t("div",null,[r(o,{modelValue:Y.selectedDate,"onUpdate:modelValue":d[1]||(d[1]=e=>Y.selectedDate=e),type:"daterange","range-separator":"-","start-placeholder":"起始日期",editable:!1,format:"YYYY-MM-DD","value-format":"YYYY-MM-DD","end-placeholder":"結束日期","disabled-date":E,onChange:J.handleFetchAll},null,8,["modelValue","onChange"])],512),[[g,"custom"===Y.selectedDateType]])])),_:1})])]),r(_,{loading:Y.loading,animated:"",class:"space-y-3"},{template:u((()=>[t("div",F,[r(i,{variant:"text",class:"md:mr-3"}),r(i,{variant:"h1",style:{width:"10%"}})]),t("div",$,[(e(),a(h,null,v(3,((e,a)=>t("div",{class:"w-1/3 bg-white rounded-lg border shadow-gray-400/20 p-3",key:a},[t("div",U,[r(i,{variant:"text",style:{width:"20%"}})]),t("div",q,[r(i,{variant:"h1",style:{width:"40%"}})])]))),64))]),(e(),a(h,null,v(3,((e,a)=>t("div",{class:"flex flex-col md:hidden justify-center text-center bg-white rounded-lg shadow-gray-400/20 p-3",key:a},[t("div",G,[r(i,{variant:"text",style:{width:"20%"}})]),t("div",H,[r(i,{variant:"h1",style:{width:"40%"}})])]))),64))])),default:u((()=>[t("div",I,[t("div",O,[t("p",{class:"text-primary-500 text-sm",textContent:l(Y.count.msg)},null,8,Q),r(b,{name:y(C),data:Y.csv,class:"w-fit"},{default:u((()=>[r(x,{"auto-insert-space":"",icon:"Download",type:"primary",disabled:!y(B)},{default:u((()=>[m(" 下載 ")])),_:1},8,["disabled"])])),_:1},8,["name","data"])]),t("div",z,[(e(!0),a(h,null,v(Y.count.data,((t,l)=>(e(),a("div",{class:"col-span-1",key:l},[r(j,{title:l,value:t},null,8,["title","value"])])))),128))])])])),_:1},8,["loading"])])])}}},[["__scopeId","data-v-c9436394"]]);export{B as default};