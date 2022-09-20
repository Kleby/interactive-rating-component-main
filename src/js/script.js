const btnSubmit = document.querySelector("#btn_submit");
const listNumbers = document.querySelector("#list_numbers");
const pStarSelected = document.querySelector(".star_selected");
const divMain = document.querySelector(".main");
const divSecundary = document.querySelector(".secundary");

function selectedRating(valueTarget) {
  for (const iterator of listNumbers.children) {
    if (iterator.innerHTML === valueTarget.innerHTML) {
      valueTarget.classList.remove("not_selected");
      valueTarget.classList.add("selected");
    }
    else {
      iterator.classList.remove("selected");
      iterator.classList.add("not_selected");

    }
  }
}

function getRating(el) {
  const value = el.target;
  selectedRating(value)
  return value.innerHTML;
}

listNumbers.addEventListener('click', el => {
  let ratingValue = getRating(el);
  if (ratingValue){
    btnSubmit.addEventListener("click", () =>{
      pStarSelected.innerHTML =`
      You selected ${ratingValue} out of 5 
      `
      divMain.classList.add("hidden");
      divSecundary.classList.remove("hidden");
      setInterval(() => {
        location.reload();
      }, 7000);
      
    });
  }
});

