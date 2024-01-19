const tipForm = document.querySelector("#tip");
const total = document.querySelector("#total");
const individualContri = document.querySelector("#ind-contri");
const individualTipContri = document.querySelector("#ind-tip-contri");
const billError = document.querySelector('#billError');
const tipError = document.querySelector('#tipError');
const peopleError = document.querySelector('#peopleError');
 
const validate = (formValues) => {
    let errors = {};
    if (formValues.totalBill < 500) {
        errors.totalBill = "Bill less than 500 is not acceptable"
    }
    if (formValues.tipPercent > 10) {
        errors.tipPercent = "Not exceed 10%";
    }
    if (formValues.totalPerson < 2) {
        errors.totalPerson = "Not valid";
    }
    return errors;
}
 
tipForm.addEventListener('submit', (e) => {
    let totalBill;
    let tipPercent;
    let totalPerson;
    e.preventDefault();
    const values = Array.from(e.target);
    totalBill = Number(values[0].value);
    tipPercent = Number(values[1].value);
    totalPerson = Number(values[2].value);
 
    const formValues = {
        totalBill,
        tipPercent,
        totalPerson
    }
 
    const errors = validate(formValues);
    if (Object.keys(errors).length > 0) {
        billError.innerText = errors.totalBill || "";
        tipError.innerText = errors.tipPercent || "";
        peopleError.innerText = errors.totalPerson || "";
    } else {
        total.innerText = totalBill + (tipPercent / 100) * totalBill;
        individualContri.innerText = (totalBill + (tipPercent / 100) * totalBill) / totalPerson;
        individualTipContri.innerText = ((tipPercent / 100) * totalBill) / totalPerson;
        billError.innerText = "";
        tipError.innerText = "";
        peopleError.innerText = "";
    }
})
