window.onload = () => {
    checkSetting();
}

document.querySelector('#nightmode').addEventListener('click', () => {
    storeSetting();
})

let checkSetting = () => {
    chrome.storage.local.get(['enabled'], (result) => {
        document.querySelector('#nightmode').checked = result.enabled;
    });
}

let storeSetting = () => {
    const isEnabled = document.querySelector('#nightmode').checked;
    const setting = { enabled: isEnabled };

    chrome.storage.local.set(setting, () => {
        console.log("setting is saved");
    });
}