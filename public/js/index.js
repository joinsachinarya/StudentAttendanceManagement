// Function to handle fetching attendance report
function fetchAttendanceReport() {
  axios
    .get("http://localhost:3000/fetch-attendance-report")
    .then((res) => {
      console.log(res);
      removeAttendanceElements(); // Remove radio options and button
      showAttendanceReport(res); // Show attendance report
    })
    .catch((err) => console.error(err));
}

const dateInputBox = document.getElementById("date");
const attendanceFormBTN = document.getElementById("attendance-form");
const dateFormSearchBTN = document.getElementById("search-attendance-btn");
const fetchReportBTN = document.getElementById("fetch-report");

const currentDate = new Date();
const year = currentDate.getFullYear();
const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
const day = currentDate.getDate().toString().padStart(2, "0");
const formattedTodayDate = `${year}-${month}-${day}`;

function getSelectedDateValue() {
  const selectedDateValue = dateInputBox.value;
  if (selectedDateValue === "") {
    dateInputBox.value = formattedTodayDate;
    return formattedTodayDate;
  } else {
    return selectedDateValue;
  }
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

  const isToday = body.date === formattedTodayDate;
  console.log(
    isToday
      ? `Today's date is selected: ${formattedTodayDate}`
      : "Date Selected"
  );

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

function fetchAttendanceByDate(date) {
  const isToday = date === formattedTodayDate;
  console.log(
    isToday
      ? `Today's date is selected: ${formattedTodayDate}`
      : "Date Selected"
  );

  axios
    .get(`http://localhost:3000/fetch-attendance-by-date/${date}`)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.error(err));
}

function fetchAttendanceReport() {
  axios
    .get("http://localhost:3000/fetch-attendance-report")
    .then((res) => {
      console.log(res);
      removeAttendanceElements();
      showAttendanceReport(res);
    })
    .catch((err) => console.error(err));
}

// Event listeners
dateInputBox.addEventListener("input", getSelectedDateValue);
attendanceFormBTN.addEventListener("submit", markAttendance);
fetchReportBTN.addEventListener("click", fetchAttendanceReport);
dateFormSearchBTN.addEventListener("click", () => {
  fetchAttendanceByDate(targetDate);
});

// Function to remove attendance-related elements
function removeAttendanceElements() {
  const attendanceForm = document.getElementById("attendance-form");
  const absentRadioOptions = attendanceForm.querySelectorAll(
    'input[value="absent"]'
  );
  const presentRadioOptions = attendanceForm.querySelectorAll(
    'input[value="present"]'
  );
  const markAttendanceButton = attendanceForm.querySelector(".btn-success");

  attendanceForm.removeChild(markAttendanceButton);

  absentRadioOptions.forEach((radio) => radio.remove());
  presentRadioOptions.forEach((radio) => radio.remove());
}

// Function to show attendance report
function showAttendanceReport(response) {
  const attendanceForm = document.getElementById("attendance-form");
  const reportContainer = document.createElement("div");
  reportContainer.className = "report-container";
  reportContainer.textContent =
    "Attendance Report: " + JSON.stringify(response.data);

  attendanceForm.appendChild(reportContainer);
}
