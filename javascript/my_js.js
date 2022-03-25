let images = ["image-product-1.jpg", "image-product-2.jpg",
 "image-product-3.jpg", "image-product-4.jpg"]

/* normal preview  start*/

 let thumbnails = document.querySelectorAll(".thumbnail img")
 let thumbnail_holder = document.querySelectorAll(".thumbnail")

 let product_img = document.querySelector(".product-image-holder img")

 console.log(thumbnails);

 thumbnails.forEach(thumbnail =>{
    thumbnail.addEventListener('click',(e)=>{
        thumbnails.forEach(t =>{
            t.parentElement.classList.remove("thumbnail-click")
        })
         let clicked_image = thumbnail.src.replace("-thumbnail","")
         product_img.src = clicked_image
         thumbnail.parentElement.classList.add("thumbnail-click")
     })
     
 })

 /* normal preview  end*/

/* modal click start */
 let modal_thumbnails = document.querySelectorAll(".modal .thumbnail img")
 let modal_thumbnail_holder = document.querySelectorAll(".modal .thumbnail")

 let modal_product_img = document.querySelector(".modal .product-image-holder img")

 console.log(thumbnails);

 modal_thumbnails.forEach(modal_thumbnail =>{
    modal_thumbnail.addEventListener('click',(e)=>{
        thumbnails.forEach(t =>{
            t.parentElement.classList.remove("thumbnail-click")
        })
         let clicked_image = modal_thumbnail.src.replace("-thumbnail","")
         modal_product_img.src = clicked_image
         modal_thumbnail.parentElement.classList.add("thumbnail-click")
     })
     
 })

 let modal = document.querySelector(".modal")
 let close_modal = document.querySelector(".modal .close")
 let modal_content = document.querySelector(".modal .modal-content")

 product_img.addEventListener("click",()=>{
    modal.classList.add("modal_open")
 })

 close_modal.addEventListener("click",(e)=>{
     modal.classList.remove("modal_open")

 })
 window.addEventListener("click",(e)=>{
     if(e.target == modal){
        modal.classList.remove("modal_open")
     }

 })

/* modal click end */
 