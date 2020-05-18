window.onload = () => {
    chrome.storage.local.get(['enabled'], (result) => {
        if(result.enabled) {
            document.getElementById('container').style.backgroundColor = "black";
        } else {
            document.getElementById('container').style.backgroundColor = 'white';
        }
    });
}

