function setExpression(val){
    console.log('hello',val);
    document.getElementById('result').value += val;
}

function compute(){
   var result= document.getElementById('result').value;
   
   document.getElementById('result').value=eval(result);
}
function clearAll(){
    document.getElementById('result').value='';
}