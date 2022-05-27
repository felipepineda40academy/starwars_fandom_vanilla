var search_form = document.getElementById('search_form');
var modal_form = document.getElementById('modal_form');
var button = document.getElementById('modal_button')

var starwars_user_form = {
    name: "",
    email: "",
    email_campaign_opt_in:""
}


setTimeout(function(){
    $("#exampleModal").modal('show');
},4000)

    
search_form.addEventListener('submit',function(event){
    event.preventDefault();
    var search_item = document.getElementById('search_item').value;
    if ((search_item == 'Leia Organa')||(search_item == 'Darth Vader')){
        window.location.href= "https://www.google.com/search?q="+search_item
    }else{
        alert ('Esta barra de busqueda solo sirve para Darth Vader  o Leia Organa')
    }
})

modal_form.addEventListener('submit',function(event){
    event.preventDefault();
    var name = document.getElementById('modal_name').value;
    var email = document.getElementById('modal_email').value;
    var email_marketing = document.getElementById('email_marketing_opt_in').checked;

    starwars_user_form.name=name;
    starwars_user_form.email=email;
    starwars_user_form.email_campaign_opt_in=email_marketing;

    console.log(starwars_user_form);
    var obj={
        method: 'POST',
        mode: 'no-cors',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(starwars_user_form)
    }
    fetch ("https://webhook.site/d0841b11-0fef-4d59-86c0-33ac53e0ee63",obj);
    $("#exampleModal").modal('hide');

})


