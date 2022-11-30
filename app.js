const menu = [
    {
        id: 1,
        category: 'cakes',
        itemImg: './images/cake1.jpg',
        title: 'Kitkat Cake',
        detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aliquid pariatur exercitationem neque minima, quod harum fugiat aspernatur sequi atque?',
        price: ' Rs. 450/-',
    },

    {
        id: 2,
        category: 'shakes',
        itemImg: './images/shake3.jpg',
        title: 'Oreo Shake',
        detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aliquid pariatur exercitationem neque minima, quod harum fugiat aspernatur sequi atque?',
        price: ' Rs. 430/-',
    },
    {
        id: 3,
        category: 'ice-creams',
        itemImg: './images/ice1.jpg',
        title: 'Strawberry Cone',
        detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aliquid pariatur exercitationem neque minima, quod harum fugiat aspernatur sequi atque?',
        price: ' Rs. 150/-',
    },
    {
        id: 4,
        category: 'cakes',
        itemImg: './images/cake4',
        title: 'Wedding Cake',
        detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aliquid pariatur exercitationem neque minima, quod harum fugiat aspernatur sequi atque?',
        price: ' Rs. 950/-',
    },
    {
        id: 5,
        category: 'shakes',
        itemImg: './images/shake1.jpg',
        title: 'Ice Shake',
        detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aliquid pariatur exercitationem neque minima, quod harum fugiat aspernatur sequi atque?',
        price: ' Rs. 300/-',
    },
    {
        id: 6,
        category: 'ice-creams',
        itemImg: './images/ice2.jpg',
        title: 'Vanilla Cone',
        detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aliquid pariatur exercitationem neque minima, quod harum fugiat aspernatur sequi atque?',
        price: ' Rs. 200/-',
    },

    {
        id: 7,
        category: 'cakes',
        itemImg: './images/cake2',
        title: 'ferrero rocher Cake',
        detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aliquid pariatur exercitationem neque minima, quod harum fugiat aspernatur sequi atque?',
        price: ' Rs. 550/-',
    },
    {
        id: 8,
        category: 'shakes',
        itemImg: './images/shake2.jpg',
        title: 'Chocolate Shake',
        detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aliquid pariatur exercitationem neque minima, quod harum fugiat aspernatur sequi atque?',
        price: ' Rs. 370/-',
    },
    {
        id: 9,
        category: 'cakes',
        itemImg: './images/cake3',
        title: 'Chocolate Lava Cake',
        detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aliquid pariatur exercitationem neque minima, quod harum fugiat aspernatur sequi atque?',
        price: ' Rs. 700/-',
    },
    {
        id: 10,
        category: 'ice-creams',
        itemImg: './images/ice3.jpg',
        title: 'Hazelnut Cone',
        detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aliquid pariatur exercitationem neque minima, quod harum fugiat aspernatur sequi atque?',
        price: ' Rs. 250/-',
    },
    {
        id: 11,
        category: 'shakes',
        itemImg: './images/shake4.jpg',
        title: 'Strawberry Shake',
        detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aliquid pariatur exercitationem neque minima, quod harum fugiat aspernatur sequi atque?',
        price: ' Rs. 450/-',
    },

    {
        id: 12,
        category: 'ice-creams',
        itemImg: './images/ice4.jpg',
        title: 'Oreo Cone',
        detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aliquid pariatur exercitationem neque minima, quod harum fugiat aspernatur sequi atque?',
        price: ' Rs. 300/-',
    },
    // {
    //     id: 13,
    //     category: 'desserts',
    //     itemImg: './images/ice4.jpg',
    //     title: 'Oreo Cone',
    //     detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aliquid pariatur exercitationem neque minima, quod harum fugiat aspernatur sequi atque?',
    //     price: ' Rs. 300/-',
    // },

]
let menuItems = document.getElementById('menu');
let btnsList = document.getElementById('filter-btns');
let icon = document.getElementById('icon');
let submitBtn = document.getElementById('submit-btn');
let form = document.getElementById('form');


window.addEventListener('DOMContentLoaded', function () {

    displayMenuItems(menu);

    let categories = menu.reduce(function (values, dish) {
        if (!values.includes(dish.category)) {
            values.push(dish.category);
        }
        return values
    }, ['all']);
    // console.log(categories);

    displayMenuBtns(categories);
    let filterBtns = document.querySelectorAll('.filter-btn')



    filterBtns.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            let category = e.currentTarget.dataset.id;
            let filteredItems = menu.filter(function (item) {
                if (item.category === category) {
                    return item
                }
            })
            if (category === 'all') {
                return displayMenuItems(menu);
            } else {
                return displayMenuItems(filteredItems);
            }

        })
    })

})

// submitBtn.addEventListener('click', function(){
//     form.innerHTML = ` <article class="card mb-3" style="max-width: 540px;">
//     <div class="row g-0">
//         <div class="col-md-4">
//             <img src="./images/cake1.jpg" class="img-fluid rounded-start item-img" alt="...">
//         </div>
//         <div class="col-md-8">
//             <div class="card-body">
//                 <h5 class="card-title title">Card title</h5>
//                 <p class="card-text detail">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus a praesentium veniam neque
//                     delectus quisquam vero sed sunt perspiciatis rem!
//                 </p>
//                 <p class="card-text">
//                     <small class="text-muted price">Price: Rs. 450/-</small>
//                 </p>
//             </div>
//         </div>
//     </div>`
// //     form.innerHTML = `<div class="grocery-item">
// //     <p class="grocery-name">${value}</p>
// // </div>
// // <div class="list-btns">
// //     <button class="bi bi-pencil-square" id="edit-btn"></button>
// //     <button class="bi bi-trash-fill" id="del-btn"></button>
// //     <br>
// // </div>`
//     list.appendChild(element);
// })

//* FUNCTIONS

function displayMenuBtns (btns) {
    const categoryBtns = btns.map(function (category) {
        return `<button class="btn btn-primary filter-btn" data-id=${category}>${category}</button>`;
    }).join('');
    btnsList.innerHTML = categoryBtns;
}




function displayMenuItems(menuList) {
    let displayMenu = menuList.map(function (items) {

        return `<article class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
            <div class="col-md-4">
                <img src=${items.itemImg} class="img-fluid rounded-start item-img" alt=${items.title}>
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title title">${items.title}</h5>
                    <p class="card-text detail">${items.detail}
                    </p>
                    <p class="card-text">
                        <small class="text-muted price">${items.price}</small>
                    </p>
                </div>
            </div>
        </div>
    </article>`;
    })
    displayMenu = displayMenu.join("");
    menuItems.innerHTML = displayMenu;
}