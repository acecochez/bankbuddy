const cardNumber = document.getElementById('card-number');
const cardholderName = document.getElementById('card-holdername');
const cardExpiry = document.getElementById('card-exp');
const cardCvc = document.getElementById('card-cvc');
const confirmButton = document.getElementById('confirm');
const completeModal = document.getElementById('completed'); 
const continueButton = document.getElementById('continue');

const inputs = [cardNumber, cardholderName, cardExpiry, cardCvc];

confirmButton.disabled = true;

const inputCheck = () => {
  const allFilled = inputs.every(input => input.value.trim() !== '');
  confirmButton.disabled = !allFilled;
}

inputs.forEach(input => {
  input.addEventListener('input', inputCheck);
});

confirmButton.onclick = () => {
  completeModal.style.display = "block";
};

continueButton.onclick = () => {
	completeModal.style.display = "none";
}