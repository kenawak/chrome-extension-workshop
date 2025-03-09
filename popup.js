document.addEventListener("DOMContentLoaded", () => {
    const colorPicker = document.getElementById("colorPicker");
    const highlightBtn = document.getElementById("highlightBtn");

    // Log color changes
    colorPicker.addEventListener("change", (e) => {
        const color = e.target.value;
        console.log("Selected color:", color);
    });

    // Function to highlight selected text (injected into page context)
    function highlightSelectedText(color) {
        const selection = window.getSelection();
        const selectedText = selection.toString();

        if (!selectedText || selectedText.trim() === "") {
            alert("Please select some text to highlight!");
            return;
        }

        const range = selection.getRangeAt(0);
        const span = document.createElement("span");
        span.style.backgroundColor = color;
        span.style.color = "black"; 
        span.textContent = selectedText;

        range.deleteContents();
        range.insertNode(span);

        selection.removeAllRanges();
    }

    // Handle button click to highlight text
    highlightBtn.addEventListener("click", () => {
        const color = colorPicker.value;
        console.log("Highlight button clicked with color:", color);

        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            const tab = tabs[0];
            if (!tab || !tab.id) {
                console.error("No active tab found"); 
                return;
            }

            chrome.scripting.executeScript({
                target: { tabId: tab.id },
                func: highlightSelectedText,
                args: [color] // Pass the selected color
            }, (results) => {
                if (chrome.runtime.lastError) {
                    console.error("Error injecting script:", chrome.runtime.lastError.message);
                } else {
                    console.log("Script executed successfully:", results);
                }
            });
        });
    });
});