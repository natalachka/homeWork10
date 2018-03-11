$(function(){

	// var buttonsContainer = document.getElementsByClassName('buttons-container')[0];
	// buttonsContainer.addEventListener('click', onSourceClick);



	// var API_KEY = '6dc2f16f1c6245c8ac3b8a6815dc9044';
	// var sourcesUrl = 'https://newsapi.org/v2/sources?apiKey=' + API_KEY;
	// var topHeadlinesUrlTemplate = 'https://newsapi.org/v2/top-headlines?apiKey=' + API_KEY;
	// var newContainer = document.getElementsByClassName('new-container')[0];
	


	// var sourcesXhr = new XMLHttpRequest();

	// sourcesXhr.open('GET', sourcesUrl);
	// sourcesXhr.send();

	// sourcesXhr.onreadystatechange = function(){
	// 	if(sourcesXhr.readyState !== 4){
	// 		return;
	// 	}	

	// 	renderButtons();
	// };

	// function renderButtons(){
	// 	var sources = JSON.parse(sourcesXhr.response).sources;

	// 	for(var i = 0, len = sources.length; i < len; i++){
	// 		addButton(sources[i]);
	// 	}
	// }

	// function addButton(source){


	// 	var button = document.createElement('button');

	// 	button.innerText = source.name;
	// 	button.setAttribute('data-source-id', source.id);
	// 	buttonsContainer.appendChild(button);
	// }

	// function onSourceClick(event){
	// 	event.preventDefault();

	// 	var target = event.target;
	// 	var newSorceId = target.getAttribute('data-source-id');

	// 	if (newSorceId) {
	// 		newGet(newSorceId)
	// 	};
		
	// }

	// function newGet(newSorceId){
	// 	var url = topHeadlinesUrlTemplate + "&sources=" + newSorceId;
	// 	var topHeadlines = new XMLHttpRequest();

	// 	topHeadlines.open('GET', url);
	// 	topHeadlines.send();

	// 	topHeadlines.onreadystatechange = function(){
	// 		if(topHeadlines.readyState !== 4){
	// 			return;
	// 		}	
	// 		var articles = JSON.parse(topHeadlines.response).articles;
	// 		// console.log(articles);

	// 		for(var i = 0, len = articles.length; i < len; i++){
	// 			renderArticle(articles[i]);
	// 		}
	// 	};

	// }


	// function renderArticle(article){
	// 		var div = document.createElement('div');
	// 		div.setAttribute('class', article.author);
	// 		div.innerText = article.description;
	// 		div.style.marginTop = '10px';
	// 		buttonsContainer.appendChild(div);
	// }
      
      var input = document.querySelector('input[name=tags]'),
   	  tagify = new Tagify( input );

// with settings passed
tagify = new Tagify( input, {
    duplicates: true,
    whitelist: ['foo', 'bar'],
    callbacks: {
        add : onAddTag // calls an imaginary "onAddTag" function when a tag is added
    }
});

// listen to custom tags' events such as 'add' or 'remove'
tagify1.on('remove', ()=>{
    console.log(e, e.detail);
});              
$('[name=tags]')
    .tagify()
    .on('add', function(e, tagName){
        console.log('added', tagName)
    });
                  

});