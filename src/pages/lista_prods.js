import ard_nano from '../imgs/im1.png'
import sensor_r from '../imgs/im10.png'
import aro from '../imgs/im11.jpg'
import roda from '../imgs/im11.png'
import su from '../imgs/im12.png'
import uno from '../imgs/im13.png'
import servo from '../imgs/im14.png'
import jump from '../imgs/im15.jpg'

const produtos = [
    {
        cad: 0,
        plus: 1,
        promo: 1,
        sponsor: 0,
        id: 1,
        tit: "Cakes de Chocolate",
        preco: 560,
        img: ard_nano,
        desc: "Descricao do produto ou sei la alguma coisa amais , blablabla dejks ffb bjkdbf jejkhfjke rewhfkfbkjef kerhkfeiowfrbekverkbfkjewhfjekjbfkjewfjk kje fjeh fjekwbfjewfjke wfjehfjkbejkfbjkgfaiawfjkhbsjfgdsbv ds dbfd jfgjkf jvmcdba,fj bdjf,uwgufeowrqowiuroewrhh df  gf hfjkhfjkweurhekfbew fjke fjkreh gurehfkerfe"
    },
    {
        cad: 0,
        plus: 1,
        promo: 0,
        sponsor: 1,
        id: 2,
        tit: "Vanila Manteiga BlaBlavkm",
        preco: 810,
        img: su,
        desc: "Descricao do produto ou sei la alguma coisa amais , blablabla dejks ffb bjkdbf jejkhfjke rewhfkfbkjef kerhkfeiowfrbekverkbfkjewhfjekjbfkjewfjk kje fjeh fjekwbfjewfjke wfjehfjkbejkfbjkgfaiawfjkhbsjfgdsbv ds dbfd jfgjkf jvmcdba,fj bdjf,uwgufeowrqowiuroewrhh df  gf hfjkhfjkweurhekfbew fjke fjkreh gurehfkerfe"
    },
    {
        cad: 0,
        plus: 1,
        promo: 0,
        sponsor: 0,
        id: 3,
        tit: "Gasosa Twisted Tea",
        preco: 180,
        img: aro,
    },
    {
        cad: 1,
        plus: 1,
        promo: 0,
        sponsor: 1,
        id: 4,
        tit: "Gasosa Sprite 360ml",
        preco: 400,
        img: jump,
        desc: "Descricao do produto ou sei la alguma coisa amais , blablabla dejks ffb bjkdbf jejkhfjke rewhfkfbkjef kerhkfeiowfrbekverkbfkjewhfjekjbfkjewfjk kje fjeh fjekwbfjewfjke wfjehfjkbejkfbjkgfaiawfjkhbsjfgdsbv ds dbfd jfgjkf jvmcdba,fj bdjf,uwgufeowrqowiuroewrhh df  gf hfjkhfjkweurhekfbew fjke fjkreh gurehfkerfe"
    },
    {
        cad: 0,
        plus: 0,
        promo: 1,
        sponsor: 0,
        id: 5,
        tit: "Refri Coors Light",
        preco: 350,
        img: servo,
        desc: "Descricao do produto ou sei la alguma coisa amais , blablabla dejks ffb bjkdbf jejkhfjke rewhfkfbkjef kerhkfeiowfrbekverkbfkjewhfjekjbfkjewfjk kje fjeh fjekwbfjewfjke wfjehfjkbejkfbjkgfaiawfjkhbsjfgdsbv ds dbfd jfgjkf jvmcdba,fj bdjf,uwgufeowrqowiuroewrhh df  gf hfjkhfjkweurhekfbew fjke fjkreh gurehfkerfe"
    },
    {
        cad: 1,
        plus: 0,
        promo: 0,
        sponsor: 0,
        id: 6,
        tit: "Coca-Cola em Pó",
        preco: 300,
        img: roda,
        desc: "Descricao do produto ou sei la alguma coisa amais , blablabla dejks ffb bjkdbf jejkhfjke rewhfkfbkjef kerhkfeiowfrbekverkbfkjewhfjekjbfkjewfjk kje fjeh fjekwbfjewfjke wfjehfjkbejkfbjkgfaiawfjkhbsjfgdsbv ds dbfd jfgjkf jvmcdba,fj bdjf,uwgufeowrqowiuroewrhh df  gf hfjkhfjkweurhekfbew fjke fjkreh gurehfkerfe"

    },
    {
        cad: 1,
        plus: 0,
        promo: 0,
        sponsor: 1,
        id: 7,
        tit: "Corona Extra Refri",
        preco: 940,
        img: sensor_r,
        desc: "Descricao do produto ou sei la alguma coisa amais , blablabla dejks ffb bjkdbf jejkhfjke rewhfkfbkjef kerhkfeiowfrbekverkbfkjewhfjekjbfkjewfjk kje fjeh fjekwbfjewfjke wfjehfjkbejkfbjkgfaiawfjkhbsjfgdsbv ds dbfd jfgjkf jvmcdba,fj bdjf,uwgufeowrqowiuroewrhh df  gf hfjkhfjkweurhekfbew fjke fjkreh gurehfkerfe"
    },
    {
        cad: 0,
        plus: 0,
        promo: 0,
        sponsor: 0,
        id: 8,
        tit: "CocaCola em Bidon",
        preco: 250,
        img: uno,
        desc: "Descricao do produto ou sei la alguma coisa amais , blablabla dejks ffb bjkdbf jejkhfjke rewhfkfbkjef kerhkfeiowfrbekverkbfkjewhfjekjbfkjewfjk kje fjeh fjekwbfjewfjke wfjehfjkbejkfbjkgfaiawfjkhbsjfgdsbv ds dbfd jfgjkf jvmcdba,fj bdjf,uwgufeowrqowiuroewrhh df  gf hfjkhfjkweurhekfbew fjke fjkreh gurehfkerfe"
    },
    {
        cad: 0,
        plus: 0,
        promo: 0,
        sponsor: 0,
        id: 9,
        tit: "Outra CocaCola",
        preco: 180,
        img: uno,
        desc: "Descricao do produto ou sei la alguma coisa amais , blablabla dejks ffb bjkdbf jejkhfjke rewhfkfbkjef kerhkfeiowfrbekverkbfkjewhfjekjbfkjewfjk kje fjeh fjekwbfjewfjke wfjehfjkbejkfbjkgfaiawfjkhbsjfgdsbv ds dbfd jfgjkf jvmcdba,fj bdjf,uwgufeowrqowiuroewrhh df  gf hfjkhfjkweurhekfbew fjke fjkreh gurehfkerfe"
    },
    {
        cad: 1,
        plus: 0,
        promo: 0,
        sponsor: 0,
        id: 10,
        tit: "Nova Coca",
        preco: 100,
        img: uno,
        desc: "Descricao do produto ou sei la alguma coisa amais , blablabla dejks ffb bjkdbf jejkhfjke rewhfkfbkjef kerhkfeiowfrbekverkbfkjewhfjekjbfkjewfjk kje fjeh fjekwbfjewfjke wfjehfjkbejkfbjkgfaiawfjkhbsjfgdsbv ds dbfd jfgjkf jvmcdba,fj bdjf,uwgufeowrqowiuroewrhh df  gf hfjkhfjkweurhekfbew fjke fjkreh gurehfkerfe"
    },
    {
        cad: 1,
        plus: 0,
        promo: 0,
        sponsor: 0,
        id: 11,
        tit: "Bla Bla bLa",
        preco: 150,
        img: uno,
        desc: "Descricao do produto ou sei la alguma coisa amais , blablabla dejks ffb bjkdbf jejkhfjke rewhfkfbkjef kerhkfeiowfrbekverkbfkjewhfjekjbfkjewfjk kje fjeh fjekwbfjewfjke wfjehfjkbejkfbjkgfaiawfjkhbsjfgdsbv ds dbfd jfgjkf jvmcdba,fj bdjf,uwgufeowrqowiuroewrhh df  gf hfjkhfjkweurhekfbew fjke fjkreh gurehfkerfe"
    },
];

export default produtos;
