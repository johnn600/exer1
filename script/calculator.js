function displaySum() {
    let firstNum = Number(document.getElementById('firstNum').value)
    let secondNum = Number(document.getElementById('secondNum').value)
  
    let total = firstNum + secondNum;
    document.getElementById("answerAdd").innerHTML = `${total}` ;
  }

  function displayDifference() {
    let firstNum = Number(document.getElementById('firstNum').value)
    let secondNum = Number(document.getElementById('secondNum').value)
  
    let total = firstNum - secondNum;
    document.getElementById("answerSubtract").innerHTML = `${total}` ;
  }
