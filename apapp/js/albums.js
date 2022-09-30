const songs =[
    {
      img: "https://i.scdn.co/image/ab67616d0000b273d6a601f98263dd6518344fb0",
      alt: "over 85 album cover",
      name: "Over 85",
      artist: "Hojean",
      link: "https://open.spotify.com/track/6KhT7CK6FL0BnI3nVPqv4F?si=c3271c09a5da463c",
    },
    {
      img: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/775e8b48535813.589ac73d716b1.jpg",
      alt: "my jinji album cover",
      name: "My Jinji",
      artist: "Sunset Roller Coaster",
      link: "https://open.spotify.com/track/7wmFsS43fO8vAg0vcr776N?si=78d813ef765849c2",
    },
    {
      img: "https://m.media-amazon.com/images/I/91rM2uK9AAL._SS500_.jpg",
      alt: "kazino album cover",
      name: "Kazino",
      artist: "BIBI",
      link: "https://open.spotify.com/track/245onUPHGD1DYuiacxTuW0?si=c945a70e1de4467e",
    },
    {
      img: "https://m.media-amazon.com/images/I/81U7ya0sW1L._SS500_.jpg",
      alt: "nan chun album cover",
      name: "난춘",
      artist: "SE SO NEON",
      link: "https://open.spotify.com/track/320twJYO0LC64eWCuCC5vj?si=f8740ab8fd1e4987",
    },
    {
      img: "https://m.media-amazon.com/images/I/81XY0-lYINL._SS500_.jpg",
      alt: "ghibli album cover",
      name: "ある夏の日 ",
      artist: "Joe Hisaishi",
      link: "https://open.spotify.com/track/3gFQOMoUwlR6aUZj81gCzu?si=9c4d0db2634c49be",
    },

    {
      img: "https://i.scdn.co/image/ab67616d0000b2739d28fd01859073a3ae6ea209",
      alt: "attention album cover",
      name: "Attention",
      artist: "NewJeans",
      link: "https://open.spotify.com/track/2pIUpMhHL6L9Z5lnKxJJr9?si=5cf2e90ded904f85",
    },
    {
      img: "https://m.media-amazon.com/images/I/81vp4W6hHeL._SS500_.jpg",
      alt: "binu album cover",
      name: "BINU",
      artist: "BIBI",
      link: "https://open.spotify.com/track/0lSJQip2wVidbu1JfZ4IEQ?si=f5385dc2f0a54e3b",
    },
    {
      img: "https://i.scdn.co/image/ab67616d0000b27325a87873e03f11eb9f88dd1a",
      alt: "genshin album cover",
      name: "Lover's Oath",
      artist: "Yu Peng Chen",
      link: "https://open.spotify.com/track/0KOCCyZ2P4rBaPBtnS09i9?si=54cba8b36ff54d8b",
    },
    {
      img: "https://i.scdn.co/image/ab67616d0000b2739d28fd01859073a3ae6ea209",
      alt: "cookie album cover",
      name: "Cookie",
      artist: "NewJeans",
      link: "https://open.spotify.com/track/2DwUdMJ5uxv20EhAildreg?si=d5f8549c9b9b44df",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/en/b/b6/IU_Palette_final.jpg",
      alt: "iu album cover",
      name: "Palette",
      artist: "IU",
      link: "https://open.spotify.com/track/3y7ByLZ05tluscOTRgEJ9Y?si=69a65e5a925a4488",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/en/b/b9/Freudian_by_Daniel_Caesar.jpg",
      alt: "",
      name: "Best Part ",
      artist: "Daniel Caesar",
      link: "https://open.spotify.com/track/1RMJOxR6GRPsBHL8qeC2ux?si=816b3b23c9554711",
    },
    {
      img: "https://m.media-amazon.com/images/I/81HdxDfG-YL._SS500_.jpg",
      alt: "north wing album",
      name: "North Wing ",
      artist: "Shingo",
      link: "https://open.spotify.com/track/0epWzoHL7bQh4ER3OWwrEe?si=6396bbefce8c4f33",
    },
    {
      img: "https://m.media-amazon.com/images/I/71HRCBKoM+L._SS500_.jpg",
      alt: "keshi album cover",
      name: "atlas",
      artist: "keshi",
      link: "https://open.spotify.com/track/5q9eIN6RXrs4e5PsRTXMpp?si=1064fb42d12f47bb",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/en/7/79/Ive_%E2%80%93_Love_Dive.jpg",
      alt: "love dive album cover",
      name: "Love Dive",
      artist: "IVE",
      link: "https://open.spotify.com/track/0Q5VnK2DYzRyfqQRJuUtvi?si=f24f39e2c56f42ee",
    },
    {
      img: "https://i.scdn.co/image/ab67616d0000b2739d28fd01859073a3ae6ea209",
      alt: "hype boy album cover",
      name: "Hype Boy",
      artist: "NewJeans",
      link: "https://open.spotify.com/track/0a4MMyCrzT0En247IhqZbD?si=2bc6a1c5dd274a40",
    },
    {
      img: "https://pbs.twimg.com/media/EPx3XDrU8AAb9Ey.jpg",
      alt: "ayayaya album cover",
      name: "AYAYAYA",
      artist: "IZONE",
      link: "https://open.spotify.com/track/4XKCLNyCTvtdkLu5O1mzTU?si=9f11a0169b1c47f6",
    },
    {
      img: "https://i.scdn.co/image/ab67616d0000b27337ff46852249bdfc938beefa",
      alt: "mmmh album cover",
      name: "Mmmh",
      artist: "Kai",
      link: "https://open.spotify.com/track/5dntGTbUtmUO239wQ0k3yM?si=eb53408e377b4020",
    },
    {
      img: "https://i.scdn.co/image/ab67616d0000b273da343b21617aac0c57e332bb",
      alt: "eleven album cover",
      name: "Eleven",
      artist: "IVE",
      link: "https://open.spotify.com/track/7n2FZQsaLb7ZRfRPfEeIvr?si=2013865a03a34ebf",
    },
    {
      img: "https://i.scdn.co/image/ab67616d0000b273fb69e1c41f54aa6e11c9080e",
      alt: "sofa album cover",
      name: "SOFA",
      artist: "Crush",
      link: "https://open.spotify.com/track/1QFMj5GGXMY7K30dlpAs7j?si=a6f6284b258a42e4",
    },
    {
      img: "https://m.media-amazon.com/images/I/A1KQVgfxCpL._SS500_.jpg",
      alt: "everlasting cover ",
      name: "Everlasting",
      artist: "Albert Posis",
      link: "https://open.spotify.com/track/2kb3LGpIdib7c2npWf4Kp3?si=639a75db84164b7a",
    },
    {
      img: "https://i.scdn.co/image/ab67616d00001e0287f53da5fb4ab1171766b2d5",
      alt: "after like album cover",
      name: "After Like",
      artist: "IVE",
      link: "https://open.spotify.com/track/2gYj9lubBorOPIVWsTXugG?si=bd407b1867234a37",
    },
    {
      img: "https://i.scdn.co/image/ab67616d0000b2730cf5d8049db06a49cc7df7ba",
      alt: "enough album cover",
      name: "Enough ",
      artist: "Colde, 정유미 & Apro",
      link: "https://open.spotify.com/track/1JB8Y5r1Pee8E8b7J1Kf1q?si=ef1eba160ed94d5e",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/en/c/cd/Taylor_Swift_-_Lover.png",
      alt: "lover album cover",
      name: "Lover",
      artist: "Taylor Swift",
      link: "https://open.spotify.com/track/0bzbvANY6oETSJLc0wlVGY?si=1ca79379534646d0",
    },
    {
      img: "https://i.scdn.co/image/ab67616d00001e0287f53da5fb4ab1171766b2d5",
      alt: "my satisfaction album cover",
      name: "My Satisfaction",
      artist: "IVE",
      link: "https://open.spotify.com/track/3Owz3vrIE44Hvt0sLsfwHI?si=4c9da9b3d2754226",
    },
    {
      img: "https://m.media-amazon.com/images/I/81qlNaHVSHL._SS500_.jpg",
      alt: "luke chiang album",
      name: "Paragraphs",
      artist: "Luke Chiang",
      link: "https://open.spotify.com/track/4kEhwajTV4psTYa9FaWwac?si=918564285c1643f9",
    },
    {
      img: "https://images-eu.ssl-images-amazon.com/images/I/51YoCZ9-6hL._SX300_SY300_QL70_ML2_.jpg",
      alt: "half moon  album cover",
      name: "D (Half Moon)",
      artist: "DEAN",
      link: "https://open.spotify.com/track/3uA8SjMyDtwtt0jLPMQbVD?si=c5958325f8a846f2",
    },
    {
      img: "https://i.scdn.co/image/ab67616d0000b27337ff46852249bdfc938beefa",
      alt: "reason album cover",
      name: "Reason",
      artist: "Kai",
      link: "https://open.spotify.com/track/5x2p715xYEKn2AdV9pNv52?si=cb3abc5e0bc148b0",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/en/1/13/Trolls_World_Tour_%28Original_Motion_Picture_Soundtrack%29.png",
      alt: "trolls album cover",
      name: "The Other Side",
      artist: "SZA, Justin T",
      link: "https://open.spotify.com/track/6cN7DMetKweuV7GZ5htak4?si=98d237f332d24af4",
    },

    {
      img: "https://i.scdn.co/image/ab67616d0000b2733deb4b0115410a85afe31c29",
      alt: "life goes on album cover",
      name: "Life Goes On",
      artist: "BTS",
      link: "https://open.spotify.com/track/5FVbvttjEvQ8r2BgUcJgNg?si=8e742c558f4146ad",
    },
    {
      img: "https://m.media-amazon.com/images/I/711vVL+5LPL._SS500_.jpg",
      alt: "ribs  album cover",
      name: "Ribs",
      artist: "Lorde",
      link: "https://open.spotify.com/track/2MvvoeRt8NcOXWESkxWn3g?si=ffa35fb7249a4202",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/en/5/56/Loona_-_Hash.png",
      alt: "numbre 1  album cover",
      name: "Number 1",
      artist: "Loona",
      link: " https://open.spotify.com/track/1W9fuK1bUimZRvyckkQR05?si=04234f68f4dd4025",
    },
    {
      img: "https://s3.amazonaws.com/media.thecrimson.com/photos/2021/11/08/202243_1352738.jpeg",
      alt: "conan gray album",
      name: "Telepath",
      artist: "Conan Gray",
      link: "https://open.spotify.com/track/3Z39gbqdaGL3WJXBG0gcuE?si=fc217d8822ce4459",
    },
    {
      img: "https://e.snmc.io/i/600/s/f270f503fbc5e46ee2e62b27cc90cbc8/8932993/zild-huminga-Cover-Art.jpg",
      alt: "Zild album",
      name: "Huminga",
      artist: "Zild",
      link: "https://open.spotify.com/track/1oSU9utRLTwXXqeQXu4tXx?si=3e2fb235ef40484f",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Dean_-_Instagram.jpg/220px-Dean_-_Instagram.jpg",
      alt: "instagram  album cover",
      name: "Instagram",
      artist: "DEAN",
      link: "https://open.spotify.com/track/6z1kLsntE7FuzKZHZWrXYN?si=125ce417a3a140be",
    },
    {
      img: "https://static.wikia.nocookie.net/kboy-group/images/3/3f/Try_Again.jpg/revision/latest?cb=20171124093214",
      alt: "try again album",
      name: "Try Again",
      artist: "Jaehyun, d.ear",
      link: "https://open.spotify.com/track/4Sav8RLaXMBpTZX6xNPj0K?si=ab73c29492b1428c",
    },
    {
      img: "https://images-eu.ssl-images-amazon.com/images/I/51YoCZ9-6hL._SX300_SY300_QL70_ML2_.jpg",
      alt: "what2do  album cover",
      name: "What 2 Do",
      artist: "DEAN",
      link: "https://open.spotify.com/track/6GS3lnAVy5w6AHWEKYzYeS?si=5c0a3979b2f34fce",
    },
    {
      img: "https://f4.bcbits.com/img/a2858185520_10.jpg",
      alt: "LAMP ALBUM",
      name: "ゆめうつつ",
      artist: "Lamp",
      link: "https://open.spotify.com/track/1GTC0DN9LGOdP0NdvoHyX7?si=a2181238700a435f",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/en/5/56/Loona_-_Hash.png",
      alt: "ding ding dong  album cover",
      name: "Ding Ding Dong",
      artist: "LOONA",
      link: "https://open.spotify.com/track/5wXl54GxirvUdS9ne70mC7?si=44149289289148cf",
    },
    {
      img: "https://m.media-amazon.com/images/I/91c0iYZAl+L._SS500_.jpg",
      alt: "satellite  album cover",
      name: "Satellite",
      artist: "LOONA",
      link: "https://open.spotify.com/track/7nbKBoLQ8ZiQ5Ge8vMPcgF?si=6bfc04256bcd4380",
    },

    {
      img: "https://i1.sndcdn.com/artworks-yRMN6JUpqaRiITzy-J5BgdA-t500x500.jpg",
      alt: "kun album cover",
      name: "情人",
      artist: "KUN",
      link: "https://open.spotify.com/track/4OoO0q9DrsT0pSHvA435KF?si=6f31072943bf4431",
    },
    {
      img: "https://m.media-amazon.com/images/I/A14gBRl5hML._SS500_.jpg",
      alt: "wave to earth",
      name: "ride",
      artist: "wave to earth",
      link: "https://open.spotify.com/track/43ap1ds3F1o8Fmz6b29NoG?si=06479c322ce74075",
    },
    {
      img: "https://i.scdn.co/image/ab67616d0000b2738ea860a3e6904b875629d672",
      alt: "run 2 u",
      name: "RUN2U",
      artist: "STAYC",
      link: "https://open.spotify.com/track/3gFcGnU4kTdMYLXDjH1TK8?si=a74ee4e71b644cba",
    },
    {
      img: "https://m.media-amazon.com/images/I/91c0iYZAl+L._SS500_.jpg",
      alt: "butterfly album cover",
      name: "Butterfly",
      artist: "LOONA",
      link: "https://open.spotify.com/track/6wNKKoUQfLPmch7cqSFytV?si=c9710e0baf5841f4",
    },
    {
      img: "https://images-eu.ssl-images-amazon.com/images/I/51YoCZ9-6hL._SX300_SY300_QL70_ML2_.jpg",
      alt: "pour up  album cover",
      name: "Pour Up",
      artist: "DEAN",
      link: "https://open.spotify.com/track/2p980qlVXYLh3HdHusbhfa?si=f6ec945dc49f4b99",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/vi/thumb/b/bc/One-Reeler_IZ_One_album_cover.jpg/220px-One-Reeler_IZ_One_album_cover.jpg",
      alt: "Mise-en-Scène album cover",
      name: "Mise-en-Scène",
      artist: "IZONE",
      link: "https://open.spotify.com/track/2MkRGUoxfB1gq0k2lMu0o0?si=89a0afc3f8a74936",
    },
    {
      img: "https://images-eu.ssl-images-amazon.com/images/I/51YoCZ9-6hL._SX300_SY300_QL70_ML2_.jpg",
      alt: "21 album cover",
      name: "21",
      artist: "DEAN",
      link: "https://open.spotify.com/track/2jiI8bNSDu7UxTtDCOqh3L?si=a73c7185e11b4658",
    },

    {
      img: "https://hiphopkr.com/wp-content/uploads/2019/09/colde-control-me.jpg",
      alt: "control me album cover",
      name: "Control Me",
      artist: "Colde",
      link: "https://open.spotify.com/track/1ffNBM0LCbHya4SezmmAH8?si=d6d8fc8cba6344bd",
    },
    {
      img: "https://video-images.vice.com/_uncategorized/1535133492885-a2337835939_10.jpeg",
      alt: "nobody album cover",
      name: "Nobody",
      artist: "Mitski",
      link: "https://open.spotify.com/track/2P5yIMu2DNeMXTyOANKS6k?si=163abebac21c4c88",
    },

    {
      img: "https://upload.wikimedia.org/wikipedia/vi/thumb/b/bc/One-Reeler_IZ_One_album_cover.jpg/220px-One-Reeler_IZ_One_album_cover.jpg",
      alt: "panorama album cover",
      name: "Panorama",
      artist: "IZONE",
      link: "https://open.spotify.com/track/0CnpSTdL9l5vQM4YnzXtyo?si=c89f21c2cb954d9c",
    },
    {
      img: "https://pbs.twimg.com/media/EPx3XDrU8AAb9Ey.jpg",
      alt: "daydream album cover",
      name: "DAYDREAM",
      artist: "IZONE",
      link: "https://open.spotify.com/track/19vNcjcAM9KC7ykx9V6eBy?si=da9de098d7984fad",
    },
    {
      img: "https://i1.sndcdn.com/artworks-000382815396-93rom9-t500x500.jpg",
      alt: "butterfly album cover",
      name: "Butterfly",
      artist: "BTS",
      link: "",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/vi/thumb/b/bc/One-Reeler_IZ_One_album_cover.jpg/220px-One-Reeler_IZ_One_album_cover.jpg",
      alt: "sequence album cover",
      name: "Sequence",
      artist: "IZONE",
      link: "https://open.spotify.com/track/4Wa3kUtGTeuPuC9qF9wF0g?si=94470048afac4adb",
    },
    {
      img: "https://pbs.twimg.com/media/EPx3XDrU8AAb9Ey.jpg",
      alt: "fiesta album cover",
      name: "FIESTA",
      artist: "IZONE",
      link: "https://open.spotify.com/track/6Ihdn6wW2UBhfTKWbP29KA?si=7a09e0caef60479c",
    },
    {
      img: "https://images-eu.ssl-images-amazon.com/images/I/51YoCZ9-6hL._SX300_SY300_QL70_ML2_.jpg",
      alt: "i love it album cover",
      name: "I Love It",
      artist: "DEAN",
      link: "https://open.spotify.com/track/6CBA5xTE7Z4cyA9rzlhFdA?si=90af77f7a0414122",
    },
    {
      img: "https://m.media-amazon.com/images/I/A10dilSAZ4L._SS500_.jpg",
      alt: "kiss me album cover",
      name: "Kiss Me",
      artist: "DPR Live",
      link: "https://open.spotify.com/track/02K01fxmK5qQrwWSHGbb9d?si=8577935e77ac4325v",
    },
    {
      img: "https://as1.ftcdn.net/v2/jpg/01/03/80/06/1000_F_103800647_ugTVlXO5BYF9hUtYCxpjIH9TwtKKZ3iJ.jpg",
      alt: "end",
      name: "The End!",
      artist: "jessie yang",
      link: "https://open.spotify.com/user/cbqgzk44ahfntfp2ddv7kny73?si=cw2B5TF5TFGxkPZ5zaZy_A",
    },
  ];
  export { songs };