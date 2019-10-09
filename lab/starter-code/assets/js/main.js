
let superHeroes = (function (){

  let repository = [
   {
    "id": 572,
    "name": "Sandman",
    "slug": "572-sandman",
    "powerstats": {
      "intelligence": 44,
      "strength": 75,
      "speed": 46,
      "durability": 90,
      "power": 100,
      "combat": 60
    },
    "appearance": {
      "gender": "Male",
      "race": "Human",
      "height": [
        "6'1",
        "185 cm"
      ],
      "weight": [
        "450 lb",
        "203 kg"
      ],
      "eyeColor": "Brown",
      "hairColor": "Brown"
    },
    "biography": {
      "fullName": "William Baker",
      "alterEgos": "No alter egos found.",
      "aliases": [
        "Flint Marko",
        "Sylvester Mann",
        "Quarryman"
      ],
      "placeOfBirth": "Queens, New York",
      "firstAppearance": "Amazing Spider-Man #4 (September, 1963)",
      "publisher": "Marvel Comics",
      "alignment": "neutral"
    },
    "work": {
      "occupation": "Professional Criminal",
      "base": "-"
    },
    "connections": {
      "groupAffiliation": "(Formerly) Sinister Twelve, the Sinister Six, the Frightful Four, the Outlaws and the Wild Pack, reserve member of the Avengers",
      "relatives": "Mrs. Baker (mother), unidentified cousin"
    },
    "images": {
      "xs": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/572-sandman.jpg",
      "sm": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/572-sandman.jpg",
      "md": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/572-sandman.jpg",
      "lg": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/572-sandman.jpg"
    }
  },
  {
   "id": 589,
   "name": "She-Hulk",
   "slug": "589-she-hulk",
   "powerstats": {
     "intelligence": 81,
     "strength": 100,
     "speed": 42,
     "durability": 100,
     "power": 40,
     "combat": 70
   },
   "appearance": {
     "gender": "Female",
     "race": "Human",
     "height": [
       "6'7",
       "201 cm"
     ],
     "weight": [
       "700 lb",
       "315 kg"
     ],
     "eyeColor": "Green",
     "hairColor": "Green"
   },
   "biography": {
     "fullName": "Jennifer Walters",
     "alterEgos": "No alter egos found.",
     "aliases": [
       "Jade Giantess"
     ],
     "placeOfBirth": "Los Angeles, California",
     "firstAppearance": "She-Hulk (Vol. 1) #1",
     "publisher": "Marvel Comics",
     "alignment": "good"
   },
   "work": {
     "occupation": "Lawyer, Magistra of the Living Tribunal",
     "base": "Law offices of Goodman, Lieber, Kurtzberg, & Holliway; formerly Avengers Mansion; Baxter Building, Four Freedoms Plaza"
   },
   "connections": {
     "groupAffiliation": "Goodman, Lieber, Kurtzberg, & Holliway; formerly Avengers, Fantastic Four, Heroes for Hire",
     "relatives": "Bruce Banner (Hulk, cousin)"
   },
   "images": {
     "xs": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/589-she-hulk.jpg",
     "sm": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/589-she-hulk.jpg",
     "md": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/589-she-hulk.jpg",
     "lg": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/589-she-hulk.jpg"
   }
 },
 {
  "id": 395,
  "name": "Kraven the Hunter",
  "slug": "395-kraven-the-hunter",
  "powerstats": {
    "intelligence": 63,
    "strength": 32,
    "speed": 35,
    "durability": 42,
    "power": 25,
    "combat": 85
  },
  "appearance": {
    "gender": "Male",
    "race": "Human",
    "height": [
      "6'0",
      "183 cm"
    ],
    "weight": [
      "235 lb",
      "106 kg"
    ],
    "eyeColor": "Brown",
    "hairColor": "Black"
  },
  "biography": {
    "fullName": "Sergei Kravinoff",
    "alterEgos": "No alter egos found.",
    "aliases": [
      "Kraven the Hunter",
      "World's Greatest Hunter",
      "the Grim Hunter"
    ],
    "placeOfBirth": "Volgograd (formerly Stalingrad), Russia",
    "firstAppearance": "The Amazing Spider-Man #15 (1964)",
    "publisher": "Marvel Comics",
    "alignment": "bad"
  },
  "work": {
    "occupation": "Professional game hunter, mercenary",
    "base": "-"
  },
  "connections": {
    "groupAffiliation": "(formerly) The Sinister Six",
    "relatives": "Nikolai & Anna Makarova Kravinoff (parents, deceased), Dmitri Smerdyakov (Chameleon, half-brother), Vladimir Kravinoff (Grim Hunter, son, deceased), Aloysha \"Al\" Kravinoff (Kraven II, son), Ned Tannengarden (son, deceased)"
  },
  "images": {
    "xs": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/395-kraven-the-hunter.jpg",
    "sm": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/395-kraven-the-hunter.jpg",
    "md": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/395-kraven-the-hunter.jpg",
    "lg": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/395-kraven-the-hunter.jpg"
  }
},
{
  "id": 322,
  "name": "Hellboy",
  "slug": "322-hellboy",
  "powerstats": {
    "intelligence": 63,
    "strength": 53,
    "speed": 21,
    "durability": 95,
    "power": 73,
    "combat": 75
  },
  "appearance": {
    "gender": "Male",
    "race": "Demon",
    "height": [
      "8'6",
      "259 cm"
    ],
    "weight": [
      "350 lb",
      "158 kg"
    ],
    "eyeColor": "Gold",
    "hairColor": "Black"
  },
  "biography": {
    "fullName": "Anung Un Rama",
    "alterEgos": "No alter egos found.",
    "aliases": [
      "World Destroyer",
      "The Great Beast"
    ],
    "placeOfBirth": "-",
    "firstAppearance": "Dime Press #4 (May 1, 1993)",
    "publisher": "Dark Horse Comics",
    "alignment": "good"
  },
  "work": {
    "occupation": "-",
    "base": "-"
  },
  "connections": {
    "groupAffiliation": "Abe Sapien, Liz Sherman, Roger the Homunculus, Savage Dragon, the Goon, Batman, Starman, Ghost, Painkiller Jane, Lobster Johnson, Torch of Liberty",
    "relatives": "Catherine Tanner-Tremaine (mother, deceased), two unnamed maternal half-siblings (deceased), Professor Trevor Bruttenholm (foster father)"
  },
  "images": {
    "xs": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/322-hellboy.jpg",
    "sm": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/322-hellboy.jpg",
    "md": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/322-hellboy.jpg",
    "lg": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/322-hellboy.jpg"
  }
}
  ]
  let $container = document.querySelector('.superhero__list')
  let $alert = document.querySelector('.alert')
  let $modal = document.querySelector('.modal')
  let $modalBody = document.querySelector('.modal-body')

  function add(obj) {
   if(typeof obj == 'object'){
     repository.push(obj)
   }else{
    $alert.classList.add("alert_error")
   }
  }

  function getAll(){ 
    for (let index = 0; index < repository.length; index++) {
     //create all elements
     let $gridItem = document.createElement('div')
     let $showButton = document.createElement('button')
     let $delButton = document.createElement('button')
     let $divButtonHolder = document.createElement('div')

     //add class to elements
     $gridItem.classList.add("grid__item")
     $gridItem.setAttribute("data-id",repository[index].id )
     $divButtonHolder.classList.add("grid__button")
     $showButton.classList.add("grid__item__show")
     $delButton.classList.add("grid__item__del")


     //add content to element
     $showButton.textContent = "Show"
     $delButton.textContent = "Remove"
     $gridItem.innerHTML = "<div><div>" + 
     "<img src='"+ repository[index].images.sm +"' width='100%' /></div><h2>" + 
     repository[index].name + "</h2></div><div>" + repository[index].biography.fullName + "</div>"

     //appends
     $divButtonHolder.append($showButton)
     $divButtonHolder.appendChild($delButton)
      
     $gridItem.appendChild($divButtonHolder) 
      $container.appendChild($gridItem) 

      $delButton.addEventListener('click', function(e){
       let id = e.target.parentNode.parentNode.getAttribute('data-id')
       
       let item = repository.findIndex(function(x){
        return x.id == id
       })
       repository.splice(item,1)
       
       e.target.parentNode.remove()

      })

      $showButton.addEventListener('click', function(e){
       let id = e.target.parentNode.parentNode.getAttribute('data-id')
        showDetails(id)
      })
    }
    
  }


  function showDetails(id){
   $modalContent = document.querySelector('.modal-content')   
   $closeModalContent = document.querySelector('.close')
   
   //empty content
   $modalBody.innerHTML=""

   //get object in array
   let item = repository.find(function(x){
    return x.id == id
   })

   $modalBodyInformation = document.createElement('div')
   $imgContent = document.createElement('img') 


   $imgContent.src = item.images.md
   $modalBodyInformation.innerHTML="information"
   $modal.style.display = 'block'

   $modalBody.appendChild($imgContent)
   $modalBody.appendChild($modalBodyInformation)
   $modalContent.appendChild($modalBody)
   $modal.appendChild($modalContent)

   $closeModalContent.addEventListener('click', function(){
    close()
   })

  }

  function close(){
   //empty content
   $modalBody.innerHTML=""
   $modal.style.display = 'none'
  }


  function print(){

  }

  return {
   add,
   getAll,
   print
  }
})()

superHeroes.getAll()