// getting respective balances
let availableBalance = parseFloat(document.getElementById("available-balance").innerText);
let noakhaliBalance = parseFloat(document.getElementById("noakhali-balance").innerText);
let feniBalance = parseFloat(document.getElementById("feni-balance").innerText);
let quotaBalance = parseFloat(document.getElementById("quota-balance").innerText);


// getting respective input field
let noakhaliInput = document.getElementById("noakhali-input");
let feniInput = document.getElementById("feni-input");
let quotaInput = document.getElementById("quota-input");


// showing and closing modal
let modal = document.getElementById("modal");

function showModal() {
    modal.showModal();
}

let closeModalBtn = document.getElementById("close-modal");

closeModalBtn.addEventListener("click", function () {
    modal.close();
    // after closing the modal, input field is cleared
    noakhaliInput.value = "";
    feniInput.value = "";
    quotaInput.value = "";
});


// displays donation history with time and date
function displayDonationHistory(amount, donationFor) {

    // donation history card
    let donationCard = document.createElement("div");
    donationCard.classList.add(
        "p-5",
        "my-10",
        "border-[3px]",
        "border-lime-300",
        "rounded-xl"
    );

    // mention the purpose of donation--noakhali/feni/quota
    let donationMessage;
    if (donationFor === "Noakhali") {
        donationMessage = `${amount} Taka is donated for flood affected people at Noakhali`;
    } else if (donationFor === "Feni") {
        donationMessage = `${amount} Taka is donated for flood affected people at Feni`;
    } else if (donationFor === "Quota") {
        donationMessage = `${amount} Taka is donated for injured people during the Quota Movement`;
    }

    let date = new Date();

    donationCard.innerHTML = `
    <span style="font-weight: 800;">${donationMessage}</span>
    <br>
    <span style="font-weight: 400; color: gray;"> Date: ${date.toString()}</span>`;

    document.getElementById("donation-history").appendChild(donationCard);
}

// function to check the validity of user input (if valid number or not)
function isValidNumber(input) {

    let decimalCount = 0;

    for (let i = 0; i < input.length; i++) {

        let char = input[i];

        if (char >= "0" && char <= "9") {
            continue;
        } else if (char === ".") {
            decimalCount++;
            if (decimalCount > 1) {
                return false; // more than 1 decimal point is not acceptable
            }
        } else {
            return false; // any character other than a number or decimal point (.) is not acceptable
        }
    }

    // inout cannot be 0 or just a point (.)
    return input.length > 0 && input !== ".";
}

// donation logic for Noakhali part
let noakhaliDonationBtn = document.getElementById("noakhali-donation-btn");

noakhaliDonationBtn.addEventListener("click", function () {
    let donateNoakhaliInput = document.getElementById("noakhali-input").value.trim(); // trim removes whitespaces

    if (!isValidNumber(donateNoakhaliInput)) {
        alert("Invalid Amount!! Please enter a valid amount.");
        return;
    }

    let donationAmoutForNoakhali = parseFloat(donateNoakhaliInput);

    // checking if donor has enough balance
    if (donationAmoutForNoakhali > availableBalance) {
        alert("You do not have sufficient balace to donate this amount.");
        return;
    } else if (donationAmoutForNoakhali > 0) {
        availableBalance -= donationAmoutForNoakhali;
        noakhaliBalance += donationAmoutForNoakhali;

        document.getElementById("available-balance").innerText = availableBalance;
        document.getElementById("noakhali-balance").innerText = noakhaliBalance;

        showModal();
        displayDonationHistory(donationAmoutForNoakhali, "Noakhali");
    } else {
        alert("Invalid Amount!! Please enter a valid amount.");
        return;
    }
});


// donation logic for Feni part
let feniDonationBtn = document.getElementById("feni-donation-btn");

feniDonationBtn.addEventListener("click", function () {
    let donateFeniInput = document.getElementById("feni-input").value.trim(); // trim removes whitespaces

    if (!isValidNumber(donateFeniInput)) {
        alert("Invalid Amount!! Please enter a valid amount.");
        return;
    }

    let donationAmoutForFeni = parseFloat(donateFeniInput);

    // checking if donor has enough balance
    if (donationAmoutForFeni > availableBalance) {
        alert("You do not have sufficient balace to donate this amount.");
        return;
    } else if (donationAmoutForFeni > 0) {
        availableBalance -= donationAmoutForFeni;
        feniBalance += donationAmoutForFeni;

        document.getElementById("available-balance").innerText = availableBalance;
        document.getElementById("feni-balance").innerText = feniBalance;

        showModal();
        displayDonationHistory(donationAmoutForFeni, "Feni");
    } else {
        alert("Invalid Amount!! Please enter a valid amount.");
        return;
    }
});

// donation logic for Qouta part
let quotaDonationBtn = document.getElementById("quota-donation-btn");

quotaDonationBtn.addEventListener("click", function () {
    let donateQuotaInput = document.getElementById("quota-input").value.trim(); // trim removes whitespaces

    if (!isValidNumber(donateQuotaInput)) {
        alert("Invalid Amount!! Please enter a valid amount.");
        return;
    }

    let donationAmoutForQuota = parseFloat(donateQuotaInput);

    // checking if donor has enough balance
    if (donationAmoutForQuota > availableBalance) {
        alert("You do not have sufficient balace to donate this amount.");
        return;
    } else if (donationAmoutForQuota > 0) {
        availableBalance -= donationAmoutForQuota;
        quotaBalance += donationAmoutForQuota;

        document.getElementById("available-balance").innerText = availableBalance;
        document.getElementById("quota-balance").innerText = quotaBalance;

        showModal();
        displayDonationHistory(donationAmoutForQuota, "Quota");
    } else {
        alert("Invalid Amount!! Please enter a valid amount.");
        return;
    }
});


// donation & history button functionality
let donationBtn = document.getElementById("donation-btn");
let historyBtn = document.getElementById("history-btn");

historyBtn.addEventListener("click", function () {
    historyBtn.classList.add("bg-lime-300", "border-none", "text-black");
    historyBtn.classList.remove("text-gray-500");
    donationBtn.classList.add("border-[3px]", "text-gray-500");
    donationBtn.classList.remove("bg-lime-300", "border-none", "text-black");

    document.getElementById("cards").classList.add("hidden");
    document.getElementById("donation-history").classList.remove("hidden");
});

donationBtn.addEventListener("click", function () {
    donationBtn.classList.add("bg-lime-300", "border-none", "text-black");
    donationBtn.classList.remove("border-[2px]", "text-gray-400");
    historyTab.classList.add("text-gray-500");
    historyBtn.classList.remove("bg-lime-300", "border-none", "text-black");

    document.getElementById("cards").classList.remove("hidden");
    document.getElementById("donation-history").classList.add("hidden");
});