const inputCity = document.getElementById("inputCity") ;
const city = document.getElementById("city") ;
const humidity  = document.getElementById("humidity") ;
const sky = document.getElementById('sky') ;
const img = document.getElementById('img') ;
const temp = document.getElementById('tempurature') ;
const container = document.getElementById('container') ;

async function fetchData(){
    
    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputCity.value}&appid=9d100633b0a3c30e200a648384ff5b0d&lang=${document.getElementById('lang').value}`)
                .then(response =>{
                    if (!response.ok) {
                        throw new Error(response.statusText);
                    }
                    else{
                        return response.json()
                    }
                })
                .then(value => {
                    document.querySelector('.inpt button').textContent = 'Get Weather';
                    inputCity.value = '';
                    city.textContent = value.name ;
                    temp.textContent = (value.main.temp - 272.15).toFixed(1) + "°C";
                    humidity.textContent = "humidity : " + value.main.humidity ;
                    sky.textContent = value.weather[0].description ;
                    img.innerHTML = `<img src="new/${value.weather[0].icon}.svg" alt="${sky.textContent}" style="width:80px ;">` ;
                    
                })
                .catch(error => {
                    document.querySelector('.inpt button').textContent = 'Try Again';
                    city.textContent = 'Please enter a city';
                    humidity.textContent = '';
                    temp.textContent = '';
                    sky.textContent = '';
                    img.innerHTML = '';
                    inputCity.value = '';                  
                    console.log(error);

                })
}


const submitbtn = document.querySelector('.inpt button');

submitbtn.addEventListener('click',(elment)=>{
    elment.preventDefault() ;
    if (inputCity.value!="") {
        fetchData() ;
    }
    
})



