document.getElementById("mdiv").innerHTML +=" "+ Hours(0);
document.getElementById("z").innerHTML+=" "+ new Date().getHours();
var nappa = new Date().getHours();
var vegeta = document.getElementById("lastz")
for (i=0; i<nappa; i++){
    vegeta.innerHTML+=" "+ i+ " hours ago, the number was " + Hours(i) + "                            ";
}
function Hours(zz) {
    var x = new Date();
    var h= x.getHours()-zz;
    var d= x.getDay();
    var y = x.getMonth();
    var t= h + d + y;
    t =Math.log(Math.abs(Math.cos(t)* 4971));
    while (t < 1000){
        t= t*9;
    }
    t= Math.round(t);
    t= t*17*7*3;
    var xzx= String(t).substr(-3);
    return (xzx);
}
