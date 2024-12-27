let name = localStorage.getItem ('name');
let number = localStorage.getItem('number');
let email = localStorage.getItem('email');
let saves = JSON.parse(localStorage.getItem('cars'));
let order = JSON.parse(localStorage.getItem('order'));
let saveHtml = "";

function saveItems() {
    if (Array.isArray(saves) && saves.length > 0) {
        saves = saves.filter(car => car.status === 'true');
        saves.forEach(car => {
        saveHtml += `
        <div class="flex flex-col flex-wrap gap-2 justify-evenly items-center bg-blue2 w-72 h-auto border-2 border-gray-500 rounded-md p-4">
        <img class="w-64 h-64 border-2 border-gray-600 rounded-full" src="${car.image}">
        <details class="px-2">
        <summary class="text-gray-400">
        details
        </summary>
        <p>
        <div class="flex flex-row gap-4">
        <h2 class="text-gray-300 font-bold text-md">${car.name}</h2>
        <p class="text-gray-300 text-md">$${car.price}</p>
        </div>
        <p class="text-gray-300 text-sm text-wrap">${car.description}</p>
        </p>
        </details>
        </div>`
        });
    } 
    else {
        saveHtml = `<div class="text-sm text-red-700">Nothing is saved yet</div>`;
    }
    document.querySelector('.saveList').innerHTML = saveHtml; 
}
let orderHtml = "";

function orderItems() {
    if (order) {
        orderHtml = `
        <div class="flex flex-row max-sm:flex-col bg-blue2 border-2 border-gray-500 justify-center items-center rounded-md">
        <img class="w-72 h-70 border-2 border-gray-600 rounded-sm" src="${order.image}">
        <div class="flex w-fill flex-col gap-2 p-6 max-sm:p-10">
        <h2 class=" text-gray-300 font-bold text-2xl mb-2">${order.name} ${order.color}</h2>
                <h2 class="text-gray-300 text-xl mb-2">${order.model} ${order.year}</h2>
                <p class="text-gray-300 text-sm text-wrap">${order.description}</p>
                <p class="text-red-500 text-md mt-2">$${order.price}</p>
        </div>
        `
    } 
    else {
        orderHtml = `<h1 class="text-sm text-red-700">Sorry! No order found yet</h1>`;
    }
    document.querySelector('.orderList').innerHTML = orderHtml; 
}

let profile = document.querySelector('.profile');
let register = localStorage.getItem('register');
let profileHtml = '';

function user(){
if(register === 'true'){
    profileHtml = `
    <div class="rounded-md text-blue0 bg-gray-200 px-10 py-8 w-full flex flex-col gap-4 h-auto">
        <h2 class="pl-2 text-xl border-b-2 border-b-blue0 bg-gray-300">${name}</h2>
        <h2 class="pl-2 text-xl border-b-2 border-b-blue0 bg-gray-300">${number}</h2>
        <h2 class="pl-2 text-xl border-b-2 border-b-blue0 bg-gray-300">${email}</h2>
    <div>
        <h2 class="pl-2 text-xl border-b-2 border-b-blue0 bg-gray-300">Your order</h2>
        <div class="orderList"></div>
    </div>
    <div>
        <h2 class="text-xl pl-2 border-b-2 border-b-blue0 bg-gray-300">Save Items</h2>
        <div class="saveList flex flex-row flex-wrap items-center gap-2 justify-evenly mt-2">
        </div>
    </div>
       <button class="cancelBtn px-6 py-2 text-gray-200 bg-blue0 text-lg rounded-md border-2 border-gray-200 hover:bg-red-700">Delete account</button>
    </div>
    `
}else{
    profileHtml = `<h2 class="text-2xl text-red-600">User removed Successfully.</h2>`;
}
profile.innerHTML = profileHtml;
};

user();

if(register === 'true'){
let deleteAccount = document.querySelector('.cancelBtn');
deleteAccount.addEventListener('click', ()=>{
    localStorage.setItem('register', false);
    user(); 
    location.reload()
    window.location.href = 'explore.html';
})
saveItems();
orderItems();
}else{
    profile.innerHTML = `<h2 class="text-2xl text-red-600">User does not exist.</h2>`;
}



