let orderCar = JSON.parse(localStorage.getItem('order'));
let hidden = true;
let register = localStorage.getItem('register');
let orderHtml = '';
if (orderCar && register === 'true'){
    hidden = false;
    orderHtml += ` <div class="flex max-xl:flex-col max-sm:flex-col max-lg:flex-row flex-row w-auto h-auto border-2 border-gray-500 rounded-md bg-slate-400">
    <img class="w-96 max-sm:w-72 h-96 rounded-md" src="${orderCar.image}" alt="${orderCar.name}">
    <div class="w-96 max-sm:w-72 h-96 flex flex-col gap-2 px-6 py-4 bg-slate-400">
    <h1 class="text-3xl text-blue0 font-bold">${orderCar.name}</h1>
    <h1 class="text-xl text-blue0 font-bold">${orderCar.model}</h1>
    <h1 class="text-xl text-blue0 font-bold">$${orderCar.price}</h1>
    <p class="text-md text-blue0">$${orderCar.description}</p>
    <button class="cancelBtn text-2xl mt-4 text-red-600">Cancel order</button>   
    </div>
    </div>`
} else {
    orderHtml = `<p class="text-red-500 text-2xl p-20">No cars ordered yet.</p>`;
}

document.querySelector('.orderItem').innerHTML = orderHtml;

document.querySelector('.cancelBtn').addEventListener('click', function(event) {
    localStorage.removeItem('order');
    hidden = true;
    window.location.reload();
    window.location.href = 'explore.html';
});

if(hidden){
document.querySelector('.progress').style.display = 'none';
}else{
    document.querySelector('.progress').style.display = 'block';
}