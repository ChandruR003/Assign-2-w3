var str="The conversation Between captain america and the ironman."
console.log(str.length)
var string=str.toUpperCase()
console.log(string)
console.log(str.indexOf("a"))
console.log("captain America:i'm the captain. Not You.\n Ironman:Yes. But I choose what i want cause i am Ironman.\n captain America:NO.You have to listen and obey my orders and rules.\n ironman: Rules are made to break not to obey and i don't follow any rules because i am the one who made u the captain and rules also. \n captain:Without Your suite who are You. \n ironman:Me.hahahaaa. Without suite i am a superstar,billionarie,scientist,rich and genius.")
function findBMI() {
    var height = +document.querySelector('#height').value;
    var weight = +document.querySelector('#weight').value;
    if (height <= 0 || weight <= 0 || isNaN(height) || isNaN(weight)) {
      return;
    }
    height = height / 100;
    var bmi = weight / (height * height);
    showResult(bmi);
  }
  