function handleFormSubmit() {
    const age = document.getElementById("age-input").value;
    const message = age < 18 ? "You can't drive." : "You can drive.";

    document.getElementById("output").textContent = message;

    return false; 
}
