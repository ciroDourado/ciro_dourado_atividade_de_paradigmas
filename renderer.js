var main_container = document.getElementById("main")
var original_background = main_container.style.backgroundColor

main_container.addEventListener("mouseover", () => {
	main_container.classList.remove("Blurred")
}, false)

main_container.addEventListener("mouseout", () => {
	main_container.classList.add("Blurred")
}, false)

///////////////////////////////////////////////////

var button = document.getElementById("button")

button.addEventListener("click", () => {
	if (main_container.style.backgroundColor == original_background) {
		main_container.style.backgroundColor = "#ccccff";
	} else {
		main_container.style.backgroundColor = original_background;
	}
})
