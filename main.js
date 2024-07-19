function toggleDropdown() {
    const dropdown = document.getElementById('languageDropdown');
    dropdown.classList.toggle('hidden');
}

document.addEventListener('click', function(event) {
    const dropdown = document.getElementById('languageDropdown');
    const trigger = dropdown.previousElementSibling;

    if (!trigger.contains(event.target) && !dropdown.contains(event.target)) {
        dropdown.classList.add('hidden');
    }
});