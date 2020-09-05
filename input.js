function validating(){
    if( document.myForms.fname.value == "" ) {
        alert("Please put the correct name");
        document.myForm.fname.focus() ;
        return false;
     }
     if( document.myForms.num.value == "" || isNaN( document.myForms.num.value ) ||
        document.myForms.num.value.length != 10 ) {
            alert("Please put the correct number");
        document.myForm.num.focus() ;
        return false;
     }
     else
     var readmail = document.myForms.email.value ;
     var checkatsymbol = readmail.indexof("@");
     var checkdotsymbol = readmail.lastindexof(".");
     if (checkatsymbol < 1 || checkdotsymbol+2>=readmail.length )
     {
     alert("Please put the correct email address");
     document.myForm.email.focus();
     return false;
     }

  }







let onScreen = [];
let nums = [];
let result = 0;

function show(num) {
  // enter number max 10 digits long
  if (onScreen.length === 10) {
    $('#screen').val(onScreen.join(''));
  }
  if (onScreen.length === 0 && num === '0') {
    $('#screen').val(0);
  } else {
    onScreen.push(num);
    $('#screen').val(onScreen.join(''));
  }
}

function calculate(operator) {
  // store all numbers and operators
  switch (operator) {
    case "plus":
      operator = "+";
      break;
    case "minus":
      operator = "-";
      break;
    case "times":
      operator = "*";
      break;
    case "divide":
      operator = "/";
      break;
  }

  if (onScreen.length > 0) {
    onScreen = onScreen.join(''); 
  }

  // when pressing sign after sign
  if (operator !== "equals" && typeof nums[nums.length-1] === 'string' && typeof onScreen === 'number') {
    nums.pop();
    nums.push(operator);
  } else if (operator !== "equals" && nums.length >= 0 && onScreen.length > 0) {
    $('#screen').val(onScreen);
    nums.push(parseFloat(onScreen), operator)
    onScreen = [];
  }

  // result calculation
  if (operator === "equals") {
    if (onScreen.length > 0) {
      nums.push(parseFloat(onScreen))
    }
    if (typeof nums[nums.length-1] === 'string') {
      nums.pop();
    }
    result = nums[0];
    nums.forEach(function(number, i) {
      if (number === "+") {
        result += nums[i+1];
      }
      if (number === "%") {
        result += nums[i+1];
      }
      if (number === "-") {
        result -= nums[i+1];
      }
      if (number === "*") {
        result *= nums[i+1];
      }
      if (number === "/") {
        (nums[i+1] == 0) ? result = "Error" : result /= nums[i+1];
      }
    })
    $('#screen').val(result);
    lastOperation = [nums[nums.length-2], nums[nums.length-1]];
    onScreen = [result];
    result = 0;

    // show 0 if no number has been entered
    if (nums.length === 0) {
      $('#screen').val(result);
      onScreen = []
    }
    nums = []; // clean all numbers from last calculation
  }

}

function squareRoot() {
  if (onScreen.length > 0) {
    result = Math.sqrt(parseFloat(onScreen.join('')));
    $('#screen').val(result);
    onScreen = [result];
    result = 0;
  }
}

function percentage() {
  if (onScreen.length > 0) {
    result = Math.mod(parseFloat(onScreen.join('')), 2);
    $('#screen').val(result);
    onScreen = [result];
    result = 0; 
  }
}

function abso() {
  if (onScreen.length > 0) {
  	onScreen = parseFloat(onScreen.join('')) * -1;
  	$('#screen').val(onScreen);
  	onScreen = [onScreen]
  }
}

function addComma() {
  if (onScreen.length === 0) {
    onScreen.push(0, ".");
    $('#screen').val(onScreen.join(''));
  } else if (onScreen.join('').indexOf(".") === -1) {
    onScreen.push(".");
    $('#screen').val(onScreen.join(''));
  } else if (onScreen[0].toString().indexOf(".") > 0) {
    $('#screen').val(onScreen.join(''));
  }
}

function erase() {
  $('#screen').val(0);
  onScreen = [];
  nums = [];
  total = 0;
}
  
  
  
  
  
  
  
  
  function palindrome(){
      var rev="";
    let inp=document.getElementById('check').value;
    i=inp.length;
    for(var j=i;j>=0;j--){
        rev=rev+inp.charAt(j);
    }
     if(inp===rev){
         alert('input string is  palindrome');
         return true;
     }
     else{
        alert('input string is not  palindrome');
        return false;

     }
  }




  function anagram(){
    let str1=document.getElementById('anagrams').value;
    let str2=document.getElementById('ana').value;
   
    str1 = str1.replace(/[^\w]/g, '').toLowerCase()
    str2 = str2.replace(/[^\w]/g, '').toLowerCase()


    if( sortString(str1) === sortString(str2)){
       alert('anagrams')
        return true;

    }
    else{
        alert('not anagrams')
        return false;
    }

}

/*This function sorts the strings*/ 
function sortString(string) {
    return string.split('').sort().join('');
  }



