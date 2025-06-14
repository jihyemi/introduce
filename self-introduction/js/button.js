
const clock =document.querySelector("h2#clock");

document.getElementById("bttn").onclick = function getClock(){
    const date = new Date;
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    alert(`지금 시간 = ${hours}:${minutes}`);
}
getClock();
