
document.getElementById("bookingForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let service = document.getElementById("service").value;
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;

    let message = `🚗 حجز صيانة
👤 الاسم: ${name}
📞 الرقم: ${phone}
🔧 الخدمة: ${service}
📅 التاريخ: ${date}
⏰ الوقت: ${time}`;

    let whatsappNumber = "201070656214";

    let url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
});