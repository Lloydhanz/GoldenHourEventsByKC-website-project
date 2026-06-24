const form = document.getElementById("bookingForm");

const table = document.getElementById("bookingTable");

let bookings = [];

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const booking = {
    event: document.getElementById("eventName").value,

    client: document.getElementById("clientName").value,

    date: document.getElementById("eventDate").value,

    time: document.getElementById("timeSlot").value,
  };

  bookings.push(booking);

  renderBookings();

  form.reset();
});

function renderBookings() {
  table.innerHTML = "";

  bookings.forEach((booking, index) => {
    table.innerHTML += `

        <tr>

            <td>${booking.event}</td>

            <td>${booking.client}</td>

            <td>${booking.date}</td>

            <td>${booking.time}</td>

            <td>

                <button
                class="delete-btn"
                onclick="deleteBooking(${index})">

                    Delete

                </button>

            </td>

        </tr>

        `;
  });
}

function deleteBooking(index) {
  bookings.splice(index, 1);

  renderBookings();
}
