const dateInputBox = document.getElementById("date");
const attendanceFormBTN = document.getElementById("attendance-form");
const dateFormSearchBTN = document.getElementById("search-attendance-btn");
const fetchReportBTN = document.getElementById("fetch-report");

const currentDate = new Date();
const year = currentDate.getFullYear();
const month = (currentDate.getMonth() + 1).toString().padStart(2, 0);
const day = currentDate.getDate().toString().padStart(2, 0);
const formattedTodayDate = `${year}-${month}-${day}`;

function getSelectedDateValue() {
  let selectedDateValue = dateInputBox.value;
  if (selectedDateValue === "") {
    dateInputBox.value = formattedTodayDate;
    return formattedTodayDate;
  } else {
    return selectedDateValue;
  }
}

function fetchAttendanceReport() {
  axios
    .get("http://localhost:3000/fetch-attendance-report")
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.error(err));
}

function markAttendance(e) {
  e.preventDefault();
  const body = {
    peter: e.target.peter.value,
    rocket: e.target.rocket.value,
    eleven: e.target.eleven.value,
    diana: e.target.diana.value,
    lucy: e.target.lucy.value,
    wednesday: e.target.wednesday.value,
    bruce: e.target.bruce.value,
    clark: e.target.clark.value,
    date: getSelectedDateValue(),
  };

  body.date === formattedTodayDate
    ? console.log(`Today's date is selected by default: ${formattedTodayDate}`)
    : console.log("Date Selected");
  axios
    .post("http://localhost:3000/mark-attendance", body)
    .then((res) => {
      console.log(body);
      console.log("res", res);
    })
    .catch((err) => {
      console.error(err);
    });
}

const fetchAttendanceByDate = (date) => {
  dateInputBox.value === formattedTodayDate
    ? console.log(`Today's date is selected by default: ${formattedTodayDate}`)
    : console.log("Date Selected");
  axios
    .get(`http://localhost:3000/fetch-attendance-by-date/${date}`)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.error(err));
};

const targetDate = getSelectedDateValue();
dateInputBox.addEventListener("input", getSelectedDateValue);
attendanceFormBTN.addEventListener("submit", markAttendance);
fetchReportBTN.addEventListener("click", fetchAttendanceReport);
dateFormSearchBTN.addEventListener("click", () => {
  fetchAttendanceByDate(targetDate);
});
