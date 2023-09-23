const bossbarBtn = document.querySelector(".boss-bar");
const menuBar = document.querySelector(".navbar");

bossbarBtn.addEventListener("click",function(){
	menuBar.classList.toggle('active');
});

const searchBtn = document.querySelector(".search");
const searchBar = document.querySelector(".search-blog");

searchBtn.addEventListener("click",function(){
	searchBar.classList.toggle('active');
});

