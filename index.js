var toDoList = [ 
{value:"3 Litre Su İç",selected:false},
{value:"Ödevleri Yap",selected:false},
{value:"En Az 3 Saat Kodlama Yap",selected:false},
{value:"Yemek Yap",selected:false},
{value:"50 Sayfa Kitap Oku",selected:false},
]
var toDoListObject = document.getElementById("list")
function deleteElement(index){
    toDoList = toDoList.filter((element, i) => i!==index 
    )
    showElements()
}
function selectItem(index){
    toDoList = toDoList.map((element,i)=> {
        if(i===index){
            return{
                value:element.value, selected:!element.selected
            
            }
        }
        return element
    })
    showElements()
}
function showElements(){
    console.log(JSON.stringify(toDoList))
    toDoListObject.replaceChildren()
    toDoList.forEach (({value,selected}, index) => {
        let listItemContainer = document.createElement("li")
        let listItem = document.createElement("span")
        listItem.setAttribute("onclick", `selectItem(${index})`)     
        if(selected) listItemContainer.className = "checked"
        listItem.appendChild(document.createTextNode(value))
        var button = document.createElement("button")
        button.className = "close"
        button.setAttribute("data-dismiss","toast")
        button.setAttribute("aria-label", "Close")

        let iconSpan = document.createElement("span")
        iconSpan.setAttribute("aria-hidden", "true")
        iconSpan.setAttribute("onclick", `deleteElement(${index})`)
        let closeIcon = document.createTextNode("x")
        button.appendChild(closeIcon)
        iconSpan.appendChild(button)
        listItemContainer.appendChild(listItem)
        listItemContainer.appendChild(iconSpan)
        toDoListObject.appendChild(listItemContainer)
     
    
     })
}
    function newElement() {
        let yapilacakGorev = document.getElementById("task").value
        if(!yapilacakGorev) {
            alert("Listeye boş ekleme yapamazsınız!")
        }
        else{
            toDoList.push({value:yapilacakGorev, selected:false})
            showElements();
        }
       }
       

       showElements();