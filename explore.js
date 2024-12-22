let view = false;

function showNav(){
   let box = document.querySelector(".drop");
   let Nav = document.querySelector(".btn");
   if (view) {
      view = false;
      Nav.innerHTML = `<i class="fas fa-bars fa-2xl" style="line-height: 1; color: #dedede;"></i>`
      box.style.display = "none";
   } else {
      view = true;
      Nav.innerHTML = `<i class="fa-solid fa-xmark fa-2xl" style="color: #dedede;"></i>`;
      box.style.display = "block";
   }
}

window.showNav = showNav;

let cars = [
   {
      status: 'false',
      id: '01',
      name: 'Car 1',
      color: 'black',
      model: 'Model 1',
      year: 2021,
      image: './img/car1.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, mauris vel consectetur convallis, metus ex vulputate ex, at aliquet velit nunc ac eros.',
      price: 15000
   }, {
      status: 'false',
      id: '02',
      name: 'Car 2',
      color: 'white',
      model: 'Model 2',
      year: 2022,
      image: './img/car2.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, mauris vel consectetur convallis, metus ex vulputate ex, at aliquet velit nunc ac eros.',
      price: 20000
   }, {
      status: 'false',
      id: '03',
      name: 'Car 3',
      color: 'blue',
      model: 'Model 3',
      year: 2023,
      image: './img/car3.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, mauris vel consectetur convallis, metus ex vulputate ex, at aliquet velit nunc ac eros.',
      price: 25000
   }, {
      status: 'false',
      id: '04',
      name: 'Car 4',
      color: 'red',
      model: 'Model 4',
      year: 2024,
      image: './img/car4.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, mauris vel consectetur convallis, metus ex vulputate ex, at aliquet velit nunc ac eros.',
      price: 30000
   }, {
      status: 'false',
      id: '05',
      name: 'Car 5',
      color: 'green',
      model: 'Model 5',
      year: 2025,
      image: './img/car5.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, mauris vel consectetur convallis, metus ex vulputate ex, at aliquet velit nunc ac eros.',
      price: 35000
   }, {
      status: 'false',
      id: '06',
      name: 'Car 6',
      color: 'yellow',
      model: 'Model 6',
      year: 2026,
      image: './img/car6.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, mauris vel consectetur convallis, metus ex vulputate ex, at aliquet velit nunc ac eros.',
      price: 40000
   }, {
      status: 'false',
      id: '07',
      name: 'Car 7',
      color: 'orange',
      model: 'Model 7',
      year: 2027,
      image: './img/car7.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, mauris vel consectetur convallis, metus ex vulputate ex, at aliquet velit nunc ac eros.',
      price: 45000
   }, {
      status: 'false',
      id: '08',
      name: 'Car 8',
      color: 'purple',
      model: 'Model 8',
      year: 2028,
      image: './img/car8.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, mauris vel consectetur convallis, metus ex vulputate ex, at aliquet velit nunc ac eros.',
      price: 50000
   }, {
      status: 'false',
      id: '09',
      name: 'Car 9',
      color: 'pink',
      model: 'Model 9',
      year: 2029,
      image: './img/car9.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, mauris vel consectetur convallis, metus ex vulputate ex, at aliquet velit nunc ac eros.',
      price: 55000
   }, {
      status: 'false',
      id: '10',
      name: 'Car 10',
      color: 'gray',
      model: 'Model 10',
      year: 2030,
      image: './img/car10.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, mauris vel consectetur convallis, metus ex vulputate ex, at aliquet velit nunc ac eros.',
      price: 60000
   }, {
      status: 'false',
      id: '11',
      name: 'Car 11',
      color: 'brown',
      model: 'Model 11',
      year: 2031,
      image: './img/car11.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, mauris vel consectetur convallis, metus ex vulputate ex, at aliquet velit nunc ac eros.',
      price: 65000
   }, {
      status: 'false',
      id: '12',
      name: 'Car 12',
      color: 'cyan',
      model: 'Model 12',
      year: 2032,
      image: './img/car12.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, mauris vel consectetur convallis, metus ex vulputate ex, at aliquet velit nunc ac eros.',
      price: 70000
   }, {
      status: 'false',
      id: '13',
      name: 'Car 13',
      color: 'magenta',
      model: 'Model 13',
      year: 2033,
      image: './img/car13.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, mauris vel consectetur convallis, metus ex vulputate ex, at aliquet velit nunc ac eros.',
      price: 75000
   }, {
      status: 'false',
      id: '14',
      name: 'Car 14',
      color: 'lime',
      model: 'Model 14',
      year: 2034,
      image: './img/car14.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, mauris vel consectetur convallis, metus ex vulputate ex, at aliquet velit nunc ac eros.',
      price: 80000
   }, {
      status: 'false',
      id: '15',
      name: 'Car 15',
      color: 'teal',
      model: 'Model 15',
      year: 2035,
      image: './img/car15.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, mauris vel consectetur convallis, metus ex vulputate ex, at aliquet velit nunc ac eros.',
      price: 85000
   }, {
      status: 'false',
      id: '16',
      name: 'Car 16',
      color: 'navy',
      model: 'Model 16',
      year: 2036,
      image: './img/car16.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, mauris vel consectetur convallis, metus ex vulputate ex, at aliquet velit nunc ac eros.',
      price: 90000
   }, {
      status: 'false',
      id: '17',
      name: 'Car 17',
      color: 'maroon',
      model: 'Model 17',
      year: 2037,
      image: './img/car17.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, mauris vel consectetur convallis, metus ex vulputate ex, at aliquet velit nunc ac eros.',
      price: 95000
   }, {
      status: 'false',
      id: '18',
      name: 'Car 18',
      color: 'olive',
      model: 'Model 18',
      year: 2038,
      image: './img/car18.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, mauris vel consectetur convallis, metus ex vulputate ex, at aliquet velit nunc ac eros.',
      price: 100000
   }
];

let carsHtml = [];
cars.forEach((car) => {
   carsHtml += `
     <div class="container w-1/2 max-lg:w-screen max-sm:h-auto flex flex-row max-sm:flex-col border-2 border-blue0 rounded-md mb-1 shadow-md shadow-white">
                    <img class="w-2/4 max-sm:w-screen h-70 rounded-md" src="${car.image}" alt="">
                    <div class="w-2/4 max-sm:w-screen px-4 flex flex-col justify-between bg-gray-200">
                        <div>
                            <h2 class="font-bold text-2xl text-gray-800 mt-4 mb-2">${car.name} ${car.color}</h2>
                            <p class="text-md mb-2 font-bold text-gray-700 text-wrap">${car.model} ${car.year}</p>
                            <p class="text-md text-gray-700 text-justify text-wrap">${car.description}</p>
                            <h3 class="text-lg mt-2 max-sm:mb-4 text-gray-800 font-semibold">$${car.price}</h3>
                        </div>
                        <div class="flex flex-row mb-4 items-center justify-between">
                            <span class="saveBtn cursor-pointer" data-saved="${car.id}">
                                 <i class="fa-regular fa-bookmark fa-xl" style="color: #000000;"></i>
                            </span>
                            <span class="order cursor-pointer" data-saved="${car.id}">
                                <i class="fa-solid fa-truck fa-xl" style="color: #000000;"></i>
                            </span>
                        </div>
                    </div>
                </div>`
});
document.querySelector(".cars").innerHTML = carsHtml;
document.querySelector(".cars").addEventListener('click', function(event) {
   if (event.target.closest('.saveBtn')) {
      const btn = event.target.closest('.saveBtn');
      const carId = btn.getAttribute('data-saved');
      const car = cars.find(car => car.id === carId);
      if (car) {
         car.status = 'true';
         btn.innerHTML = `<i class="fa-solid fa-bookmark fa-xl" style="color: #1f55b2;"></i>`;
         localStorage.setItem('cars', JSON.stringify(cars));
      }
   } else if(event.target.closest(".order")){
      alert("Order placed for " + event.target.closest('.bg-gray-200').querySelector('h2').innerText);
                let btn = event.target.closest('.order');
                let orderId = btn.getAttribute('data-saved');
                let orderCar = cars.find(car => car.id === orderId);
                localStorage.setItem('order', JSON.stringify(orderCar));
   }
});