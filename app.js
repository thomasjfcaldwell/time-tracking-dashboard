console.log('cunt')

const daily = document.querySelectorAll('.daily-container');
const weekly = document.querySelectorAll('.weekly-container');
const monthly = document.querySelectorAll('.monthly-container');

const dailyPicker = document.getElementById('daily-picker');
const weeklyPicker = document.getElementById('weekly-picker');
const monthlyPicker = document.getElementById('monthly-picker');

dailyPicker.addEventListener('click', function (){
    daily.forEach(index => {
        return index.style.display = 'block'
    })
    weekly.forEach(week => {
        return week.style.display = 'none'
    })
    monthly.forEach(month => {
        return month.style.display = 'none'
    })
})


weeklyPicker.addEventListener('click', function (){
    daily.forEach(index => {
        return index.style.display = 'none'
    })
    weekly.forEach(week => {
        return week.style.display = 'block'
    })
    monthly.forEach(month => {
        return month.style.display = 'none'
    })
})

monthlyPicker.addEventListener('click', function (){
    daily.forEach(index => {
        return index.style.display = 'none'
    })
    weekly.forEach(week => {
        return week.style.display = 'none'
    })
    monthly.forEach(month => {
        return month.style.display = 'block'
    })
})