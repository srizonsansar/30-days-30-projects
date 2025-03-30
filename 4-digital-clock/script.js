window.addEventListener('DOMContentLoaded', showTime())

function showTime(){
    
    let date = new Date()

    let h = date.getHours()
    let m = date.getMinutes()
    let s = date.getSeconds()

    let session = 'AM'
    if(h == 0){
        h = 12
    }
    if(h > 12){
        h = h - 12
        session = 'PM'
    }

    h = h < 10 ? h = '0' + h : h
    m = m < 10 ? m = '0' + m : m
    s = s < 10 ? s = '0' + s : s

    const time = `${h}:${m}<small>${s}|${session}</small>`;
    document.getElementById("DisplayClock").innerHTML = time
    setTimeout(showTime, 1000)

    let bg

    const userName = 'Aayushree'
    const user = document.getElementById('User')
    if( h < 8 && session == 'AM'){
        bg = `url('https://cdn.pixabay.com/photo/2020/06/23/19/23/fog-5333546_1280.jpg')`
        user.innerHTML = `Good morning ${userName}`
    } else if ( h < 11 && session == 'AM') {
        bg = `url('https://cdn.pixabay.com/photo/2022/02/20/08/58/mountains-7023998_1280.jpg')`
        user.innerHTML = `Good day ${userName}`
    } else if (h < 8 && session == 'PM') {
        bg = `url('https://cdn.pixabay.com/photo/2023/11/04/04/47/men-8364267_1280.jpg')`
        user.innerHTML = `Good afternoon ${userName}`
    } else {
        bg = `url('https://cdn.pixabay.com/photo/2020/01/25/10/36/ferris-wheel-4792152_1280.jpg')`
        user.innerHTML = `Good night ${userName}`
    }

    const body = document.querySelector('body')
    body.style.background = `${bg} center/cover`

}

document.querySelector('.focus-container input').addEventListener('keypress', function(e){
    if(e.key === 'Enter'){
        const focus = document.querySelector('.focus-container input').value
        document.querySelector('.focus-container').innerHTML = `<h6>Today:</h6><h1>${focus}</h1>`
    }
})