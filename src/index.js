console.log('%c HI', 'color: firebrick')



document.addEventListener('DOMContentLoaded', () => {
    fetchImage()
    fetchBreeds()
})
function renderDogImages(pic) {
    let img = document.createElement('img')
    img.src = pic
    document.querySelector("#dog-image-container").append(img)
}
function fetchImage() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
        .then(res => res.json())
        .then(data => data.message.forEach(renderDogImages))
}
function fetchBreeds(filter) {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
        .then(res => res.json())
        .then(data => {
            let allBreeds = Object.keys(data.message)
            let select = document.querySelector('#dog-breeds')
            select.textContent = ''
            if (filter){
                allBreeds = allBreeds.filter(elem => elem[0] === filter)
            }
            return allBreeds.forEach(renderDogBreed)
        })
            
}

//if there a filter arg, then filter by initial letter 
// run forEach on newly filtered array 
function renderDogBreed(breed) {
    let li = document.createElement('li')
    li.textContent = breed
    
    const select = document.querySelector('#breed-dropdown')
    select.addEventListener('change', (elem)=> {
        fetchBreeds(elem.target.value)
    })


    document.querySelector('#dog-breeds').append(li)
    li.addEventListener("click", () => {
        li.style.color = "red"
    })
}
