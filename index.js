const ramens = [
    { id: 1, name: "Gyukotsu Ramen", restaurant: "Ichiran", image: "gyukotsu.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Kojiro Ramen", restaurant: "Menya", image: "kojiro.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Naruto Ramen", restaurant: "Ramen-ya", image: "naruto.jpg", rating: 4, comment: "Colorful!" },
{ id: 4, name: "Nirvana Ramen", restaurant: "Fangu", image: "nirvana.jpg", rating: 3, comment: "Tasty!" },
    { id: 5, name: "Shoyu Ramen", restaurant: "Shanghai", image: "shoyu.jpg", rating: 4, comment: "Nutritious!" },
];  
// Function to display ramen images in the menu
function displayRamens() {
    const menuDiv = document.getElementById("ramen-menu");
    menuDiv.innerHTML = ""; // Clear existing images to prevent duplications

ramens.forEach( ramen => {
        let img = document.createElement("img");

        img.src = ramen.image;

        img.alt = ramen.name;
        img.style.width = "100px";
        img.style.borderRadius = "10px";
    img.style.height = "100px";
        img.style.cursor = "pointer";
        img.style.transition = "transform 0.2s";
        
        img.addEventListener("click", () =>
handleClick(ramen));

        menuDiv.appendChild(img);
    });
};
function handleClick(ramen) {
    const detailDiv = document.getElementById("ramen-detail");

    detailDiv.innerHTML = `
        <div class="ramen-info">
            <img src="${ramen.image}"  class="ramen-display" />

<h2>${ramen.name}</h2>
            <h3>${ramen.restaurant}</h3>
            <p><strong>Rating:</strong> ${ramen.rating}</p>
            <p><strong>Comment:</strong> ${ramen.comment}</p>
        </div>`

const inputs = document.querySelectorAll(".input");
//  the .value method used to grab 
    inputs[0].value = ramen.name;

    inputs[1].value = ramen.restaurant;

    inputs[2].value = ramen.image;

    inputs[3].value = ramen.rating;

    inputs[4].value = ramen.comment;
};  // to make sure updating of the details
function addRamen() {
    const inputs = document.querySelectorAll(".input");

    const newRamen = {
id: ramens.length + 1,

        name: inputs[0].value,

        restaurant: inputs[1].value,

        image: inputs[2].value,

        rating: inputs[3].value,

        comment: inputs[4].value
    };

    
    ramens.push(newRamen);
displayRamens();
};
function deleteRamen() {
    let inputs = document.querySelectorAll(".input");
    let ramenToDelete = inputs[0].value;

    let index = ramens.findIndex(ramen => ramen.name === ramenToDelete);

    if (index!== -1) {
        ramens.splice(index, 1);
        displayRamens();
}
document.getElementById("ramen-detail").innerHTML = "";
};

function updateRamen() {
    const inputs = document.querySelectorAll(".input");
    const ramenUpdating = ramens.find(
        ramen => ramen.name === inputs[0].value);
    if (ramenUpdating) {
        ramenUpdating.restaurant = inputs[1].value;

        ramenUpdating.image = inputs[2].value;
ramenUpdating.rating = inputs[3].value;
        ramenUpdating.comment = inputs[4].value;
    }
    displayRamens();
};
document.addEventListener("DOMContentLoaded", () => {
    displayRamens();

    document.getElementById("add-btn").addEventListener("click", addRamen);

    document.getElementById("delete-btn").addEventListener("click", deleteRamen);

    document.getElementById("update-btn").addEventListener("click", updateRamen);
});
const click = document.getElementById('delete-btn')
click.style.alignSelf = "center";
click.style.borderRadius = "40px";
click.style.justifyContent = "center";
click.style.marginLeft = "2%";
click.style.width = "250px";
click.style.height = "55px";
click.style.color = "white";
click.style.backgroundColor = "black";