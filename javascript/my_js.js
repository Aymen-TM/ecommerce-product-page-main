let images = ["image-product-1.jpg", "image-product-2.jpg",
    "image-product-3.jpg", "image-product-4.jpg"
]

/* normal preview  start*/

let thumbnails = document.querySelectorAll(".product-page .thumbnail img")
let thumbnail_holder = document.querySelectorAll(".product-page .thumbnail")

let product_img = document.querySelector(".product-page .product-image-holder img")

console.log(thumbnails);

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', (e) => {
        thumbnails.forEach(t => {
            t.parentElement.classList.remove("thumbnail-click")
        })
        let clicked_image = thumbnail.src.replace("-thumbnail", "")
        product_img.src = clicked_image
        thumbnail.parentElement.classList.add("thumbnail-click")
    })

})

/* normal preview  end*/

/* modal click start */
let modal_thumbnails = document.querySelectorAll(".modal .modal-content .thumbnail img")
let modal_thumbnail_holder = document.querySelectorAll(".modal .modal-content .thumbnail")
let modal_product_img = document.querySelector(".modal .modal-content .product-image-holder img")

let slideIndex = 0
thumbnails.item(slideIndex).parentElement.classList.add("thumbnail-click")
modal_thumbnails.item(slideIndex).parentElement.classList.add("thumbnail-click")


modal_thumbnails.forEach((modal_thumbnail, index) => {
    modal_thumbnail.addEventListener('click', (e) => {
        modal_thumbnails.forEach((t) => {
            t.parentElement.classList.remove("thumbnail-click")
        })
        let clicked_image = modal_thumbnail.src.replace("-thumbnail", "")
        modal_product_img.src = clicked_image
        modal_thumbnail.parentElement.classList.add("thumbnail-click")
        slideIndex = index
    })

})

let modal = document.querySelector(".modal")
let close_modal = document.querySelector(".modal .close")
let modal_content = document.querySelector(".modal .modal-content")

product_img.addEventListener("click", () => {
    modal.classList.add("modal_open")
})

close_modal.addEventListener("click", (e) => {
    modal.classList.remove("modal_open")

})
/* modal click end */

/* slider controller start */
let left_arrow = document.querySelector(".left-arrow")
let right_arrow = document.querySelector(".right-arrow")


const nextSlide = () => {
    // it will update the slideIndex on the basis of the images.length as it gets greater than images.length, this will initialize to the 1
    modal_thumbnails.forEach(t => {
        t.parentElement.classList.remove("thumbnail-click")
    })
    if (slideIndex !== thumbnails.length - 1) {
        ++slideIndex;
        modal_product_img.src = modal_thumbnails.item(slideIndex).src.replace("-thumbnail", "")

        modal_thumbnails.item(slideIndex).parentElement.classList.add("thumbnail-click")

    } else if (slideIndex === thumbnails.length - 1) {
        slideIndex = 0;
        modal_product_img.src = modal_thumbnails.item(slideIndex).src.replace("-thumbnail", "")
        modal_thumbnails.item(slideIndex).parentElement.classList.add("thumbnail-click")
    }
}

right_arrow.addEventListener("click", nextSlide)



const prevSlide = () => {
    // It will check if the slideIndex is less equal to 1 then change it to the images.legnth, it will enable infinite scrolling

    modal_thumbnails.forEach(t => {
        t.parentElement.classList.remove("thumbnail-click")
    })
    if (slideIndex !== 0) {
        --slideIndex;
        modal_product_img.src = modal_thumbnails.item(slideIndex).src.replace("-thumbnail", "")

        modal_thumbnails.item(slideIndex).parentElement.classList.add("thumbnail-click")
    } else if (slideIndex === 0) {
        slideIndex = thumbnails.length - 1;
        modal_product_img.src = thumbnails.item(slideIndex).src.replace("-thumbnail", "")

        modal_thumbnails.item(slideIndex).parentElement.classList.add("thumbnail-click")
    }
};

left_arrow.addEventListener("click", prevSlide)



/* slider controller end */


/* cart event start */
let cart_btn = document.querySelector(".header-right .header-icon")
let cart = document.querySelector(".cart")




cart_btn.addEventListener("click", function (e) {
    cart.classList.toggle("cart-show")
    e.stopPropagation()
    console.log(cart);
})
/* cart event end */


/* product quantity start */
let plus = document.querySelector(".plus")
let minus = document.querySelector(".minus")
let quantity = document.querySelector(".quantity")
let number = 0

const increase = () => {
    number++
    quantity.value = number
}
const decrease = () => {
    if (number == 0) {
        number = 0
    } else {
        number--
    }
    quantity.value = number
}

plus.addEventListener('click', increase)
minus.addEventListener('click', decrease)


/* product quantity end */


/* drawer event start */
let menu = document.querySelector(".header-left .menu")
let drawer_container = document.querySelector(".drawer-container")
let close_drawer = document.querySelector(".close-drawer")

 menu.addEventListener("click",function (e) { 
    drawer_container.classList.toggle("drawer-open")
    console.log("test");
 })
 close_drawer.addEventListener("click",function (e) { 
    drawer_container.classList.remove("drawer-open")
  })
/* drawer event end */


window.addEventListener("click", (e) => {
    if (e.target == modal) {
        modal.classList.remove("modal_open")
    }
    if(e.target ==drawer_container){
        drawer_container.classList.remove('drawer-open')
    }
    


})

let cart_body = document.querySelector(".cart-body")
let add_to_chart_btn = document.querySelector(".add-button")
cart_body.innerHTML="<p class='empty' >Your cart is empty</p>"
add_to_chart_btn.addEventListener("click",()=>{
    if(quantity.value ==0){
        cart_body.innerHTML="<p class='empty' >Your cart is empty</p>"
    }else{
        cart_body.innerHTML = `<div>
    <img src="images/image-product-1-thumbnail.jpg"  alt="thumbnail">
    </div>
    <p>Autumn Limited Edition $125.00 x ${quantity.value} <span style="font-weight: bold; color: black;">$ ${quantity.value*125.00}</span></p>
    <div class="trash">
    <i class="fa-solid fa-trash"></i>
    </div>`
    }
})



