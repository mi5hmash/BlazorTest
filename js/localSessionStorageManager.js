// Function to set an item in localStorage
window.setLocalStorageItem = (k, v) => {
    localStorage.setItem(k, v);
};

// Function to get an item from localStorage
window.getLocalStorageItem = (k) => {
    return localStorage.getItem(k);
};

// Function to check if an item exists in localStorage
window.localStorageItemExists = (k) => {
    return localStorage.getItem(k) !== null;
};

// Function to remove an item from localStorage
window.removeLocalStorageItem = (k) => {
    localStorage.removeItem(k);
};

// Function to set an item in sessionStorage
window.setSessionStorageItem = (k, v) => {
    sessionStorage.setItem(k, v);
};

// Function to get an item from sessionStorage
window.getSessionStorageItem = (k) => {
    return sessionStorage.getItem(k);
};

// Function to check if an item exists in sessionStorage
window.sessionStorageItemExists = (k) => {
    return sessionStorage.getItem(k) !== null;
};

// Function to remove an item from sessionStorage
window.removeSessionStorageItem = (k) => {
    sessionStorage.removeItem(k);
};