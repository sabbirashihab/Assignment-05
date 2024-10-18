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