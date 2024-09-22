function saveResponse() {
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const location = document.getElementById('location').value;
    const name = document.getElementById('name').value;

    if (name && date && time && location) {
        alert(`Рахмет, ${name}!\nКүні: ${date}\nУақыты: ${time}\nӨтетін жері: ${location}`);
    } else {
        alert("Барлық мәліметтерді толтырыңыз!");
    }
}
