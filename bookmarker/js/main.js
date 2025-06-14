
var siteName = document.getElementById("site");
var siteUrl = document.getElementById("url");
var webName = document.getElementById("webName");
var tbody = document.getElementById("tbody");


var bookmarkList = [] ;


function add(){

   var booklist = {
    name : siteName.value,
    url : siteUrl.value 
} 
 bookmarkList.push(booklist)
   console.log(bookmarkList)
   display(bookmarkList)
   
};



function display(bookarray){
    var cartoona = ""

    for(var i = 0 ; i < bookmarkList.length ; i++){
        cartoona += `
         <tr>
                        <td>${i+1}</td>
                        <td id="webName">${bookarray[i].name}</td>
                        <td>

                        <a href="${bookarray[i].url}">
                            <button class="vis btn">
                                <i class="fa-solid fa-eye"></i> Visit
                            </button>
                        </a>
                        </td>
                        <td>
                        
                            <button class="del btn" onclick="del(${i})">
                               <i class="fa-solid fa-trash"></i> Delete
                            </button>

                        </td>
                    </tr>
        `
    }
    tbody.innerHTML = cartoona;
    
}



function del(index){
    bookmarkList.splice(index , 1);
    console.log(bookmarkList)
    display(bookmarkList)
    
}





