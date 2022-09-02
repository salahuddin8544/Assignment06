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
        <a onclick="newsDetails(${category.category_id})" href="">${category.category_name}</a>
        `
       catagoryContainer.appendChild(div)
    })
}

// newDetails news
const newsDetails = async id =>{
    const url = `https://openapi.programming-hero.com/api/news/category/${id}`
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    // displayNews(data)
    // console.log(data);
}
const displayNews = news =>{
     console.log(news);
    
}
loadCatagory()