export class Song{
    duration; // number (seconds)
    src;// string
    artist;// string
    title;// string
    constructor(src, duration, artist, title) {
        this.src = src;
        this.duration = duration;
        this.artist = artist;
        this.title = title;
    }
}