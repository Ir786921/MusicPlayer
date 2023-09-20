import data from "./data.json" assert { type: 'json' };
import Searchdata from "./SearchSong.json" assert { type: 'json'};
const img = document.getElementById("img");
const card = document.getElementById("mainCard");
const card1 = document.getElementById("Card1")
const card2 = document.getElementById("card2");
const card3 = document.getElementById("card3");
const card4 = document.getElementById("card4");
const play_Image = document.querySelector(".play-image");  
const play = document.getElementById("play");
const Home = document.getElementById("Home");
const LikedTab = document.getElementById("LikedTab");
const HomeTab = document.getElementById("HomeTab");
const SearchTab = document.getElementById("SearchTab");
const heart = document.getElementById("heart");
const image2 = document.getElementById("image2");
const name1 = document.getElementById("name1");
const searchText = document.getElementById("searchText");
const searchResult = document.getElementById("serachResult");
const searchImage = document.getElementById("searchImage");
const listItem = document.getElementById("listItem1");
const recent = document.getElementById("recent");
const SearchSong = document.getElementById("SearchSong");
const playbtn = document.getElementById("play");
const playerContainr = document.getElementById("playerContainr");
const SideImage = document.getElementById("SideImage");
const audio = document.createElement("audio");
const SideName = document.getElementById("SideName");
const artistContainer = document.getElementById("artistContainer");
const progress = document.getElementById("progress");
const songplay = document.getElementById("play/pause");
const backward = document.getElementById("backward");
const forward = document.getElementById("forward");
const CtrlIcon = document.getElementById("CtrlIcon");



// Home New Release

Searchdata.NewRelease.map((element)=>{
    const cardcont = document.createElement("div");
    cardcont.classList = "cardContainer";
    cardcont.id = element.id;
     const img =document.createElement("img");
     img.src = element.image_source;
     img.alt = "poster";
     img.classList = "img"
     const name = document.createElement("p");
     name.innerHTML = element.song_name;
     name.classList="name";
     const play = document.createElement("span");
     play.addEventListener('click',()=>{
        clicked2(element.image_source,element.song_name,element.quality.low,element.singers,element.album_name,element.release_date,element.id);
     });
         play.innerHTML = `<i class="fa-regular fa-circle-play"></i>`;
     cardcont.append(img,name,play);
     card1.appendChild(cardcont);
})



// Audio Controls



audio.src = " ";
playerContainr.appendChild(audio);
audio.onloadedmetadata = function () {
    progress.max = audio.duration;
    progress.value = audio.currentTime;
}

CtrlIcon.addEventListener('click',()=>{
    if (CtrlIcon.classList.contains("fa-pause")) {
        audio.pause();
        CtrlIcon.classList.remove("fa-pause");
        CtrlIcon.classList.add("fa-play");

    }
    else{
        audio.play();
        CtrlIcon.classList.add("fa-pause");
        CtrlIcon.classList.remove("fa-play");

    }
})

if (audio.play()) {
    setInterval(()=>{
        progress.value = audio.currentTime;
       
    },500);
  
}
progress.onchange = function (params) {
    audio.play();
    audio.currentTime = progress.value
}
const volume = document.getElementById("volume");
volume.onchange = function (params) {
    audio.volume = volume.value/100;
}
audio.volume = volume.value/100;

let volumeValue = volume.value/100;

const sound = document.getElementById("sound");


sound.onclick = function () {
  
   const volIcon = document.getElementById("volIcon");
   volIcon.classList.toggle("fa-volume-high");
   volIcon.classList.toggle("fa-volume-xmark");
   if (volIcon.classList.contains("fa-volume-xmark")) {
       audio.volume = 0;
       volume.value = 0;
       sound.title = `speaker:0%`
   }

   if (volIcon.classList.contains("fa-volume-high")) {
    audio.volume = 0.6;
    volume.value = audio.volume*100;
    sound.title = `speaker:${volumeValue*100}%`;
}


}


// Extracting All song from Searchsong json file

const {All} = Searchdata ;



//  Implementing Search Bar

searchText.addEventListener('keyup', (event)=>{
         
   var searchQuery = event.target.value; 
   const name = All.map((element)=>{
   return  {name:element.song_name,url:element.image_source,song:element.quality.low,singer:element.singers,album_name:element.album_name,date:element.release_date,id:element.id};

   });

   var filterSong = name.filter((element)=>{
    return element.name.toLowerCase() === searchQuery.toLowerCase();
   });
       
   console.log(filterSong);
   if (filterSong.length!=0) {
    recent.classList.add("d-none");
    playbtn.classList.remove("d-none");
    SearchSong.classList.remove("d-none");

filterSong.map((element)=>{
        searchResult.innerHTML = element.name;
        searchImage.setAttribute("src",element.url);
        play.addEventListener('click',()=>{
            clicked2(element.url,element.name,element.song,element.singer,element.album_name,element.release_date,element.id);
        });
        
       })
    
   }
   else{
    recent.classList.remove("d-none");
    SearchSong.classList.add("d-none");
}
});



//  Side bar tabs

const LikedSong = document.getElementById("LikedSong");
const searchSec = document.getElementById("SearchSection");


// Extracting Song from Data.json file

const {cardbox} = data;
console.log(cardbox);
const {songscards} = cardbox[0];
console.log(songscards);
const {playlist} = songscards[0];
const bollywood50 = songscards[1].playlist;
const newHot = songscards[2].playlist;
const love23 = songscards[3].playlist;
const newplaylist = document.getElementById("newplaylist");

// adding listener to side tabs

function LikedClicked(){
    Home.classList.add("d-none");
    LikedSong.classList.remove("d-none");
    searchSec.classList.add("d-none");
    broseResult.classList.add("d-none");
    newplaylist.classList.add("d-none");
    lyricsSection.classList.add("d-none");




}
function HomeClicked(){
    Home.classList.remove("d-none");
    LikedSong.classList.add("d-none");
    searchSec.classList.add("d-none");
    broseResult.classList.add("d-none");
    newplaylist.classList.add("d-none");
    lyricsSection.classList.add("d-none");




}
function SearchClicked(){
    Home.classList.add("d-none");
    LikedSong.classList.add("d-none");
    searchSec.classList.remove("d-none");
    broseResult.classList.add("d-none");
    newplaylist.classList.add("d-none");
    lyricsSection.classList.add("d-none");





}
function NewTabclicked() {
    Home.classList.add("d-none");
    LikedSong.classList.add("d-none");
    broseResult.classList.add("d-none");
    searchSec.classList.add("d-none");
    newplaylist.classList.remove("d-none");
    lyricsSection.classList.add("d-none");

}

function lyricsClicked() {
    Home.classList.add("d-none");
    LikedSong.classList.add("d-none");
    broseResult.classList.add("d-none");
    searchSec.classList.add("d-none");
    newplaylist.classList.add("d-none");
    lyricsSection.classList.remove("d-none");
    const text = document.getElementById("text");
    const id = image2.getAttribute("alt");
     const filterLyrics = lyricsArray.filter((element)=>{
        return  element.id == id;
     });
     console.log(filterLyrics);
     text.innerHTML = filterLyrics[0].lyrics;


}

// Implementing Lyrics section

 const lyricsSection = document.getElementById("lyricsSection");

LikedTab.addEventListener('click',LikedClicked)
HomeTab.addEventListener('click',HomeClicked);
SearchTab.addEventListener('click',SearchClicked);
const newPlayListTab = document.getElementById("newPlayListTab");
newPlayListTab.addEventListener('click',NewTabclicked);


const newContainer =document.getElementById("newContainer");
const Queue = document.getElementById("queue");

Queue.addEventListener('click',()=>{
    const likedCard = document.createElement("div");
    const image = document.createElement("img");
    image.src = image2.getAttribute("src");
      newContainer.classList = "tw-flex tw-flex-wrap"
   image.classList = "tw-w-32 tw-rounded-md tw-opacity-[0.8]"
    const name  = document.createElement("h4");
    name.innerHTML = name1.innerHTML;
    name.classList = "tw-text-white tw-text-center tw-p-2 tw-overflow-hidden tw-w-24"
    likedCard.classList = "tw-bg-slate-900 tw-rounded-md tw-p-2 d-inline-block tw-m-3"
    likedCard.append(image,name);
   

    newContainer.append(likedCard);
        
})



// implementing Like section


heart.addEventListener('click',()=>{
    const likedCard = document.createElement("div");
    const image = document.createElement("img");
    image.src = image2.getAttribute("src");
      const likeContainer = document.getElementById("likeContainer");
      likeContainer.classList = "tw-flex tw-flex-wrap"
   image.classList = "tw-w-32 tw-rounded-md tw-opacity-[0.8]"
    const name  = document.createElement("h6");
    name.innerHTML = name1.innerHTML;

    name.classList = "tw-text-white tw-p-2 tw-overflow-hidden tw-w-32"
    likedCard.classList = "tw-bg-slate-900 tw-rounded-md tw-p-2 d-inline-block tw-m-3 tw-overflow-hidden"
    likedCard.append(image,name);
   

    heart.classList.toggle("tw-text-red-600");
    heart.classList.toggle("text-white");
    if (heart.classList.contains("tw-text-red-600")) {
             
             likeContainer.append(likedCard);
         }
         if (heart.classList.contains("text-white"))
          {
              likeContainer.removeChild(likeContainer.lastChild);
         }         
});


//  Implementing Play Section

function clicked2(image_source,song_name,song,singer,album_name,date,id) {
    const repeat = document.getElementById("repeat");

    const image = document.getElementById("image2");
    image.src = image_source;
    image.alt = id;
    play.classList.remove("fa-circle-play");
    play.classList.add("fa-circle-pause");

    const name = document.getElementById("name1");
    const ReleaseDate = document.getElementById("date") ;
    ReleaseDate.innerHTML = date;
    const album = document.getElementById("album");
    album.innerHTML = album_name;
    name.innerHTML = song_name;
    play_Image.append(image,name);
    
    const Artist = document.getElementById("Artist");
    Artist.innerHTML = "Artists"
    
    const name2 = document.getElementById("SongName");
    name2.innerHTML = song_name
    name2.classList = "tw-text-white";
  
    CtrlIcon.classList.add("fa-pause");
    CtrlIcon.classList.remove("fa-play");
   
    const image2 = document.getElementById("SongPoster");
    image2.src = image_source;
    image2.classList = "tw-w-full tw-rounded-lg tw-outline hover:tw-outline-red-400"
   
 const ArtistImage = document.getElementById("artistImage");
    const Artistname = document.getElementById("artistName");
     ArtistImage.src  = singer[0]?.image;
      ArtistImage.classList.remove("tw-opacity-0");
     Artistname.innerHTML = singer[0]?.name;
     const ArtistImage2 = document.getElementById("artistImage2");
     const Artistname2 = document.getElementById("artistName2");
     ArtistImage2.src  = singer[1]?.image;
    ArtistImage2.classList.remove("tw-opacity-0");
   Artistname2.innerHTML = singer[1]?.name;
       
   audio.src = song;
    audio.autoplay = true;

 heart.classList.remove("tw-text-red-600");
    heart.classList.add("text-white");

    forward.addEventListener('click',()=>{
        id = id+1;
      const nextSong = All.filter((element)=>{
   return element.id === id;
      });
      
       nextSong.map((element)=>{
        clicked2(element.image_source,element.song_name,element.quality.low,element.singers,element.album_name,element.release_date,element.id);
       })
    });
    backward.addEventListener('click',()=>{
        id = id-1;
        const prevSong = All.filter((element)=>{
            return element.id === id;
               });
               
                prevSong.map((element)=>{
                 clicked2(element.image_source,element.song_name,element.quality.low,element.singers,element.album_name,element.release_date,element.id);
                })
    })

    audio.addEventListener('ended',()=>{
        if (repeat.classList.contains("clicked")) {
                 
            const nextSong = All.filter((element)=>{
                return element.id === id;
                   });
                   nextSong.map((element)=>{
                     audio.src = element.quality.low;
                     image.src = element.image_source;
                     name.innerHTML = element.song_name;
                     name2.innerHTML = song_name;
                     image2.src = element.image_source;
                     ReleaseDate.innerHTML =element.release_date ;
                     album.innerHTML = element.album_name;
             
                       
              const ArtistImage = document.getElementById("artistImage");
              const Artistname = document.getElementById("artistName");
               ArtistImage.src  = element.singers[0]?.image;
                ArtistImage.classList.remove("tw-opacity-0");
               Artistname.innerHTML = element.singers[0]?.name;
               const ArtistImage2 = document.getElementById("artistImage2");
               const Artistname2 = document.getElementById("artistName2");
               ArtistImage2.src  = element.singers[1]?.image;
              ArtistImage2.classList.remove("tw-opacity-0");
             Artistname2.innerHTML = element.singers[1]?.name;
                      })
              }
        if (!repeat.classList.contains("clicked")) {
            id = id+1;
            const nextSong = All.filter((element)=>{
                return element.id === id;
                   });
                   nextSong.map((element)=>{
                     audio.src = element.quality.low;
                     image.src = element.image_source;
                     name.innerHTML = element.song_name;
                     name2.innerHTML = song_name;
                     image2.src = element.image_source;
                     ReleaseDate.innerHTML =element.release_date ;
                     album.innerHTML = element.album_name;
             
                       
              const ArtistImage = document.getElementById("artistImage");
              const Artistname = document.getElementById("artistName");
               ArtistImage.src  = element.singers[0]?.image;
                ArtistImage.classList.remove("tw-opacity-0");
               Artistname.innerHTML = element.singers[0]?.name;
               const ArtistImage2 = document.getElementById("artistImage2");
               const Artistname2 = document.getElementById("artistName2");
               ArtistImage2.src  = element.singers[1]?.image;
              ArtistImage2.classList.remove("tw-opacity-0");
             Artistname2.innerHTML = element.singers[1]?.name;
                     })
}
        
 })

  
repeat.onclick = function () {
     repeat.classList.add("clicked")
}

}




// Displaying Different songs in the Home section


playlist.forEach(element => {

const cardcont = document.createElement("div");
cardcont.classList = "cardContainer";
cardcont.id = element.id;
 const img =document.createElement("img");
 img.src = element.image_source;
 img.alt = "poster";
 img.classList = "img"
 const name = document.createElement("p");
 name.innerHTML = element.song_name;
 name.classList="name";
 const play = document.createElement("span");
 play.addEventListener('click',()=>{
    clicked2(element.image_source,element.song_name,element.quality.low,element.singers,element.album_name,element.release_date,element.id);
 });
     play.innerHTML = `<i class="fa-regular fa-circle-play"></i>`;
 cardcont.append(img,name,play);
 card.appendChild(cardcont);
 
 
});
bollywood50.forEach(element => {
    const cardcont = document.createElement("div");
    cardcont.classList = "cardContainer";
     const img =document.createElement("img");
     img.src = element.image_source;
     img.alt = "poster";
     img.classList = "img"
     const name = document.createElement("p");
     name.innerHTML = element.song_name;
     name.classList="name";
     const play = document.createElement("span");
     play.addEventListener('click',()=>{
        clicked2(element.image_source,element.song_name,element.quality.low,element.singers,element.album_name,element.release_date,element.id);
     });
     play.innerHTML = `<i class="fa-regular fa-circle-play"></i>`;
     cardcont.append(img,name,play);
     card2.appendChild(cardcont);
     
    });


newHot.forEach(element => {
        const cardcont = document.createElement("div");
        cardcont.classList = "cardContainer";
        cardcont.id = element.id;
         const img =document.createElement("img");
         img.src = element.image_source;
         img.alt = "poster";
         img.classList = "img"
         const name = document.createElement("p");
         name.innerHTML = element.song_name;
         name.classList="name";
        
         const play = document.createElement("span");
         play.addEventListener('click',()=>{
            clicked2(element.image_source,element.song_name,element.quality.low,element.singers,element.album_name,element.release_date,element.id);
         });
     play.innerHTML = `<i class="fa-regular fa-circle-play"></i>`;
         cardcont.append(img,name,play);
         card3.appendChild(cardcont);
         
        });


love23.forEach(element => {
            const cardcont = document.createElement("div");
            cardcont.classList = "cardContainer";
            cardcont.id = element.id;

             const img =document.createElement("img");
             img.src = element.image_source;
             img.alt = "poster";
             img.classList = "img"
             const name = document.createElement("p");
             name.innerHTML = element.song_name;
             name.classList="name";
             const play = document.createElement("span");
             play.addEventListener('click',()=>{
                clicked2(element.image_source,element.song_name,element.quality.low,element.singers,element.album_name,element.release_date,element.id);
             });
     play.innerHTML = `<i class="fa-regular fa-circle-play"></i>`;
             cardcont.append(img,name,play);
             card4.appendChild(cardcont);
             
             
            });        

//  Search Section Goes here


const party = document.getElementById("party");
 const songContainer9 =document.getElementById("SongContainer9");
 party.addEventListener('click',()=>{
    songContainer7.classList.add("d-none")
    songContainer6.classList.add("d-none")
    songContainer5.classList.add("d-none")
    songContainer4.classList.add("d-none")
    songContainer3.classList.add("d-none")
    songContainer2.classList.add("d-none")
    songContainer.classList.add("d-none")
    singerAlan.classList.add("d-none");
    singerDev.classList.add("d-none")
    singerAnirudh.classList.add("d-none");
    singerAkhil.classList.add("d-none");
    singerjass.classList.add("d-none");
    singersalena.classList.add("d-none");
    singersachet.classList.add("d-none");
    singeranuv.classList.add("d-none");
    singerArjit.classList.add("d-none");
    singerjustin.classList.add("d-none")
    songContainer8.classList.add("d-none")
    songContainer9.classList.remove("d-none")











    broseResult.classList.remove("d-none");
    searchSec.classList.add("d-none");
    Searchdata.Party.map((element)=>{
        const cardcont = document.createElement("div");
        cardcont.classList = "cardContainer";
        cardcont.id = element.id;

         const img =document.createElement("img");
         img.src = element.image_source;
         img.alt = "poster";
         img.classList = "img"
         const name = document.createElement("p");
         name.innerHTML = element.song_name;
         name.classList="name";
         const play = document.createElement("span");
         play.addEventListener('click',()=>{
            clicked2(element.image_source,element.song_name,element.quality.low,element.singers,element.album_name,element.release_date,element.id);
         });
 play.innerHTML = `<i class="fa-regular fa-circle-play"></i>`;
         cardcont.append(img,name,play);
         songContainer9.appendChild(cardcont);
    })
    

});

const hindi = document.getElementById('hindi');
const broseResult = document.getElementById('BrowseResult');
const songContainer = document.getElementById("SongContainer");
hindi.addEventListener('click',()=>{
    songContainer7.classList.add("d-none")
    songContainer6.classList.add("d-none")
    songContainer5.classList.add("d-none")
    songContainer4.classList.add("d-none")
    songContainer3.classList.add("d-none")
    songContainer2.classList.add("d-none")
    songContainer.classList.remove("d-none")
    singerAlan.classList.add("d-none");
    singerDev.classList.add("d-none")
    singerAnirudh.classList.add("d-none");
    singerAkhil.classList.add("d-none");
    singerjass.classList.add("d-none");
    singersalena.classList.add("d-none");
    singersachet.classList.add("d-none");
    singeranuv.classList.add("d-none");
    singerArjit.classList.add("d-none");
    singerjustin.classList.add("d-none")
    songContainer8.classList.add("d-none")
    songContainer9.classList.add("d-none")











    broseResult.classList.remove("d-none");
    searchSec.classList.add("d-none");
    Searchdata.Hindi.map((element)=>{
        const cardcont = document.createElement("div");
        cardcont.classList = "cardContainer";
        cardcont.id = element.id;

         const img =document.createElement("img");
         img.src = element.image_source;
         img.alt = "poster";
         img.classList = "img"
         const name = document.createElement("p");
         name.innerHTML = element.song_name;
         name.classList="name";
         const play = document.createElement("span");
         play.addEventListener('click',()=>{
            clicked2(element.image_source,element.song_name,element.quality.low,element.singers,element.album_name,element.release_date,element.id);
         });
 play.innerHTML = `<i class="fa-regular fa-circle-play"></i>`;
         cardcont.append(img,name,play);
         songContainer.appendChild(cardcont);
    })
    

});
const songContainer2 = document.getElementById("SongContainer2");
const Trending = document.getElementById('trending');
Trending.addEventListener('click',()=>{
    songContainer.classList.add("d-none")
    songContainer7.classList.add("d-none")
    songContainer6.classList.add("d-none")
    songContainer5.classList.add("d-none")
    songContainer4.classList.add("d-none")
    songContainer3.classList.add("d-none")
    songContainer2.classList.remove("d-none")
    singerAlan.classList.add("d-none");
    singerDev.classList.add("d-none")
    singerAnirudh.classList.add("d-none");
    singerAkhil.classList.add("d-none");
    singerjass.classList.add("d-none");
    singersalena.classList.add("d-none");
    singersachet.classList.add("d-none");
    singeranuv.classList.add("d-none");
    singerArjit.classList.add("d-none");
    singerjustin.classList.add("d-none")






    broseResult.classList.remove("d-none");
    searchSec.classList.add("d-none");
    Searchdata.Trending.map((element)=>{
        const cardcont = document.createElement("div");
        cardcont.classList = "cardContainer";
        cardcont.id = element.id;

         const img =document.createElement("img");
         img.src = element.image_source;
         img.alt = "poster";
         img.classList = "img"
         const name = document.createElement("p");
         name.innerHTML = element.song_name;
         name.classList="name";
         const play = document.createElement("span");
         play.addEventListener('click',()=>{
            clicked2(element.image_source,element.song_name,element.quality.low,element.singers,element.album_name,element.release_date,element.id);
         });
 play.innerHTML = `<i class="fa-regular fa-circle-play"></i>`;
         cardcont.append(img,name,play);
         songContainer2.appendChild(cardcont);
    })
});
const songContainer3 = document.getElementById("SongContainer3");

const English = document.getElementById("english");
English.addEventListener('click',()=>{
    songContainer2.classList.add("d-none")
    songContainer7.classList.add("d-none")
    songContainer6.classList.add("d-none")
    songContainer5.classList.add("d-none")
    songContainer4.classList.add("d-none")
    songContainer.classList.add("d-none")
    songContainer3.classList.remove("d-none")
    singerAlan.classList.add("d-none");
    singerDev.classList.add("d-none")
    singerAnirudh.classList.add("d-none");
    singerAkhil.classList.add("d-none");
    singerjass.classList.add("d-none");
    singersalena.classList.add("d-none");
    singersachet.classList.add("d-none");
    singeranuv.classList.add("d-none");
    singerArjit.classList.add("d-none");
    singerjustin.classList.add("d-none")
    songContainer8.classList.add("d-none")
    songContainer9.classList.add("d-none")








    broseResult.classList.remove("d-none");
    searchSec.classList.add("d-none");
    Searchdata.English.map((element)=>{
        const cardcont = document.createElement("div");
        cardcont.classList = "cardContainer";
        cardcont.id = element.id;

         const img =document.createElement("img");
         img.src = element.image_source;
         img.alt = "poster";
         img.classList = "img"
         const name = document.createElement("p");
         name.innerHTML = element.song_name;
         name.classList="name";
         const play = document.createElement("span");
         play.addEventListener('click',()=>{
            clicked2(element.image_source,element.song_name,element.quality.low,element.singers,element.album_name,element.release_date,element.id);
         });
 play.innerHTML = `<i class="fa-regular fa-circle-play"></i>`;
         cardcont.append(img,name,play);
         songContainer3.appendChild(cardcont);
    })
});
const songContainer4 = document.getElementById("SongContainer4");

const Independent = document.getElementById("independent");
Independent.addEventListener('click',()=>{
    songContainer2.classList.add("d-none")
    songContainer7.classList.add("d-none")
    songContainer6.classList.add("d-none")
    songContainer5.classList.add("d-none")
    songContainer3.classList.add("d-none")
    songContainer.classList.add("d-none")
    songContainer4.classList.remove("d-none")
    singerAlan.classList.add("d-none");
    singerDev.classList.add("d-none")
    singerAnirudh.classList.add("d-none");
    singerAkhil.classList.add("d-none");
    singerjass.classList.add("d-none");
    singersalena.classList.add("d-none");
    singersachet.classList.add("d-none");
    singeranuv.classList.add("d-none");
    singerArjit.classList.add("d-none");
    singerjustin.classList.add("d-none")
    songContainer8.classList.add("d-none")
    songContainer9.classList.add("d-none")






    broseResult.classList.remove("d-none");
    searchSec.classList.add("d-none");
    Searchdata.Independent.map((element)=>{
        const cardcont = document.createElement("div");
        cardcont.classList = "cardContainer";
        cardcont.id = element.id;

         const img =document.createElement("img");
         img.src = element.image_source;
         img.alt = "poster";
         img.classList = "img"
         const name = document.createElement("p");
         name.innerHTML = element.song_name;
         name.classList="name";
         const play = document.createElement("span");
         play.addEventListener('click',()=>{
            clicked2(element.image_source,element.song_name,element.quality.low,element.singers,element.album_name,element.release_date,element.id);
         });
 play.innerHTML = `<i class="fa-regular fa-circle-play"></i>`;
         cardcont.append(img,name,play);
         songContainer4.appendChild(cardcont);
    })
});
const songContainer5 = document.getElementById("SongContainer5");

const Release = document.getElementById("release");
Release.addEventListener('click',()=>{
    songContainer2.classList.add("d-none")
    songContainer7.classList.add("d-none")
    songContainer6.classList.add("d-none")
    songContainer3.classList.add("d-none")
    songContainer4.classList.add("d-none")
    songContainer.classList.add("d-none")
    songContainer5.classList.remove("d-none")
    singerAlan.classList.add("d-none");
    singerDev.classList.add("d-none")
    singerAnirudh.classList.add("d-none");
    singerAkhil.classList.add("d-none");
    singerjass.classList.add("d-none");
    singersalena.classList.add("d-none");
    singersachet.classList.add("d-none");
    singeranuv.classList.add("d-none");
    singerArjit.classList.add("d-none");
    singerjustin.classList.add("d-none")
    songContainer8.classList.add("d-none")
    songContainer9.classList.add("d-none")






    broseResult.classList.remove("d-none");
    searchSec.classList.add("d-none");
    Searchdata.NewRelease.map((element)=>{
        const cardcont = document.createElement("div");
        cardcont.classList = "cardContainer";
        cardcont.id = element.id;

         const img =document.createElement("img");
         img.src = element.image_source;
         img.alt = "poster";
         img.classList = "img"
         const name = document.createElement("p");
         name.innerHTML = element.song_name;
         name.classList="name";
         const play = document.createElement("span");
         play.addEventListener('click',()=>{
            clicked2(element.image_source,element.song_name,element.quality.low,element.singers,element.album_name,element.release_date,element.id);
         });
 play.innerHTML = `<i class="fa-regular fa-circle-play"></i>`;
         cardcont.append(img,name,play);
         songContainer5.appendChild(cardcont);
    })
});
const songContainer6 = document.getElementById("SongContainer6");

const love = document.getElementById("love");
love.addEventListener('click',()=>{
    songContainer2.classList.add("d-none")
    songContainer7.classList.add("d-none")
    songContainer3.classList.add("d-none")
    songContainer5.classList.add("d-none")
    songContainer4.classList.add("d-none")
    songContainer.classList.add("d-none")
    songContainer6.classList.remove("d-none")
    singerAlan.classList.add("d-none");
    singerDev.classList.add("d-none")
    singerAnirudh.classList.add("d-none");
    singerAkhil.classList.add("d-none");
    singerjass.classList.add("d-none");
    singersalena.classList.add("d-none");
    singersachet.classList.add("d-none");
    singeranuv.classList.add("d-none");
    singerArjit.classList.add("d-none");
    singerjustin.classList.add("d-none")
    songContainer8.classList.add("d-none")
    songContainer9.classList.add("d-none")






    broseResult.classList.remove("d-none");
    searchSec.classList.add("d-none");
    Searchdata.Love.map((element)=>{
        const cardcont = document.createElement("div");
        cardcont.classList = "cardContainer";
        cardcont.id = element.id;

         const img =document.createElement("img");
         img.src = element.image_source;
         img.alt = "poster";
         img.classList = "img"
         const name = document.createElement("p");
         name.innerHTML = element.song_name;
         name.classList="name";
         const play = document.createElement("span");
         play.addEventListener('click',()=>{
            clicked2(element.image_source,element.song_name,element.quality.low,element.singers,element.album_name,element.release_date,element.id);
         });
 play.innerHTML = `<i class="fa-regular fa-circle-play"></i>`;
         cardcont.append(img,name,play);
         songContainer6.appendChild(cardcont);
    })
});
const songContainer7 = document.getElementById("SongContainer7");

const workout = document.getElementById("workout");
workout.addEventListener('click',()=>{
    songContainer6.classList.add("d-none")
    songContainer2.classList.add("d-none")
    songContainer3.classList.add("d-none")
    songContainer5.classList.add("d-none")
    songContainer4.classList.add("d-none")
    songContainer.classList.add("d-none")
    songContainer7.classList.remove("d-none")
    singerAlan.classList.add("d-none");
    singerDev.classList.add("d-none")
    singerAnirudh.classList.add("d-none");
    singerAkhil.classList.add("d-none");
    singerjass.classList.add("d-none");
    singersalena.classList.add("d-none");
    singersachet.classList.add("d-none");
    singeranuv.classList.add("d-none");
    singerArjit.classList.add("d-none");
    singerjustin.classList.add("d-none")
    songContainer8.classList.add("d-none")
    songContainer9.classList.add("d-none")








    broseResult.classList.remove("d-none");
    searchSec.classList.add("d-none");
    Searchdata.Workout.map((element)=>{
        const cardcont = document.createElement("div");
        cardcont.classList = "cardContainer";
        cardcont.id = element.id;

         const img =document.createElement("img");
         img.src = element.image_source;
         img.alt = "poster";
         img.classList = "img"
         const name = document.createElement("p");
         name.innerHTML = element.song_name;
         name.classList="name";
         const play = document.createElement("span");
         play.addEventListener('click',()=>{
            clicked2(element.image_source,element.song_name,element.quality.low,element.singers,element.album_name,element.release_date,element.id);
         });
 play.innerHTML = `<i class="fa-regular fa-circle-play"></i>`;
         cardcont.append(img,name,play);
         songContainer7.appendChild(cardcont);
    })
});


const punjabi = document.getElementById("punjabi");
const songContainer8 = document.getElementById("SongContainer8");
punjabi.addEventListener('click',()=>{
    songContainer6.classList.add("d-none")
    songContainer2.classList.add("d-none")
    songContainer3.classList.add("d-none")
    songContainer5.classList.add("d-none")
    songContainer4.classList.add("d-none")
    songContainer.classList.add("d-none")
    songContainer7.classList.add("d-none")
    singerAlan.classList.add("d-none");
    singerDev.classList.add("d-none")
    singerAnirudh.classList.add("d-none");
    singerAkhil.classList.add("d-none");
    singerjass.classList.add("d-none");
    singersalena.classList.add("d-none");
    singersachet.classList.add("d-none");
    singeranuv.classList.add("d-none");
    singerArjit.classList.add("d-none");
    singerjustin.classList.add("d-none")
    songContainer8.classList.remove("d-none")
    songContainer9.classList.add("d-none")


    






    broseResult.classList.remove("d-none");
    searchSec.classList.add("d-none");
    Searchdata.Punjabi.map((element)=>{
        const cardcont = document.createElement("div");
        cardcont.classList = "cardContainer";
        cardcont.id = element.id;

         const img =document.createElement("img");
         img.src = element.image_source;
         img.alt = "poster";
         img.classList = "img"
         const name = document.createElement("p");
         name.innerHTML = element.song_name;
         name.classList="name";
         const play = document.createElement("span");
         play.addEventListener('click',()=>{
            clicked2(element.image_source,element.song_name,element.quality.low,element.singers,element.album_name,element.release_date,element.id);
         });
 play.innerHTML = `<i class="fa-regular fa-circle-play"></i>`;
         cardcont.append(img,name,play);
         songContainer8.appendChild(cardcont);
    })
});



const FilterArjitSongs = All.filter((element)=>{
    return element.singers[0].name === "Arjit Singh";
});
const arjit = document.getElementById("arjit");
const singerArjit = document.getElementById("singerArjit");
arjit.addEventListener('click',()=>{
    songContainer6.classList.add("d-none")
    songContainer2.classList.add("d-none")
    songContainer3.classList.add("d-none")
    songContainer5.classList.add("d-none")
    songContainer4.classList.add("d-none")
    songContainer.classList.add("d-none")
    songContainer7.classList.add("d-none")
    singerArjit.classList.remove("d-none");
    singerAlan.classList.add("d-none");
    singerDev.classList.add("d-none")
    singerAnirudh.classList.add("d-none");
    singerAkhil.classList.add("d-none");
    singerjass.classList.add("d-none");
    singersalena.classList.add("d-none");
    singersachet.classList.add("d-none");
    singeranuv.classList.add("d-none");
    singerjustin.classList.add("d-none")
    songContainer8.classList.add("d-none")
    songContainer9.classList.add("d-none")










    broseResult.classList.remove("d-none");
    searchSec.classList.add("d-none");
    FilterArjitSongs.map((element)=>{
        const cardcont = document.createElement("div");
        cardcont.classList = "cardContainer";
        cardcont.id = element.id;

         const img =document.createElement("img");
         img.src = element.image_source;
         img.alt = "poster";
         img.classList = "img"
         const name = document.createElement("p");
         name.innerHTML = element.song_name;
         name.classList="name";
         const play = document.createElement("span");
         play.addEventListener('click',()=>{
            clicked2(element.image_source,element.song_name,element.quality.low,element.singers,element.album_name,element.release_date,element.id);
         });
 play.innerHTML = `<i class="fa-regular fa-circle-play"></i>`;
         cardcont.append(img,name,play);
         singerArjit.appendChild(cardcont);
    })
});
const FilterDevSongs = All.filter((element)=>{
    return element.singers[1].name === "Dev Negi";
});

const dev = document.getElementById("dev");
const singerDev = document.getElementById("singerDev");
dev.addEventListener('click',()=>{
    songContainer6.classList.add("d-none")
    songContainer2.classList.add("d-none")
    songContainer3.classList.add("d-none")
    songContainer5.classList.add("d-none")
    songContainer4.classList.add("d-none")
    songContainer.classList.add("d-none")
    songContainer7.classList.add("d-none");
    singerArjit.classList.add("d-none");
    singerAlan.classList.add("d-none");
    singerDev.classList.remove("d-none");
    singerAnirudh.classList.add("d-none");
    singerAkhil.classList.add("d-none");
    singerjass.classList.add("d-none");
    singersalena.classList.add("d-none");
    singersachet.classList.add("d-none");
    singeranuv.classList.add("d-none");
    singerjustin.classList.add("d-none")
    songContainer8.classList.add("d-none")
    songContainer9.classList.add("d-none")








    broseResult.classList.remove("d-none");
    searchSec.classList.add("d-none");
    FilterDevSongs.map((element)=>{
        const cardcont = document.createElement("div");
        cardcont.classList = "cardContainer";
        cardcont.id = element.id;

         const img =document.createElement("img");
         img.src = element.image_source;
         img.alt = "poster";
         img.classList = "img"
         const name = document.createElement("p");
         name.innerHTML = element.song_name;
         name.classList="name";
         const play = document.createElement("span");
         play.addEventListener('click',()=>{
            clicked2(element.image_source,element.song_name,element.quality.low,element.singers,element.album_name,element.release_date,element.id);
         });
 play.innerHTML = `<i class="fa-regular fa-circle-play"></i>`;
         cardcont.append(img,name,play);
         singerDev.appendChild(cardcont);
         
    })
} );



const FilterAlanSongs = All.filter((element)=>{
    return element.singers[0].name === "Alan Walker";
});

const Alan = document.getElementById("alan");
const singerAlan = document.getElementById("singerAlan");
Alan.addEventListener('click',()=>{
    songContainer6.classList.add("d-none")
    songContainer2.classList.add("d-none")
    songContainer3.classList.add("d-none")
    songContainer5.classList.add("d-none")
    songContainer4.classList.add("d-none")
    songContainer.classList.add("d-none")
    songContainer7.classList.add("d-none");
    singerArjit.classList.add("d-none");
    singerDev.classList.add("d-none");
    singerAlan.classList.remove("d-none");
    singerAnirudh.classList.add("d-none");
    singerAkhil.classList.add("d-none");
    singerjass.classList.add("d-none");
    singersalena.classList.add("d-none");
    singersachet.classList.add("d-none");
    singeranuv.classList.add("d-none");
    singerjustin.classList.add("d-none")
    songContainer8.classList.add("d-none")
    songContainer9.classList.add("d-none")








    broseResult.classList.remove("d-none");
    searchSec.classList.add("d-none");
    FilterAlanSongs.map((element)=>{
        const cardcont = document.createElement("div");
        cardcont.classList = "cardContainer";
        cardcont.id = element.id;

         const img =document.createElement("img");
         img.src = element.image_source;
         img.alt = "poster";
         img.classList = "img"
         const name = document.createElement("p");
         name.innerHTML = element.song_name;
         name.classList="name";
         const play = document.createElement("span");
         play.addEventListener('click',()=>{
            clicked2(element.image_source,element.song_name,element.quality.low,element.singers,element.album_name,element.release_date,element.id);
         });
 play.innerHTML = `<i class="fa-regular fa-circle-play"></i>`;
         cardcont.append(img,name,play);
         singerAlan.appendChild(cardcont);
    })
});

const FilterAnirudhSongs = All.filter((element)=>{
    return element.singers[0].name === "Anirudh Ravichandra";
});
const Anirudh = document.getElementById("anirudh");
const singerAnirudh = document.getElementById("singerAnirudh");

Anirudh.addEventListener('click',()=>{
    songContainer6.classList.add("d-none")
    songContainer2.classList.add("d-none")
    songContainer3.classList.add("d-none")
    songContainer5.classList.add("d-none")
    songContainer4.classList.add("d-none")
    songContainer.classList.add("d-none")
    songContainer7.classList.add("d-none");
    singerArjit.classList.add("d-none");
    singerDev.classList.add("d-none");
    singerAlan.classList.add("d-none");
    singerAnirudh.classList.remove("d-none");
    singerAkhil.classList.add("d-none");
    singerjass.classList.add("d-none");
    singersalena.classList.add("d-none");
    singersachet.classList.add("d-none");
    singeranuv.classList.add("d-none");
    singerjustin.classList.add("d-none")
    songContainer8.classList.add("d-none")
    songContainer9.classList.add("d-none")









    broseResult.classList.remove("d-none");
    searchSec.classList.add("d-none");
    FilterAnirudhSongs.map((element)=>{
        const cardcont = document.createElement("div");
        cardcont.classList = "cardContainer";
        cardcont.id = element.id;

         const img =document.createElement("img");
         img.src = element.image_source;
         img.alt = "poster";
         img.classList = "img"
         const name = document.createElement("p");
         name.innerHTML = element.song_name;
         name.classList="name";
         const play = document.createElement("span");
         play.addEventListener('click',()=>{
            clicked2(element.image_source,element.song_name,element.quality.low,element.singers,element.album_name,element.release_date,element.id);
         });
 play.innerHTML = `<i class="fa-regular fa-circle-play"></i>`;
         cardcont.append(img,name,play);
         singerAnirudh.appendChild(cardcont);
    })
});



const FilterAkhilSongs = All.filter((element)=>{
    return element.singers[0].name === "Akhil Sachhdeve";
});
const Akhil = document.getElementById("akhil");
const singerAkhil = document.getElementById("singerAkhil");

Akhil.addEventListener('click',()=>{
    songContainer6.classList.add("d-none")
    songContainer2.classList.add("d-none")
    songContainer3.classList.add("d-none")
    songContainer5.classList.add("d-none")
    songContainer4.classList.add("d-none")
    songContainer.classList.add("d-none")
    songContainer7.classList.add("d-none");
    singerArjit.classList.add("d-none");
    singerDev.classList.add("d-none");
    singerAlan.classList.add("d-none");
    singerAnirudh.classList.add("d-none");
    singerAkhil.classList.remove("d-none");
    singerjass.classList.add("d-none");
    singersalena.classList.add("d-none");
    singersachet.classList.add("d-none");
    singeranuv.classList.add("d-none");
    singerjustin.classList.add("d-none")
    songContainer8.classList.add("d-none")
    songContainer9.classList.add("d-none")










    broseResult.classList.remove("d-none");
    searchSec.classList.add("d-none");
    FilterAkhilSongs.map((element)=>{
        const cardcont = document.createElement("div");
        cardcont.classList = "cardContainer";
        cardcont.id = element.id;

         const img =document.createElement("img");
         img.src = element.image_source;
         img.alt = "poster";
         img.classList = "img"
         const name = document.createElement("p");
         name.innerHTML = element.song_name;
         name.classList="name";
         const play = document.createElement("span");
         play.addEventListener('click',()=>{
            clicked2(element.image_source,element.song_name,element.quality.low,element.singers,element.album_name,element.release_date,element.id);
         });
 play.innerHTML = `<i class="fa-regular fa-circle-play"></i>`;
         cardcont.append(img,name,play);
         singerAkhil.appendChild(cardcont);
    })
});





const FilterjustinSongs = All.filter((element)=>{
    return element.singers[0].name === "Justin Babier";
});
const justin = document.getElementById("justin");
const singerjustin = document.getElementById("singerjustin");

justin.addEventListener('click',()=>{
    songContainer6.classList.add("d-none")
    songContainer2.classList.add("d-none")
    songContainer3.classList.add("d-none")
    songContainer5.classList.add("d-none")
    songContainer4.classList.add("d-none")
    songContainer.classList.add("d-none")
    songContainer7.classList.add("d-none");
    singerArjit.classList.add("d-none");
    singerDev.classList.add("d-none");
    singerAlan.classList.add("d-none");
    singerAnirudh.classList.add("d-none");
    singerjass.classList.add("d-none");
    singersalena.classList.add("d-none");
    singerAkhil.classList.add("d-none");
    singerjustin.classList.remove("d-none");
    singersachet.classList.add("d-none");
    singeranuv.classList.add("d-none");
    songContainer8.classList.add("d-none")
    songContainer9.classList.add("d-none")










    broseResult.classList.remove("d-none");
    searchSec.classList.add("d-none");
    FilterjustinSongs.map((element)=>{
        const cardcont = document.createElement("div");
        cardcont.classList = "cardContainer";
        cardcont.id = element.id;

         const img =document.createElement("img");
         img.src = element.image_source;
         img.alt = "poster";
         img.classList = "img"
         const name = document.createElement("p");
         name.innerHTML = element.song_name;
         name.classList="name";
         const play = document.createElement("span");
         play.addEventListener('click',()=>{
            clicked2(element.image_source,element.song_name,element.quality.low,element.singers,element.album_name,element.release_date,element.id);
         });
 play.innerHTML = `<i class="fa-regular fa-circle-play"></i>`;
         cardcont.append(img,name,play);
         singerjustin.appendChild(cardcont);
    })
});




const FiltersalenaSongs = All.filter((element)=>{
    return element.singers[0].name === "Selena Gomez";
});
const salena = document.getElementById("selena");
const singersalena = document.getElementById("singersalena");

salena.addEventListener('click',()=>{
    songContainer6.classList.add("d-none")
    songContainer2.classList.add("d-none")
    songContainer3.classList.add("d-none")
    songContainer5.classList.add("d-none")
    songContainer4.classList.add("d-none")
    songContainer.classList.add("d-none")
    songContainer7.classList.add("d-none");
    singerArjit.classList.add("d-none");
    singerDev.classList.add("d-none");
    singerAlan.classList.add("d-none");
    singerAnirudh.classList.add("d-none");
    singersalena.classList.remove("d-none");
    singerjass.classList.add("d-none");
    singerjustin.classList.add("d-none");
    singersachet.classList.add("d-none");
    singeranuv.classList.add("d-none");
    singerAkhil.classList.add("d-none");
    songContainer8.classList.add("d-none")
    songContainer9.classList.add("d-none")









    broseResult.classList.remove("d-none");
    searchSec.classList.add("d-none");
    FiltersalenaSongs.map((element)=>{
        const cardcont = document.createElement("div");
        cardcont.classList = "cardContainer";
        cardcont.id = element.id;

         const img =document.createElement("img");
         img.src = element.image_source;
         img.alt = "poster";
         img.classList = "img"
         const name = document.createElement("p");
         name.innerHTML = element.song_name;
         name.classList="name";
         const play = document.createElement("span");
         play.addEventListener('click',()=>{
            clicked2(element.image_source,element.song_name,element.quality.low,element.singers,element.album_name,element.release_date,element.id);
         });
 play.innerHTML = `<i class="fa-regular fa-circle-play"></i>`;
         cardcont.append(img,name,play);
         singersalena.appendChild(cardcont);
    })
});




const FilterjassSongs = All.filter((element)=>{
    return element.singers[0].name === "Jass Manak";
});
const jass = document.getElementById("jass");
const singerjass = document.getElementById("singerjass");

jass.addEventListener('click',()=>{
    songContainer6.classList.add("d-none")
    songContainer2.classList.add("d-none")
    songContainer3.classList.add("d-none")
    songContainer5.classList.add("d-none")
    songContainer4.classList.add("d-none")
    songContainer.classList.add("d-none")
    songContainer7.classList.add("d-none");
    singerArjit.classList.add("d-none");
    singerDev.classList.add("d-none");
    singerAlan.classList.add("d-none");
    singerAnirudh.classList.add("d-none");
    singersalena.classList.add("d-none");
    singerjass.classList.remove("d-none");
    singerjustin.classList.add("d-none");
    singersachet.classList.add("d-none");
    singeranuv.classList.add("d-none");
    singerAkhil.classList.add("d-none");
    songContainer8.classList.add("d-none")
    songContainer9.classList.add("d-none")










    broseResult.classList.remove("d-none");
    searchSec.classList.add("d-none");
    FilterjassSongs.map((element)=>{
        const cardcont = document.createElement("div");
        cardcont.classList = "cardContainer";
        cardcont.id = element.id;

         const img =document.createElement("img");
         img.src = element.image_source;
         img.alt = "poster";
         img.classList = "img"
         const name = document.createElement("p");
         name.innerHTML = element.song_name;
         name.classList="name";
         const play = document.createElement("span");
         play.addEventListener('click',()=>{
            clicked2(element.image_source,element.song_name,element.quality.low,element.singers,element.album_name,element.release_date,element.id);
         });
 play.innerHTML = `<i class="fa-regular fa-circle-play"></i>`;
         cardcont.append(img,name,play);
         singerjass.appendChild(cardcont);
    })
});



const FiltersachetSongs = All.filter((element)=>{
    return element.singers[0].name === "Sachet Tandon";
});
const sachet = document.getElementById("sachet");
const singersachet = document.getElementById("singersachet");

sachet.addEventListener('click',()=>{
    songContainer6.classList.add("d-none")
    songContainer2.classList.add("d-none")
    songContainer3.classList.add("d-none")
    songContainer5.classList.add("d-none")
    songContainer4.classList.add("d-none")
    songContainer.classList.add("d-none")
    songContainer7.classList.add("d-none");
    singerArjit.classList.add("d-none");
    singerDev.classList.add("d-none");
    singerAlan.classList.add("d-none");
    singerAnirudh.classList.add("d-none");
    singersalena.classList.add("d-none");
    singerjass.classList.add("d-none");
    singerjustin.classList.add("d-none");
    singersachet.classList.remove("d-none");
    singeranuv.classList.add("d-none");
    singerAkhil.classList.add("d-none");
    songContainer9.classList.add("d-none")
    songContainer8.classList.add("d-none")









    broseResult.classList.remove("d-none");
    searchSec.classList.add("d-none");
    FiltersachetSongs.map((element)=>{
        const cardcont = document.createElement("div");
        cardcont.classList = "cardContainer";
        cardcont.id = element.id;

         const img =document.createElement("img");
         img.src = element.image_source;
         img.alt = "poster";
         img.classList = "img"
         const name = document.createElement("p");
         name.innerHTML = element.song_name;
         name.classList="name";
         const play = document.createElement("span");
         play.addEventListener('click',()=>{
            clicked2(element.image_source,element.song_name,element.quality.low,element.singers,element.album_name,element.release_date,element.id);
         });
 play.innerHTML = `<i class="fa-regular fa-circle-play"></i>`;
         cardcont.append(img,name,play);
         singersachet.appendChild(cardcont);
    })
});








const FilteranuvSongs = All.filter((element)=>{
    return element.singers[0].name === "Anuv Jain";
});
const anuv = document.getElementById("anuv");
const singeranuv = document.getElementById("singeranuv");

anuv.addEventListener('click',()=>{
    songContainer6.classList.add("d-none")
    songContainer2.classList.add("d-none")
    songContainer3.classList.add("d-none")
    songContainer5.classList.add("d-none")
    songContainer4.classList.add("d-none")
    songContainer.classList.add("d-none")
    songContainer7.classList.add("d-none");
    singerArjit.classList.add("d-none");
    singerDev.classList.add("d-none");
    singerAlan.classList.add("d-none");
    singerAnirudh.classList.add("d-none");
    singersalena.classList.add("d-none");
    singerjass.classList.add("d-none");
    singerjustin.classList.add("d-none");
    singersachet.classList.add("d-none");
    singeranuv.classList.remove("d-none");
    singerAkhil.classList.add("d-none");
    songContainer8.classList.add("d-none")
    songContainer9.classList.add("d-none")








    broseResult.classList.remove("d-none");
    searchSec.classList.add("d-none");
    FilteranuvSongs.map((element)=>{
        const cardcont = document.createElement("div");
        cardcont.classList = "cardContainer";
        cardcont.id = element.id;

         const img =document.createElement("img");
         img.src = element.image_source;
         img.alt = "poster";
         img.classList = "img"
         const name = document.createElement("p");
         name.innerHTML = element.song_name;
         name.classList="name";
         const play = document.createElement("span");
         play.addEventListener('click',()=>{
            clicked2(element.image_source,element.song_name,element.quality.low,element.singers,element.album_name,element.release_date,element.id);
         });
 play.innerHTML = `<i class="fa-regular fa-circle-play"></i>`;
         cardcont.append(img,name,play);
         singeranuv.appendChild(cardcont);
    })
});



const Create = document.getElementById("create");
Create.addEventListener('click',()=>{
    const playlistsSec = document.getElementById("newPlayListTab");
    const playListname = document.getElementById("name").value;
    playlistsSec.classList.remove("d-none");
    playlistsSec.classList = "tw-outline tw-outline-black hover:tw-outline-slate-700 tw-rounded-md tw-p-2"
    const header = document.createElement("h5");
    const span = document.createElement("span");
    const image = document.createElement("img");
    image.src = "./assests/images/music.jpeg";
    image.classList = "tw-w-8 tw-rounded-md"
    span.appendChild(image);
    header.classList = "d-inline-block tw-ml-1 tw-text-slate-400 hover:tw-text-white"
    header.innerHTML = playListname;
    playlistsSec.append(span,header);



})


 
const lyricsArray =[
    {
        id:0,
        lyrics:`Dil ki machine chalne lagi hain
        Uski branded chaal dekh ke
        Armaan kaminey lazy thhe jo
        Hai excited gaal dekh ke
        
        
        Dil ki machine chalne lagi hain
        Uski branded chaal dekh ke
        Armaan kaminey lazy thhe jo
        Hai excited gaal dekh ke
        
        
        Utni hain ya itni
        Kudiya hain jitni
        Pichha chhod diya saaron ka
        Famous kar do panna panna bhar do
        Likh likh ke akhbaaron ka
        
        
        Dil ab yaaron ka
        Ho gaya ab paro ka
        Haan dil ab yaaron ka
        Ho gaya paro ka
        Paro in the town
        Paro in the town
        Chunni chamkili, badi jehrili hogi
        Akhiyan da color brown
        
        
        Paro ka tattoo
        Cham cham karda
        Piece hai diamond ka
        Oye lakk tera sohniye full on desi
        Nakhra england da
        
        
        Paro ka tattoo
        Cham cham karda
        Piece hai diamond ka
        Oye lakk tera sohniye full on desi
        Nakhra england da
        
        
        Thoda thoda break le
        Akhiyon mein dekh le
        Fan hoon tere nazaron ka
        Haan.. Para chadh gaya aur bigad gaya
        Haal ye dil ke bimaron ka
        
        
        Dil ab, dil ab
        Dil ab yaaron ka
        Ho gaya ab paro ka
        Haan dil ab yaaron ka
        Ho gaya paro ka.`
    },
    {
        id:1,
        lyrics:`Gali Gali Teri Loh Jali
        Jiyo Re Baahubali
        
        Gali Gali Teri Loh Jali
        Jiyo Re Bahubali
        Prano Se Badhke Humko Hai
        Tu Pyara
        
        Sab Gayenge, Dohrayenge
        Ab Tera Jai Jai Kara
        
        Aisa Wo Aisa
        Jaise Parvat Avichal Sa
        Aisa Wo Aisa
        Jaise Parvat Avichal Sa
        
        Aisa Wo Aisa
        Jaise Parvat Avichal Sa
        Aisa Wo Aisa
        Jaise Parvat Avichal Sa
        
        Haan Kaisi Karuna Hai Yeh
        Yeh Kaisa Naata Hai
        
        Saans Le Ek Toh Dusra Jee Uthe
        Ek Hi Dor Mein Hai Jude
        
        Naina Di Andhi Andhi Chali Hai
        Ya Koyi Jwala Jwala Jali Hai
        Chal De Toh Dole Dhaara Yeh
        Aisa Woh Baahubali Hai
        
        Kaal Se Bhi Woh Na Dare
        Hathon Pe Hai Sheesh Liye
        Maa Jo Kabhi Maang Le To
        Maang Le To Wo Pal Mein Pran De
        
        Aisa Wo Aisa
        Jaise Parvat Avichal Sa
        Aisa Wo Aisa
        Jaise Parvat Avichal Sa
        
        Aisa Wo Aisa
        Jag-Mag Hai Taron Sa
        
        Jaise Parvat Avichal Sa
        Jaise Parvat Avichal Sa
        
        Aisa Wo Aisa
        Jaise Parvat Avichal Sa
        Aisa Wo Aisa
        Jaise Parvat Avichal Sa
        
        Gali Gali Teri Loh Jali
        Jiyo Re Bahubali
        Prano Se Badhke Pyara Tu Pyara
        
        Gali Gali Teri Loh Jali
        Jiyo Re Bahubali
        Prano Se Badhke Pyara Tu
        
        Sab Gayenge, Dohrayenge
        Ab Tera Jai Jai Kara..`
    },
    {
        id:2,
        lyrics:`Sun Zaalima Mere
        Saanu Koi Darr Na
        Ki Samjhega Zamana
        Oh Tu Vi Si Kamli
        Main Vi Sa Kamla
        Ishqe Da Rog Sayana
        Ishqe Da Rog Sayana
        Sunn Mere Humsafar
        Kya Tujhe Itni Si Bhi Khabar
        
        Sunn Mere Hamsafar
        Kya Tujhe Itni Si Bhi Khabar
        Ki Teri Saanse Chalti Jidhar
        Rahunga Bas Wahi Umr Bhar
        Rahunga Bas Wahi Umr Bhar Haye
        
        Jitni Haseen Ye Mulakate Hai
        Unse Bhi Payaari Teri Baate Hai
        Baaton Mein Teri Jo Kho Jate Hai
        Aaun Na Hosh Mein Main Kabhi
        Baaho Mein Hai Teri Zindagi Haye
        
        Sun Mere Humsafar
        Kya Tujhe Itni Si Bhi Khabar
        
        Zaalima Tere Ishq Ch Main
        Ho Gayi Aan Kamli Haye
        
        Main To Yu Khada Kis
        Soch Mein Pada Tha
        Kaise Jee Raha Tha Main Diwana
        Chupke Se Aake Tune
        Dil Mein Sama Ke Tune
        Chhed Diya Kaisa Ye Fasana
        
        Oh Muskurana Bhi Tujhi Se Sikha Hai
        Dil Lagane Ka Tu Hi Tareeka Hai
        Aitbaar Bhi Tujhi Se Hota Hai
        Aaun Na Hosh Mein Main Kabhi
        Bahon Mein Hai Teri Zindagi Haye
        
        Hai Nahi Tha Pata
        Ke Tujhe Maan Lunga Khuda
        Ki Teri Galliyo Mein Iss Kadar
        Aaunga Har Pehar
        
        Sun Mere Hamsafar
        Kya Tujhe Itni Si Bhi Khabar
        Ki Teri Saanse Chalti Jidhar
        Rahunga Bas Wahi Umr Bhar
        Rahunga Bas Wahi Umr Bhar Haye
        
        Zaalima Tere Ishq Ch Main
        
        
        
       `
    },
    {
        id:3,
        lyrics:`Ik vaari aa bhi jaa yaara
        Ik vaari aa
        Raah takun main bechara
        Ik vaari aa
        
        Ik vaari aa bhi jaa yaara
        Ik vaari aa
        Raah takun main bechara
        Ik vaari aa
        
        Dhal rahi shaam hai
        Dil tere naam hai
        Is ki aadat bani
        Hai teri yaariyan
        
        Chand hoon main
        Tu hai taara
        Ik vaari aa
        
        Ek vaari aa bhi ja yara
        Ek vaari aa
        
        Ye ishq ki intehaa
        Lene lagi inteha
        Had se guzarne lagi
        Hai meri chahtein
        
        Dhadkan ki betabiyaan
        Karne lagi ilteja
        Lag ja gale se zara
        Toh mile rahatein
        
        Bas tujhe chahna
        Ik yahi kaam hai
        Kaam aane lagi
        Sari bekariya
        
        Uspe sama bhi hai pyara
        Ik vaari aa
        Ik vaari aa bhi ja yara
        Ik vaari aa
        
        Hai pyaar toh kayi dafa kiya
        Tujhse nahi kiya toh kya kiya
        Tera mera yeh vaasta
        Hai iss zindagi ki daastaan
        Ya phir koi hamara
        Pehle se hai raabta
        
        Toh ik vaari aa
        Aa bhi ja (Repeat 4 times)`
    },
    {
        id:4,
        lyrics:`
        Yeah..
        Arrey ladki beautiful, kar gayi chull
        Chull chull chull..
        
        
        Yeah..
        Dekh tera rang saawla hua baawla
        Ladki nahi tu hai garam maamla
        Bolti bandh meri, kahoon kya bhala
        Kuchh bhi kahaa nahi jaaye
        
        
        Kya naache tu dilli, hile hai london
        Matak matak jaise raveena tandon
        Aag lagaane aayi hai ban-than
        Goli chal gayi dhaayn
        
        
        Nakhre vilayti, ego mein rehti
        Nakhre vilayti ego mein rehti
        Tashan dikhati full
        Arrey ladki beautiful, kar gayi chull
        Chull chull chull..
        
        
        Arey daayein, baayein
        Kaise kamar tu jhulaaye
        Physics samajh nahi aaye
        Arrey ladki beautiful, kar gayi chull
        
        
        Arey daayein, baayein
        Kaise kamar tu jhulaaye
        Physics samajh nahi aaye
        
        
        Sandal mere cham cham karde
        Hege high brand ve
        Sandal mere cham cham karde
        Hege high brand ve
        Mundeyan de
        Mere heel pe honde land ve
        
        
        Saari kudiyan haaye desi chidiyan
        Saari kudiyan desi chidiyan
        Ikloti main bulbul…
        
        
        Main ladki beautiful kar gayi chull
        Chull chull chull
        Arrey ladki beautiful, kar gayi chull
        
        
        Dekh tera rang saawla hua baawla
        Ladki nahi tu hai garam maamla
        Bolti bandh meri, kahoon kya bhala
        Arrey ladki beautiful, kar gayi chull
        
        
        Kya tu naache dilli, hile hai london
        Matak matak jaise raveena tandon
        Aag lagaane aayi hai ban-than
        Arrey ladki beautiful, kar gayi chull
        Koi bacha lo, mujhe sambhalo
        Arre isey utha lo
        Arrey ladki beautiful, kar gayi chull`
    },
    {
        id:5,
        lyrics:`I used to believe
        We were burnin' on the edge of somethin' beautiful
        Somethin' beautiful
        Sellin' a dream
        Smoke and mirrors keep us waitin' on a miracle
        On a miracle
        [Pre-Chorus: Justin Bieber]
        Say, go through the darkest of days
        Heaven's a heartbreak away
        Never let you go, never let me down
        Oh, it's been a hell of a ride
        Driving the edge of a knife
        Never let you go, never let me down
        [Chorus: Justin Bieber]
        Don't you give up, nah, nah, nah
        I won't give up, nah, nah, nah
        Let me love you
        Let me love you
        Don't you give up, nah, nah, nah
        I won't give up, nah, nah, nah
        Let me love you
        Let me love you
        Oh baby, baby
        [Breakdown: DJ Snake]
        [Verse 2: Justin Bieber]
        Don't fall asleep
        At the wheel, we've got a million miles ahead of us
        Miles ahead of us
        All that we need
        Is a rude awakening to know we're good enough yeah
        Know we're good enough
        [Pre-Chorus: Justin Bieber]
        Say go through the darkest of days
        Heaven's a heartbreak away
        Never let you go, never let me down
        Oh it's been a hell of a ride
        Driving the edge of a knife
        Never let you go, never let me down
        [Chorus: Justin Bieber]
        Don't you give up, nah, nah, nah
        I won't give up, nah, nah, nah
        Let me love you
        Let me love you
        Don't you give up, nah, nah, nah
        I won't give up, nah, nah, nah
        Let me love you
        Let me love you
        Oh baby, baby
        [Breakdown: DJ Snake]
        [Chorus: Justin Bieber]
        Don't you give up, nah, nah, nah
        I won't give up, nah, nah, nah
        Let me love you
        Let me love you
        Don't you give up, nah, nah, nah
        I won't give up, nah, nah, nah
        Let me love you
        Let me love you
        Oh baby, baby`
    },{
        id:6,
        lyrics:`Tann lade toh tann mukk jaaye
        Rooh jude toh judi reh jaaye
        
        Tujhse kiya hai dil ne bayaan
        Kiya nigaahon ko zubaan
        Waada wafaa ka kiya
        
        Tujhse liya hai khud ko mila
        Liya duaavon ka sila
        Jeene ka sapna liya�
        
        Dil ke makaan mein
        Tu mehmaan rahaa, rahaa
        
        Aankhon ki zubaan
        Kare hai bayaan kahaa ankahaa
        
        Kuch toh hai tujhse raabta
        Kuch toh hai tujhse raabta
        Kyun hai yeh kaise hai yeh tu bata
        Kuch toh hai tujhse raabta (Repeat once)
        
        Hmm..
        Meherbani jaate jaate
        Mujhpe kar gaya
        Guzarta saa lamha
        Ek daaman bhar gaya
        
        Tera nazaara mila,
        Roshan sitaara mila
        Taqdeer ka jaise
        Koi ishaara mila
        
        Tera ehsaan lage hai jahan mein khila
        Haan khila..
        Sapno mein mere tera hi nishaan mila
        Haan mila�
        
        Kuch toh hai tujhse raabta
        Kuch toh hai tujhse raabta
        Kyun hai yeh kaise hai yeh tu bata
        Kuch toh hai tujhse raabta
        
        Hadh se zyada
        Mohabbat hoti hai jo
        Kehte hain ke ibaadat
        Hoti hai woh
        
        Qusoor hai
        Ya koi yeh fitoor hai
        Kyun lage sab kuch andhera hai
        Bas yeh hi noor hai (Repeat once)
        
        Jo bhi hai manzoor hai..
        
        Kuch toh hai tujhse raabta
        Kuch toh hai tujhse raabta
        Kyun hai yeh kaise hai yeh tu bata
        Kuch toh hai tujhse raabta (Repeat once)
        
        Na jaane kya pata�`
    },
    {
        id:7,
        lyrics:`The club isn't the best place to find a lover
        So the bar is where I go
        Me and my friends at the table doing shots
        Drinking fast and then we talk slow
        Come over and start up a conversation with just me
        And trust me I'll give it a chance now
        Take my hand, stop, put Van the Man on the jukebox
        And then we start to dance, and now I'm singing like
        Girl, you know I want your love
        Your love was handmade for somebody like me
        Come on now, follow my lead
        I may be crazy, don't mind me
        Say, boy, let's not talk too much
        Grab on my waist and put that body on me
        Come on now, follow my lead
        Come, come on now, follow my lead
        I'm in love with the shape of you
        We push and pull like a magnet do
        Although my heart is falling too
        I'm in love with your body
        Last night you were in my room
        And now my bedsheets smell like you
        Every day discovering something brand new
        I'm in love with your body
        (Oh-I-oh-I-oh-I-oh-I)
        I'm in love with your body
        (Oh-I-oh-I-oh-I-oh-I)
        I'm in love with your body
        (Oh-I-oh-I-oh-I-oh-I)
        I'm in love with your body
        Every day discovering something brand new
        I'm in love with the shape of you
        One week in we let the story begin
        We're going out on our first date
        You and me are thrifty, so go all you can eat
        Fill up your bag and I fill up a plate
        We talk for hours and hours about the sweet and the sour
        And how your family is doing okay
        And leave and get in a taxi, then kiss in the backseat
        Tell the driver make the radio play, and I'm singing like
        Girl, you know I want your love
        Your love was handmade for somebody like me
        Come on now, follow my lead
        I may be crazy, don't mind me
        Say, boy, let's not talk too much
        Grab on my waist and put that body on me
        Come on now, follow my lead
        Come, come on now, follow my lead
        I'm in love with the shape of you
        We push and pull like a magnet do
        Although my heart is falling too
        I'm in love with your body
        Last night you were in my room
        And now my bedsheets smell like you
        Every day discovering something brand new
        I'm in love with your body
        (Oh-I-oh-I-oh-I-oh-I)
        I'm in love with your body
        (Oh-I-oh-I-oh-I-oh-I)
        I'm in love with your body
        (Oh-I-oh-I-oh-I-oh-I)
        I'm in love with your body
        Every day discovering something brand new
        I'm in love with the shape of you
        Come on, be my baby, come on
        Come on, be my baby, come on
        Come on, be my baby, come on
        Come on, be my baby, come on
        Come on, be my baby, come on
        Come on, be my baby, come on
        Come on, be my baby, come on
        Come on, be my baby, come on
        I'm in love with the shape of you
        We push and pull like a magnet do
        Although my heart is falling too
        I'm in love with your body
        Last night you were in my room
        And now my bedsheets smell like you
        Every day discovering something brand new
        I'm in love with your body
        Come on, be my baby, come on
        Come on (I'm in love with your body), be my baby, come on
        Come on, be my baby, come on
        Come on (I'm in love with your body), be my baby, come on
        Come on, be my baby, come on
        Come on (I'm in love with your body), be my baby, come on
        Every day discovering something brand new
        I'm in love with the shape of you`
    },
    {
        id:8,
        lyrics:`Nazran na lag jaan meriyan
        Tenu Rab ne banaya beautiful (x2)
        
        Jidar vi jaavan main
        Tenu bas pava main
        Palkan de uttey hun
        Tenu e bithawan main (x2)
        
        Nazran na lag jaan meriyan
        Tenu Rab ne banaya beautiful (x2)
        
        Tenu Rab ne banaya beauty, beauty
        Tenu Rab ne banaya beautiful (x2)
        
        Tujhe dekh daily main aahe bharta hun
        Khwaabon mein tujhse baatein karta hun
        Janti nahin tu meri quality
        Main kitna acha fantasize karta hoon
        
        Tu aur main akele ho road pe
        Time bhi ho romantic se mod pe
        Hath pakad ke tujhe main dikhau
        Teri pic lagi ho mere Ipod pe
        
        Baarish ho jaaye hum dono bheege
        Transparent meri shirt honth tere geele
        Ankhon se bole hosh tu khole
        Paas aa jaaye aur jee le
        
        Nazran na lag jaan meriyan
        Tenu Rabb ne banaya beautiful
        Nazran na lag jaan meriyan
        Tenu Rabb ne banaya beautiful

        Tenu Rabb ne banaya beauty, beauty
Tenu Rabb ne banaya beautiful (x2)

I don’t care.. if you have boyfriend
I don’t care.. if you’re single

Kyuki tujhe pyar karna hai bas meri aim
I don’t whats your age
I don’t care whats your name darling

Pehli nazar jaane jigar
Tera hua kar meri fikar
Chheti chheti aaja idhar
Kiss me baby a little bit quicker

Nazran na lag jaan meriyan
Tenu Rab ne banaya beautiful (x2)

Tenu Rab ne banaya beauty, beauty
Tenu Rab ne banaya beautiful (x2)

Nazran na lag jaan meriyan tainu (x2)
Beauty beautiful.. beautiful..
Beautiful
        
        `
    },
    {
       id:9,
       lyrics:`Pyar Jhutha Tha Jataya Hi Kyun
       Pyar Jhutha Tha Jataya Hi Kyun
       Aise Jaana Tha Toh Aaya Hi Kyun
       Aise Jaana Tha Toh Aaya Hi Kyun
       
       Aye Sitamgar Tu Zara
       Aur Sitam Karde Aa
       Aaja Bewajah Sa Yeh
       Rishta Khatam Karde Aa
       
       O Bedardeya Yaar Bedardeya
       O Bedardeya Yaar Bedardeya
       O Bedardeya Yaar Bedardeya
       O Bedardeya Yaar Bedardeya O
       
       Dard-E-Dil Ke Bina
       Mehfil Hi Kya
       Dard-E-Dil Ke Bina
       Mehfil Hi Kya
       
       Jo Na Toota Kabhi
       Woh Dil Hi Kya
       Jo Na Toota Kabhi
       Woh Dil Hi Kya
       
       Hai Mera Haal Bura
       Aur Bura Karde Aa
       Mere Zakhmon Ko Zara
       Aur Hara Karde Aa
       
       O Bedardeya Yaar Bedardeya
       O Bedardeya Yaar Bedardeya
       O Bedardeya Yaar Bedardeya
       O Bedardeya Yaar Bedardeya O
       
       Kyun Saiyan
       Maahi Mera Saudaiyan
       Dhoop Loot Ke
       Jo De Gaya Parchhaiyan
       
       Hmm.. Badle Wafa Ke
       Maine Payi Kyun Tabahiyan
       
       Rabba Jiske Dil Mein Tu Ishq
       Duniya Bhar Ka Deta Hai
       Usi Ke Dilbar Ko Phir Kyun
       Dil Patthar Ka Deta Hai
       
       Hum Mein Jo Tha
       Woh Raha Kyun Nahi
       Hum Mein Jo Tha
       Woh Raha Kyun Nahi
       
       Dil Mein Tha Kuchh Toh
       Kaha Kyun Nahi
       Dil Mein Tha Kuchh Toh
       Kaha Kyun Nahi
       
       Tha Kabhi Pyar Toh
       Insaaf Mera Karde Aa
       Ya Kabhi Tha Hi Nahi
       Saaf Mana Karde Aa
       
       O Bedardeya Yaar Bedardeya
       O Bedardeya Yaar Bedardeya
       O Bedardeya Yaar Bedardeya
       O Bedardeya Yaar Bedardeya
       
       O Bedardeya Yaar Bedardeya
       O Bedardeya Yaar Bedardeya
       O Bedardeya Yaar Bedardeya
       O Bedardeya Itna Reham Karde Aa
       
       O Bedardeya Bedardeya
       O Yaar Bedardeya Bedardeya
       Bedardeya Yaar Bedardeya
       Bedardeya Yaar Bedardeya O
       
       Kaisa Banzar Seena Hoga
       Ismein Jab Tu Hi Na Hoga
       Tujh Bin Jee Toh Loonga Lekin
       Jeena Kya Woh Jeena Hoga
       
       
       
      `
    },
    {
        id:10,
        lyrics:`
        Tere Vaaste Falak Se
Main Chaand Launga
Solah Satrah Sitaare
Sang Baandh Launga

Tere Vaaste Falak Se
Main Chaand Launga
Solah Satrah Sitaare
Sang Baandh Launga

Chaand Taaron Se Kaho
Abhi Thehre Zara
Chaand Taaron Se Kaho
Ki Abhi Thehre Zara

Pehle Ishq Lada Loon
Uske Baad Launga
Pehle Ishq Lada Loon
Uske Baad Launga

Tere Vaaste Falak Se
Main Chaand Launga
Solah Satrah Sitaare
Sang Baandh Launga

Ho.. Hum Hai Zara Hatke
Janaab-e-Aali
Rehna Zara Bachke Hmm..

Hum Hai Zara Hatke
Janaab-e-Aali
Rehna Zara Bachke

Ho Dekha Jaaye Toh Vaise
Apne Toh Saare Paise
Rehke Zameen Pe Hi Vasool Hain

Chehra Hai Tera Chanda
Naina Tere Sitaare
Ambar Tak Jaana Hi Fizool Hai
Ambar Tak Jaana Hi Fizool Hai

Iske Baad Bhi Agar
Tujhe Chain Na Mile
Poori Karke Main
Teri Yeh Muraad Aaunga

Tere Vaaste Falak Se
Main Chaand Launga
Solah Satrah Sitaare
Sang Baandh Launga

Tere Vaaste Falak Se
Main Chaand Launga
Solah Satrah Sitaare
Sang Baandh Launga

Janaab-e-Aali Janaab-e-Aali
Humse Mohabbat Hai Janaab-e-Aali
Janaab-e-Aali Janaab-e-Aali
Do Ik Hidayat Hai Janaab-e-Aali

Ho.. Hum Hai Zara Hatke
Janaab-e-Aali
Rehna Zara Bachke Hmm..

Hum Hai Zara Hatke
Janaab-e-Aali
Rehna Zara Bachke Hmm..



        `
    },
    {
        id:11,
        lyrics:`Mainu Chadheya Ishq Mein Rang Tera
        Ik Ho Gaya Ang Mera Ang Tera
        Rabb Mileya Jad Mileya
        Maahi Mainu Sang Tera
        
        Na Hoke Bhi Kareeb Tu
        Hamesha Paas Tha
        Ke Sau Janam Bhi Dekhta
        Main Tera Raasta
        
        Na Hoke Bhi Kareeb Tu
        Hamesha Paas Tha
        Ke Sau Janam Bhi Dekhti
        Main Tera Raasta
        
        Jo Bhi Hai Sab Mera
        Tere Hawale Kar Diya
        Jism Ka Har Ruaan
        Tere Hawale Kar Diya
        
        Jo Bhi Hai Sab Mera
        Tere Hawaale Kar Diya
        Jism Ka Har Ruaan
        Tere Hawaale Kar Diya
        
        Dekha Zamaana Saara Bharam Hai
        Ishq Ibadat Ishq Karam Hai
        Mera Thikana Teri Hi Dehleez Hai
        
        Ho Main Hoon Deewarein
        Chhat Hai Piya Tu
        Rabb Ki Mujhe Nemat Hai Piya Tu
        Mere Liye Tu Barkat Ka Taweez Hai
        
        Zara Kabhi Meri Nazar Se
        Khud Ko Dekh Bhi
        Hai Chaand Mein Bhi Daag
        Par Na Tujhme Ek Bhi
        
        Khud Pe Hak Mera
        Tere Hawaale Kar Diya
        Jism Ka Har Ruaan
        Tere Hawaale Kar Diya
        
        Jo Bhi Hai Sab Mera
        Tere Hawale Kar Diya
        Jism Ka Har Ruaan
        Tere Hawale Kar Diya
        
        Mainu Chadheya Ishq Mein Rang Tera
        Ik Ho Gaya Ang Mera Ang Tera
        Rabb Mileya Jad Mileya
        Maahi Mainu Sang Tera
        
        
        
`    },
{
    id:12,
    lyrics:`Badle Tere Maahi
    Laake Jo Koyi Saari
    Duniya Bhi Dede Agar Toh
    Kise Duniya Chahiye
    
    Tu Hai Toh Mujhe
    Phir Aur Kya Chahiye
    Tu Hai Toh Mujhe
    Phir Aur Kya Chahiye
    
    Kisi Ki Na Madad
    Na Dua Chahiye
    Tu Hai Toh Mujhe
    Phir Aur Kya Chahiye
    
    Sunn Haaniye Jind Jaaniye
    Sau Baar Janam Loon Toh Bhi
    Tu Hi Humdum Har Dafa Chahiye
    
    Tu Hai Toh Mujhe
    Phir Aur Kya Chahiye
    Tu Hai Toh Mujhe
    Phir Aur Kya Chahiye
    
    Tu Hi Re Tu Hi Re
    Tu Hi Re Ni Heeriye
    Tu Hi Re Tu Hi Re
    Tu Hi Re Ni Heeriye
    
    Tu Meri Main Hoon
    Tera Ranjha
    
    Tu Hi Re Tu Hi Re
    Tu Hi Re Ni Heeriye
    Tu Hi Re Tu Hi Re
    Tu Hi Re Ni Heeriye
    
    Tu Meri Main Hoon
    Tera Ranjha
    
    Ho Jab Tak Teri Neend Na Toote
    Ugta Nahi Hai Sooraj Mera
    Jab Tak Teri Neend Na Toote
    Ugta Nahi Hai Sooraj Mera
    
    Khwaab Rahe Kis Kaam Ke Mere
    Khwaab Se Pyara Tu Sach Mera
    Sunn Haaniye Jind Jaaniye
    
    Zakhmon Ko Mere
    Marham Ki Jagah
    Bas Tera Chua Chahiye
    
    Tu Hai Toh Mujhe
    Phir Aur Kya Chahiye
    Tu Hai Toh Mujhe
    Phir Aur Kya Chahiye
    
    Kisi Ki Na Madad
    Na Dua Chahiye
    Tu Hai Toh Mujhe
    Phir Aur Kya Chahiye
    
    Tu Hi Re Tu Hi Re
    Tu Hi Re Ni Heeriye
    Tu Hi Re Tu Hi Re
    Tu Hi Re Ni Heeriye
    
    Tu Meri Main Hoon
    Tera Ranjha
    
    Tu Hi Re Tu Hi Re
    Tu Hi Re Ni Heeriye
    Tu Hi Re Tu Hi Re
    Tu Hi Re Ni Heeriye
    
    Tu Meri Main Hoon
    Tera Ranjha
    
    Badle Tere Maahi
    Laake Jo Koyi Saari
    Duniya Bhi Dede Agar Toh
    Kise Duniya Chahiye
    
    
    
`},
{
    id:13,
    lyrics:`Udd Ja Kale Kawan Tere
    Munh Vich Khand Paavan
    Le Ja Tu Sandesha Mera
    Main Sadke Jaavan
    
    Baagon Mein Phir Jhule Pad Gaye
    Pak Gaya Mithiyan Ambiyan
    Yeh Chhoti Si Zindagi Te
    Raataan Lambiyan Lambiyan
    
    Oh Ghar Aaja Pardesi
    Ke Teri Meri Ek Jindri
    Oh Ghar Aaja Pardesi
    Ke Teri Meri Ek Jindri
    
    Ho Ho Ho Ho Ho…
    
    Kitni Dard Bhari Hai
    Teri Meri Prem Kahani
    Kitni Dard Bhari Hai
    Teri Meri Prem Kahani
    
    Saat Samundar Jitna Apni
    Aankhon Mein Hai Paani
    
    Main Dil Se Dil Mujhse Karta Ho
    Main Dil Se Dil Mujhse Karta
    Hai Jab Teri Baatein
    
    Saavan Aane Se Pehle
    Ho Jaati Hain Barsatein
    Oh Ghar Aaja Pardesi
    Ke Teri Meri
    
    Oh Ghar Aaja Pardesi
    Oh Ghar Aaja Pardesi
    Oh Ghar Aaja Pardesi
    Ke Teri Meri Ek Jindri
    
    Oh Ghar Aaja Pardesi
    Ke Teri Meri Ek Jindri
    
    Ho Ho Ho Ho Ho…
    
    Tara Tara Tara Ra
    Aa Aa Aa Aa Aa..
    
    Parvat Kitne Oonche
    Kitne Gehre Hote Hain
    Ho Ho Parvat Kitne Oonche
    Kitne Gehre Hote Hain
    
    Kuchh Mat Puchho
    Pyar Pe Kitne Pehre Hote Hain
    Ishq Mein Jaane Kya Ho Jata
    Hai Yeh Rab Hi Jaane
    
    Tod Ke Saari Deeware
    Mil Jaate Hain Deewane
    
    Oh Le Ja Mujhe Pardesi
    Ki Teri Meri Ek Jindri
    Oh Le Ja Mujhe Pardesi
    Ki Teri Meri Ek Jindri
    
    Haan Le Ja Mujhe Pardesi
    Ki Teri Meri Ek Jindri
    Oh Le Ja Mujhe Pardesi
    Ki Teri Meri Ek Jindri
    
    
    
`},
{
    id:14,
    lyrics:`Pretty Lady Pretty Lady Pretty Lady
    Can’t Take My Eyes Off You
    Pretty Lady Pretty Lady Pretty Lady
    
    Raebareli Mein Tu Beech Bazaari
    Jab Husn Dikhane Jayegi
    Hosh Udane Wali Shokh Nazar Ke Jo
    Pench Ladane Jayegi
    
    Pretty Lady Pretty Lady Pretty Lady
    
    Raebareli Mein Tu Beech Bazaari
    Jab Husn Dikhane Jayegi
    Hosh Udane Wali Shokh Nazar Ke Jo
    Pench Ladane Jayegi
    
    Arey Pehan Ke Itna Zevar Gehna
    Tez Hawa Se Bach Ke Rehna
    Gir Jaaye Toh Phir Na Kehna
    Jhumka Gira Re
    
    Haaye Jhumka Oye Jhumka
    Haaye Jhumka Jhumka
    
    What Jhumka?
    What Jhumka?
    What Jhumka?
    
    Aaye Haaye Haaye
    What Jhumka?
    
    Pretty Lady Pretty Lady Pretty Lady
    Can’t Take My Eyes Off You
    Pretty Lady Pretty Lady Pretty Lady
    
    Shakal Se Jitna Nek Hai Tu
    Kasam Se Utna Fake Hai Tu
    Pad Gaya Kyun Gale
    Dumchhalle Ki Tarah
    
    Haaye Chipak Ke Sellotape Jaisa
    Laga Hua Hai Chep Jaisa
    Na Kisi Kaam Ka
    Nithalle Ki Tarah
    
    Bas Dhoondh Raha Hai Mauka
    Khul Ke Marega Chauka
    By Chance Kisi Ladki Ka
    Jahan Jhumka Gira Re
    
    What Jhumka?
    What Jhumka?
    What Jhumka?
    
    Aaye Haaye Haaye
    Aaye Haaye Haaye
    
    Aye Haaye Haaye Daily Chhod Ke
    Main Saare Kaam Kaaj Karun
    Tere Husn Ke Ego Ka Massage Karun
    Tera Jhumka Jo Khoya Ghalti Hai Teri
    Aur Thane Jaake Phir Main Lodge Karun
    
    Jaanti Hai Ki Main Tujhpe Fida Hoon
    Tu Yeh Jaanti Hai
    Teri Aatma Ko Milti Hi Shanti Hai
    Mujhe Aise Kaam Pe Laga Ke
    Bas Dhundhta Hi Rahun Tera Jhumka
    
    Arey Pehan Ke Itna Zevar Gehna
    Tez Hawa Se Bach Ke Rehna
    Gir Jaaye Toh Phir Na Kehna
    Jhumka Gira Re
    
    Jhumka Gira Jhumka Gira
    Jhumka Jhumka Jhumka Jhumka
    Gira Gira Gira Gira Gira
    Gira Re Reee Jhumka
    
    What Jhumka?
    What Jhumka?
    What Jhumka?
    
    Jhumka Gira Jhumka Gira
    Jhumka Gira Aaye Haaye Haaye
    
    Jhumka Gira Re
    Bareli Ke Bazaar Mein
    What Jhumka?
    
    Jhumka Gira Re
    Bareli Ke Bazaar Mein
    What Jhumka?
    
    Jhumka Gira Jhumka Gira
    Jhumka Gira Aaye Haaye Haaye
    
    Jhumka Gira Re
    Bareli Ke Bazaar Mein
    Jhumka Gira Re
    
    
    
`},
{
  id:15,
  lyrics:`Haule Se Dheeme Se
  Mujhko Baahon Mein
  Bhar Lo Na Tum
  
  Naram Si Saanson Mein
  Mujhko Aahon Mein
  Bhar Lo Na Tum
  
  Sunn Zara Mere Paas Aa
  Ab Baithe Hain Hum Bhi Yahan
  Dil Ke Darmiyaan
  Baarishein Hain Barishein Hain
  
  Teri Hi Baaton Pe Maine
  Saja Li Hai Duniya Yahan
  Dil Ke Darmiyaan
  Baarishein Hain Baarishein
  
  Ab Tu Aati Hai Bulati Hai
  Bistar Se Yoon Girati Hai
  Ki Soun Main Baahon Mein Bas Teri
  
  Haan Jab Baarishein Barasti Hain
  Paagal Jaise Thirakti Hai
  Tum Jaisi Ho Bas Waisi Hi Raho
  
  Ab Tere Bina Yahan Meri Saansein
  Jaise Bina Nindiya Ki Raatein Hai Toh
  Aur Tu Hi Mere Dil Ki Raza Hai
  Tere Bina Dil Bhi Khafa Hai Toh
  
  Teri Aankhon Ka Kajal
  Na Phaile Ab Kabhi Bhi
  Tujhe Itna Pyar Doon Haan
  
  Teri Khushiyon Ki Khaatir
  Yeh Duniya Main Meri
  Ek Pal Mein Vaar Doon Main
  
  Ab Bikhari Teri Yeh Zulfon Se
  Aankhein Teri Jab Dikhti Hain
  Dikhta Hai Mujhe Woh Aasmaan
  
  Ki Kholun Pankh Main Mere
  Udd Jaaun Main
  Kho Jaaun Main Iss Aasmaan Mein
  Patangon Ki Tarah Haan Haan Haan
  
  
  
`},
{
    id:16,
    lyrics:`Khada hoon aaj bhi wahin
    Ki dil phir bekaraar hai
    Khada hoon aaj bhi wahin
    Ki tera intezaar hai
    
    Choo lo jo mujhe tum kabhi
    Kho na jaaun main raat din
    Nazaron mein tum ho base
    
    Keh do jo tum ek baar
    Mere ho bas tum mere
    Nazaron mein tum ho base
    
    
    Khada hoon aaj bhi wahin
    Lagi teri hi aas hai
    Kaisi hai yeh bebasi
    Yeh kaisi dil ki pyaas hai
    
    Choo lo jo mujhe tum kabhi
    Kho na jaaun main raat din
    Nazaron mein tum ho base
    
    Keh do jo tum ek baar
    Mere ho bas tum mere
    Nazaron mein tum ho base
    
    
    Reh jaunga yun hi
    Bas yun hi bas yun hi
    Bas yun hi bas yun hi
    
    Reh jaunga yun hi
    Bas yun hi bas yun hi
    Bas yun hi bas yun hi
    
    Reh jaunga yun hi
    Bas yun hi bas yun hi
    Bas yun hi bas yun hi
    
    
    Reh jaunga yun hi
    Bas yun hi bas yun hi
    Bas yun hi bas yun hi
    
    Choo lo jo mujhe tum kabhi
    Kho na jaaun main raat din
    Nazaron mein tum ho base
    
    Keh do jo tum ek baar
    Mere ho bas tum mere
    Nazaron mein tum ho base
    
    
    Haan main ruka hoon
    Tu ja chuka hai
    Haan main ruka hoon
    Tu ja chuka hai`
},
{
    id:17,
    lyrics:`Teriyan Adavaan
    Teriyan Adavaan
    Munda Maar Sutteya
    Tu Kahda Dil Lutteya
    
    Tu Mainu Chhaddeya Na Kakh Da
    Tu Mainu Chhaddeya Na Kakh Da
    
    Pehla Si Tu Pyar
    Pehle Pyar Di Pehli Kahaani
    Badla Vi Kinj Hunn
    Chaah Ke Vi Na Badli Jaani
    
    Mann Vich Main Si Raja
    Tu Kyun Na Meri Bani Ae Rani
    Khushiyan Da Main Socheya
    Ankhan Vich Kyun De Gayi Paani
    
    Teriyan Adavaan
    Teriyan Adavaan
    Munda Maar Sutteya
    Tu Kahda Dil Lutteya
    
    Tu Mainu Chhaddeya Na Kakh Da
    Tu Mainu Chhaddeya Na Kakh Da
    
    Teriyan Adavaan
    Teriyan Adavaan
    Munda Maar Sutteya
    Tu Kahda Dil Lutteya
    
    Tu Mainu Chhaddeya Na Kakh Da
    Tu Mainu Chhaddeya Na Kakh Da
    
    Ek Dooje De Kol
    Kaaliyan Raatan Chann Te Taare
    Pehlan Si Jo Vaade
    Hunn Ne Sab Mainu Lagde Laare
    
    Ajj Hi Gham Naal Pala
    Waggde Nainon Hanju Khaare
    Phas Gaye Ishq De Gehde Vich
    Kahton Na Hunn Labbhan Sahaare
    
    
    Teriyan Adavaan
    Teriyan Adavaan
    Munda Maar Sutteya
    Tu Kahda Dil Lutteya
    
    Tu Mainu Chhaddeya Na Kakh Da
    Tu Mainu Chhaddeya Na Kakh Da
    
    Teriyan Adavaan
    Teriyan Adavaan
    Munda Maar Sutteya
    Tu Kahda Dil Lutteya
    
    
    Tu Mainu Chhaddeya Na Kakh Da
    Tu Mainu Chhaddeya Na Kakh Da
    
    
    
`},
{
    id:18,
    lyrics:`Hai koi yahan
    Yeh baatein ankahi yahan
    Kal woh na rahe
    Toh raatein yaadon ka sama
    
    Tu na chhodna yeh jahan
    Haan, yoon jo ho na hai raha
    
    Lamhey kho rahe yeh fir na aayein
    Kab se khadi deewarein
    Khone ko hai, jo hai yahan pe
    
    Hai yeh raaz toh nahi kya jaane?
    Kal na rahengi baatein
    Kehne ko hai, jo hai yahan pe
    
    Sabhi pe chadha hai yeh kyun asar?
    Bhaagein jaise hain yeh besabar
    Haan, yeh raahein aisi bekhabar
    Gine-chune raaston mein dhundhli teri nazar
    
    Tu na chhodna yeh jahan
    Haan, yoon jo ho na hai raha
    
    Lamhey kho rahe yeh fir na aayein
    Kab se khadi deewarein
    Khone ko hai, jo hai yahan pe
    
    Hai yeh raaz toh nahi kya jaane?
    Kal na rahengi baatein
    Kehne ko hai, jo hai yahan pe
    
    Tu na chhodna yeh jahan
    Yoon jo ho na hai raha
    `
},
{
    id:31,
    lyrics:`Tere warga taan mainu koi disda nahi
    Main taan laaya bada dil, kitey lagda nahi
    Tere rang de na mileya sitara ve, yaara
    Tere bin main taan saara berang, sajna
    
    Manda nahi ye dil
    Tere liye har pal
    Teri khaer mangda rave
    
    Tu jo naina ‘ch pilaaya ae, sharaabi rang laaya
    Tere ishq ‘ch hoya main malang, sajna
    Teri doriyan nu laike, dil hawa de utte beh ke
    Aaj udd’da ae jaise ke patang, sajna
    Tu jo naina ‘ch pilaaya ae, sharaabi rang laaya
    Tere ishq ‘ch hoya main malang, sajna
    
    Ishq pardon se jaise ab nikalne laga hai
    Yeh to aayega nazar sar-e-aam
    Hum dono ke alaawa koi aur nahi hai
    Ishq pannon pe hai tera-mera naam
    
    Lakh vaari chhupa le chahe tu
    Ishq behka toh nahi chhupna
    Ishq pardon se jaise ab nikalne laga hai
    Yeh to aayega nazar sar-e-aam
    
    Tu jo naina ‘ch pilaaya ae, sharaabi rang laaya
    Tere ishq ‘ch hoya main malang, sajna
    Teri doriyan nu laike, dil hawa de utte beh ke
    Aaj udd’da ae jaise ke patang, sajna
    Tu jo naina ‘ch pilaaya ae, sharaabi rang laaya
    Tere ishq ‘ch hoya main malang, sajna
    
    Tu jo naina ‘ch pilaaya ae, sharaabi rang laaya
    Tere ishq ‘ch hoya main malang, sajna
    Teri doriyan nu laike, dil hawa de utte beh ke
    Aaj udd’da ae jaise ke patang, sajna
    Tu jo naina ‘ch pilaaya ae, sharaabi rang laaya
    Tere ishq ‘ch hoya main malang, sajna
    
    Tere ishq ‘ch hoya main malang, sajna`
},
{
    id:20,
    lyrics:`Zulfein teri mere chehre ko sehlaati hain
    Toh qismat meri haule se kuch gungunati hai
    
    Jo chhup na sake, woh baat ho
    Hain sab jaante, woh raaz ho
    Pyaasa hoon main, tum baarish ki aavaaz ho
    
    Jo main raat hoon toh tu khwab hai
    Jo main khaali panna, tu alfaaz hai
    Main khoya musafir toh tu chhanv hai
    Yeh pehli mohabbat ka ehsaas hai
    
    Bina kuch kahe jo tu nazron se sab keh jaati hai
    Toh fursat meri khwab tere dikhlaati hai
    
    Tere paas main, mere paas tu
    Akela hoon toh hi tere saath hoon
    Main toota taara, hai chaandni raat tu
    
    Jo main raat hoon toh tu khwab hai
    Jo main khaali panna, tu alfaaz hai
    Main khoya musafir toh tu chhanv hai
    Yeh pehli mohabbat ka ehsaas hai
    
    Main yahan, tu kahan? Kaisi yeh tanhaiyan?
    Dhoondh loon main tujhe, ishara tu kar de zara
    
    Jo roothe bhi toh na jaana kahin
    Main tera tha kal, main tera abhi
    
    Jo main raat hoon toh tu khwab hai
    Jo main khaali panna, tu alfaaz hai
    Main khoya musafir toh tu chhanv hai
    Yeh pehli mohabbat ka ehsaas hai`
},{
    id:21,
    lyrics:`Ekko heel de naal main katteya ae ek saal ve
    Mainu kadey ta lai jeya kar tu shopping mall ve
    Mere nal diyan sab parlour saj diyan rehndiyan
    Haaye highlight karaa de mere kaale waal ve
    Ve kitho sajaa tere layi sare suit puraane aa
    Haaye puraane aa...
    
    Mainu Lehanga...
    Mainu lehanga le de mehanga jehya marjaneya
    Aine paise dass tu kithe laike jaane ae
    Mainu lehenga le de mehanga jehya marjaneya
    Aine paise dass tu kithe laike jaane ae
    Ve marjaneya, Ve marjaaneya...
    
    Yaaran utton note udauna rehna ae
    Meri waari batuaa khaali kehna ae
    Mere naal pai jave bahar kite tainu jaana je
    Tera koi na koi nawaa bahana rehnda ae
    
    Movie lai ja ya kol mere behja
    Do dil diyaan tu vi kehja
    Main vi dil de haal sunaane aa
    
    Mainu lehnga le de mehnga jeya marjaneya
    Aine paise dass tu kithe laike jaane ae
    Mainu lehanga le de mehanga jeya marjaneya
    Aine paise dass tu kithe laike jaane ae
    Ve marjaneya, Ve marjaaneya...
    
    O o...
    
    Ho mainu lagda ae main feeling laini rehni aa
    Saara din main Manak Manak Manak kehni aa
    Tu yaara de naal nit tour te rehna ve
    Ho menu puchda nai me ghare bore hoi rehni aa
    
    Tu kanjoos ae
    Ve poora makkhichoos ae
    Nature to nirra khadoos ae
    Ve kade hans leya kar dubjaaneya
    
    Mainu lehenga le de mehanga jehya marjaneya
    Aine paise dass tu kithe laike jaaneya
    Mainu lehanga le de mehanga jehya marjaneya
    Aine paise dass tu kithe laike jaaneya
    Ve marjaneya, Ve marjaaneya...
    `
},
{
    id:22,
    lyrics:`Sambhalo zara apna anchal gulabi
    Hmm, sambhalo zara apna anchal gulabi
    Dikhao na hans-hans ke aankhen sharabi
    Sulook inka duniya mein acchhha nahi hai
    Haseenon pe humko bharosa nahi hai
    
    Uthti hain nazrein to girati hai bijli
    Adaa jo bhi nikli, qayamat hi nikli
    Jahan tumne chehre se anchal hataya
    Wahin ahal-e-dil ka tamasha banaya
    
    Khuda ke liye hum pe dore na dalo
    Hamein zinda rehne do, ae, husnwaalon
    Kali kali zulfon ke phande na daalo
    Kali kali zulfon ke phande na daalo
    Hamein zinda rehne do, ae, husnwaalon`
},
{
    id:23,
    lyrics:`You were the shadow to my light
    Did you feel us?
    Another star
    You fade away
    Afraid our aim is out of sight
    Wanna see us
    Alight
    
    Where are you now?
    Where are you now?
    Where are you now?
    Was it all in my fantasy?
    Where are you now?
    Were you only imaginary?
    
    Where are you now?
    Atlantis
    Under the sea
    Under the sea
    Where are you now?
    Another dream
    The monster's running wild inside of me
    I'm faded
    I'm faded
    So lost, I'm faded
    I'm faded
    So lost, I'm faded
    
    These shallow waters never met what I needed
    I'm letting go a deeper dive
    Eternal silence of the sea, I'm breathing
    Alive
    
    Where are you now?
    Where are you now?
    Under the bright but faded lights
    You've set my heart on fire
    Where are you now?
    Where are you now?
    
    Where are you now?
    Atlantis
    Under the sea
    Under the sea
    Where are you now?
    Another dream
    The monster's running wild inside of me
    I'm faded
    I'm faded
    So lost, I'm faded
    I'm faded
    So lost, I'm faded`
},
{
    id:24,
    lyrics:`It's 4 AM
    I can't turn my head off
    Wishing these memories would fade, they never do
    Turns out people lie
    They said, "Just snap your fingers"
    As if it was really that easy for me to get over you
    
    I just need time
    
    Snappin' one, two
    Where are you?
    You're still in my heart
    Snappin' three, four
    Don't need you here anymore
    Get out of my heart
    'Cause I might snap
    
    I'm writin' a song
    Said, "This is the last one"
    How many last songs are left? I'm losing count
    Since June twenty-second
    My heart's been on fire
    I've been spendin' my nights in the rain tryin' to put it out
    
    So I'm snappin' one, two
    Where are you?
    You're still in my heart
    Snappin' three, four
    Don't need you here anymore
    Get out of my heart
    'Cause I might snap
    
    Oh-woah
    'Cause I might snap
    Oh-woah
    
    And if one more person says, "You should get over it"
    Oh, I might stop talkin' to people before I snap, snap, snap
    Oh, I might stop talkin' to people before I snap
    
    Snappin' one, two
    Where are you? (Where are you?)
    You're still in my heart (Still in my heart)
    Snappin' three, four
    Don't need you here anymore (Need you here anymore)
    Get out of my heart
    
    'Cause I might sna—, I might snap (Oh-woah)
    'Cause I might sna—, I might snap (Oh-woah)
    Get out of my heart, yeah, yeah, yeah, yeah, heart (Oh-woah)
    'Cause I might snap (Oh-woah)
    Get out of my heart, yeah
    'Cause I might snap
    `
},

{
    id:25,
    lyrics:`The day we met
    Frozen I held my breath
    Right from the start
    I knew that I'd found a home for my heart
    Beats fast
    Colors and promises
    How to be brave?
    How can I love when I'm afraid to fall?
    But watching you stand alone
    All of my doubt suddenly goes away somehow
    One step closer
    I have died everyday waiting for you
    Darling, don't be afraid, I have loved you for a thousand years
    I'll love you for a thousand more
    Time stands still
    Beauty in all she is
    I will be brave
    I will not let anything take away
    What's standing in front of me
    Every breath, every hour has come to this
    One step closer
    I have died everyday waiting for you
    Darling, don't be afraid, I have loved you for a thousand years
    I'll love you for a thousand more
    And all along I believed I would find you
    Time has brought your heart to me
    I have loved you for a thousand years
    I'll love you for a thousand more
    Ooh-ooh
    Ooh-ooh
    I love you for a thousand more
    Ooh-ooh-ooh-ooh-ooh-ooh, ooh-ooh-ooh
    Ooh-ooh-ooh-ooh
    One step closer
    I have died everyday waiting for you
    Darling, don't be afraid, I have loved you for a thousand years
    I'll love you for a thousand more
    And all along I believed I would find you
    Time has brought your heart to me
    I have loved you for a thousand years
    I'll love you for a thousand more`
},
{
    id:26,
    lyrics:`Picture perfect, you don't need no filter
    Gorgeous, make 'em drop dead, you're a killer
    Shower you with all my attention
    Yeah, these are my only intentions
    Stay in the kitchen cookin' up, got your own bread
    Heart full of equity or an asset
    Make sure that you don't need no mentions
    Yeah, these are my only intentions
    Shout out to your mom and dad for makin' you
    Standin' ovation, they did a great job raisin' you
    When I create you're my muse
    That kind of smile that makes the news
    Can't nobody throw shade on your name in these streets
    Triple threat, you're a boss, you a bae, you a beast
    You make it easy to choose
    You got a mean touch, I can't refuse (No, I can't refuse it)
    Picture perfect, you don't need no filter
    Gorgeous, make 'em drop dead, you're a killer
    Shower you with all my attention
    Yeah, these are my only intentions
    Stay in the kitchen cookin' up, got your own bread
    Heart full of equity or an asset
    Make sure that you don't need no mentions
    Yeah, these are my only intentions
    Already passed, you don't need no approval
    Good everywhere, don't worry 'bout no refusal
    Second to none, you got the upper hand now
    Don't need a sponsor, nope, you're the brand now
    You're my rock, my Colorado
    Got that ring, just like Toronto
    Lovin' you now, a little more tomorrow
    That's how I feel, act like you know that you are
    Picture perfect, you don't need no filter
    Gorgeous, make 'em drop dead, you're a killer
    Shower you with all my attention
    Yeah, these are my only intentions
    Stay in the kitchen cookin' up, got you're own bread (Whip it)
    Heart full of equity or an asset (Asset)
    Make sure that you don't need no mentions (Yeah, yeah)
    Yeah, these are my only intentions (Quavo)
    No cap, no pretendin'
    You don't need mentions (No cap)
    Got 'em sayin' "goals", they don't wanna be independent ('Pendent)
    Tell them to mind your business (Woo), we in our feelings
    It's fifty-fifty percentage (Fifty)
    Attention, we need commitment (Oh)
    We got it both admitted (Both)
    It's funny we both listen (Both)
    It's a blessing (Blessing) 'cause we both get it (Both)
    You the best thing and I don't need a witness (Best thing)
    I'ma find me a ring and pray it's perfect fitted (Perfect, perfect)
    Picture perfect, you don't need no filter (No filter)
    Gorgeous, make 'em drop dead, you a killer (Oh-oh)
    Shower you with all my attention (I will)
    Yeah, these are my only intentions (Yeah)
    Stay in the kitchen cookin' up, got your own bread (You do)
    Heart full of equity, you're an asset (Uh-uh)
    Make sure that you don't need no mentions (No mentions)
    Yeah, these are my only intentions`
}
,{
    id:27,
    lyrics:`First things first
    I'ma say all the words inside my head
    I'm fired up and tired of the way that things have been, oh-ooh
    The way that things have been, oh-ooh
    Second thing second
    Don't you tell me what you think that I could be
    I'm the one at the sail, I'm the master of my sea, oh-ooh
    The master of my sea, oh-ooh
    I was broken from a young age
    Taking my sulking to the masses
    Writing my poems for the few
    That look at me, took to me, shook to me, feeling me
    Singing from heartache from the pain
    Taking my message from the veins
    Speaking my lesson from the brain
    Seeing the beauty through the...
    Pain!
    You made me a, you made me a believer, believer
    Pain!
    You break me down and build me up, believer, believer
    Pain!
    Oh, let the bullets fly, oh, let them rain
    My life, my love, my drive, it came from...
    Pain!
    You made me a, you made me a believer, believer
    First things first
    Can you imagine what's about to happen?
    It's Weezy the Dragon, I link with the Dragons
    And we gon' get ratchet, no need for imaginin'
    This is what's happenin'
    Second thing second, I reckon immaculate
    Sound about accurate
    I know that strength, it don't come, don't come without strategy
    I know the sweet, it don't come without cavities
    I know the passages come with some traffic
    I start with from the basement, end up in the attic
    And third thing third
    Whoever call me out, they simply can't count
    Let's get mathematic, I'm up in this, huh
    Is you a believer?
    I get a unicorn out of a zebra
    I wear my uniform like a tuxedo
    This dragon don't hold his breath, don't need no breather
    Love you Ms. Cita, the son of a leader
    I know the bloomin' don't come without rain
    I know the losin' don't come without shame
    I know the beauty don't come without hurt
    Hol' up, hol' up, last thing last
    I know that Tunechi don't come without Wayne
    I know that losin' don't come without game
    I know that glory don't come without...
    Don't come without...
    Pain!
    You made me a, you made me a believer, believer
    Pain!
    You break me down and build me up, believer, believer
    Pain
    Oh, let the bullets fly, oh, let them rain
    My life, my love, my drive, it came from...
    Pain!
    You made me a, you made me a believer, believer
    Last things last
    By the grace of fire and flames
    You're the face of the future, the blood in my veins, oh-ooh
    The blood in my veins, oh-ooh
    But they never did, ever lived, ebbing and flowing
    Inhibited, limited 'til it broke open and rained down
    It rained down, like...
    Pain!
    You made me a, you made me a believer, believer
    Pain!
    You break me down and build me up, believer, believer
    Pain
    Oh, let the bullets fly, oh, let them rain
    My life, my love, my drive, it came from...
    Pain!`
},
{
    id:28,
    lyrics: `Vibez
    Oh, no
    Another banger
    Baby, calm down, calm down
    Girl, this your body e put my heart for lockdown, for lockdown, oh, lockdown
    Girl, you sweet like Fanta o, Fanta o
    If I tell you say "I love you", no dey form yanga o, oh, yanga o
    No tell me no, no, no, no, whoa, whoa, whoa, whoa
    Oh-oh-oh-oh-oh-oh-oh-oh-oh-oh-oh
    Baby, come gimme your lo-lo-lo-lo-lo-lo-lo-lo-lo-lo-lo-lo-love
    You got me like whoa-whoa-whoa-whoa-whoa-whoa-whoa-whoa-whoa
    Shawty, come gimme your lo-lo-lo-lo-lo-lo-lo-lo-lo-lo-lo-lo-love, hmm
    I see this fine girl, for my party, she wear yellow
    Every other girl they dey do too much, but this girl mellow
    Naim I dey find situation I go use take tell am hello
    Finally, I find way to talk to the girl but she no wan' follow
    Who you come dey form for? (Uhum)
    Why you no wan' conform? (Uhum)
    Then I start to feel her bum-bum, whoa (uhum)
    But she dey gimme small-small, whoa
    I know say she sabi pass Don Juan (uhum)
    But she feeling insecure
    'Cause her friends go dey gum her like chewing gum (uhum)
    Go dey gum her like chewing gum
    Yeah, I know I look shy but for you I get down, oh
    And my hips make you cry when I'm moving around you (yeah)
    Do it once, do it twice (do it twice)
    I push back, you hold me tight
    Get a taste for a night
    Baby, show me you can calm down, calm down
    Dance with me and take the lead now, lead now (lead now)
    Got you so high that you can't come down, come down
    Don't you ask, you know you're allowed, allowed (oh no)
    When it's you I can't say no-oh-oh-oh-oh-oh-oh-oh-oh-oh-oh
    Baby, gimme lo-lo-lo-lo-lo-lo-lo-lo-lo-lo-lo-lo-love
    You got me like whoa-whoa-whoa-whoa-whoa-whoa-whoa-whoa-whoa
    Shawty, come gimme your lo-lo-lo-lo-lo-lo-lo-lo-lo-lo-lo-lo-love, hmm
    As I reach my house I say make I rest small (make I rest small)
    As me I wake up na she dey my mind o (na she dey my mind o)
    Day one, day two, I no fit focus (I no fit focus)
    Na so me I call am, say make we link up (say make we link up)
    Got my hand on your heart now, I can feel it race
    If I leave then you say you can never love again
    Wanna give you it all but can't promise that I'll stay
    And that's the risk you take (you take)
    Baby, calm down, calm down
    Girl, this your body e put my heart for lockdown, for lockdown, oh, lockdown
    Girl, you sweet like Fanta o, Fanta o
    If I tell you say "I love you", no dey form yanga o, oh, yanga o
    No tell me no, no, no, no, whoa, whoa, whoa, whoa
    Oh-oh-oh-oh-oh-oh-oh-oh-oh-oh-oh (your love, your love)
    Baby, come gimme your lo-lo-lo-lo-lo-lo-lo-lo-lo-lo-lo-lo-love
    You got me like whoa-whoa-whoa-whoa-whoa-whoa-whoa-whoa-whoa
    Shawty, come gimme your lo-lo-lo-lo-lo-lo-lo-lo-lo-lo-lo-lo-love, hmm no`
},
{
    id:35,
    lyrics:`Hey what is up? What is up?
    Kya bolte sablog?
    Emiway Bantai Maloon hai na!
    Machayenge
    Jo nai nachte usko bhi nachayenge
    Let’s do this
    Nai maloon hai toh sunn
    Mama banne bole kallu ban jaunga
    Tu chahe toh tera pallu ban jaunga
    Malyalam hogi toh mallu ban jaunga
    Telgu rhegi toh allu ban jaunga,
    Tu banayegi toh ullu ban jaunga,
    Baby baba nahi ballu ban jaunga,
    Ladki patane mei sanju ban jaunga
    Shadi karne bole sallu ban jaunga
    Machayenge
    Bohot samay baad ladki pe gaana
    Gadi aur daru nahi dikhana
    Sadaki tareeka hai yeh pyaar dikhane ka
    Jeb me na koudi fir bhi tere pe deewana
    Tu hifi lekin me fokat ke wifi pe beta hu
    Naam toh bata mein dalunga dm
    Fir am se pm kare baat baat saat saat
    Khali ghar raat raat raat
    Boht hard, boht hard tu latka ke jhatka ke
    Chalti hai bhatka ke dhyan mera
    Tere is chalne pe maine kuch likha
    Hai public ko de dunga gyaan tera
    O madam ji me tera bhai nahi hai
    Dheere chal dheere chal koi ghayi nahi
    Bus itna he bolunga dikhti hai mashallah chalti hai
    Isme do rai nahi hai
    Mama banne bole kallu ban jaunga
    Tu chahe toh tera pallu ban jaunga
    Malyalam hogi toh mallu ban jaunga
    Telgu rhegi toh allu ban jaunga
    Tu banayegi toh ullu ban jaunga
    Baby baba nahi ballu ban jaunga
    Item patane mei sanju ban jaunga
    Shadi krne bole sallu ban jaunga`
},
{
    id:34,
    lyrics:`Haan
    Punya Paap, Punya Paap
    We Back!
    
    Jwala Jwala Jwala
    Chhote Laya Main Game Mein
    Dollar Dollar Dollar
    Chhote Laya Main Game Mein
    Bada Naam Naam
    Banaya Main Game Mein
    Liya Nahi Chain
    Tab Toh Heera Hai Chain Mein
    
    Likhta Tha Gully Mein
    Ab Main Likhta Hu Plane Mein
    Asal Zindagi Hai Meri
    Chhote No Entertainment
    
    Itihaas Likh Diya
    Tujhe Classics Diya
    5x Plat (Platinum)
    Gully Waale Ne Diya
    Peeche Se Aake Phir
    Saamne Se Diya Sachin Ka Bat
    Bambai Ka Maine Naam Rakh Diya
    
    Jab Studio Mein Lock
    Tab Sab Khol Diya
    Agar 2 Maine Liye
    Toh 10 Maine Diya
    Usne 10 Mujh Se Lekar
    Dhass Mujhe Diya
    
    Roll Karke Pehle Sabko
    Kash Maine Diya
    Badalon Ke Upar Maine
    Game Rakh Diya
    Quality Gaano Se
    Make It Rain Kar Diya
    
    Bas Bas Ho Gaya Abhi Sirf
    Parivaar Mera
    Pehle Shani Tha Ab Har Din
    Shanivaar Mera
    
    Dentist Se Jyada
    Mujhe Game Daant De Raha
    Vaccine Yeh Bars Aur
    Main Sabko Shot Dera
    
    Mujhe Game Saath Dera
    Jaise Liya Maine Saat Phera
    Sirf Main Jaanta Hu
    Punya Paap Mera
    
    Dimag Ko Rakhte Doosra
    Aur Khwaab Pehla
    Kalam Se Bar Fest Pentecost Mera
    
    Agar Maloom Tu Jeeta
    Chal Haath Upar Kar
    Dil Se Salaam Mere Saath The
    Agar Gehra Paani Bolke
    Mere Saath The Magar
    Bhagwaan Mujhe Bola
    
    Divine Paani Pe Chal
    Jeezus Wale Mode Mein
    Nas Wale Mode Mein
    Khoon Se Behtar Koyi Nahi
    Shaks Wale Mode Mein
    Gandagi Hai Tu
    Aur Main Flush Wale Mode Mein
    Seekha Sab Road Pe
    Aur Mein 100-100 Tha Board Mein
    
    Sab Kuch Zor Mein
    Divine Apne Zone Mein
    Gully Gully Gang
    Aur Ghar Mera Bombay
    Bache Bache Karte Rap
    Har Kone Mein
    
    Sapne Hote Sach
    Tab Maza Aata Sone Mein
    Classic Har Baar
    Har Shabad Mere Sholay Mein
    Chhati Inki Nahi Hai
    Isliye Bar Bar Ye Bolenge
    
    Hum Kholenge
    Jaise Kho Kho Ka Game
    Tu Bahar Dikhta Acha
    Sirf Promo Ka Game
    Rakhta 4 Mere Sath
    Jaise 2-2 Ka Game
    
    Tu Aur Tere Homie
    Chhote Tum Dono Ka Game
    Chhutta Paisa Rakh Ke Dekh
    Laya Na Change
    
    Rakh Tera Fame
    Main Banda Nahi Same
    Kaptani Innings
    Yeh Hai Kohli Wala Shot
    
    Ghar Ke Bahar Tere
    Paunche Yeh Rangoli Wala Shot
    Konkani Karnatak Koli Waala Shot
    
    Khade Hokar Jala Diye
    Modi Wala Shot
    16 Se Hai Khauf
    Aur Main 16 Se Hu Hot
    Khatarnaak Coats
    Jaise Tailor Mera Baap
    
    Edit Karke Tune Image
    Mera Meme Bana Diya
    Mehnat Karke Tere Bhai Ne
    Poora Dream Bana Diya
    
    Picture Ya Sadkon Pe
    Scene Bana Diya
    Khud Ka Time Laya Maine
    Sabse Bada Gaana Diya
    
    Shikshak Se Pehle Thugs Dekha
    Tiffin Box Se Pehle
    Maine Drugs Dekha
    29 Saal Ka Main Par
    Lagta Maine Sab Dekha
    
    Rishton Mein Pyaar Se Jyada
    Shak Dekha
    Shauharat Ke Liye Jyada Mehnat
    Thoda Luck Dekha
    
    Circle Rakta Tight
    Aur Main Circle Jitna F*ck Deta
    Nasha Apan Karte Isliye
    Nashe Mein Na Rakh Deta
    
    Na Na Zindagi Tamasha Hai
    Views Toh 69 Ko Bhi Aata Hai
    Apna Missionary Shot
    Sab Kuch Saamne Se Jata Hai
    
    Bank Mera Ghar Ka
    Khud Ka Mera Khata Hai
    License Pe Hai Album
    Kyun-ki Maths Mujhe Aata Hai
    
    Dollar Jab Involved
    Tab Cents Samajh Aata Hai
    Jab Bills Aur Passion Dono
    Sath Mein Nahi Jaata Hai
    
    Jo Passion Na De Paise
    Wo Passion Nahi Sikhata Hai
    Independent Main Nahi
    Sirf Entertainment Mein
    
    Independent Mein Hu
    Har Street Ke Pavement Pe
    Inke Baap Ke Payment Se
    Aaya Lame Men Ke Saath
    
    Nazrein Toh Milana Kabhi
    Real Men Ke Saath
    Main Karte Rahunga Grind
    Jab Tak 6 Men De Haath
    Sab Kuch Apan Risk Karte
    
    Tootata Tara Dikhe
    Toh Abhi Bhi Hum Wish Karte
    Gyan Liya Naani Se Haan
    Abhi Bhi Ham Miss Karte
    Aasman Ko Dekh Kar
    Abhi Hum Kiss Karte (Haan)
    
    Kalam Mera Hindu Muslim Ko Milata Hai
    Hai Hindi Mein Verse Mera
    Punjab Ko Hilata Hai
    
    Pair Se Leke Sar Tak
    Sar Se Leke Pair Tak
    Sab Kuch Proper Hai
    
    Hah
    Album Mode Mein
    Stunnah Mere Saath
    Bambai Shahar 2020
    Nani Yaad Aa Jayegi
    
    
    
`},
{
    id:36,
    lyrics:`Kaaliyan baariyan ve gaddiyaan nu main lawaan
    Speed main 220 di chalaan, police de samne main
    Nai
    Rukda
    I am a night rider
    Breakaan maar maar tyre di main cheekh kad da
    Sare loki takde we ki hogeya, lagda we aj mera dil
    Ruk gya
    Unu main puchda…
    
    Ni gaddi sadi behja ni jattiye,
    Ni door tenu lehja, we adiye
    Ni woofer tu meri, meri
    Main tera amplifier, fier
    Ni gaddi sadi behja ni jattiye,
    Ni door tenu lehja, we adiye
    Ni woofer tu meri, meri
    Main tera amplifier, fier…
    
    Gaddi meri tenu hi awaaz mardi,
    Black leather seetaan uttey aah beh ni
    Tenu weh main sair karawanga we ni
    Puri duniya di
    Kehndi, garmi we lagdi hai seene ni
    Pijh gai weh kurti paseene di
    40 degree sidi thoop pendi
    On kara AC…
    
    Ni gaddi sadi behja ni jattiye,
    Ni door tenu lehja, we arriye
    Ni woofer tu meri, meri
    Main tera amplifier, fier
    Ni gaddi sadi behja ni jattiye,
    Ni door tenu lehja, we arriye
    Ni woofer tu meri, meri
    Main tera amplifier, fier…
    
    Jaandi eh club das tere ki irade AHA
    DJ nu puch ki lagwa ve tere gaane ACHA
    Lehja main lehja tenu jithe v tu chaahwain
    Ik waari aawe mood banawe..(x2)
    
    Ni gaddi sadi behja ni jattiya
    Ni door tenu lehjja we adiye
    Ni woofer tu meri, meri
    Main tera amplifier fier……(x6)
    
    
    
`},
{
    id:30,
    lyrics: `
    Heeriye Heeriye Aa Aa
Heeriye Heeriye Aa Aa

Teri Hoke Maraan
Jind Jaan Karaan
Teri Hoke Maraan
Jind Jaan Karaan

Heeriye Heeriye Aa Aa
Heeriye Heeriye Aa Aa

Neendan Vi Tutt Tutt Gaiyan
Chundi Main Taare Rahiyan
Sochan Vich Teriyan Paiyan
Haaniya

Saari Saari Raat Jagave
Yaadan Nu Zikar Tera Ve
Aaye Kyun Na Aaye Subah Ve
Haaniya

Teri Hoke Maraan
Jind Jaan Karaan
Teri Hoke Maraan
Jind Jaan Karaan

Heeriye Heeriye Aa Aa
Heeriye Heeriye Aa Aa

Chheti Aa Chheti
Sohne Raat Na Langhe
Aaja Ve Aaja
Sohne Raat Na Langhe

Chheti Aa Chheti
Sohne Raat Na Langhe
Aaja Ve Aaja
Sohne Raat Na Langhe

Jad Vi Tainu Takkdi Aan Ve
Akhiyan Vi Shukar Manave
Kole Aa Door Na Jaa Ve
Haaniya

Palkan Di Karke Chhavan
Dil De Tainu Kol Bithavan
Takk Takk Tainu Khairan Paavan
Haaniya Teri

Haaniya Teri
Teri Haaniya Teri

Teri Hoke Maraan
Jind Jaan Karaan
Teri Hoke Maraan
Jind Jaan Karaan

Heeriye Heeriye Aa Aa
Heeriye Heeriye Aa Aa

Haan Aa Haaniya Teri
Haan Aa Haaniya Teri



`},
{
    id:29,
    lyrics:`Mujhko Itna Bataye Koyi
    Kaise Tujhse Dil Na Lagaye Koyi
    Rabba Ne Tujhko Banane Mein
    Kardi Hai Husn Ki Khaali Tijoriyan
    
    Kajal Ki Siyahi Se Likhi
    Hai Tune Jaane
    Kitno Ki Love Story’an
    
    Kesariya Tera Ishq Hai Piya
    Rang Jaaun Jo Main Hath Lagaun
    Din Beete Saara Teri Fikr Mein
    Rain Saari Teri Khair Manaun
    
    Kesariya Tera Ishq Hai Piya
    Rang Jaaun Jo Main Hath Lagaun
    Din Beete Saara Teri Fikr Mein
    Rain Saari Teri Khair Manaun
    
    Patjhad Ke Mausam Mein Bhi
    Rangi Chanaron Jaisi
    Jhanke Sannnaton Mein Tu
    Veena Ke Taaron Jaisi
    
    Hmm Sadiyon Se Bhi Lambi Yeh
    Mann Ki Amavasein Hain
    Aur Tu Phuljhadiyon Wale
    Tyoharon Jaisi
    
    Chanda Bhi Deewana Hai Tera
    Jalti Hai Tujhse
    Saari Chhakoriyan
    
    Kajal Ki Siyahi Se Likhi
    Hai Tune Jaane
    Kitno Ki Love Story’an
    
    Kesariya Tera Ishq Hai Piya
    Rang Jaaun Jo Main Hath Lagaun
    Din Beete Saara Teri Fikr Mein
    Rain Saari Teri Khair Manaun
    
    Kesariya Tera Ishq Hai Piya
    Rang Jaaun Jo Main Hath Lagaun
    Din Beete Saara Teri Fikr Mein
    Rain Saari Teri Khair Manaun
    
    Kesariya Tera Ishq Hai Piya
    Ishq Hai Piya
    Kesariya Tera Ishq Hai Piya
    Ishq Hai Piya
    
    Piya Ishq Hai Piya
    Ishq Hai Piya
    Kesariya Tera Ishq Hai Piya
    Rang Jaaun Jo Main Hath Lagaun
    
    
    
`}
]  

const lyrics = document.getElementById("lyrics");
lyrics.addEventListener('click',lyricsClicked)




