let form = document.querySelector("#subjects");

if (form) {
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        let noti = document.createElement("div");
        noti.textContent = "Nhập thành công!";

        noti.style.backgroundColor = "orange";
        noti.style.color = "white";
        noti.style.padding = "10px";
        noti.style.marginTop = "15px";
        noti.style.borderRadius = "5px";
        noti.style.textAlign = "center";

        form.appendChild(noti);

        form.reset();

        setTimeout(function() {
            noti.remove();
        }, 3000);
    });
}