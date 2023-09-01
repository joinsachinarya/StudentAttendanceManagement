const dateInputBox = document.getElementById("date");
const attendanceForm = document.getElementById("attendance-form");
const dateFormSearchBTN = document.getElementById("search-attendance-btn");
const fetchReportBTN = document.getElementById("fetch-report");

const currentDate = new Date();
const year = currentDate.getFullYear();
const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
const day = currentDate.getDate().toString().padStart(2, "0");
const formattedTodayDate = `${year}-${month}-${day}`;

function getSelectedDateValue() {
  if (document.getElementById("date").value === "") {
    document.getElementById("date").value = formattedTodayDate;
    console.log("getSelectedDateValue ", document.getElementById("date").value);
    return formattedTodayDate;
  } else {
    console.log("getSelectedDateValue ", document.getElementById("date").value);
    return document.getElementById("date").value;
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

  axios
    .post("http://localhost:3000/mark-attendance", body)
    .then((res) => {
      console.log("body", body);
      console.log("res", res);
    })
    .catch((err) => {
      console.error(err);
    });
}

function fetchAttendanceByDate(date) {
  axios
    .get(`http://localhost:3000/fetch-attendance-by-date/${date}`)
    .then((res) => {
      console.log("res", res);
      removeAttendanceElements();
      console.log(date);
      showAttendanceOnDate(res.data);
    })
    .catch((err) => console.error(err));
}

function fetchAttendanceReport() {
  axios
    .get("http://localhost:3000/fetch-attendance-report")
    .then((res) => {
      console.log("res", res);
      removeAttendanceElements();
      showAttendanceReport(res.data);
    })
    .catch((err) => console.error(err));
}

// Event listeners
dateInputBox.addEventListener("input", getSelectedDateValue);
attendanceForm.addEventListener("submit", markAttendance);
fetchReportBTN.addEventListener("click", fetchAttendanceReport);
dateFormSearchBTN.addEventListener("click", () => {
  fetchAttendanceByDate(getSelectedDateValue());
});

// // Function to remove attendance-related elements
function removeAttendanceElements() {
  const attendanceForm = document.getElementById("attendance-form");
  const radioOptions = attendanceForm.querySelectorAll(".radio-label-options");
  const markAttendanceButton = attendanceForm.querySelector(".btn-success");
  attendanceForm.removeChild(markAttendanceButton);
  radioOptions.forEach((radio) => radio.remove());
}

// Function to show overall attendance report
function showAttendanceReport(data) {
  const studentList = document.getElementsByTagName("li");
  let heading = document.getElementsByClassName("page-heading")[0];
  heading.textContent = "ATTENDANCE REPORT";
  heading.className = " m-3 text-center page-heading text-warning";
  for (let i = 0; i < studentList.length; i++) {
    const span = document.createElement("span");
    let presents = Object.values(data)[i];
    let percent;
    let [nume, deno] = presents.split("/");
    percent = (parseInt(nume) / parseInt(deno)) * 100;

    span.textContent = `${presents} ${`_`.repeat(10)}${Math.ceil(percent)}%`;
    studentList[i].appendChild(span);
  }
}

// Function to show attendance report of specific date
function showAttendanceOnDate(data) {
  const studentList = document.getElementsByTagName("li");
  let heading = document.getElementsByClassName("page-heading")[0];
  heading.textContent = "ATTENDANCE MARKED";
  heading.className = " m-3 text-center page-heading text-success";
  let cnt = 1;
  for (let i = 0; i < studentList.length; i++) {
    const span = document.createElement("span");
    let value = Object.values(data[0])[cnt];
    span.textContent = `${value}`.toUpperCase();
    studentList[i].appendChild(span);
    cnt++;
  }
}
