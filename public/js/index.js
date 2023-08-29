const attendanceForm = document.getElementById("attendance-form");
const dateForm = document.getElementById("date-form");

function fetchAttendanceReport() {
  axios
    .get("http://localhost:3000/fetch-attendance-report")
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.error(err));
}

function fetchAttendanceByDate(date) {
  axios
    .get(`http://localhost:3000/fetch-attendance-by-date/${date}`)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.error(err));
}

function markAttendance(e) {
  e.preventDefault();
  //   axios
  //     .get("http://localhost:3000/mark-attendance")
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => console.error(err));
  let date = selectedDate();

  if (date === "") {
    alert("Select a date");
  }
  console.log(date);
}

function selectedDate() {
  //   e.preventDefault();
  const date = document.getElementById("date").value;
  console.log(date);
  return date;
}

attendanceForm.addEventListener("submit", markAttendance);
dateForm.addEventListener("submit", selectedDate);
