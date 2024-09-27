function Canvas(){
    document.querySelector(".canvas_hide").classList.toggle("canvas_show");
    document.querySelector(".backdrop").classList.toggle("backdropshow");
    document.querySelector("body").classList.toggle("body_scroll");
 }
 function canvas_right(){
    document.querySelector(".products_hide").classList.toggle("products_show");
 }
 function form(){
   document.querySelector(".backdrop_new").classList.toggle("visible");
   
   document.querySelector("body").classList.toggle("body_scroll");
}
setTimeout(form, 3000);


// name validation
function validatemail() {
   // let Pattern = /[a-z0-9]+@[a-z]+[.]+[a-z]+$/;
   let Pattern = /^[a-z 0-9]+@[gmail.com]$/;
   let Name = document.querySelectorAll("input")[2].value
            

            if(Pattern.test(Name) == false) {
                document.querySelector(".error").innerHTML = "Error"
            }else {
                document.querySelector(".done").innerHTML = "Done"
            }
}

function validatename() {
   let Pattern = /^[a-zA-Z\s-]+$/;
   let Name = document.querySelector("input").value

}