console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function(){
    loadImage();
})

const loadImage = ()=>{
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
    .then(result => result.json())
    .then(results => {
        results.message.forEach(image => {
            addImage(image)
        });
    })
}

const addImage=(pickedUrl)=>{
    let mainContainer = document.querySelector('#dog-image-container')
    let imgElem = document.createElement('img')
    imgElem.src =  pickedUrl
    mainContainer.appendChild(imgElem)
}


const loadBreeds = () =>{
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(breeds =>{
        updateBreed(breeds)
        addBreedEventListener()
    })  
}

const updateBreed= breeds =>{
    let ul = document.querySelector('#dog-breeds')
    removeChild(ul)
    breeds.forEach(breed => addBreed(breed))
}

const removeChildren =element =>{
    let child = element.lastElementChild;
    while(child){
        element.removeChild()
        child = element.lastElementChild
    }
}
const addBreedEventListener = () =>{
    let dropDown = document.querySelector('#breed-dropdown')
    dropDown.addEventListener('change', function(event){
        selectedBreed(event.target.value)
    })
}

const selectedBreed = () =>{
    updateBreed(breeds.filter(breed.startWith(letter)))
}
const addBreed = () =>{
    let ul = document.querySelector('#dog-breeds')
    let li = document.createElement('li')
    li.innerText = breed
    li.style.cursor = 'pointer'
    ul.appendChild(li)
    addBreedEventListener('click', updateColor)
}
const updateColor = event =>{
    event.target.style.color = 'palevioletred'
}