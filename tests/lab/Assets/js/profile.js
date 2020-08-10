$(document).ready(function(){
var estado = false;

fetch('./Assets/js/people_database.json')
.then(function (response) {
    return response.json();
})
.then(function (data) {
////////////////////////////
//////Crear la pagina de About-us
////////////////////////////
    let team = $('.team');
    console.log(data.length);
    for (var i = 0; i < data.length; i++) {
    var item = $('<div></div>').attr('class', 'item1');
    team.append(item);
    var image = $('<div></div>').attr('class', 'imagen');
    item.append(image);
    var photo = $('<img></img>').attr('src', data[i].photo);
    image.append(photo);
    var nombre = $('<h3></h3>').text(data[i].name.toUpperCase() + ' \n ' + data[i].lastname.toUpperCase());
    nombre.html(nombre.html().replace(/\n/g,'<br/>'));
    item.append(nombre);
    var nombre = $('<a></a>').attr('class', 'btn').attr('id', i).text('Show more');
    item.append(nombre);
  }
  
////////////////////////////
//////Desplegar informacion de cada perfil
////////////////////////////

  $('.btn').on('click', function(){
    const indice = $(this).attr('id');
   fetch('./Assets/js/people_database.json')
    .then(function (response) {
      return response.json();
      })
    .then(function (data) {
      const DB= data;
    var profile = $('<div></div>').attr('class', 'contenedor profile');
    $('.section-2').append(profile);
    var section = $('<section></section>').attr('class', 'section-1');
  profile.append(section);
  var item1 = $('<div></div>').attr('class', 'item1');
  section.append(item1);
  var nombre = $('<h1></h1>').attr('class', 'nombre').text(data[indice].name.toUpperCase() + ' ' + data[indice].lastname.toUpperCase());
  item1.append(nombre);
  var photo = $('<img></img>').attr('src', data[indice].photo).attr('class', 'picture');
  item1.append(photo);
  var area = $('<h2></h2>').attr('class', 'text').text(data[indice].area.toUpperCase());
  item1.append(area);
  var descripcion = $('<p></p>').attr('class', 'text').text(data[indice].description);
  descripcion.html(descripcion.html().replace(/\n/g,'<br/>'));
  item1.append(descripcion);
  var flecha = $('<span></span>').attr('class', 'fa fa-arrow-left');
    var back = $('<a></a>').attr('class', 'back').text(' BACK');
  flecha.append(back);
  section.append(flecha);
  
////////////////////////////
//////Links de contacto 
////////////////////////////
  for (var j=0;j< data[indice].links.length;j++){
  let type=data[indice].links[j].type;
  let url=data[indice].links[j].url;
  var links = $('<a></a>').attr('class', 'social').attr('href', url);
  switch (type) {
    case 'github':
      var linkImg = $('<img></img>').attr('src', './Assets/img/icons/perfil-github.png');
      links.append(linkImg);
      section.append(links);
      break;
    case 'linkedin':
        var linkImg = $('<img></img>').attr('src', './Assets/img/icons/perfil-linkedin.png');
        links.append(linkImg);
        section.append(links);
        break; 
   case 'email':
      var linkImg = $('<img></img>').attr('src', './Assets/img/icons/perfil-mail.png');
      links.append(linkImg);
      section.append(links);
        break;
    case 'cv':
        var linkImg = $('<img></img>').attr('src', './Assets/img/icons/perfil-cv.png');
        links.append(linkImg);
        section.append(links);
        break;  
    case 'behance':
      var linkImg = $('<img></img>').attr('src', './Assets/img/icons/perfil-behance.png');
      links.append(linkImg);
      section.append(links);
        break;
    case 'fb':
        var linkImg = $('<img></img>').attr('src', './Assets/img/icons/perfil-fb.png');
        links.append(linkImg);
        section.append(links);
        break;  
    case 'instagram':
          var linkImg = $('<img></img>').attr('src', './Assets/img/icons/perfil-instagram.png');
          links.append(linkImg);
          section.append(links);
        break;  
    case 'phone':
          var linkImg = $('<img></img>').attr('src', './Assets/img/icons/perfil-phone.png');
          links.append(linkImg);
          section.append(links);
        break; 
    case 'twitter':
          var linkImg = $('<img></img>').attr('src', './Assets/img/icons/perfil-twitter.png');
          links.append(linkImg);
          section.append(links);
        break;
    case 'personal':
          var linkImg = $('<img></img>').attr('src', './Assets/img/icons/perfil-personal.png');
          links.append(linkImg);
          section.append(links);
        break;   
    case 'twitch':
          var linkImg = $('<img></img>').attr('src', './Assets/img/icons/perfil-twitch.png');
          links.append(linkImg);
          section.append(links);
        break;       
  }}
  
  $('.back, .fa').on('click', function(){
      $('.profile').css("display", "none");
  })

  $('.about').on('click', function(){
      $('.profile').css("display", "none");
  })

  $('.profile').css("display", "block");
  });/*
  .catch(function (err) {
    console.log('error: ' + err);
  });*/
  
   });

})
.catch(function (err) {
    console.log('error: ' + err);
});

});