 let now_playing = document.querySelector('.now-playing');
let track_art = document.querySelector('.track-art');
let track_name = document.querySelector('.track-name');
let track_artist = document.querySelector('.track-artist');

let playpause_btn = document.querySelector('.playpause-track');
let next_btn = document.querySelector('.next-track');
let prev_btn = document.querySelector('.prev-track');

let seek_slider = document.querySelector('.seek_slider');
let volume_slider = document.querySelector('.volume_slider');
let curr_time = document.querySelector('.current-time');
let total_duration = document.querySelector('.total-duration');
let wave = document.getElementById('wave');
let randomIcon = document.querySelector('.fa-random');
let curr_track = document.createElement('audio');

let track_index = 0;
let isPlaying = false;
let isRandom = false;
let updateTimer;

const music_list = [
    {
        img : 'images/stay.png',
        name : 'Stay',
        artist : 'The Kid LAROI, Justin Bieber',
        music : 'music/stay.mp3'
    },
    {
        img : 'images/fallingdown.jpg',
        name : 'Falling Down',
        artist : 'Wid Cards',
        music : 'music/fallingdown.mp3'
    },
    {
        img : 'images/ratherbe.jpg',
        name : 'Rather Be',
        artist : 'Clean Bandit',
        music : 'music/Rather Be.mp3'
    },
   {
        img : 'images/di.jpg',
        name : 'Mind Games',
        artist : 'Sickick',
        music : 'music/abcd.mp3'
    },
{
        img : 'images/stay.png',
        name : 'lofi rain',
        artist : ' ',
        music : 'music/abcc.mp3'
    },
{
        img : 'images/stay.png',
        name : 'Wished 1001',
        artist : 'kean Nguyen',
        music : 'music/abc.mp3'
    },
        {
        img : 'images/stay.png',
        name : 'Try Again',
        artist : '디어 (d.ear), 재현 (Jaehyun)',
        music : 'music/try.mp3'
    },
            {
        img : 'images/stay.png',
        name : 'Thank u, next',
        artist : 'Ariana Grande',
        music : 'music/thankunext.mp3'
    },
            {
        img : 'images/stay.png',
        name : 'Thay đổi',
        artist : 'Lil wuyn',
        music : 'music/thaydoi.mp3'
    },
            {
        img : 'images/stay.png',
        name : 'Vài câu nói...',
        artist : 'Grey D',
        music : 'music/vaicaunoi.mp3'
    },
            {
        img : 'images/stay.png',
        name : 'Đường tôi chở em về',
        artist : 'buitruonglinh',
        music : 'music/toichoemve.mp3'
    },
            {
        img : 'images/stay.png',
        name : 'Phải chăng em đã yêu',
        artist : 'Juky San',
        music : 'music/phaichang.mp3'
    },
            {
        img : 'images/stay.png',
        name : 'Talking to the moon',
        artist : 'Bruno Mars',
        music : 'music/tknimoon.mp3'
    },
                {
        img : 'images/stay.png',
        name : 'Dù cho mai về sau',
        artist : 'Buitruonglinh',
        music : 'music/duchomai.mp3'
    },
                {
        img : 'images/kfm.jpg',
        name : 'Kiss me more',
        artist : 'Dojat',
        music : 'music/kissfor.mp3'
    },
                    {
        img : 'images/stay.png',
        name : 'Dù cho mai về sau',
        artist : 'Buitruonglinh',
        music : 'music/duchomai.mp3'
    },
                    {
        img : 'images/ccl.jpg',
        name : 'ifly',
        artist : 'Bazzi',
        music : 'music/ifly.mp3'
    },
                    {
        img : 'images/cv.jpg',
        name : 'good 4 u',
        artist : 'Olivia Rodrigo ',
        music : 'music/good4u.mp3'
    },
                    {
        img : 'images/stay.png',
        name : 'Có hẹn với thanh xuân',
        artist : 'Monstar',
        music : 'music/cohen.mp3'
    },
        {
        img : 'images/stay.png',
        name : 'Mama boy',
        artist : 'amee',
        music : 'music/mmboy.mp3'
    },
            {
        img : 'images/play.jpg',
        name : 'Play date',
        artist : 'Melanie Martinez',
        music : 'music/playdate.mp3'
    },
                {
        img : 'images/stay.png',
        name : 'Rót',
        artist : 'híu',
        music : 'music/rothiu.mp3'
    },
                    {
        img : 'images/b.jpg',
        name : 'LoverBoy',
        artist : 'A-Wall',
        music : 'music/loveboy.mp3'
    },
                    {
        img : 'images/levi1.jpg',
        name : 'Bored',
        artist : 'Billie Eilish',
        music : 'music/bored.mp3'
    },
                    {
        img : 'images/c.png',
        name : 'Double take',
        artist : 'dhruv',
        music : 'music/double.mp3'
    },
                    {
        img : 'images/stay.png',
        name : "always, i'll care",
        artist : 'Jeremy Zucker',
        music : 'music/always.mp3'
    },
                    {
        img : 'images/csl.jpg',
        name : 'infinity',
        artist : 'James Young',
        music : 'music/Infinity.mp3'
    },
                    {
        img : 'images/alc.jpg',
        name : 'Dusk Till Dawn',
        artist : 'ZAYN & Sia',
        music : 'music/aibiet.mp3'
    },
                        {
        img : 'images/stay.png',
        name : 'Thay mọi cô gái yêu anh',
        artist : 'Amee',
        music : 'music/thayamee.mp3'
    },
                        {
        img : 'images/d.jpg',
        name : 'Everything i wanted',
        artist : 'Billie Eilish',
        music : 'music/eiwant.mp3',
    },
                        {
        img : 'images/stay.png',
        name : 'em không hiểu',
        artist : 'Chang , Minh huy',
        music : 'music/emkhonghieu.mp3',
    },
                        {
        img : 'images/stay.png',
        name : 'Để bầu trời nhìn hai ta',
        artist : 'Hieuthuhai',
        music : 'music/bautroihieuthu3.mp3',
    },
                         {
        img : 'images/hoa.jpg',
        name : 'Precious',
        artist : 'DADUC',
        music : 'music/precious.mp3',
    },
                          {
        img : 'images/dd.jpg',
        name : 'Just Friends',
        artist : 'Audrey Mika',
        music : 'music/JustF.mp3',
    },
                           {
        img : 'images/ac.jpg',
        name : 'HONESTY',
        artist : '(Cover BANG YE DAM - 방예담)',
        music : 'music/Hones.mp3',
    },
                            {
        img : 'images/stay.png',
        name : 'Dịu dàng em đến',
        artist : 'Erik',
        music : 'music/diudangem.mp3',
    },
                             {
        img : 'images/abcc.jpg',
        name : 'necessary girl',
        artist : 'oceanfromtheblue',
        music : 'music/oceanfromtheblue.mp3',
    },
    
                              {
        img : 'images/a.jpg',
        name : 'You Right',
        artist : 'Doja Cat',
        music : 'music/youphai.mp3',
    },
                               {
        img : 'images/you.jpg',
        name : 'You and I',
        artist : 'Katy Perry',
        music : 'music/banandtoi.mp3',
    },
                                {
        img : 'images/am.jpg',
        name : 'Akuma no ko',
        artist : '「悪魔の子」by Ai Higuchi',
        music : 'music/Akuma.mp3',
    },
                                 {
        img : 'images/c.jpg',
        name : 'Love me like that',
        artist : 'sam kim',
        music : 'music/loveme.mp3',
    },
{
        img : 'images/ccf.jpg',
        name : 'I love you So',
        artist : 'The blue',
        music : 'music/iloveu.mp3',
    },
    
];

loadTrack(track_index);

function loadTrack(track_index){
    clearInterval(updateTimer);
    reset();

    curr_track.src = music_list[track_index].music;
    curr_track.load();

    track_art.style.backgroundImage = "url(" + music_list[track_index].img + ")";
    track_name.textContent = music_list[track_index].name;
    track_artist.textContent = music_list[track_index].artist;
    now_playing.textContent = "Playing music " + (track_index + 1) + " of " + music_list.length;

    updateTimer = setInterval(setUpdate, 1000);

    curr_track.addEventListener('ended', nextTrack);
    random_bg_color();
}

function random_bg_color(){
    let hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e'];
    let a;

    function populate(a){
        for(let i=0; i<6; i++){
            let x = Math.round(Math.random() * 14);
            let y = hex[x];
            a += y;
        }
        return a;
    }
    let Color1 = populate('#');
    let Color2 = populate('#');
    var angle = 'to right';

    let gradient = 'linear-gradient(' + angle + ',' + Color1 + ', ' + Color2 + ")";
    document.body.style.background = gradient;
}
function reset(){
    curr_time.textContent = "00:00";
    total_duration.textContent = "00:00";
    seek_slider.value = 0;
}
function randomTrack(){
    isRandom ? pauseRandom() : playRandom();
}
function playRandom(){
    isRandom = true;
    randomIcon.classList.add('randomActive');
}
function pauseRandom(){
    isRandom = false;
    randomIcon.classList.remove('randomActive');
}
function repeatTrack(){
    let current_index = track_index;
    loadTrack(current_index);
    playTrack();
}
function playpauseTrack(){
    isPlaying ? pauseTrack() : playTrack();
}
function playTrack(){
    curr_track.play();
    isPlaying = true;
    track_art.classList.add('rotate');
    wave.classList.add('loader');
    playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}
function pauseTrack(){
    curr_track.pause();
    isPlaying = false;
    track_art.classList.remove('rotate');
    wave.classList.remove('loader');
    playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
}
function nextTrack(){
    if(track_index < music_list.length - 1 && isRandom === false){
        track_index += 1;
    }else if(track_index < music_list.length - 1 && isRandom === true){
        let random_index = Number.parseInt(Math.random() * music_list.length);
        track_index = random_index;
    }else{
        track_index = 0;
    }
    loadTrack(track_index);
    playTrack();
}
function prevTrack(){
    if(track_index > 0){
        track_index -= 1;
    }else{
        track_index = music_list.length -1;
    }
    loadTrack(track_index);
    playTrack();
}
function seekTo(){
    let seekto = curr_track.duration * (seek_slider.value / 100);
    curr_track.currentTime = seekto;
}
function setVolume(){
    curr_track.volume = volume_slider.value / 100;
}
function setUpdate(){
    let seekPosition = 0;
    if(!isNaN(curr_track.duration)){
        seekPosition = curr_track.currentTime * (100 / curr_track.duration);
        seek_slider.value = seekPosition;

        let currentMinutes = Math.floor(curr_track.currentTime / 60);
        let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
        let durationMinutes = Math.floor(curr_track.duration / 60);
        let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

        if(currentSeconds < 10) {currentSeconds = "0" + currentSeconds; }
        if(durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
        if(currentMinutes < 10) {currentMinutes = "0" + currentMinutes; }
        if(durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

        curr_time.textContent = currentMinutes + ":" + currentSeconds;
        total_duration.textContent = durationMinutes + ":" + durationMinutes;
    }
}
