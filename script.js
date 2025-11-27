function track(){
  let num = document.getElementById('trackInput').value.trim();
  let result = document.getElementById('result');

  const data = {
    "SD202511260983": "📦 In Transit - Departed Lagos Facility",
    "JD0002123456789012": "📦 Out for Delivery - Italy",
    "LE988776655DE": "📦 Delivered - Germany"
  };

  if(data[num]){
    result.innerHTML = data[num];
  } else {
    result.innerHTML = "❗ Tracking number not found.";
  }
}