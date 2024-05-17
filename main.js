document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("order-form");
    var overlay = document.createElement("div");
    overlay.classList.add("overlay");
    document.body.appendChild(overlay);

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Menghentikan perilaku default pengiriman formulir

        // Mengambil nilai dari input
        var name = document.getElementById("name").value;
        var color;
        var colorOptions = document.getElementsByName("color");
        for (var i = 0; i < colorOptions.length; i++) {
            if (colorOptions[i].checked) {
                color = colorOptions[i].value;
                break;
            }
        }
        var category = [];
        var categoryOptions = document.getElementsByName("category");
        for (var i = 0; i < categoryOptions.length; i++) {
            if (categoryOptions[i].checked) {
                category.push(categoryOptions[i].value);
            }
        }

        // Menampilkan hasil inputan di overlay
        overlay.innerHTML = `
            <div class="overlay-content">
                <h2>Your Order:</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Color:</strong> ${color}</p>
                <p><strong>Category:</strong> ${category.join(", ")}</p>
                <button onclick="hideOverlay()">Close</button>
            </div>
        `;
        overlay.style.display = "block";
    });
});

function hideOverlay() {
    var overlay = document.querySelector(".overlay");
    overlay.style.display = "none";
}
