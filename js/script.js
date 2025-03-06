//Descrizione:
// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// NOTA: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.





// funzione countdown
let countdownTime = 30; // Imposta il tempo di countdown iniziale

function startCountdown() {
  const countdownElement = document.getElementById('countdown');

  const interval = setInterval(() => {
    countdownElement.textContent = countdownTime; // Mostra il tempo rimanente nel countdown

    if (countdownTime <= 0) {
      clearInterval(interval);
     
    } else {
      countdownTime--;
      answersForm.classList.remove("d-none");
      numbersList.classList.add("hidden");
    }
  }, 1000);
}

document.addEventListener('DOMContentLoaded', startCountdown);


// funzione per generare i numeri radomici

function randomNumber() {
    return Math.floor(Math.random() * 50) + 1;
  }
  
  let numeroCasuale = randomNumber();



// funzione per l'array dei numeri randomici
function displayRandomNumbers() {
    
    const numberListRandom = [
      randomNumber(),
      randomNumber(),
      randomNumber(),
      randomNumber(),
      randomNumber()
    ];
   
    const numbersList = document.getElementById('numbers-list');

    for (let i = 0; i < numberListRandom.length; i++) {
        const listNumber = document.createElement('li');
        listNumber.textContent = numberListRandom[i]; 
        numbersList.appendChild(listNumber);
      }
  }

  displayRandomNumbers();

