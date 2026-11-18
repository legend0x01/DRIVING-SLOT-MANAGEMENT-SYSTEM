function bookSlot(event) {
    event.preventDefault();

    document.getElementById("show-name").innerText = document.getElementById("name").value;
    document.getElementById("show-license").innerText = document.getElementById("license").value;
    document.getElementById("show-category").innerText = document.getElementById("category").value;
    document.getElementById("show-date").innerText = document.getElementById("date").value;
    document.getElementById("show-slot").innerText = document.getElementById("slot").value;

    document.getElementById("show-status").innerText = "Scheduled";
    document.getElementById("empty-msg").style.display = "none";
    document.getElementById("booking-details").style.display = "block";

    alert("Slot Booked Successfully!");
}

function rescheduleSlot() {
    var newDate = prompt("Enter new test date (YYYY-MM-DD):");
    if (newDate) {
        document.getElementById("show-date").innerText = newDate;
        document.getElementById("show-status").innerText = "Rescheduled";
        alert("Slot Rescheduled!");
    }
}

function cancelSlot() {
    document.getElementById("show-status").innerText = "Cancelled";
    alert("Booking Cancelled.");
}