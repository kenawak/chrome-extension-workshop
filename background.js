chrome.action.onClicked.addListener((tab) => {
    // Validate tab and URL
    if (!tab || !tab.id || !tab.url) {
        console.error("Invalid tab:", tab);
        return;
    }

    // Skip chrome:// or other restricted URLs
    if (tab.url.startsWith("chrome://") || tab.url.startsWith("about:")) {
        alert("Cannot inject script into chrome:// or about: URLs");
        return;
    }

    // Inject the highlighting script
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: highlightSelectedText
    }, (results) => {
        if (chrome.runtime.lastError) {
            console.error("Script injection failed:", chrome.runtime.lastError.message);
        } else {
            console.log("Text highlighted successfully:", results);
        }
    });
});

// Function to be injected into the page
function highlightSelectedText() {
    const selection = window.getSelection();
    if (!selection || selection.toString().trim() === "") {
        alert("Please select some text to highlight!");
        return;
    }

    const range = selection.getRangeAt(0);
    const selectedText = range.toString();

    // Create a span element to wrap the selected text
    const span = document.createElement("span");
    span.style.backgroundColor = "yellow"; // Highlight color
    span.style.color = "black";           // Text color for readability
    span.textContent = selectedText;

    // Replace the selected text with the highlighted version
    range.deleteContents();
    range.insertNode(span);

    // Clear the selection
    selection.removeAllRanges();
}