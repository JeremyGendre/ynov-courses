export class Song{
    src;// string
    artist;// string
    title;// string
    constructor(src, title, artist = 'Unknown') {
        this.src = src;
        this.artist = artist;
        this.title = title;
    }
}