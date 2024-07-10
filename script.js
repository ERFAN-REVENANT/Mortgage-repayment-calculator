function clearAll() {
    document.getElementById('mortgage-amount').value = '';
    document.getElementById('mortgage-term').value = '';
    document.getElementById('interest-rate').value = '';
    document.getElementById('monthly-repayments').innerText = '';
    document.getElementById('total-repayments').innerText = '';
    document.querySelectorAll('input[name="mortgage-type"]').forEach(input => {
      input.checked = false;
    });
  }
  
  function calculateRepayments() {
    // Get input values
    const mortgageAmount = parseFloat(document.getElementById('mortgage-amount').value.replace(/,/g, ''));
    const mortgageTerm = parseFloat(document.getElementById('mortgage-term').value);
    const interestRate = parseFloat(document.getElementById('interest-rate').value);
    const mortgageType = document.querySelector('input[name="mortgage-type"]:checked').value;
  
    if (isNaN(mortgageAmount) || isNaN(mortgageTerm) || isNaN(interestRate)) {
      alert('Please fill in all the fields correctly.');
      return;
    }
  
    // Calculate repayments
    let monthlyRepayment, totalRepayment;
    const monthlyInterestRate = interestRate / 100 / 12;
    const numberOfPayments = mortgageTerm * 12;
  
    if (mortgageType === 'repayment') {
      const x = Math.pow(1 + monthlyInterestRate, numberOfPayments);
      monthlyRepayment = (mortgageAmount * x * monthlyInterestRate) / (x - 1);
      totalRepayment = monthlyRepayment * numberOfPayments;
    } else if (mortgageType === 'interest') {
      monthlyRepayment = mortgageAmount * monthlyInterestRate;
      totalRepayment = monthlyRepayment * numberOfPayments;
    }
  
    // Display results
    document.getElementById('monthly-repayments').innerText = `£${monthlyRepayment.toFixed(2)}`;
    document.getElementById('total-repayments').innerText = `£${totalRepayment.toFixed(2)}`;
  }
  


  document.addEventListener('DOMContentLoaded', function() {
    activeStates();
  }); 


  function activeStates() {
    const inputs = document.querySelectorAll('.number-input');
    inputs.forEach(input => {
      input.addEventListener('focus', function(event) {
        const container = event.target.closest('.input-container');
        const symbol = container.querySelector('.currency-symbol');
        
      });
    });
  }
