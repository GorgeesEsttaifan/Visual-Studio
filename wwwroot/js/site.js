// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
document.addEventListener("DOMContentLoaded", function () {
    const box = document.getElementById("box");
    const btn = document.getElementById("animateBtn");

    btn.addEventListener("click", function () {
        let pos = 0;
        const id = setInterval(frame, 5);

        function frame() {
            if (pos >= 300) {
                clearInterval(id);
            } else {
                pos++;
                box.style.left = pos + 'px';
            }
        }
    });
});
