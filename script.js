
function sendToWhatsApp() {

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let car = document.getElementById("car").value;
    let service = document.getElementById("service").value;
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;

    let message = `New Booking:
Name: ${name}
Phone: ${phone}
Car: ${car}
Service: ${service}
Date: ${date}
Time: ${time}`;

    let url = "https://wa.me/201070383775?text=" + encodeURIComponent(message);

    window.open(url, "_blank");
}