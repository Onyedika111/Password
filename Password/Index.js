





function generatePass(){

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let buttonOne = document.getElementById('buto')
let buttonTwo = document.getElementById('butoo')


let passwordLength = 16
let password = ''
let password2 = ''
   
  for (let i = 0; i < passwordLength; i++){
    let randomPassword1 = Math.floor( Math.random() * characters.length);
    let randomPassword2 = Math.floor( Math.random() * characters.length);
   password += characters[randomPassword1]
   password2 += characters[randomPassword2]

//    password += characters[randomPassword1, randomPassword1 +1]
//    password2 += characters[randomPassword2, randomPassword2 +1]
 

   
        // buttonOne.textContent += characters[randomIndexOne, randomIndexOne + 1]
       
  }
 buttonOne.value = password
buttonTwo.value = password2
}

function copyPass(){
    let copytext = document.getElementById('buto') 
    copytext.select()
    copytext.setSelectionRange(0,999)
    document.execCommand('copy')
}

