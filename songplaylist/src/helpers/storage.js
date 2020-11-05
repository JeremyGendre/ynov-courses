/**
 * Get a possible item value if found in localStorage
 * @param item
 * @returns {string}
 */
export function getStoredItem(item){
    return localStorage.getItem(item);
}

/**
 * Store the given value into the given item key in the localStorage
 * @param item
 * @param value
 */
export function storeItem(item, value){
    localStorage.setItem(item, value);
}