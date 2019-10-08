
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
 }
  ]
  let $container = document.querySelector('.superhero__list')

  function add(obj) {
   if(typeof obj == 'object'){
     repository.push(obj)
   }else{
    
   }
  }

  function remove(id) {
  
  }

  function getAll(){ 
    for (let index = 0; index < repository.length; index++) {
     let $gridItem = document.createElement('div')
     let $showButton = document.createElement('button')
     let $delButton = document.createElement('button')
     $gridItem.classList  ="grid__item"
     $showButton.classList ="grid__item_show"
     $delButton.classList ="grid__item__del"
     $showButton.textContent = "Show"
     $delButton.textContent = "Remove"

      $gridItem.textContent = repository[index].name
      $gridItem.appendChild($showButton)
      $gridItem.appendChild($delButton)

     $container.appendChild($gridItem) 
    }
    
  }

  return {
   add,
   remove,
   getAll,
   print
  }
})()

superHeroes.getAll()