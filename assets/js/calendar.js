const monthYear = document.getElementById("monthYear");
const calendarDays = document.getElementById("calendarDays");

const bookedList = document.getElementById("bookedList");
const availableList = document.getElementById("availableList");

const selectedDateText = document.getElementById("selectedDate");

let currentDate = new Date();

const bookings = {
  "2026-07-15": ["8:00 AM - 10:00 AM", "2:00 PM - 4:00 PM"],

  "2026-07-18": ["10:00 AM - 12:00 PM"],

  "2026-07-25": ["1:00 PM - 5:00 PM"],
};

const defaultSlots = [
  "8:00 AM - 10:00 AM",
  "10:00 AM - 12:00 PM",
  "12:00 PM - 2:00 PM",
  "2:00 PM - 4:00 PM",
  "4:00 PM - 6:00 PM",
];

function renderCalendar() {
  calendarDays.innerHTML = "";

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  monthYear.textContent = currentDate.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });

  const firstDay = new Date(year, month, 1).getDay();

  const daysInMonth = new Date(year, month + 1, 0).getDate();

  for (let i = 0; i < firstDay; i++) {
    const blank = document.createElement("div");

    calendarDays.appendChild(blank);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const dayBox = document.createElement("div");

    dayBox.classList.add("day");

    dayBox.textContent = day;

    const dateKey = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;

    dayBox.addEventListener("click", () => {
      showBookings(dateKey);
    });

    calendarDays.appendChild(dayBox);
  }
}

function showBookings(date) {
  selectedDateText.textContent = `Schedule for ${date}`;

  bookedList.innerHTML = "";
  availableList.innerHTML = "";

  const booked = bookings[date] || [];

  booked.forEach((slot) => {
    const li = document.createElement("li");

    li.textContent = slot;

    bookedList.appendChild(li);
  });

  defaultSlots.forEach((slot) => {
    if (!booked.includes(slot)) {
      const li = document.createElement("li");

      li.textContent = slot;

      availableList.appendChild(li);
    }
  });
}

document.getElementById("prevMonth").addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() - 1);

  renderCalendar();
});

document.getElementById("nextMonth").addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() + 1);

  renderCalendar();
});

renderCalendar();
