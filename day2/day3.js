var options = [
    'hummus', //1
    'hamutzim', //2
    'salat', //4
    'chips' //8
];

var bitwiseOptions = {};
var pita = 0;

buildOptions();


function buildOptions() {
    for (var i=0; i<options.length; i++){
        bitwiseOptions[options[i]] = 1 << i;
    }
}



function is(obj, option) {
var food = obj&bitwiseOptions[option];
if (food === bitwiseOptions[option])
    return true;
return false;
}

function set(obj, option) {
     obj =  bitwiseOptions[option] | obj ;
     return obj;
}

pita = set(pita,'hummus');
pita = set(pita,'hummus');
pita = set(pita,'salat');

console.log(is(pita,'hummus'));
console.log(is(pita,'salat'));
console.log(pita);
// build options
//

//