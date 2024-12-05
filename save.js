import { saveItems, number } from '/explore.js'

let cartHtml = '';

saveItems.forEach((car) => {
    cartHtml += `
    <div class="bg-gray-300 w-1/2 border-2 border-black rounded-md flex flex-row shadow-md shadow-gray-300">
        <img class="w-2/4 rounded-md" src="${car.image}" alt="">
        <div class="w-2/4 p-4">
            <h2 class="text-gray-900 font-bold text-2xl mb-2">${car.name} ${car.color}</h2>
            <h2 class="text-gray-800 text-xl mb-2">${car.model} ${car.year}</h2>
            <p class="text-gray-500 text-sm text-wrap">${car.description}</p>
            <p class="text-gray-600 text-md mt-2">$${car.price}</p>
            <button class="text-blue-800 mr-2 my-2 hover:text-red-700">remove</button>
            <button class="text-blue-800 m-2 hover:text-red-700">order</button>
        </div> 
    </div>`;
});

document.querySelector(".saveCart").innerHTML = cartHtml;