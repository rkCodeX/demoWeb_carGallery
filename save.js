document.addEventListener('DOMContentLoaded', () => {
    let savedItems = JSON.parse(localStorage.getItem('savedItems')) || [];
    let cartHtml = [];
  
    savedItems.forEach((car) => {
        cartHtml += `
        <div class="bg-gray-300 w-1/2 border-2 border-black rounded-md flex flex-row shadow-md shadow-gray-300">
            <img class="w-2/4 rounded-md" src="${car.carImg}" alt="">
            <div class="w-2/4 p-4">
                <h2 class="text-gray-900 font-bold text-2xl mb-2">${car.carName} ${car.carColor}</h2>
                <h2 class="text-gray-800 text-xl mb-2">${car.carModel} ${car.carYear}</h2>
                <p class="text-gray-500 text-sm text-wrap">${car.carDescription}</p>
                <p class="text-gray-600 text-md mt-2">$${car.carPrice}</p>
                <button class="text-blue-800 mr-2 my-2 hover:text-red-700">remove</button>
                <button class="text-blue-800 m-2 hover:text-red-700">order</button>
            </div> 
        </div>`;
    });

    const saveCartElement = document.querySelector(".saveCart");
    if (saveCartElement) {
        saveCartElement.innerHTML = cartHtml;
    } else {
        console.error('Element with class "saveCart" not found.');
    }
});