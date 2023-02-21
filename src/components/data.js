import polestarRed from '../assets/images/clothes/polestar/polestar-red.png';
import polestarBlue from '../assets/images/clothes/polestar/polestar-blue.png';
import polestarGreen from '../assets/images/clothes/polestar/polestar-green.png';
import polestarPurple from '../assets/images/clothes/polestar/polestar-purple.png';
import polestarWhite from '../assets/images/clothes/polestar/polestar-white.png';
import redLongsleeve from '../assets/images/clothes/redLongsleeve/redLongsleeve.png';
import redTop from '../assets/images/clothes/redTop/redTop.webp';
import yellowDress from '../assets/images/clothes/yellowDress/yellowDress.png';
import brownLongsleeve from '../assets/images/clothes/brownLongsleeve/brownLongsleeve.png';

const data = [
    {
        id:0,
        title: 'Polestar',
        image: [polestarRed,polestarBlue,polestarGreen,polestarPurple,polestarWhite],
        price: 10000000,
        desc: '',
        sizes: ['XS','S','M','L','XL'],
        colors: ['red','blue','green','purple','white'],
    },
    {
        id:1,
        title: 'Red Longsleeve',
        image: [redLongsleeve],
        price: 10000000,
        desc: '',
        sizes: ['XS','S','M','L','XL'],
        colors: ['red','blue','green','purple','pink'],
    },
    {
        id:2,
        title: 'Red Top',
        image: [redTop],
        price: 10000000,
        desc: '',
        sizes: ['XS','S','M','L','XL'],
        colors: ['red','blue','green','purple','white'],
    },
    {
        id:3,
        title: 'Yellow Dress',
        image: [yellowDress],
        price: 10000000,
        desc: '',
        sizes: ['XS','S','M','L','XL'],
        colors: ['red','blue','green','purple','white'],
    },
    {
        id:4,
        title: 'Brown Longsleeve',
        image: [brownLongsleeve],
        price: 10000000,
        desc: '',
        sizes: ['XS','S','M','L','XL'],
        colors: ['red','blue','green','purple','white'],
    },
]
export default data;
// var arr = [
//     4,
//     8,
//     9
// ]

// arr[1]

// var obj = {
//     name:'anun',
//     arr: [4,8,9],
//     'last name':
// }

// obj.name
// obj[name]
// obj['last name']