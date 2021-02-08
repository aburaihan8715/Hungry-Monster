

// const search = document.getElementById(search).value;
// const submit = document.getElementById(submit);
// const mealsIteam = document.getElementById(meals_iteam);





fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
.then(res => res.json())
.then(data => console.log(data.meals[0]));


// const displayMeals = 















// const displayMeals = meals[0].strMeal => {
//     for (let i = 0; i < meals[0].strMeal.length; i++) {
//         const meal = meals[i].strMeal;
//         console.log(meals[i].strMeal);
        
//     }
// }
// console.log(data.meals[42].strCategory);
//  document.getElementById('meals_iteam').innertex = data.meals[1].strCategory;

