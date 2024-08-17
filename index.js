// display popup and overlay
function display(){
    let overlaybox=document.getElementById("overlay")
    let popupbox=document.getElementById("popup")
    overlaybox.style.display="block"
    popupbox.style.display="block"
}

//  cancel overlay and popup
function cancel(event){
    let overlaybox=document.getElementById("overlay")
    let popupbox=document.getElementById("popup")
      event.preventDefault()
     overlaybox.style.display="none"
     popupbox.style.display="none"
}


function add(event){
    event.preventDefault()
    let container=document.getElementById("container")
    let bname=document.getElementById("book")
    let aname=document.getElementById("author")
    let des=document.getElementById("description")
    let overlaybox=document.getElementById("overlay")
    let popupbox=document.getElementById("popup")
    let datetime=new Date()
    let hr=datetime.getHours()
    let mins=datetime.getMinutes()
    let secs=datetime.getSeconds()
   
    // creating element
        let div=document. createElement("div") 
        div.setAttribute("id","notes")
        div.innerHTML=`<h2>${bname.value}</h2> <span id="hours">${hr}</span> <span>${":"} </span> <span id="mins">${mins}</span> <span> ${":"} </span> <span id="secs">${secs}</span>  <h5>${aname.value}</h5> <p>${des.value}</p> <button id="del" onclick="del(event)">Delete </button>`
      
         container.append(div)

         //  to reset the form
     
         document.getElementById("form").reset() 
         overlaybox.style.display="none"
         popupbox.style.display="none"
     
}
        function del(event){
        
                event.target.parentElement.remove()
        }


    
   

 

