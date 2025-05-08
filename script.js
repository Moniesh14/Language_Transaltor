async function translateText() {
    const text = document.getElementById("textInput").value.trim();
    const targetLang = document.getElementById("languageSelect").value;

    if (!text) {
        alert("Please enter text to translate.");
        return;
    }

    const apiKey = ""; // Replace with your IBM Cloud API Key
    const url = "";  
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Basic " + btoa("apikey:" + apiKey)
            },
            body: JSON.stringify({
                text: [text],
                model_id: `en-${targetLang}`
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error ${response.status}`);
        }

        const data = await response.json();
        const translatedText = data.translations[0]?.translation || "Translation not available";
        document.getElementById("output").innerText = translatedText;
    } catch (error) {
        document.getElementById("output").innerText = "Error: " + error.message;
    }
}


function validatelogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (!password) {
        alert('Login Failed!');
    } else {
        alert('Login Successfully!')
    }
}
