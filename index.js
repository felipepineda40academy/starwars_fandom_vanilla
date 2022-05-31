var search_form = document.getElementById("search_form");
var modal_form = document.getElementById("modal_form");
var button = document.getElementById("modal_button");
var starwars_user_form = {
  name: "",
  email: "",
  email_campaign_opt_in: "",
};
var characters_div = document.getElementById("characters");
var characters_images = [
  "https://farm9.staticflickr.com/8589/16050205404_9fd59fa931_o.jpg",
  "https://img.artpal.com/50943/29-17-9-19-14-13-1m.jpg",
  "https://i1.wp.com/robotfun.co.uk/wp-content/uploads/2017/09/R2-D2-8-of-11.jpg?fit=4352%2C3264&ssl=1",
  "https://staticdelivery.nexusmods.com/mods/2229/images/4143/4143-1598751477-400716750.png",
  "https://wallup.net/wp-content/uploads/2019/09/304637-star-wars-leia-organa-748x561.jpg",
  "https://vignette.wikia.nocookie.net/starwars/images/5/56/Owen_Lars1.jpg/revision/latest?cb=20070409092007&path-prefix=nl",
  "https://s-media-cache-ak0.pinimg.com/originals/2b/bb/71/2bbb712405c574c6ce78730e00464a8e.jpg"
];
//*------------------------------------------------------functions

function extract_n_insert(data_to_insert) {
  let variable_a_iterar = data_to_insert.results;
  for (item in variable_a_iterar) {
    console.log(variable_a_iterar[item]["name"]);
    let h2_element = document.createElement("h2");
    h2_element.innerHTML = `<div class="card text-center mx-auto" style="width: 30rem;">
                                    <img src="${characters_images[item]}" class="card-img-top" alt="...">
                                    <div class="card-body">
                                    <h5 class="card-title">${variable_a_iterar[item]["name"]}</h5>
                                    <p class="card-text">Año de nacimiento: ${variable_a_iterar[item]["birth_year"]}</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>`;
    characters_div.appendChild(h2_element);
  }
}

//*------------------------------------------------------end of functions

var starwars_characters = fetch("https://swapi.dev/api/people", [
  { mode: "no-cors", headers: { "Content-type": "application/json" } },
])
  .then((response) => response.json())
  .then((data) => {
    extract_n_insert(data);

    console.log(data);
    // console.log(data["results"][0]["name"])
  });

setTimeout(function () {
  $("#exampleModal").modal("show");
}, 4000);

search_form.addEventListener("submit", function (event) {
  event.preventDefault();
  var search_item = document.getElementById("search_item").value;
  if (search_item == "Leia Organa" || search_item == "Darth Vader") {
    window.location.href = "https://www.google.com/search?q=" + search_item;
  } else {
    alert("Esta barra de busqueda solo sirve para Darth Vader  o Leia Organa");
  }
});

modal_form.addEventListener("submit", function (event) {
  event.preventDefault();
  var name = document.getElementById("modal_name").value;
  var email = document.getElementById("modal_email").value;
  var email_marketing = document.getElementById(
    "email_marketing_opt_in"
  ).checked;

  starwars_user_form.name = name;
  starwars_user_form.email = email;
  starwars_user_form.email_campaign_opt_in = email_marketing;

  console.log(starwars_user_form);
  var obj = {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(starwars_user_form),
  };
  fetch("https://webhook.site/d0841b11-0fef-4d59-86c0-33ac53e0ee63", obj);
  $("#exampleModal").modal("hide");
});
