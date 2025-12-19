function abc(num,callback){
    console.log(num);
    callback();
}

function aaa(){
    console.log("Done");
}abc(5,aaa);