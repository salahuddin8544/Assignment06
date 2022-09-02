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
    console.log(id);
    const url =`https://openapi.programming-hero.com/api/news/category/${id}`
    const res = await fetch(url);
    const data = await res.json();
    displayNews(data.data)
  }
const displayNews = news =>{
     
    
}
loadCatagory()
/*<div class="row">
<div class="col-md-4">
    <img src="images/profile.jpg" alt="">
</div>
<div class="col-md-8">
    <h3>header</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut magnam eveniet blanditiis laboriosam sed. Tempora vel libero id voluptate voluptatum.</p>
    <div class="d-flex">
        <div class="d-flex">
            <img src="images/profile.jpg" alt="">
            <h5>Salah uddin</h5>
        </div>
        <div class="">
            <i></i>
            <span>1.5M</span>
        </div>
        <div>
            <i>arrow</i>
        </div>
    </div>
</div>
</div>*/