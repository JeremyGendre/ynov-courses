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

export const songList = [
    new Song('/songs/Alan Walker - Faded.mp3', "Faded",'Alan Walker'),
    new Song('/songs/Alan Walker - The Spectre.mp3', "The Spectre",'Alan Walker'),
    new Song('/songs/roby-fayer-ready-to-fight-fttom-gefen.mp3', 'Ready to fightfightfightfightfightfightfightfightfightfight', 'Roby Fayer'),
    new Song('/songs/wolves-my-time.mp3', "My time", "Wolves"),
];