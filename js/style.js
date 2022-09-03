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
        <button onclick="newsDetails('${category.category_id}')" href="">${category.category_name}</button>
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
    const newsDiv = document.getElementById('news');
    const modalBody= document.getElementById('mod-body');
    news.forEach(newsElement => {
        console.log(newsElement);
        newsDiv.innerHTML = `
<div class="row" data-bs-toggle="modal" data-bs-target="#modalTitle">
<div class="col-md-4">
    <img src="${newsElement.thumbnail_url}" alt="">
</div>
<div class="col-md-8">
    <h3>${newsElement.title}</h3>
    <p>${newsElement.details}</p>
    <div class="d-flex">
        <div class="d-flex">
            <img class="rounded-circle" width="45px" src="${newsElement.author.img
            }" alt="">
            <h6>${newsElement.author.name
            }</h6>
        </div>
        <div class="">
        <i class="fa-solid fa-eye"></i>
            <span>${newsElement.total_view
            }</span>
        </div>
        <div>
        <i class="fa-solid fa-arrow-right-long"></i>
        </div>
    </div>
</div>
</div>
        `
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
