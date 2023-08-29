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
  const data = {
    peter: e.target.peter.value,
    rocket: e.target.rocket.value,
    eleven: e.target.eleven.value,
    diana: e.target.diana.value,
    lucy: e.target.lucy.value,
    wednesday: e.target.wednesday.value,
    bruce: e.target.bruce.value,
    clark: e.target.clark.value,
  };

  if (document.getElementById("date").value === "") {
    alert("Please select a date");
  } else {
    //   axios
    //     .get("http://localhost:3000/mark-attendance")
    //     .then((res) => {
    //       console.log(res);
    //     })
    //     .catch((err) => console.error(err));
    console.log(data);
    console.log(document.getElementById("date").value);
  }
}

function selectedDate() {
  e.preventDefault();
  console.log("date selected");
}

attendanceForm.addEventListener("submit", markAttendance);
dateForm.addEventListener("submit", selectedDate);
