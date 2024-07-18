const form = document.querySelector('form');
form.addEventListener('submit',function(e) {
   e.preventDefault();

   
   let formElements=e.target;
console.log('event',formElements);

   const height = formElements.height.value
   const weight = formElements.weight.value;
   // const results = formElements.results.value;
console.log(height);
let result=calculate(height,weight);
console.log('result',result)
formElements.results.value=result*10000;
   // if (height === '' || height < 0 || isNaN(height)) {
   //  results.innerText = 'Please give a valid height $(height)';
   // }
   // else if (weight === '' || weight < 0 || isNaN(weight)) {
   //  results.innerText = 'Please give a valid weight $(weight)';
   // }
   // else {
   //  let bmi = (weight / (
   //    height * height ));
    
   //  results.innerText = bmi;
   //  // results.innertext = '<span>('bmi')</span>';
   // }
   
}
);

function calculate(height,weight){
   
let bmi=(weight/(height*height));
console.log(bmi)
return bmi;

}