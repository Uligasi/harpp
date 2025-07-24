
function calculatePrice() {
  let base = 500;
  let video = document.getElementById("videoAddOn").checked ? 100 : 0;
  let photo = document.getElementById("photoAddOn").checked ? 75 : 0;
  let venue = document.getElementById("indoorOutdoor").checked ? 50 : 0;
  let miles = parseInt(document.getElementById("distance").value) || 0;
  let travel = Math.ceil(miles / 20) * 50;
  let total = base + video + photo + venue + travel;
  document.getElementById("priceOutput").innerText = "Total Price: $" + total;
}
