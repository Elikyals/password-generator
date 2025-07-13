let output1El = document.getElementById("output1_el")
let output2El = document.getElementById("output2_el")

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",
    "U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r",
    "s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@",
    "#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];



function generateRandomCharacters() {
    const passwordLength = document.getElementById("password_length").value
    const len = parseInt(passwordLength)
    let chars = ""
    for (let i = 0; i < len; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length)
        chars += characters[randomIndex] 
    } 
    output1El.textContent = chars
    chars = ""
    for (let i = 0; i < len; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length)
        chars += characters[randomIndex] 
    } 
    output2El.textContent = chars
}

// Add event listeners for both output elements
document.getElementById('output1_el').addEventListener('click', copyToClipboard);
document.getElementById('output2_el').addEventListener('click', copyToClipboard);

function copyToClipboard(event) {
    // Get the text content of the clicked element
    const content = event.target.textContent;
    
    try {
        navigator.clipboard.writeText(content);
        
        // Optional: Add visual feedback
        const originalText = event.target.textContent;
        event.target.textContent = 'Copied!';
        
        // Reset back to password after 1 second
        setTimeout(() => {
            event.target.textContent = originalText;
        }, 1000);
    } catch (err) {
        console.error('Failed to copy text: ', err);
    }
}