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
 * Return a random int between min and max
 * @param min
 * @param max
 * @returns {number}
 */
export function getRandomInt(min, max) {
    return Math.floor(Math.random() * Math.floor(max)) + Math.floor(min);
}

/**
 * Update the background with the given url
 * @param url
 */
export function updateBackground(url)
{
    const background = document.getElementById('background');
    if(background){
        background.style.backgroundImage = `url('${url}')`;
    }
}