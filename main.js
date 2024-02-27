
let myLeads=[]
let oldLeads=[]
const inputEL=document.getElementById('input-el')
const inputBtn=document.getElementById('input-btn')
const ulEL=document.getElementById('ul-el')
const deleteBtn = document.getElementById("delete-btn")
const saveTab =document.getElementById("save-tab")
const leadFromLocalStorage= JSON.parse(localStorage.getItem("myLeads"))

if(leadFromLocalStorage){
    myLeads=leadFromLocalStorage
    render(myLeads)
}
saveTab.addEventListener('click',function(){
    chrome.tabs.query({active:true, currentWindow:true} , function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem('myleads',JSON.stringify(myLeads))
        render(myLeads)
    })  
})
function render(leade){
    let listItem=""
for(let i=0;i<leade.length;i++){
    listItem=`<li>
                <a href='${leade[i]}' target='_blank' >
                ${leade[i]}
                </a>
             </li>`
    ulEL.innerHTML +=listItem
}
}

deleteBtn.addEventListener('click',function(){
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

inputBtn.addEventListener('click',function() {
    
    myLeads.push(inputEL.value)
    inputEL.value=""
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    render(myLeads)  
})


