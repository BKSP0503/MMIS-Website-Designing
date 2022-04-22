const LoanAmountInput = document.querySelector('.loan-amount')
const IntrestRateInput = document.querySelector('.intrest-rate')
const TenureInput = document.querySelector('.loan-tenure')

const LoanEMIValue = document.querySelector('.loan-emi .value')
const TotalIntrestRateValue = document.querySelector('.total-intrest .value')
const TotalAmountValue = document.querySelector('.total-amount .value')

const Calculate = document.querySelector('.calculate')

let LoanAmount = parseFloat(LoanAmountInput.value)
let IntrestRate = parseFloat(IntrestRateInput.value)
let Tenure = parseFloat(TenureInput.value)

let Intrest = IntrestRate / 12 / 100

let myChart

const checkValues = () => {
  let LoanAmountValue = LoanAmountInput.value
  let IntrestRateValue = IntrestRateInput.value
  let TenureInputValue = TenureInput.value

  let regexNumber = /^[0-9]+$/

  if (!LoanAmountValue.match(regexNumber)) {
    LoanAmountInput.value = '10000'
  }
  if (!TenureInputValue.match(regexNumber)) {
    TenureInput.value = '12'
  }
  /*let regexDecimaNumber = /^(\d*\.)?d=$/;
    if(!IntrestRateValue.match(regexDecimaNumber))
{
    IntrestRateInput.value = "3.4";
}*/
}

const displayChart = (TotalIntrestPayableValue) => {
  const ctx = document.getElementById('myChart').getContext('2d')
  myChart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Total Intrest', 'Principal Loan Amount'],
      datasets: [
        {
          data: [TotalIntrestPayableValue, LoanAmount],
          backgroundColor: ['#e63946', '#141a34'],
          borderWidth: 0,
        },
      ],
    },
  })
}

const updateChart = (TotalIntrestPayableValue) => {
  myChart.data.datasets[0].data[0] = TotalIntrestPayableValue
  myChart.data.datasets[0].data[1] = LoanAmount
  myChart.update()
}

const calculateEMI = () => {
  checkValues()
  RefreshInputValues()
  let emi =
    LoanAmount *
    Intrest *
    (Math.pow(1 + Intrest, Tenure) / (Math.pow(1 + Intrest, Tenure) - 1))
  return emi
}

const updateData = (emi) => {
  LoanEMIValue.innerHTML = Math.round(emi)

  let TotalAmount = Math.round(Tenure * emi)
  TotalAmountValue.innerHTML = TotalAmount

  let TotalIntrestPayable = Math.round(TotalAmount - LoanAmount)
  TotalIntrestRateValue.innerHTML = TotalIntrestPayable

  if (myChart) {
    updateChart(TotalIntrestPayable)
  } else {
    displayChart(TotalIntrestPayable)
  }
}
const RefreshInputValues = () => {
  LoanAmount = parseFloat(LoanAmountInput.value)
  IntrestRate = parseFloat(IntrestRateInput.value)
  Tenure = parseFloat(TenureInput.value)
  Intrest = IntrestRate / 12 / 100
}

const init = () => {
  let emi = calculateEMI()
  updateData(emi)
}

init()

Calculate.addEventListener('click', init)
