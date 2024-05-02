/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * 1) anexar al array result los items [bar,baz,qux]
 * 2) los 2 primeros items reescribir el caracter "a" por @
 * modificar el último item "quz" a mayúscula
 *  
 * 
 * output => ["b@r","b@z","QUX"]   
 */
let arr = ["foo","bar","baz","qux","echo"];
let result = [];

let i = 0;
let len = arr.length;

for(; i < len; i ++){
    
    if(arr[i] === "bar" || arr[i] === "baz" || arr[i] === "qux"){
        let item = arr[i];

        if(item === "bar" || item === "baz"){
            item = item.replace('a', '@');
        }

        if(item === "qux"){
            item = item.toUpperCase();
        }
        result.push(item);
    }
}

console.log(result);
//export result
module.exports = result;