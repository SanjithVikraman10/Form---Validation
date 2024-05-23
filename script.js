function validateAccName() {
    var accholder = document.getElementById('accholder').value;

    var regex = /^[a-zA-Z]+$/;
    if (!(regex.test(accholder))) {
      return false;
    }
    else
      {
        return true;
      }
  }

  function validateBankName() {
    var bankname = document.getElementById('bankname').value;
    if (bankname === "") {
      alert("Please enter bank name.");
      return false;
    }
    var regex = /^[a-zA-Z]+$/;
    if (!(regex.test(bankname))) {
      return false;
    }
    else
      {
        return true;
      }
  }

  function validateBranchName() {
    var branchname = document.getElementById('branchname').value;
    if (branchname === "") {
      alert("Please enter your account holder name.");
      return false;
    }
    var regex = /^[a-zA-Z]+$/;
    if (!(regex.test(branchname))) {
      return false;
    }
    else
      {
        return true;
      }
  }

  function cardNumber() {
    var cardNo = document.getElementById('cardnumber').value;
    if (cardNo === "") {
      alert("Please enter your card number.");
      return false;
    }
    var regex = /^[0-9]+$/;
    if (!(regex.test(cardNo))) {
      return false;
    }
    else
      {
        return true;
      }
  }

  function validateCVV() {
    var cvv = document.getElementById('cvvnum').value;
    if (cvv === "") {
      alert("Please enter CVV");
      return false;
    }
    var regex = /^[0-9]{3}$/;
    if (!(regex.test(cvv))) {
      return false;
    }
    else
      {
        return true;
      }
  }

  function validateFormm() {
    if (!validateAccName()) {
      alert("Please enter a valid account name!");
      return false;
    }
    if (!validateBankName()) {
      alert("Please enter a valid bank name!");
      return false;
    }
    if (!validateBranchName()) {
      alert("Please enter a valid branch name!");
      return false;
    }
    if (!cardNumber()) {
      alert("Please enter a valid card number!");
      return false;
    }
    if (!validateCVV()) {
      alert("Please enter a valid CVV!");
      return false;
    }
    console.log('Form submitted successfully!!');
    alert('Form submitted successfully!!');
    return true;
  }
