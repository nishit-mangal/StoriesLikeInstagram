var stories = document.querySelector(".Stories");
var openStoty = document.querySelector(".OpenStory");
var data = [
    {
        img:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9kZWx8ZW58MHx8MHx8fDA%3D"
    },
    {
        img:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9kZWx8ZW58MHx8MHx8fDA%3D"
    },
    {
        img:"https://images.unsplash.com/photo-1488161628813-04466f872be2?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vZGVsfGVufDB8fDB8fHww"
    },
    {
        img:"https://images.unsplash.com/photo-1564485377539-4af72d1f6a2f?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vZGVsfGVufDB8fDB8fHww"
    },
    {
        img:"https://images.unsplash.com/photo-1513379733131-47fc74b45fc7?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1vZGVsfGVufDB8fDB8fHww"
    },
]
var newHtml = "";
data.forEach((elem, idx)=>{
    newHtml+=`<div class="Story">
                <img id="${idx}" src="${elem.img}" alt="">
                </div>`
})
stories.innerHTML=newHtml;

// var story = document.querySelectorAll(".Story")
// var imageToOpen=`<img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9kZWx8ZW58MHx8MHx8fDA%3D" alt="Image">`;
// story.forEach((ele)=>{
//     ele.addEventListener("click", function(dets){
//         imageToOpen = `<img src="${data[dets.target.id].img}" alt="Image">`
//         openStoty.innerHTML = imageToOpen;
//     })
//     ele.addEventListener("mouseenter",function(){
//         ele.style.cursor = "pointer";
//     })
// })
// openStoty.innerHTML = imageToOpen;

stories.addEventListener("click", function(dets){
    console.log("ids", dets.target.id);
    openStoty.style.display = "block";
    openStoty.style.backgroundImage = `url(${data[dets.target.id].img})`;
    setTimeout(() => {
        openStoty.style.display='none'
    }, 3000);
})