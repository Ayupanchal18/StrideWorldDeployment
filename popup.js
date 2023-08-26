
// pop Up toggle

document.addEventListener("DOMContentLoaded", function () {
    // Check if the pop-up has been shown before
    if (!localStorage.getItem("popupShown")) {
        // If not, show the pop-up
        var popup = document.getElementById("popup");
        var closePopupButton = document.getElementById("closePopup");

        popup.style.display = "block";

        // Add an event listener to the close button
        closePopupButton.addEventListener("click", function () {
            popup.style.display = "none";
            // Set a flag in localStorage to indicate that the pop-up has been shown
            localStorage.setItem("popupShown", "true");
        });
    }
});
