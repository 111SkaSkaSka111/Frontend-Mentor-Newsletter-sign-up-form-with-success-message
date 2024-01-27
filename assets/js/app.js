document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("button");
    const cardSuccess = document.querySelector(".card-success");
    const card = document.querySelector(".card");

    button.addEventListener("click", function (e) {
        // hentikan aksi default
        e.preventDefault();

        // Mengambil nilai dari input email
        const emailInput = document.getElementById("email").value;

        // Memeriksa apakah nilai mengandung "@" dan "."
        if (emailInput.includes("@") && emailInput.includes(".")) {
            // Jika email valid, menambahkan kelas "oke" pada elemen dengan kelas "card"
            card.classList.add("remove");

            // Menampilkan elemen dengan kelas "card-success"
            cardSuccess.style.display = "flex";

            // mengirim email ke span
            const sendEmail = document.getElementById("send-email");
            sendEmail.textContent = emailInput;

            // (Opsional) Menutup atau menyembunyikan elemen formulir jika diperlukan
            // const formInput = document.getElementById("form-input");
            // formInput.style.display = "none";
        } else {
            // Jika email tidak valid, menambahkan kelas "active" pada elemen dengan kelas "form-input" (atau sesuai kebutuhan Anda)
            const formInput = document.getElementById("form-input");
            formInput.classList.add("active");
        }
    });

    const dismiss = document.getElementById("back");

    dismiss.addEventListener("click", function () {
        cardSuccess.style.display = "none";
        card.classList.remove("remove");
    });
});
