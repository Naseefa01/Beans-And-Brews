function openMenu(menuName) {
    document.getElementById('Eat').style.display = 'none';
    document.getElementById('Drink').style.display = 'none';

    document.getElementById(menuName).style.display = 'block';
}

document.getElementById("reservationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    alert("Thank you! Your Reservation Is Done");
 
  });
   