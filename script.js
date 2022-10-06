let cardNumber = document.getElementById("card-number");
let cardName = document.getElementById("card-name");
let cardDate = document.getElementById("card-date");
let cardCvc = document.getElementById("card-cvc");
let inputContainer = document.querySelector(".input-container");
let inputName = document.getElementById("cname");
let inputNumber = document.getElementById("cnumb");
let inputMonth = document.getElementById("month");
let inputYear = document.getElementById("year");
let inputCvc = document.getElementById("cvc");
let confirmButton = document.getElementById("confirm");

for (let i = 0; i < 1000 ; i++){
    inputNumber.addEventListener('keyup', ()=>{
        let number = inputNumber.value;
        finalNumber = number.split(" ").join("");
        cardNumber.textContent = `${finalNumber.substring(0,4)}`+" "+`${finalNumber.substring(4,8)}`+" "+`${finalNumber.substring(8,12)}`+" "+`${finalNumber.substring(12,16)}`
    })
    
    inputName.addEventListener('keyup', ()=>{
        let name = inputName.value;
        cardName.textContent = `${name}`;
    })
    
    inputCvc.addEventListener('keyup', ()=>{
        let cvc = inputCvc.value;
        finalCvc = parseInt(cvc)
        cardCvc.textContent = `${cvc}`;
    })
    
    inputMonth.addEventListener('keyup', ()=>{
        let month = inputMonth.value;
        cardDate.textContent = `${month}`;
            inputYear.addEventListener('keyup', ()=>{
            let year = inputYear.value;
            cardDate.textContent = `${month}`+"/"+`${year}`;})
    })
    
    confirmButton.addEventListener('click', ()=>{
        inputContainer.innerHTML = `<div class="after-confirm">
        <svg class="complete-logo" width="80" height="80" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="40" r="40" fill="url(#a)"/><path d="M28 39.92 36.08 48l16-16" stroke="#fff" stroke-width="3"/><defs><linearGradient id="a" x1="-23.014" y1="11.507" x2="0" y2="91.507" gradientUnits="userSpaceOnUse"><stop stop-color="#6348FE"/><stop offset="1" stop-color="#610595"/></linearGradient></defs></svg>
        <p class="thank">Thank you!</p>
        <p class="added">We've added your card details</p>
        <div class="continue">Continue</div>
        </div>`
        let continueButton = document.querySelector(".continue")
        continueButton.addEventListener('click', ()=>{
            inputContainer.innerHTML = `<form class="input-form">
            <label for="cname">Cardholder Name</label><br>
            <input type="text" id="cname" placeholder="e.g. Jane Appleseed" value="" maxlength="25"><br>
            <label for="cnumb">Card Number</label><br>
            <input type="text" id="cnumb" placeholder="e.g. 1234 5678 9123 0000" value="" maxlength="19"><br>
            <div class="form-div">
              <div id="date-input">
                <label for="month year">Exp. Date (MM/YY)</label><br>
                <div id="month-year">
                  <input type="text" id="month" placeholder="MM" maxlength="2"><input type="text" id="year" placeholder="YY" maxlength="2">
                </div>
              </div>
              <div class="cvc">
                <label for="cardname">CVC</label><br>
                <input type="text" id="cvc" name="cvc" placeholder="e.g. 123" maxlength="3" value="">
              </div>
            </div>
            <div id="confirm">Confirm</div>
          </form>`
            cardNumber.textContent = `0000 0000 0000 0000`
            cardName.textContent = `Jane Appleseed`
            cardCvc.textContent = "000"
            cardDate.textContent = "00/00"
        })
    })
}