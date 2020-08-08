$(document).ready(function(){
    
    fetch('../Assets/js/projects_database.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {

        for (var i = 0; i < data.length; i++) {
        id= "#"+i;
        let project = $(id);
        let itemProject = $('<div></div>').attr('class', 'item');
        project.append(itemProject);
        let titleProject = $('<h1></h1>').text(data[i].title.toUpperCase());
        itemProject.append(titleProject);
        let image = $('<div></div>').attr('class', 'contImg');
        itemProject.append(image);
        let photo = $('<img></img>').attr('src', "."+data[i].image);
        let photo2 = $('<img></img>').attr('src', data[i].image);

        image.append(photo2);
        let description = $('<p></p>').text(data[i].text);
        itemProject.append(description);
        }
        
    })


    .catch(function (err) {
        console.log('error: ' + err);
    });
});
    