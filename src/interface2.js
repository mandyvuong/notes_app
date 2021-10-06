makeUrlChangeShowAnimalForCurrentPage();

function makeUrlChangeShowAnimalForCurrentPage() {
  window.addEventListener("hashchange", showAnimalForCurrentPage);
};

function showAnimalForCurrentPage() {
  animal = showAnimal(getAnimalFromUrl(window.location));
  console.log(getAnimalFromUrl(window.location));
  addAnimal(getAnimalFromUrl(window.location));
};

function getAnimalFromUrl(location) {
  return location.hash.split("#")[1];
};

function showAnimal(animal) {
  document.getElementById("animal").innerHTML = animal; 
};

var animalArray = ['This is a list of animals'];

function addAnimal(animal) {
    animalArray.push(animal);
    var list = document.createElement('ul');
    appendUL(animal)
    //list.appendChild(item);
    //document.getElementById("pTxt").innerHTML = animalArray;
    //document.getElementById('foo').appendChild(makeUL(animalArray));
    //document.getElementById('foo').appendChild(makeUL(item));

};

function deleteAnimal(animal) {
    console.log(animalArray)
    let pos = animalArray.indexOf(animal)
    let removedItem = animalArray.splice(pos, 1)
    console.log(animalArray)
    return removedItem
}

function abbreviate(animal){
    animal.substr(0,4)
}

function changeList(){
    console.log(animalArray)
    let new_array = animalArray.map(animal => animal.substr(0,4))
    console.log(new_array)
}

function myFunction() {
    new_thing = document.getElementById("myTextArea").value
    console.log(new_thing)
    addAnimal(new_thing)
  }

function makeUL(array) {
    // Create the list element:
    var list = document.createElement('ul');

    for (var i = 0; i < array.length; i++) {
        // Create the list item:
        var item = document.createElement('li');

        // Set its contents:
        item.appendChild(document.createTextNode(array[i]));

        // Add it to the list:
        list.appendChild(item);
    }

    // Finally, return the constructed list:
    return list;
}

// document.getElementById('foo').appendChild(makeUL(animalArray));
function appendUL(animal) {
    let item = document.createElement('LI')    
    let itemLink = item.innerHTML = animal
    let textnode = document.createTextNode(item);
    item.appendChild(textnode);
    item.innerHTML = `<a href="#${animal}">${animal}</a>`
    
    document.getElementById("foo").appendChild(item)
    return item;
}


// function appendPanel(animal) {
//   let item = document.createElement('panel')
//   let textnode = document.createTextNode(animal);   
//   item.appendChild(textnode);
//   document.getElementById("bar").appendChild(item)
//   return item;
// }

// var acc = document.getElementsByClassName("accordion");
// var i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var panel = this.nextElementSibling;
//     if (panel.style.display === "block") {
//       panel.style.display = "none";
//     } else {
//       panel.style.display = "block";
//     }
//   });
// }

// function getPostData() {
//   return fetch("https://makers-emojify.herokuapp.com/hello :africa:").then(response => {
//     return response.json();
//   })
// }

// function getPostData() {
//   return fetch("https://makers-emojify.herokuapp.com/", {
//     headers: {
//       Accept: "application/json",
//       "text": "Hello :earth_africa:"
//     },
//    method: "POST"
//   }).then(response => {
//     return response.json();
//   })
// }

getPostData()


function getPostData() {

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({"text":"Hello, :earth_africa:"});

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch("https://makers-emojify.herokuapp.com/", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .then(response => {
    return response;
  })
}

function renderPost(postData) {
  //let postHeadingHTML = `<h1>${postData.emojified_text}</h1>`;
  //let postWithLinebreaksHTML = postData.body.replaceAll("\n", "<br>\n");
  let postBodyHTML = `<p>${postData.emojified_text}</p>`;
  return `${postHeadingHTML}${postBodyHTML}`;
}


// getPostData().then(post => {
//   let rendered = renderPost(post);
//   document.getElementById("bar").innerHTML = rendered;
// });


//     .then(response => response.text())
//     .then(result => console.log(result))
//     .catch(error => console.log('error', error));
//     return response.json();
// }

// return fetch("https://makers-emojify.herokuapp.com/hello :africa:").then(response => {
//     return response.json();
//   })

