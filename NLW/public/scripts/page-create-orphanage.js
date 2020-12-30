//create map
const map = L.map("mapid").setView([-22.2490295, -53.3514348], 15);

//create and add titleLayer
L.titleLayer("https://{s}.title.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//create icon
const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

let marker;

//create and add marker
map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector("[name=lat]").value = lat;
  document.querySelector("[name=lng]").value = lng;

  //remove icon from the
  marker && map.removeLayer(marker);

  //add icon layer to the map
  marker = L.marker([lat, lng], { icon }).addTo(map);
});

//adiconar o campo de fotos
function addPhotoField() {
  //pegar o container de fotos #images
  const container = document.querySelector("#images");
  //pegar o container para duplicar .new-image
  const fieldsContainer = document.querySelectorAll(".new-upload");
  //realizar o clone da ultima imagem adicionada
  const newFieldsContainer = fieldsContainer[
    fieldsContainer.length - 1
  ].cloneNode(true);
  //verificar se o campo esta vazio, se sim, nao adicionar ao container de imagens
  const input = newFieldContainer.children[0];
  if (input.value == "") {
    return;
  }
  //limpar o campo antes de adicionar ao container de images
  input.value = "";
  //adicionar o clone ao container da #images
  container.appendChild(newFieldsContainer);
}

function deletField(event) {
  const span = event.currentTarget;

  const fieldsContainer = document.querySelectorAll(".new-upload-field");

  if (fieldsContainer.length < 2) {
    //limpar o valor do campo
    span.parentNode.children[0].value = "";
    return;
  }

  //deletar o campo
  span.parentNode.remove();
}

//troca do sim e nao
function toggleSelect(event) {
  //retirar a classe active dos botoes
  document.querySelectorAll(".button-select button").forEach(function (button) {
    button.classList.remove("active");
  });
  //colocar a class .active
  const button = event.currentTarget;
  button.classList.add("active");
  //atualizar o input hidden com o valor selecionado
  const input = document.querySelector('[name="open_on_weekends]');
  //verificar se sim ou nao
  input.value = button.dataset.value;
}
