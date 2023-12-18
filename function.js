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
    });

    const commanderTitle = document.querySelectorAll('.commander');
    commanderTitle.forEach((commanderTitle, index) => {
      commanderTitle.textContent = veri.crew[index].role;
    });
    const commanderName = document.querySelectorAll('.d-hurley');
    commanderName.forEach((commanderName, index) => {
      commanderName.textContent = veri.crew[index].name;
    });
    const commanderText = document.querySelectorAll('.commanderText');
    commanderText.forEach((commanderText, index) => {
      commanderText.textContent = veri.crew[index].bio;
    });
    const peopleImg = document.querySelectorAll('.commanderImg2');
    peopleImg.forEach((peopleImg, index) => {
      peopleImg.src = veri.crew[index].images.png;
    });
    const Tech = document.querySelectorAll('.TechName');
    Tech.forEach((Tech, index) => {
      Tech.textContent = veri.technology[index].name;
    });
    const TechText = document.querySelectorAll('.TechText');
    TechText.forEach((TechText, index) => {
      TechText.textContent = veri.technology[index].description;
    });
    
    // Sayfa duyarliligina göre güncellenen elementler
    function updateContentBasedOnScreenSize() {
      const screenSize = window.innerWidth;
      const TechImg = document.querySelectorAll('.TechImg2');
    
      TechImg.forEach((imgElement, index) => {
        if (screenSize <= 767) {
          imgElement.src = veri.technology[index].images.landscape
        } else {
          imgElement.src = veri.technology[index].images.portrait;
        }
      });
    }
    // Ekran boyutu değiştiğinde çalışan event dinleyicisi
    window.addEventListener('resize', updateContentBasedOnScreenSize);
    
    // Sayfa ilk yüklendiğinde içeriği ekran boyutuna göre günceller
    updateContentBasedOnScreenSize();

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
