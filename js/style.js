const loadCatagory = async() =>{
    const url = `https://openapi.programming-hero.com/api/news/categories`
    const res = await fetch(url);
    const data = await res.json();
   displayCatagory(data.data.news_category);
}
const displayCatagory = (categories)=>{
    console.log(categories);
    const catagoryContainer = document.getElementById('category-container');
    categories.forEach(category=>{
        console.log(category);
        const div = document.createElement('div')
        div.innerHTML = `
        <a onclick="newsDetails(${category.category_id})" href="">${category.category_name}</a>
        `
       catagoryContainer.appendChild(div)
    })
}

// newDetails news
const newsDetails = async data =>{
    console.log(data);
}
loadCatagory()