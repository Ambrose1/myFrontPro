
var imgs = [
    "https://img1.baidu.com/it/u=3316754777,2519856621&fm=253&fmt=auto&app=138&f=JPEG?w=653&h=500",
    "https://img0.baidu.com/it/u=4281860672,1981139753&fm=253&fmt=auto&app=138&f=JPEG?w=480&h=320",
    "https://img1.baidu.com/it/u=2775655496,2255017447&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800"
]

var index = 1
function broadcast() {
    index++;
    if(index >= imgs.length) {
        index = 0;
    }
    var img = document.getElementById("broadcast");
    img.src = imgs[index];
}

setInterval(broadcast, 2000);