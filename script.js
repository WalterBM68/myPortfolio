function myPageFunction(){
    let my_list = document.getElementById("list");
    if(my_list.style.display === "block"){
        my_list.style.display = "none";
    }else{
        my_list.style.display = "block";
    }
}