const cashCheckBox = document.querySelector('#cash')
const cashVal = document.querySelector('#cashval')
const paynowCheckBox = document.querySelector('#paynow')
const paynowVal = document.querySelector('#paynowval')
const bankCheckBox = document.querySelector('#banktransfer')
const bankVal = document.querySelector('#banktransferval')


const checkboxVal = (cbox, hiddenVal) => {
    cbox.addEventListener('change', () => {
        if (cbox.checked) {
            hiddenVal.setAttribute('value','1')
        } else {
            hiddenVal.setAttribute('value','0')
        }
    })
}

checkboxVal(cashCheckBox,cashVal)
checkboxVal(paynowCheckBox,paynowVal)
checkboxVal(bankCheckBox,bankVal)