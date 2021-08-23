// create an array of images
let rockImages = [
    "https://images.news18.com/ibnlive/uploads/2019/08/Sports-61.png",
    "https://www.nme.com/wp-content/uploads/2017/05/the-rock-1996-turtleneck.jpg",
    "https://cdn.substack.com/image/fetch/h_600,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F3bdb2575-9a92-42f8-8472-bb78c7bd118a_720x405.jpeg",
    "https://s.yimg.com/os/creatr-uploaded-images/2021-07/75865cf0-de72-11eb-aabf-3aa860b827c9",
    "https://www.rollingstone.com/wp-content/uploads/2020/09/AP_20011682435464.jpg",
    "https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F200224105810-dwayne-johnson.jpg",
    "https://images.indianexpress.com/2018/07/dj7591.jpg",
    "https://media.wired.com/photos/5926e82f8d4ebc5ab806be38/191:100/w_1280,c_limit/TheRock.jpg",
    "https://manofmany.com/wp-content/uploads/2021/01/Young-Rock-biopic-series-1.jpg"
];

// grab images on the page
const imgs = document.getElementsByTagName("img")

// for each image
for(let i = 0; i < imgs.length; i++){
    const randomImg = Math.floor(Math.random()*rockImages.length)
    imgs[i].src = rockImages[randomImg];
}

// grab strings 
const strings = document.getElementsByTagName("yt-formatted-string")

// for each string
for(let i = 0; i < strings.length; i++){
    strings[i].innerText = "The Rock";
}

// grab headers 
const headers = document.getElementsByTagName("h1")

// for each string
for(let i = 0; i < headers.length; i++){
    headers[i].innerText = "The Rock";
}

// grab h2 
const h2 = document.getElementsByTagName("h2")

// for each string
for(let i = 0; i < h2.length; i++){
    h2[i].innerText = "The Rock";
}