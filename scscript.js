
let bmiForm = document.querySelector(".bmi-form");
 bmiForm.addEventListener("submit", function (e)
 {
    e.preventDefault();
    const form = e.target
    const name = form.querySelector("#name").value;
    const weight=+form.querySelector("#weight").value;
    const height=+form.querySelector("#height").value;
    const health=+form.querySelector("#health").value;
    console.log(name,weight,height,health);
    let heightInMeters=height/100;
    let bmi=Number((weight / heightInMeters ** 2).toFixed(2));
    console.log("bmi",bmi);
    let result;
    {
if(bmi < 18.5){
    console.log("thin");
    result="thin";}
  else  if(bmi > 25){
 console.log("fat");
        result="fat";
    }
  else if(bmi>35){
        console.log("normal");
        result="normal";
    }
    }
form.querySelector("#result").textContent= `${name},You are ${result}`;

});
document.querySelector("#reset").addEventListener("click",function(e)
    {
        bmiForm.querySelector ("#name").value="";
        bmiForm.querySelector("#weight").value="";
        bmiForm.querySelector("#height").value="";
        bmiForm.querySelector("#result").textContent="";
    });
   