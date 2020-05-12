function changeclass(){
    let sitenav = document.getElementById('site-nav');
        sitenav.classList.toggle('site-nav-open');
    let menuOpen = document.getElementById('menu-toggle');
        menuOpen.classList.toggle('menu-open');

}
 




// grab an element
var myElement = document.querySelector("header");
// construct an instance of Headroom, passing the element
var headroom  = new Headroom(myElement);
// initialise
headroom.init(); 


//END HEADROOM




//API BEHANCE


fetch("http://behance.net/v2/projects/")

.then(response => response.json())
.then(data => console.log(data)
    //{
   //let element = document.getElementById('exam')
  // element.innerHTML = `
    
   // <img src='${data.sprites.front_default}'/>
  // `;
   //}
)

 