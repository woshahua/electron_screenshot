const fs = require("fs")
const screenshot = require("electron-screenshot-service")

screenshot({
    url: "https://hazard.yahoo.co.jp/article/20200207",
    width: 1024,
    height: 2500,
    crop: {
        x: 0,
        y: 700,
        width: 1024,
        height: 1800,
    },
    delay: 3,
})
.then(function(img){
    fs.writeFile("out.png", img.data, function(err){
        screenshot.close()
    }
    )
})