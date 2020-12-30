const options = {
  dragging: false,
  touchZoom: false,
  doubleclickZoom: false,
  scrollwheelZoom: false,
  zoomcontrol: false,
};

//Create map
const map = L.map("mapid", options).setView([-22.2490295, -53.3514348], 15);

//create map
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//Create icon
const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

//Create and add marker
L.marker([-22.2504677, -53.3447375], { icon }).addTo(map);

/*image gallery*/
function selectImage(event) {
  const button = event.currentTarget;
  console.log(button.children);

  //remover todas as classes active image
  const buttons = document.querySelectorAll(".images button");
  buttons.forEach(removeActiveClass);

  function removeActiveClass(button) {
    button.classList.remove("active");
  }

  //selecionar a imagem clicada
  const image = button.children[0];
  const imageContainer = document.querySelector(".orphanage-details> img");

  //atualizar o container de imagem
  imageContainer.src = image.src;

  //adicionar a classe .active para este botão
  button.classList.add("active");
}
