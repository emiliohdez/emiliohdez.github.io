$(document).ready(function(){
    var estado = false;
    
    fetch('./Assets/js/publications_database.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        let section = $('.section-2');
        console.log(data.length);
        for (var i = 0; i < data.length; i++) {
            if (data[i].type == "academic article"){
                let item = $('<div></div>').attr('class', 'item1');
                section.append(item);
                let title = $('<h1></h1>').text(data[i].title.toUpperCase());
                title.html(title.html().replace(/\n/g,'<br/>'));
                item.append(title);
                let description = $('<p></p>').text(data[i].authors + ",\n" + data[i].journal + ", " + data[i].year + ", volume " + data[i].volume + ", doi: " + data[i].doi   );
                item.append(description);
                
            }else if (data[i].type == "book chapter"){
                let item = $('<div></div>').attr('class', 'item1');
                section.append(item);
                let title = $('<h1></h1>').text(data[i].title.toUpperCase());
                title.html(title.html().replace(/\n/g,'<br/>'));
                item.append(title);
                let description = $('<p></p>').text(data[i].authors + ",\n Book: " + data[i].book + ", " + data[i].year + "\n" + data[i].city + " " + data[i].editor   );
                item.append(description);
                let info = $('<a></a>').attr('class', 'btn').attr('id', i).text('Open').attr('href', data[i].url );
                item.append(info);
            }else if (data[i].type == "conference proceeding"){
                let item = $('<div></div>').attr('class', 'item1');
                section.append(item);
                let title = $('<h1></h1>').text(data[i].proceedingTitle.toUpperCase());
                title.html(title.html().replace(/\n/g,'<br/>'));
                item.append(title);
                let description = $('<p></p>').text(data[i].authors + ",\n Confernce: " + data[i].conferenceName + ", " + data[i].year + "\n," + data[i].city + ", DOI: " + data[i].doi   );
                description.html(description.html().replace(/\n/g,'<br/>'));
                item.append(description);
                let info = $('<a></a>').attr('class', 'btn').attr('id', i).text('Open').attr('href', data[i].url );
                item.append(info);
            }
        

    }

     
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });
    
    });