//fetching the api 
async function fetchApi(search) {

  const p = await fetch(
    `https://www.superheroapi.com/api.php/2520644321416359/search/${search}`
  );

   const response = await p.json();
   
//movie conatiner 
  let moviesContainer = document.getElementById("moviescontainer");
  for (let i = 0; i < response.results.length; i++) {
    console.log("moviesContainer", moviesContainer);
    let h1 = document.createElement("h1");
    let image = document.createElement("img");
    let favorite = document.createElement("button");
    favorite.textContent = "favorite";
    
     

    //function of favorite button 
    favorite.addEventListener('click',()=>{

           
           favorite.style.backgroundColor="red"
          
           let clonename=h1.cloneNode(true)
           let clonepic=image.cloneNode(true)

           favoritecontainer.appendChild(clonename)
           favoritecontainer.appendChild(clonepic)
           let deletebtn=document.createElement("button")
           
           deletebtn.innerHTML="Delete"
           favoritecontainer.appendChild(deletebtn)
           saveData()
             //delete button and function with 
           deletebtn.addEventListener("click",()=>{
            
            
            favoritecontainer.removeChild(clonename)
            favoritecontainer.removeChild(clonepic)
            favoritecontainer.removeChild(deletebtn)
           //saveData()
           
           })
           
           

    })
    

//image with title button 
    image.classList.add("imagelist");
    moviesContainer.appendChild(h1);
    moviesContainer.appendChild(image);
    moviesContainer.appendChild(favorite);
    h1.textContent = response.results[i].name;
    image.src = `${response.results[i].image.url}`;
    console.log(response.results[i]);
    
    
    
  }
}

// Search the name of the super-man
let search = document.getElementById("input");
let searchBtn = document.getElementById("searchBtn");
searchBtn.addEventListener("click", () => {
      console.log(search.value);
      fetchApi(search.value);
      
      
});

   //fetch data function 
function fetchData(data) {
  console.log("data", data.data.results);

  searchBtn.addEventListener("click", () => {
    
    fetchApi(e.target.value);
    
  });
}

function saveData(){
  localStorage.setItem('data',favoritecontainer.innerHTML);
}
// to show the task after refreshing 
function showTask(){
  favoritecontainer.innerHTML=localStorage.getItem("data");
}
showTask()
