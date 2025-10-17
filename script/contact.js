document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("contact-form");
    var status = document.getElementById("form-status");
    var submitButton = document.getElementById("submit-button");
    var notification = document.getElementById("notification-popup");
    var closeBtn = document.getElementById("close-notification");

    async function handleSubmit(event) {
        event.preventDefault();

        var originalButtonText = submitButton.innerHTML;
        submitButton.innerHTML = "Mengirim...";
        submitButton.disabled = true;

        var data = new FormData(event.target);

        fetch(event.target.action, {
            method: form.method,
            body: data,
            headers: { 'Accept': 'application/json' }
        }).then(response => {
            if (response.ok) {
                notification.classList.add("show");
                form.reset();
                status.innerHTML = "";
            } else {
                response.json().then(data => {
                    status.innerHTML = "Oops! Terjadi masalah saat mengirim formulir.";
                })
            }
            submitButton.innerHTML = originalButtonText;
            submitButton.disabled = false;
        }).catch(error => {
            status.innerHTML = "Oops! Terjadi masalah saat mengirim formululir.";
            submitButton.innerHTML = originalButtonText;
            submitButton.disabled = false;
        });
    }

    form.addEventListener("submit", handleSubmit)

    closeBtn.addEventListener("click", function () {
        notification.classList.remove("show");
    });
});