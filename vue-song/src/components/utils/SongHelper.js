/**
 * Creates a new song object
 * @param songName
 * @returns {{createdAt: *, name: *}}
 */
export function createNewSong(songName){
    return {
        name: songName,
        createdAt: new Date()
    };
}