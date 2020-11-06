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

export const rockSongsList = [
    new Song('/songs/against-the-current-gravity-official-music-video.mp3', 'Gravity', 'Against the current'),
    new Song('/songs/against-the-current-outsiders-official-video.mp3', 'Outsiders', 'Against the current'),
    new Song('/songs/against-the-current-paralyzed-official-music-video.mp3', 'Paralyzed', 'Against the current'),
    new Song('/songs/against-the-current-talk-official-music-video.mp3', 'Talk', 'Against the current'),
    new Song('/songs/against-the-current-wasteland-official-video.mp3', 'Wasteland', 'Against the current'),
    new Song('/songs/against-the-current-young-relentless-official-music-video.mp3', 'Young and relentless', 'Against the current'),
    new Song('/songs/ascend.mp3', 'Ascend', 'TheDoo'),
    new Song('/songs/attack-on-titan-full-english-opening-1-guren-no-yumiya-cover-by-jonathan-young-feat-331erock.mp3', 'AOT - OP 1', 'Jonathan Young'),
    new Song('/songs/death-note-opening-1-the-world-full-english-cover-by-jonathan-young.mp3', 'Death Note - The world', 'Jonathan Young'),
    new Song('/songs/every-time-we-touch-cascada-pop-punk-cover-by-jonathan-young.mp3', 'Everything we touch', 'Jonathan Young'),
    new Song('/songs/one-punch-man-full-english-opening-the-hero-jam-project-cover-by-jonathan-young.mp3', 'One punch man - OP 1', 'Jonathan Young'),
    new Song('/songs/sword-art-online-op1-crossing-field-full-english-cover.mp3', 'SAO - OP 1', 'Jonathan Young'),
    new Song('/songs/the-pokemon-theme-metal-cover-jonathan-young-jason-paige-the-original-singer.mp3', 'Pokemon theme', 'Jonathan Young'),
    new Song('/songs/UNRAVEL (FULL version - Tokyo Ghoul OP) - English opening cover by Jonathan Young.mp3', 'Unravel', 'Jonathan Young'),
    new Song('/songs/Nightcore - A Demon\'s Fate (HD).mp3', 'A Demon\' Fate', 'Nightcore remix'),
    new Song('/songs/Nightcore - Faster HD + Lyrics [DL].mp3', 'Faster', 'Nightcore remix'),
    new Song('/songs/Nightcore - Paradise (what about us).mp3', 'Paradise', 'Nightcore remix'),
    new Song('/songs/nightcore-blue-da-ba-dee-lyrics.mp3', 'Blue', 'Nightcore remix'),
    new Song('/songs/nightcore-dont-let-me-down-rock-version.mp3', 'Don\'t let me down', 'Nightcore remix'),
    new Song('/songs/nightcore-faded-rock-version-lyrics.mp3', 'Faded', 'Nightcore remix'),
    new Song('/songs/nightcore-in-the-end-cover-switching-vocals-lyricslinkin-park.mp3', 'In the end', 'Nightcore remix'),
    new Song('/songs/nightcore-let-us-burn-within-temptation.mp3', 'Let us burn', 'Nightcore remix'),
    new Song('/songs/nightcore-love-me-like-you-do.mp3', 'Love me like you do', 'Nightcore remix'),
    new Song('/songs/nightcore-remix-iron-within-temptation-hd.mp3', 'Iron', 'Nightcore remix'),
    new Song('/songs/nightcore-remix-shot-in-the-dark-within-temptation-hd.mp3', 'A shot in the dark', 'Nightcore remix'),
    new Song('/songs/nightcore-the-sound-of-silence-disturbed-lyrics.mp3', 'Sound of silence', 'Nightcore remix'),
    new Song('/songs/nightcore-zombie-rock-version-lyricsbad-wolves.mp3', 'Zombie', 'Nightcore remix'),
    new Song('/songs/Within Temptation (feat. Howard Jones) - Dangerous Lyrics.mp3', 'Dangerous', 'Within Temptation'),
    new Song('/songs/within-temptation-supernova-official-music-video.mp3', 'Supernova', 'Within Temptation'),
    new Song('/songs/wolves-my-time.mp3', "My time", "Wolves"),
];

export const electroSongsList = [
    new Song('/songs/Alan Walker - Faded.mp3', "Faded",'Alan Walker'),
    new Song('/songs/Alan Walker - The Spectre.mp3', "The Spectre",'Alan Walker'),
    new Song('/songs/Alan Walker  Alex Skrindo - Sky.mp3', "Sky",'Alan Walker'),
    new Song('/songs/Alan Walker - Alone.mp3', "Alone",'Alan Walker'),
    new Song('/songs/Alan Walker - Darkside (feat. AuRa and Tomine Harket).mp3', "Darkside",'Alan Walker'),
    new Song('/songs/Alan Walker - Diamond Heart (feat. Sophia Somajo).mp3', "Diamond Heart",'Alan Walker'),
    new Song('/songs/Alan Walker - Impossible.mp3', "Impossible",'Alan Walker'),
    new Song('/songs/Alan Walker - Sing Me To Sleep.mp3', "Sing me to sleep",'Alan Walker'),
    new Song('/songs/K-391 - Ignite (feat. Alan Walker, Julie Bergan  Seungri).mp3', "Ignite",'Alan Walker'),
    new Song('/songs/amadeus-legendary.mp3', "Legendary",'Amadeus'),
];