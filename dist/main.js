

var nav = document.querySelector("#nav");
var navItems = nav.children;
var currentUrl;

for (let i = 0; i < navItems.length; i++) {
    navItems[0].children[1].classList.remove("hidden");
    navItems[i].addEventListener("click", function(e){

        for (let j = 0; j < navItems.length; j++) {
            navItems[j].children[1].classList.add("hidden");
        }

        window.location.hash = e.currentTarget.hash;
        if(e.currentTarget.hash == window.location.hash){
            e.currentTarget.children[1].classList.remove("hidden");
        }else if(e.currentTarget.hash != window.location.hash){
            e.currentTarget.children[1].classList.add("hidden");
        }
})
};





// var nav = document.querySelector("#nav").children;
// var navItem = document.querySelectorAll(".nav-item");

// for (let i = 0; i < nav.length; i++) {
//     nav[i].addEventListener("click", ()=> {
//         for (let j = 0; j < nav.length; j++) {
//             nav[j].children[1].classList.add("hidden");
//         }
//         nav[i].children[1].classList.toggle("hidden");
//     })
// }
