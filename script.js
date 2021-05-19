let filtersDiv = document.querySelectorAll(".filters-div div");
let add = document.querySelector(".add");
let lower = document.querySelector(".lower");

//creating a list of object
let FilterList = [{name : "red" , color: "red"},
                  {name : "yellow" , color: "#f9ca24"},
                  {name : "green" , color: "green"},
                  {name : "black", color: "black"},
                 ];

for(let i = 0; i<filtersDiv.length; i++)
{
    filtersDiv[i].addEventListener("click", changeBgrndOnFilterClick);
}
//cb function
function changeBgrndOnFilterClick(e){
    let clickedFilter = e.target.classList[0];
    for(let j = 0; j< FilterList.length; j++){
        if(FilterList[j].name == clickedFilter)
            lowerBackgroundColor = FilterList[j].color; 
    lower.style.background = lowerBackgroundColor;
    }
}

// adding new modal on the click on add button
add.addEventListener("click",openNewModal);
function openNewModal(){
    let isModalPresent = document.querySelector(".modal");
    if(isModalPresent)
    {
        return;
    }
    let newModal = document.createElement('div');
    newModal.classList.add('modal');
    newModal.innerHTML = ` <div class="modal-msg" data-typed = "false" contenteditable="true">
    Enter Your Task
    </div>
    <div class="modal-filters-div">
        <div class="red modal-filter"></div>
        <div class="yellow modal-filter"></div>
        <div class="green modal-filter"></div>
        <div class="black modal-filter active-filter"></div>
        </div>`;
        lower.append(newModal);
        let ModalMsgBox = newModal.querySelector(".modal-msg")
        ModalMsgBox.addEventListener("click",clearText);
        ModalMsgBox.addEventListener("keypress",ModalToTicketOnEnter);

    }
//cb function To clear the text of ModalMsgBox 
function clearText(e){
    if(e.target.getAttribute("data-typed") == "true"){
        return;
    }
    e.target.innerHTML = "";
    e.target.setAttribute("data-typed","true");
}

//cb function to Create a new Ticket on clicking "Enter" in Modalmsg
function ModalToTicketOnEnter(e){
    if(e.key == "Enter"){
        // e.target.parenNode.remove();
        let newTicket = document.createElement("div");
        newTicket.classList.add("ticket");
        newTicket.innerHTML = `<div class="ticket-color"></div>
        <div class="ticket-id">abc123</div>
        <div class="task" contenteditable="true">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, autem eaque reiciendis non velit temporibus culpa laborum, neque fugit sed harum vel nam vitae blanditiis possimus libero sint nisi saepe!</div>`
        lower.append(newTicket);
        e.target.parentNode.remove();
    }
}

