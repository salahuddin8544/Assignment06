const loadCatagory = async () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`
    const res = await fetch(url);
    const data = await res.json();
    displayCatagory(data.data.news_category);
}
const displayCatagory = (categories) => {
    const catagoryContainer = document.getElementById('category-container');
    categories.forEach(category => {
        // console.log(category);
        const div = document.createElement('div')
        div.innerHTML = `
        <div class ="category" onclick="newsDetails('${category.category_id}')" href="">${category.category_name}</div>
        `
        catagoryContainer.appendChild(div)
    })
}
// newDetails news
const newsDetails = async id => {
    spinnerRunning(true)
    const url = `https://openapi.programming-hero.com/api/news/category/${id}`
    const res = await fetch(url);
    const data = await res.json();
    displayNews(data.data)
}
const displayNews = news => {
    const itemsFound = document.getElementById('items-found')
    itemsFound.textContent = '';
    const itemsFoundValue = itemsFound.innerText;
    const total = itemsFoundValue + news.length;
    itemsFound.innerText = total;

    const notFound = document.getElementById('not-found');
    if (news.length === 0) {
        notFound.classList.remove('d-none')
    }
    else {
        notFound.classList.add('d-none')
    }
    const newsDiv = document.getElementById('news');

    newsDiv.textContent = '';
    news.forEach(newsElement => {
        const div = document.createElement('div')
        div.innerHTML = `
<div onclick="modalData(${newsElement._id})" class="row shadow my-3 p-2 rounded" data-bs-toggle="modal" data-bs-target="#modalTitle">
<div class="col-12 col-md-2">
    <img class="img-fluid" src="${newsElement.thumbnail_url}" alt="">
</div>
<div class="col-12 col-md-10">
    <h3>${newsElement.title}</h3>
    <p  class ="elpsis">${newsElement.details}</p>
    <div class="d-flex justify-content-between align-items-end">
        <div class="d-flex justify-content-between align-items-center">
            <img class="rounded-circle" width="45px" src="${newsElement.author.img
            }" alt="">
            <h6 class="ms-2">${newsElement.author.name
            }</h6>
        </div>
        <div class="">
        <i class="fa-solid fa-eye"></i>
            <span>${newsElement.total_view
            } 1.5M</span>
        </div>
        <div>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star-half-stroke"></i>
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
        </div> 
        <div>
        <button onclick="modalData('${newsElement._id}')" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalButton">Details<i class="fa-solid fa-chevron-right"></i></button>
        </div>
    </div>
</div>
</div>
        `
        newsDiv.appendChild(div);
    })
    spinnerRunning(false)
}
const spinnerRunning = isloading => {
    const spinner = document.getElementById('spiiner')
    if (isloading) {
        spinner.classList.remove('d-none')
    }
    else {
        spinner.classList.add('d-none')
    }
}
const modalData = async id => {
    console.log(id);
    const url = `https://openapi.programming-hero.com/api/news/${id}`
    const res = await fetch(url);
    const data = await res.json();
    displayModal(data.data)
}
const displayModal = value => {
    console.log(value[0]);
    const modalBody = document.getElementById('modal-body');
    modalBody.textContent = '';
    const div = document.createElement('div')
    div.innerHTML = `
    <img width="80px" src="${value[0].author.img}" alt="">
<p>name:${value[0].author.name ? value[0].author.name : 'no data found'}</p>
<p>Total view:${value[0].total_view ? value[0].total_view : 'no data found'}</p>
<p>details:${value[0].details}</p>
    `
    modalBody.appendChild(div);
}
loadCatagory();




