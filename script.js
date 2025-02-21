async function fetchData() {
    const response = await fetch('data.json');
    return await response.json();
}

async function checkAnswers() {
    const data = await fetchData();
    const answers = data.answers;
    const encodedLink = data.link;

    let allCorrect = true;
    for (let key in answers) {
        let userInput = document.getElementById(key).value.trim().toLowerCase();
        if (userInput !== answers[key]) {
            allCorrect = false;
            break;
        }
    }

    if (allCorrect) {
        const decodedLink = atob(encodedLink);
        document.getElementById("mystery-link").href = decodedLink;
        document.getElementById("popup").style.display = "block";
    } else {
        alert("Hmm, something isn't right. Try again!");
    }
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}
