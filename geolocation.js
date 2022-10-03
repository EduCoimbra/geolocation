
const x = document.getElementById("demo");

function getLocation(){
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    x.innerHTML = "Your browser does not support Geolocation."
  }
}

function showPosition(position){
  x.innerHTML = `<strong>Latitude:</strong>${position.coords.latitude} <br><strong>Longitude:</strong> ${position.coords.longitude}`;
}

// Handling errors
function showError(error) {
  switch (error.code){
    case error.PERMISSION_DENIED:
      x.innerHTML = "Permision denied by the user."
      break;
    case error.POSITION_UNAVAILABLE:
      x.innerHTML = "Location information unavailable."
      break;
    case error.TIMEOUT:
      x.innerHTML = "The request to get the user's position timed out."
      break;
    case error.UNKNOWN_ERROR:
      x.innerHTML = "An unknown error occurred."
      break;
  }
}


