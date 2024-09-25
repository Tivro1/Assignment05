// Donation button click event
document.getElementById('donateBtn').addEventListener('click', function() {
    // Get main balance
    const strMainBalance = document.getElementById('mainBlance').innerText;
    const intMainBalance = parseFloat(strMainBalance);

    // Get total funding value
    const strCollectionAmount = document.getElementById('D-mainBlance').innerText;
    const intCollectionAmount = parseFloat(strCollectionAmount);

    // Get input donation
    const strInputAmount = document.getElementById('inputamount').value;
    const intInputAmount = parseFloat(strInputAmount);

    // Validate inputs
    if (intCollectionAmount > 0 && !isNaN(intCollectionAmount) && intInputAmount > 0) {
        const totalFunding = intCollectionAmount + intInputAmount;
        const remainingBalance = intMainBalance - intInputAmount;

        // Update balance and funding amounts
        document.getElementById('D-mainBlance').innerText = totalFunding;
        document.getElementById('mainBlance').innerText = remainingBalance;

        // Create transaction history entry
        const trHistory = document.createElement('div');
        trHistory.innerHTML = `
            <div class="w-[600px] h-[50px] border border-[#1111111A] rounded-[10px] p-[10px] mt-[20px]">
                <p>${intInputAmount} Taka is donated for Nowakhali -2024, Bangladesh</p>
                <p class="timer"></p>
            </div>
        `;
        document.getElementById('oho').appendChild(trHistory);
    } else {
        alert('Please Input valid position Balance and Type');
    }
});

// Similar click events for other donate buttons...


// Button to show donation container again












document.getElementById('donateBtn2')
.addEventListener('click', function() {
    // Get main balance
    const Stramrtka2 = document.getElementById('mainBlance').innerText;
    const intamrtka2 = parseFloat(Stramrtka2);
    console.log(intamrtka2);

    // Get total funding value
    const strcollection_ammount2 = document.getElementById('D-mainBlance2').innerText;
    const intConllecton_ammount2 = parseFloat(strcollection_ammount2);
    console.log(intConllecton_ammount2);

    // Get input donation
    const strinput_amount2 = document.getElementById('inputamount2').value;
    const intInput_amount2 = parseFloat(strinput_amount2);
    console.log(intInput_amount2);

    // Check if the collection amount is greater than 0, valid number, and input amount is positive



    if (intConllecton_ammount2 > 0 && !isNaN(intConllecton_ammount2) && intInput_amount2 > 0) {
        const totalFounding2 = intConllecton_ammount2 + intInput_amount2;
        const remaingBlance2 = intamrtka2 - intInput_amount2;
        document.getElementById('D-mainBlance2').innerText = totalFounding2;
        document.getElementById('mainBlance').innerText = remaingBlance2;

        const trHistory = document.createElement('div');
        trHistory.innerHTML = `
            <div class="w-[600px] h-[50px] border border-[#1111111A] rounded-[10px] p-[10px] mt-[20px]">
                <p>${intInput_amount2} Taka is donated for famine - 2024 at Feni, Bangladesh</p>
                <p class="timer"></p>
            </div>
        `;
        document.getElementById('oho').appendChild(trHistory);
       
    } else {
        alert('Please Input valid postion Balance and Type ')
    }



});


document.getElementById('donateBtn3')
.addEventListener('click', function() {
    // Get main balance
    const Stramrtka3 = document.getElementById('mainBlance').innerText;
    const intamrtka3 = parseFloat(Stramrtka3);
    console.log(intamrtka3);

    // Get total funding value
    const strcollection_ammount3 = document.getElementById('D-mainBlance3').innerText;
    const intConllecton_ammount3 = parseFloat(strcollection_ammount3);
    console.log(intConllecton_ammount3);

    // Get input donation
    const strinput_amount3 = document.getElementById('inputamount3').value;
    const intInput_amount3 = parseFloat(strinput_amount3);
    console.log(intInput_amount3);

    // Check if the collection amount is greater than 0, valid number, and input amount is positive
    if (intConllecton_ammount3 > 0 && !isNaN(intConllecton_ammount3) && intInput_amount3 > 0) {
        const totalFounding3 = intConllecton_ammount3 + intInput_amount3;
        const remaingBlance3 = intamrtka3 - intInput_amount3;
        document.getElementById('D-mainBlance3').innerText = totalFounding3;
        document.getElementById('mainBlance').innerText = remaingBlance3;

        const trHistory = document.createElement('div');
        trHistory.innerHTML = `
            <div class="w-[600px] h-[50px] border border-[#1111111A] rounded-[10px] p-[10px] mt-[20px]">
                <p>${intInput_amount3} Taka is donated for Quta Protest -2024 , Bangladesh</p>
               

   
        `;
        document.getElementById('oho').appendChild(trHistory);


    } else {
        alert('Please Input valid postion Balance and Type ')
    }
});




// History button click event
document.getElementById('doNate').addEventListener('click', function() {
    document.getElementById('cardContiner').classList.remove('hidden');
    document.getElementById('oho').classList.add('hidden');
     // Hide transaction container when going back
});

document.getElementById('history').addEventListener('click', function() {
    // Hide the card container
    document.getElementById('cardContiner').classList.add('hidden');

    // Show the transaction container
    document.getElementById('oho').classList.remove('hidden');
});