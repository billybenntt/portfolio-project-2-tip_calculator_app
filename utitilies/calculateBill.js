const calculateBill = (bill) => {
  const tipPercentage = (bill.tip || bill.custom_tip || 0) / 100
  const billSubTotal = +bill.amount
  const numberPeople = Math.max(+bill.people, 1)

  const tipTotal = billSubTotal * tipPercentage
  const billTotal = billSubTotal + tipTotal

  const tipAmountPerson = (tipTotal / numberPeople).toFixed(2)
  const totalAmountPerson = (billTotal / numberPeople).toFixed(2)

  return { tipAmountPerson, totalAmountPerson }
}

export default calculateBill
