$(document).ready(function(){
    var estado = false;
    
    fetch('./Assets/js/projects_database.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        let section = $('.section-2');
        console.log(data.length);
        for (var i = 0; i < data.length; i++) {
        let item = $('<div></div>').attr('class', 'item1');
        section.append(item);
        let image = $('<div></div>').attr('class', 'contImg');
        if( i%2==0 ){
            $(image).css('float','left');
        }else{
            $(image).css('float','right'); 
        }
        image.css('background-image', 'url('+data[i].image+')'); 
        item.append(image);
        let contenido = $('<div></div>').attr('class', 'content');
        item.append(contenido);
        let titulo = $('<h1></h1>').text(data[i].title.toUpperCase());
        titulo.html(titulo.html().replace(/\n/g,'<br/>'));
        contenido.append(titulo);
        let description = $('<p></p>').text(data[i].description);
        contenido.append(description);
        let info = $('<a></a>').attr('class', 'btn').attr('id', i).text('Show more').attr('href',data[i].url);
        contenido.append(info);
         


        
    }

     
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });
    
    });