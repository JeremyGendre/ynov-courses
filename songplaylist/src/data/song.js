export class Song{
    duration;
    src;
    artist;
    title;
    constructor(src, duration, artist, title) {
        this.src = src;
        this.duration = duration;
        this.artist = artist;
        this.title = title;
    }
}