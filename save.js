import { cars } from './explore.js';
let carsSave = JSON.parse(localStorage.getItem('cars'));

function addHtml(carsSave) {
    let cartHtml = "";
    if (Array.isArray(carsSave) && carsSave.length > 0) {
        let saveCars = carsSave.filter(car => car.status === 'true');
        saveCars.forEach((car) => {
            cartHtml += `
        <div class="saveCar bg-gray-300 max-lg:w-full max-sm:flex-col w-1/2 border-2 border-black rounded-md flex flex-row shadow-md shadow-gray-300 mb-4">
            <img class="w-2/4 max-sm:w-screen rounded-md" src="${car.image}" alt="${car.name}">
            <div class="w-2/4 max-sm:w-screen p-4">
                <h2 class="text-gray-900 font-bold text-2xl mb-2">${car.name} ${car.color}</h2>
                <h2 class="text-gray-800 text-xl mb-2">${car.model} ${car.year}</h2>
                <p class="text-gray-500 text-sm text-wrap">${car.description}</p>
                <p class="text-gray-600 text-md mt-2">$${car.price}</p>
                <button class="removeBtn text-blue-800 mr-2 my-2 hover:text-red-700" data-id="${car.id}">remove</button>
                <button class="orderBtn text-blue-800 m-2 hover:text-red-700">order</button>
            </div> 
        </div>`;
        });
    } else {
        cartHtml = `<p class="text-red-500 text-2xl p-20">No cars available in cart.</p>`;
    }

    const saveCartElement = document.querySelector('.saveCart');
    if (saveCartElement) {
        saveCartElement.innerHTML = cartHtml;
    } else {
        console.error("Element with class 'saveCart' not found.");
    }
};

function updated(){
    const carElement =  document.querySelector(".cars");
    if(carElement){
    carElement.addEventListener("click", function(event) {
            if (event.target.closest('.removeBtn')) {
                const btn = event.target.closest('.removeBtn');
                const carId = btn.getAttribute('data-id');
                const car = carsSave.find(car => car.id === carId);
                if (car) {
                    car.status = 'false';
                    localStorage.setItem('carsSave', JSON.stringify(carsSave));
                    console.log(carsSave)
                    addHtml(carsSave);
                }
            }
            else if (event.target.closest(".orderBtn")){
                alert("Order placed for " + event.target.closest('.bg-gray-300').querySelector('h2').innerText);
            };
    })
    }
    }

addHtml(carsSave);
updated()

