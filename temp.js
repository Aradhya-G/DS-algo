//const val = parseInt(readline());

var simplifyPath = function(path) {
    path = path.split('/');
    let stack = [];
    for(let p of path){
        if(p == '.' || p == '') continue;
        else if(p == '..')   stack.pop();
        else stack.push(p);
    }
    return '/' + stack.join('/');
};
let val ="/a/./b/../../c/"
console.log(simplifyPath(val))