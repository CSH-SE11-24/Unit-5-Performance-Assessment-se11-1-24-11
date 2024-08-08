//There used to be a bug that it was calling something undefined because the video didn't load yet so I had to use setTimeout so it can solve this issue

setTimeout(function(){
      

let video = document.querySelector("video")

  video.addEventListener("mouseover", function(event){
  video.currentTime = 0
  video.play()
})

  video.addEventListener("mouseout", function(event){
    video.currentTime = 0
    video.pause()

})
},1000)

// I declared all the variable that I need

let people = document.querySelectorAll(".blue")

let button = document.querySelector("#button")

let text = document.querySelector("#text")

let cardimg = document.querySelectorAll(".card__image")

let card = document.querySelectorAll(".card__content")

let discription = document.querySelectorAll(".card__button")

let blanktext = document.querySelectorAll(".extrainfo")

console.log(cardimg[0])

for(let i = 0; i < cardimg.length; i++){
  cardimg[i].addEventListener("mouseover", function(event){
    card[i].style.backgroundColor = "#567b89"
    discription[i].style.backgroundColor = "#39546d"
  })

  cardimg[i].addEventListener("mouseout", function(event){
    card[i].style.backgroundColor = "#49466f"
    discription[i].style.backgroundColor = "#4a235c"
  })
}
// Once you click the button it displays a statistics about the loneliness specfics groups feel conducted by Harvard

button.addEventListener("click", function(event){

  text.innerHTML = "<a href = 'https://mcc.gse.harvard.edu/reports/loneliness-in-america'>Harvard's report</a> from Feburary 2021 suggests that 61% of young adults, 36% of mothers with children and 36 % of all americans feel loneliness "

  for(let i = 0; i < people.length; i++){
    people[i].src = "Untitled1_20240402000427.png"
  }

  
})


//I used a eventListener inside of afor loop becuase I wanted multiple events for multiple items 


//More ifno about all the images on the page 


for(let i = 0; i < discription.length; i++){

discription[i].addEventListener("mouseover", function(event){

  if(i == 0){
     blanktext[i].textContent = "The photo on the left is called Nighthawks by Edward Hopper. I picked it because it encapsulates what loneliness is. When you see the whole photo, there are 4 people in the resteraunt and the person from the left is distant from the rest emotionally and physically  "
  }

  if(i == 1){
     blanktext[i].textContent = 'In "Eleanor Rigby" by The Beatles in 1966, the main theme is loneliness demonstrated by the two characters Eleanor Rigby and Father McKenzie.'
  }

  if(i == 2){
     blanktext[i].textContent = 
   '    "Taxi Driver," directed by Martin Scorsese and released in 1976, portrays loneliness through its protagonist, Travis Bickle who is unable to connect with other people. I picked this because of a YouTube anaysis on this movie and how it demonstrates that loneliness can destroy Your Mind'
  }

  
})

//reverting the text back to blank when the mouse is out

discription[i].addEventListener("mouseout", function(event){

    if(i == 0){
       blanktext[i].textContent = ""
    }

    if(i == 1){
       blanktext[i].textContent = ""
    }

    if(i == 2){
     blanktext[i].textContent = ""
    }

  })

}
