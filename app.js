// dropdowns

// document.addEventListener("click" , function(e){

//     const isDropdown = e.target.matches("[data-dropdown-button]");

//     if(!isDropdown && e.target.closest("[data-dropdown]") != null) return;

//     if(isDropdown){
//         let currentDropdown = e.target.closest("[data-dropdown");
//         currentDropdown.classList.toggle("active");
//     }

//     document.querySelectorAll("[data-dropdown].active").forEach(dropdown =>{
//         if(dropdown === currentDropdown) return;
//         dropdown.classList.remove("active");
//     })

// })

// mouseover events

document.addEventListener("mouseover" , function(e){

    

    const isDropdown = e.target.matches("[data-dropdown-button]");

    if(!isDropdown && e.target.closest("[data-dropdown]") != null) return;
    
    let currentDropdown; 
    if(isDropdown){
        currentDropdown = e.target.closest("[data-dropdown");
        currentDropdown.classList.toggle("active");
    }

    document.querySelectorAll("[data-dropdown].active").forEach(dropdown =>{
        if(dropdown === currentDropdown) return;

        dropdown.classList.remove("active");
    })


})

// hamburger

const hamBtn = document.querySelector("#openButton");
const sideSlide = document.querySelector("#slide-ham");

hamBtn.addEventListener("click" , function(){
    sideSlide.classList.add("active");
});

const closeBtn = document.querySelector("#closeButton");

closeBtn.addEventListener("click" , function(){
    sideSlide.classList.remove("active");
})

// carousel

let currentSlideId = 1;

const sales = document.getElementById("slider");
const totalImages = sales.childElementCount;

function prev(){
    if(currentSlideId>1){
        currentSlideId--;
        showSlide();
    }
}

function next(){
    if(currentSlideId<totalImages){
        currentSlideId++;
        showSlide();
    }
}

function showSlide(){
    slides=sales.getElementsByTagName("li");

    for( let i=0 ; i<totalImages ; i++){
        const element = slides[i];
        if(currentSlideId===i+1){
            element.classList.remove("hidden");
        }else{
            element.classList.add("hidden");
        }
    }
}


// cards addtocart

function passvalues(item){
    var addItemId =0;
    addItemId +=1;
    var selectedItem = document.createElement("div");

    selectedItem.classList.add("borderColor" ,"flex" , "flex-row" , "my-5","mx-5" , "w-full" , "px-10","py-5", "space-x-10" , "justify-around");

    selectedItem.setAttribute("id" , addItemId);

    var img = document.createElement("img");
    img.classList.add("cardImage");
    img.setAttribute("src" , item.children[0].currentSrc );
    selectedItem.append(img);

    var title = document.createElement("div");
    title.classList.add("flex" , "flex-col" , "my-auto" );
    var nameOfItem = document.createElement("h1");
    nameOfItem.classList.add("font-bold")
    nameOfItem.innerText = item.children[1].innerText;
    title.append(nameOfItem);

    var label = document.createElement("p");
    label.innerText=item.children[2].innerText;
    title.append(label);
    
    var quantity = document.createElement("select");
    quantity.classList.add("border" , "mt-2" ,"w-8","border-black" , "rounded" , "bg-gray-100" , "hover:bg-gray-300");
    var option1 = document.createElement("option");
    option1.innerText=1;
    quantity.append(option1);

    var option2 = document.createElement("option");
    option2.innerText=2;
    quantity.append(option2);

    var option3 = document.createElement("option");
    option3.innerText=3;
    quantity.append(option3);

    var option4 = document.createElement("option");
    option4.innerText=4;
    quantity.append(option4);

    title.append(quantity);
    selectedItem.append(title);

    var price = document.createElement("div");
    price.classList.add( "flex" , "flex-col"  , "my-auto"  );
    var Heading = document.createElement("h1");
    Heading.classList.add("font-bold");
    Heading.innerText="Price";
    price.append(Heading);
    price.append(document.createElement("div").innerText=item.children[3].innerText);
    selectedItem.append(price);

    var buy = document.createElement("div");
    buy.classList.add("my-auto" );
    var buyNow = document.createElement("button");
    buyNow.classList.add("px-4" , "py-2" , "border" , "border-black" , "rounded" , "amberColor")
    buyNow.innerText="Proceed to Buy";
    buy.append(buyNow);
    selectedItem.append(buy);

    var cartItems = document.getElementById("trail");
    cartItems.append(selectedItem);
}

function showCart(){
    var cartSlide = document.getElementById("cartSlide");
    cartSlide.classList.remove("hidden");
}

function closeCart(){
    var cartSlide = document.getElementById("cartSlide");
    cartSlide.classList.add("hidden");
}



// cards scroll container

let scrollContainer = document.getElementById("scrollContainer");
let scrollMe = document.getElementById("scroll");
let cards = scrollMe.getElementsByTagName("li");

let elementsToShow = 6;

let sliderContainerWidth = scrollContainer.clientWidth;
let cardWidth = sliderContainerWidth/elementsToShow;
scrollMe.style.width=cards.length*cardWidth + "px";

scrollMe.style.transition="margin";
scrollMe.style.transitionDuration="1s";

for (let i =0; i<cards.length; i++ ){

    const element = cards[i];
    element.style.width = cardWidth+"px";
}

function previous(){
    if(+scrollMe.style.marginLeft.slice(0,-2) != -cardWidth*(cards.length-elementsToShow)){
        scrollMe.style.marginLeft = ((+scrollMe.style.marginLeft.slice(0,-2)) - cardWidth ) + "px";
    }
}

function nextCard(){
    if(+scrollMe.style.marginLeft.slice(0,-2) !=0 ){
        scrollMe.style.marginLeft = ((+scrollMe.style.marginLeft.slice(0,-2)) + cardWidth ) + "px";

    }
}

// women.html

function swapImage(image){
    const imageToShift = document.getElementById(image);
    const imageExisting = document.getElementById("mainImage");
    const source = imageExisting.currentSrc;
    imageExisting.setAttribute("src" , image.currentSrc );
    imageToShift.setAttribute("src" , source );    
}

