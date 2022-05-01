
const Home_Security_Cameras = ["Smart Security Camera Installation", "Smart Security Camera Support",]
const Home_Security_Locks = ["Smart Security Lock Installation", "Smart Security Lock Support"]
const Home_Security_Alarms = ["Alarm System Installation & Setup", "Alarm System Support"]



let array = []
Home_Security_Alarms.forEach(item => {
    array.push(
        {
            servicename: item.trim(),
            selected: false,
            amount: ""
        }
    )
})
console.log(array);








 





