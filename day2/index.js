
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function myRandomKube(){
    kube = ["a", "b", "c", "d", "e", "f"];

    var index = getRandomInt(0,6);
    return kube[index];
}


for (i=0;i<4;i++){
    console.log(myRandomKube());
}



