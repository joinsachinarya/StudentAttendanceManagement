const form = document.getElementById("form");

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
  const values = e.target;
  console.log(values);
}

form.addEventListener("submit", markAttendance);
