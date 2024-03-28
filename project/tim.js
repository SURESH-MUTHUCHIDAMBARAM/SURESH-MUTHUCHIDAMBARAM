/*const currentDate=new Date();
console.log(currentDate)
const targetDate=new Date('2024-01-26T23:15:55');
console.log(targetDate)
const difference=targetDate-currentDate;
console.log(difference)
function updateCountdown(){
    const currentTime=new Date();
    const difference=targetDate-currentTime;
    const days=Math.floor(difference/1000*60*60*24);
    const hours=Math.floor(difference%((1000*60*60*24))/(1000*60*60))
    const minutes=Math.floor((difference%(1000*60*60*24))/(1000*60*60)/(1000*60));
    const seconds=Math.floor((difference%(1000*60))/1000);
}
//   document.getElementById("days").innerText=days;
//   document.getElementById("hours").innerText=hours;
//   document.getElementById("minutes").innerText=minutes;
//   document.getElementById("seconds").innerText=seconds;

const interval=setInterval(updateCountdown,1000);
if(difference<0){
    clearInterval(interval);
    document.getElementById('timer').innerText="The Event has started";
}*/

// const sureshfrnds={slfrnds:'ram',
// areafrnds:['keerthi','kani','michel','mani annan'],
// clgfrnds:['kamesh','ayya','karupu','kasi']};
// //  console.log(sureshfrnds);
// //  console.log(sureshfrnds.slfrnds?.nandhu)
// // const buddies=[...slfrnds,clgfrnds,...areafrnds];
// // console.log(buddies);
// // const[ram,...otherfrnds]=[...slfrnds];
// // console.log(otherfrnds,ram)
// const frnds=Object.keys(sureshfrnds);
// const frnds2=Object.values(sureshfrnds);
// console.log(frnds2)
// console.log(frnds)
const announcement='india won the worldcup,india beat england,and it 5 worldcup for india';
// console.log(announcement.replaceall('india','austriala'))
console.log(announcement.replace('india','austraila'))
console.log(announcement.replace(/india/g,'austraila'))

