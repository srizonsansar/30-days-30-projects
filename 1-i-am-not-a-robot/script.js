const checkbox = document.getElementById('checkbox')
const submitBtn = document.querySelector('button[type=submit]')

checkbox.disabled = true
submitBtn.disabled = true

const elements = document.querySelectorAll('.element')
const selectColor = document.getElementById('SelectColor')

// Assign color to elements
elements.forEach( (element) => {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.innerHTML = color
    selectColor.innerHTML = color
})

// Generate Random Color
function getRandomColor(){
    const letter = '0123456789ABCDEF'
    let color = '#'
    for ( let i = 0; i < 6; i++ ){
        color += letter[Math.floor(Math.random() * 16)]
    }
    return color
}

// check if right color
elements.forEach( (element) => {
    element.addEventListener('click', function(){
        if (element.innerHTML === selectColor.innerHTML) {
            checkbox.checked = true
            submitBtn.disabled = false
            submitBtn.classList.remove('btn-light')
            submitBtn.classList.add('btn-success')
        } else {
            location.reload(true)
            checkbox.disabled = true
            submitBtn.disabled = true
        }
    })
})