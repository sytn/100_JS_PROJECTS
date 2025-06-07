let birthDate = document.querySelector("#datetimepicker");
const calculateBtn = document.querySelector("#calculateBtn");

function calculateAge() {
    const birth = new Date(birthDate.value);
    const today = new Date();

    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    const dayDiff = today.getDate() - birth.getDate();

    // Adjust if birthday hasn't happened yet this year
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    // Write the age into the <span id="age">
    document.getElementById("age").textContent = age;
}

calculateBtn.addEventListener('click', calculateAge);
