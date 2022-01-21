const data = $.getJSON("./data.json");
let card_data = document.querySelectorAll(".current-value");
let card_prev_data = document.querySelectorAll(".prev");

$(".daily").click(function () {
  setData("daily");
});
$(".weekly").click(function () {
  setData("weekly");
});
$(".monthly").click(function () {
  setData("monthly");
});

$(document).ready(function () {
  setData(localStorage.selectedTimeFrame);
});

function setData(timeFrame) {
  data.responseJSON.forEach((item, i) => {
    let prev_uom = "hrs";
    let current_uom = "hrs";
    current_data = item["timeframes"][timeFrame]["current"];
    prev_data = item["timeframes"][timeFrame]["previous"];
    if (prev_data == 1) {
      prev_uom = "hr";
    }
    if (current_data == 1) {
      current_uom = "hr";
    }
    card_data[i].innerText =
      item["timeframes"][timeFrame]["current"] + current_uom;
    card_prev_data[i].innerText =
      "Previous - " + item["timeframes"][timeFrame]["previous"] + prev_uom;
  });
  document.querySelector(".selected").classList.remove("selected");
  document.querySelector("." + timeFrame).classList.add("selected");
  localStorage.selectedTimeFrame = timeFrame;
}
