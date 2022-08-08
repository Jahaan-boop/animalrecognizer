var cat = 0;
var dog = 0;
var lion = 0;
var horse = 0;
var background_noise = 0;

function startrecognition() {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/oFQLXOqoQ/model.json',modelReady);
}
function modelReady() {
    classifier.classify(gotResult);
}
function gotResult(error, results) {
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        console.log("Red "+random_number_r);
        console.log("Green "+random_number_g);
        console.log("Blue "+random_number_b);

        document.getElementById("times").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        document.getElementById("audioname").innerHTML = "Detected Sound - "+results[0].label;
        document.getElementById("audioname").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        img = document.getElementById("gifmain");

        if(results[0].label == "Dog"){
            img.src = "https://media.giphy.com/media/mmyMZ84jnSlu8/giphy.gif";
            dog = dog+1;
            document.getElementById("times").innerHTML = "Detected Dog - "+ dog;
        }
        else if(results[0].label == "Cat"){
            img.src = "https://31.media.tumblr.com/400b007fd109b9da7df79e352a47f3c9/tumblr_mtglxv9jPF1qzw8bco1_1280.gif";
            cat = cat+1;
            document.getElementById("times").innerHTML = "Detected Cat - "+ cat;
        }
        else if(results[0].label == "Tiger"){
            img.src = "https://cdn.wallpapersafari.com/21/28/KH7Xgl.gif";
            lion = lion+1;
            document.getElementById("times").innerHTML = "Detected Tiger - "+ tiger;
        }
        else if(results[0].label == "Horse"){
            img.src = "https://th.bing.com/th/id/R.ebede532f6f5cf644a3fcf79d14b046c?rik=y673v7D9IBJHPA&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2f7ia%2fo4r%2f7iao4rzyT.gif&ehk=6kiqwtWw004QYc2LDDf4jsdb3x7DFR6HybEaS%2bj073s%3d&risl=&pid=ImgRaw&r=0";
            cow = cow+1;
            document.getElementById("times").innerHTML = "Detected Horse - "+ horse;
        }
        else{
            img.src = "https://arctouch.com/wp-content/uploads/2015/02/sound-icon.gif";
            background_noise = background_noise+1;
            document.getElementById("times").innerHTML = "Detected Background Noise - "+ background_noise;
        }
    }
}