function openNav() {
    document.getElementById("yanMenu").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("yanMenu").style.width = "0";
  }

var data = fetch("data.json")
  .then(response => response.json())
  .then(veri => {
    const moonNames = document.querySelectorAll('.moonName');
    moonNames.forEach((moonName, index) => {
      moonName.textContent = veri.destinations[index].name;
    });

    const moonTexts = document.querySelectorAll('.moonText');
    moonTexts.forEach((moonText, index) => {
      moonText.textContent = veri.destinations[index].description;
    });

    const distances = document.querySelectorAll('.distance');
    distances.forEach((distance, index) => {
      distance.textContent = veri.destinations[index].distance;
    });

    const travelTime = document.querySelectorAll('.travel-time');
    travelTime.forEach((travelTime, index) => {
      travelTime.textContent = veri.destinations[index].travel;
    });

    const moonImg = document.querySelectorAll('.img-moon');
    moonImg.forEach((moonImg, index) => {
      moonImg.src = veri.destinations[index].images.png;
      console.log(veri.destinations[index].images.png);
    });
  })
  .catch(error => console.log(error));

function goster(id) {
  const icerikler = document.querySelectorAll('.icerik');
  icerikler.forEach(icerik => {
    icerik.style.display = 'none';
  });

  const secilenIcerikTitle = document.getElementById(`${id}_title`);
  const secilenIcerikText = document.getElementById(`${id}_text`);
  const secilenIcerikDistance = document.getElementById(`${id}_distance`);
  const secilenIcerikTravel = document.getElementById(`${id}_travel_time`);
  const secilenIcerikImg = document.getElementById(`${id}_moon_img`);
  
  secilenIcerikTitle.style.display = 'block';
  secilenIcerikText.style.display = 'block';
  secilenIcerikDistance.style.display = 'block';
  secilenIcerikTravel.style.display = 'block';
  secilenIcerikImg.style.display = 'block';


}