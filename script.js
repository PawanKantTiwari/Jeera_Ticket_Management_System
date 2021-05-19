let filtersDiv = document.querySelectorAll(".filters-div div");
let lower = document.querySelector(".lower");

//creating an object
let FilterList = [{name : "red" , color: "red"},
                  {name : "yellow" , color: "yellow"},
                  {name : "green" , color: "green"},
                  {name : "black", color: "black"},
                 ];

for(let i = 0; i<filtersDiv.length; i++)
{
    filtersDiv[i].addEventListener("click", cb);
}

function cb(e){
    let clickedFilter = e.target.classList[0];
    for(let j = 0; j< FilterList.length; j++){
        if(FilterList[j].name == clickedFilter)
            lowerBackgroundColor = FilterList[j].color; 
    lower.style.background = lowerBackgroundColor;
    }
}