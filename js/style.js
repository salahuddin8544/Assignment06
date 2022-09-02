const loadCatagory = async() =>{
    const url = `https://openapi.programming-hero.com/api/news/categories`
    const res = await fetch(url);
    const data = await res.json();
   displayCatagory(data.data.news_category);
}
const displayCatagory = (categories)=>{
    const catagoryContainer = document.getElementById('category-container');
    categories.forEach(category=>{
        const div = document.createElement('div')
        div.innerHTML = `
        <button onclick="newsDetails('${category.category_id}')" href="">${category.category_name}</button>
        `
       catagoryContainer.appendChild(div)
    })
}

// newDetails news
const newsDetails = async id=>{
    const url =`https://openapi.programming-hero.com/api/news/category/${id}`
    const res = await fetch(url);
    const data = await res.json();
    displayNews(data.data)
  }
const displayNews = news =>{
    const newsDiv = document.getElementById('news');
     news.forEach(newsElement =>{
        console.log(newsElement);
        newsDiv.innerHTML = `
        <div class="row">
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
     })
}
loadCatagory()
