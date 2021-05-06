const cityName=document.getElementById('cityName')
const city_Name=document.getElementById('city_name')

const submitBtn=document.getElementById('submitBtn')
const alertfun=async(event)=>{
   alert("hi") 
   event.preventDefault();
   let cityVal=cityName.val
   if(cityVAl==="")
   {
      city_Name.innerText=`plz write city name before search`
   }
   else
    {
       try{

           let url=`api.openweathermap.org/data/2.5/weather?q=pune&appid=14683bdb6cfb420be767b990f8022fb6`;
           const response=await fetch(url)
        }
        catch
        {
            city_Name.innerText=`plz enter the correct name`
        }
     }


}

submitBtn.addEventListener('click',alertfun)
