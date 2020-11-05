/**
 * Shuffle an array
 * @param array
 * @returns {*}
 */
export function shuffle(array)
{
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

/**
 * Update the background with the given url
 * @param url
 */
export function updateBackground(url)
{
    document.getElementById('background').style.backgroundImage = `url('${url}')`;
}