// Function to create transaction history element
function createTransactionElement(amount, description) {
    const trHistory = document.createElement('div');
    trHistory.innerHTML = `
        <div class="w-[600px] h-[50px] border border-[#1111111A] rounded-[10px] p-[10px] mt-[20px] bg-red">
            <p>${amount} Taka is ${description}</p>
            <p class="timer">HHHhhh</p>
        </div>
    `;
    return trHistory;
}

// Donate button event listeners
document.getElementById('donateBtn').addEventListener('click', function() {
    const intamrtka = parseFloat(document.getElementById('mainBlance').innerText);
    const intConllecton_ammount = parseFloat(document.getElementById('D-mainBlance').innerText);
    const intInput_amount = parseFloat(document.getElementById('inputamount').value);

    if (intConllecton_ammount > 0 && !isNaN(intConllecton_ammount) && intInput_amount > 0) {
        document.getElementById('D-mainBlance').innerText = intConllecton_ammount + intInput_amount;
        document.getElementById('mainBlance').innerText = intamrtka - intInput_amount;

        // Add transaction to history
        document.getElementById('trContiner').appendChild(createTransactionElement(intInput_amount, "Donate for Flood at Noakhali, Bangladesh"));
    } else {
        alert('Please Input valid postion Balance and Type ');
    }
});

document.getElementById('donateBtn2').addEventListener('click', function() {
    const intamrtka2 = parseFloat(document.getElementById('mainBlance').innerText);
    const intConllecton_ammount2 = parseFloat(document.getElementById('D-mainBlance2').innerText);
    const intInput_amount2 = parseFloat(document.getElementById('inputamount2').value);

    if (intConllecton_ammount2 > 0 && !isNaN(intConllecton_ammount2) && intInput_amount2 > 0) {
        document.getElementById('D-mainBlance2').innerText = intConllecton_ammount2 + intInput_amount2;
        document.getElementById('mainBlance').innerText = intamrtka2 - intInput_amount2;

        // Add transaction to history
        document.getElementById('trContiner').appendChild(createTransactionElement(intInput_amount2, "Donate for Flood Relief in Feni, Bangladesh"));
    } else {
        alert('Please Input valid postion Balance and Type ');
    }
});

document.getElementById('donateBtn3').addEventListener('click', function() {
    const intamrtka3 = parseFloat(document.getElementById('mainBlance').innerText);
    const intConllecton_ammount3 = parseFloat(document.getElementById('D-mainBlance3').innerText);
    const intInput_amount3 = parseFloat(document.getElementById('inputamount3').value);

    if (intConllecton_ammount3 > 0 && !isNaN(intConllecton_ammount3) && intInput_amount3 > 0) {
        document.getElementById('D-mainBlance3').innerText = intConllecton_ammount3 + intInput_amount3;
        document.getElementById('mainBlance').innerText = intamrtka3 - intInput_amount3;

        // Add transaction to history
        document.getElementById('trContiner').appendChild(createTransactionElement(intInput_amount3, "Aid for Injured in the Quota Movement"));
    } else {
        alert('Please Input valid postion Balance and Type ');
    }
});

// History button to show donation history
document.getElementById('history').addEventListener('click', function() {
    document.getElementById('cardContiner').classList.add('hidden');
    document.getElementById('trContiner').classList.remove('hidden');
});

// DoNate button to return to donation form
document.getElementById('doNate').addEventListener('click', function() {
    document.getElementById('cardContiner').classList.remove('hidden');
    document.getElementById('trContiner').classList.add('hidden');
});
