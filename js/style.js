const loadCatagory = async () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`
    const res = await fetch(url);
    const data = await res.json();
    displayCatagory(data.data.news_category);
}
const displayCatagory = (categories) => {
    const catagoryContainer = document.getElementById('category-container');
    categories.forEach(category => {
        const div = document.createElement('div')
        div.innerHTML = `
        <div class ="category" onclick="newsDetails('${category.category_id}')" href="">${category.category_name}</div>
        `
        catagoryContainer.appendChild(div)
    })
}

// newDetails news
const newsDetails = async id => {
    const url = `https://openapi.programming-hero.com/api/news/category/${id}`
    const res = await fetch(url);
    const data = await res.json();
    displayNews(data.data)
}
const displayNews = news => {
    const notFound = document.getElementById('not-found');
    if(news.length === 0){
      notFound.classList.remove('d-none')      
    }
    else{
        notFound.classList.add('d-none')
    }
    const newsDiv = document.getElementById('news');
    newsDiv.textContent ='';
    const modalBody= document.getElementById('mod-body');
    news.forEach(newsElement => {
        console.log(newsElement);
        const div =  document.createElement('div')
        div.innerHTML = `
<div class="row shadow my-3 p-2 rounded" data-bs-toggle="modal" data-bs-target="#modalTitle">
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
        <button class="btn btn-primary">Details<i class="fa-solid fa-chevron-right"></i></button>
        </div>
    </div>
</div>
</div>
        `
newsDiv.appendChild(div)
    modalBody.innerHTML = `
    <img width:100px; class="img-fluid" src="${newsElement.image_url}" alt="">
    <p>Title:${newsElement.title}</p>
    <p>Name:${newsElement.author.name?newsElement.author.name :'no data available'}</p>
    <p>id:${newsElement._id}</p>
    <p>Publishead Data:${newsElement.author.published_date}</p>
    <p>Total View: <i class="fa-solid fa-eye"></i> <span>${newsElement.total_view?newsElement.total_view:'no data avaialable'
    }</span></p>
    `
    })
}
loadCatagory()
