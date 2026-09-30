var pointerCodeF7=new Framework7({
pushState:!0,material:!0,modalTitle:"פוינטר",pushState:!0,modalButtonOk:"אישור",modalButtonCancel:"ביטול",modalPreloaderTitle:"טוען...",onAjaxStart:function(){
pointerCodeF7.showIndicator()}
,onAjaxComplete:function(){
pointerCodeF7.hideIndicator()}
}
),$$=Dom7,PINformsSize,pointerCode;
(navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPod/i))&&(PINformsSize=$("#PINform").width(),$("#PINbox").css({
width:PINformsSize-65}
),$("#enterButton").css({
"font-size":"1.8em"}
));
swal.setDefaults({
confirmButtonColor:"#e44126",confirmButtonText:"אישור"}
);
pointerCode=function(){
var n="",r=function(){
if(window.AndroidPointer!=undefined&&window.AndroidPointer!=null,f&&$("#PINbox").addClass("smallEM"),window.AndroidPointer!=undefined&&window.AndroidPointer!=null){
var n=AndroidPointer.getHeaderMsg();
n&&$$("#PINcode h4").text(n);
AndroidPointer.isFromPush()&&setTimeout(function(){
sendAck()}
,300)}
$$(".addCode").on("click",function(){
u(this);
$$(this).addClass("PinBoarder").once("webkitTransitionEnd mozTransitionEnd oTransitionEnd otransitionend transitionend",function(){
$$(this).removeClass("PinBoarder")}
)}
);
$$(".clear").on("click",function(){
$$(this).addClass("PinBoarder").once("webkitTransitionEnd mozTransitionEnd oTransitionEnd otransitionend transitionend",function(){
$$(this).removeClass("PinBoarder")}
);
t()}
);
$$("#saveProp").on("click",function(){
s()}
)}
,u=function(t){
document.getElementById("PINbox").value=document.getElementById("PINbox").value+t.value;
n+=t.value;
n.length==4&&e()}
,t=function(){
document.getElementById("PINbox").value="";
n=""}
,f=function(){
var n=navigator.userAgent;
if(n.indexOf("iPhone")>=0||n.indexOf("Apple")>=0)return!0}
,i=function(){
try{
return"localStorage"in window&&window.localStorage!==null}
catch(n){
return!1}
}
,e=function(){
pointerCodeF7.showPreloader("בודק קוד");
o(n)}
,o=function(n){
var f=$("#vnumberText").val(),o=$("#nameText").val(),e,i,r,u;
if(f=="")return pointerCodeF7.hidePreloader(),t(),swal("חסר מספר רכב"),0;
(e=$("#keypadTypeRadio input:radio[name=keypadType]:checked").val(),i=$$("body"),i.children(".progressbar, .progressbar-infinite").length)||(pointerCodeF7.showProgressbar(i,"red"),r="---",u="00000000",window.AndroidPointer!=undefined&&window.AndroidPointer!=null&&(r=AndroidPointer.getGCMKey(),u=AndroidPointer.getIMEI()),$.ajax({
type:"POST",url:"ws/checkcode.ashx",data:{
VNumber:f,PhoneNumber:"",Name:o,keypadType:e,Password:n,GCMKey:r,IMEI:u}
,success:function(n){
t();
var r=parseInt($(n).find("RC").text()),i=$(n).find("Remark").text();
pointerCodeF7.hidePreloader();
setTimeout(function(){
pointerCodeF7.hideProgressbar()}
,100);
r===100?setTimeout(function(){
swal({
title:i,text:"",html:!0,type:"success",showCancelButton:!1,closeOnConfirm:!0,confirmButtonText:"אישור 3",showLoaderOnConfirm:!1}
,function(){
window.AndroidPointer!=undefined&&window.AndroidPointer!=null&&AndroidPointer.CloseApp()}
);
var n=2,t=setInterval(function(){
$(".confirm").text("אישור "+n);
n--;
n==-1&&(clearInterval(t),$(".confirm").click())}
,1e3)}
,300):setTimeout(function(){
swal(i,"","error")}
,300)}
,error:function(){
t();
setTimeout(function(){
pointerCodeF7.hideProgressbar();
pointerCodeF7.hidePreloader()}
,100);
swal("תקלת תקשורת נסה שנית")}
}
))}
,s=function(){
var n=$("#vnumberText").val(),t=$("#nameText").val();
i()&&(localStorage.setItem("vnumberText",n),localStorage.setItem("nameText",t));
window.AndroidPointer!=undefined&&window.AndroidPointer!=null&&AndroidPointer.CheckReg(n,t)}
,h=function(){
var n,t,r,u;
i()&&(n=localStorage.getItem("vnumberText"),t=localStorage.getItem("nameText"),n!=null&&n!=""?$("#vnumberText").val(n).parent().addClass("not-empty-state").parent().addClass("not-empty-state"):window.AndroidPointer!=undefined&&window.AndroidPointer!=null&&(r=AndroidPointer.getData(2),$("#vnumberText").val(r).parent().addClass("not-empty-state").parent().addClass("not-empty-state")),t!=null&&t!=""?$("#nameText").val(t).parent().addClass("not-empty-state").parent().addClass("not-empty-state"):window.AndroidPointer!=undefined&&window.AndroidPointer!=null&&(u=AndroidPointer.getData(1),$("#nameText").val(u).parent().addClass("not-empty-state").parent().addClass("not-empty-state")))}
();
return{
init:r}
}
();
pointerCode.init();
