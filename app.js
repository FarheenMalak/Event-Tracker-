let count = 0;
function increaseCounter() {
    count++;
    document.getElementById("clickCount").textContent = "Count: " + count;
}
function resetCounter() {
    count = 0;
    document.getElementById("clickCount").textContent = "Count: " + count;
}
document.getElementById("hoverArea").addEventListener("mouseover", () => {
    document.getElementById("hoverArea").style.backgroundColor = "#b3e5fc";
});
document.getElementById("mouseArea").addEventListener("mousemove", (e) => {
    document.getElementById("mousePosition").textContent = `X: ${e.clientX}, Y: ${e.clientY}`;
});
function showKey(event) {
    document.getElementById("keyStatus").textContent = "Key Pressed: " + event.key;
}
function dropdownHover() {
    document.getElementById("dropdownStatus").textContent = "Hovering over dropdown";
}
function dropdownSelect() {
    let dropdown = document.getElementById("dropdown");
    document.getElementById("dropdownStatus").textContent = "Selected: " + dropdown.value;
}
window.onresize = () => {
    document.getElementById("windowSize").textContent = `Width: ${window.innerWidth}, Height: ${window.innerHeight}`;
};
function handleSubmit(event) {
    event.preventDefault();
    alert("Form submitted!");
}
function allowDrop(event) {
    event.preventDefault();
}
function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}
function drop(event) {
    event.preventDefault();
    event.target.appendChild(document.getElementById("dragImg"));
}
function showMediaStatus(status) {
    document.getElementById("mediaStatus").textContent = "Media Status: " + status;
}
