let info = document.querySelectorAll(".info")

let h3 = document.querySelectorAll("h3")

let h4 = document.querySelectorAll("h4")

let p = document.querySelectorAll("p")


//There was reason why I decide to style the text and background here. It's becuase the styling part in html had a different structure so I just styled it here to be easier since I already Selected the elements 

info[0].style = "--c0: #7fc5ae; --c1: #7fc5ae; "
h3[0].style.color = "#7fc5ae"
h4[0].style.color = "#7fc5ae"
info[1].style = "--c0: #ab6ee5; --c1: #9937ee; "
h3[1].style.color = "#ab6ee5"
h4[1].style.color = "#ab6ee5"
info[2].style = "--c0: #ff0000; --c1: #ff0000;"
h3[2].style.color = "#ff0000"
h4[2].style.color = "#ff0000"


//when the mouse is over the articles it changes the text color and background into a darker color and once the mouse is out it changes to a more vibrant color

for(let i = 0; i < info.length; i++){

  info[i].addEventListener("mouseover", function(event){
  info[i].style = "--c0: #667389; --c1: #667389; --idx: 2"
  h3[i].style.color = "#567b89"
  h4[i].style.color = "#638d96"
})

}

for(let i = 0; i < info.length; i++){

if(i == 0) {
  info[0].addEventListener("mouseout", function(event){
  info[0].style = "--c0: #7fc5ae; --c1: #7fc5ae; "
  h3[0].style.color = "#7fc5ae"
  h4[0].style.color = "#7fc5ae"
})
}

if(i == 1) {
  info[1].addEventListener("mouseout", function(event){
  info[1].style = "--c0: #ab6ee5; --c1: #9937ee; "
  h3[1].style.color = "#ab6ee5"
  h4[1].style.color = "#ab6ee5"
})
  }

if(i == 2) {
  info[2].addEventListener("mouseout", function(event){
  info[2].style = "--c0: #ff0000; --c1: #ff0000;"
  h3[2].style.color = "#ff0000"
  h4[2].style.color = "#ff0000"
})
}
  
}