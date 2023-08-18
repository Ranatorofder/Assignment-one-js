/* 
তোমাকে একটা function দেওয়া হবে called gemsToDiamond(). এটা ইনপুট হিসেবে তিনটা number ( তোমাদের ৩ বন্ধুর gems এর সংখ্যা ) নিবে। 



১ম বন্ধুর প্রতি gems এর ক্ষমতা = 21

২য় বন্ধুর প্রতি gems এর ক্ষমতা = 32

৩য় বন্ধুর প্রতি gems এর ক্ষমতা = 43



[ gems এর ক্ষমতা বলতে একটা gems কে কয়টা diamond এ convert করা যাবে সেটা বুঝানো হচ্ছে। ]

এখন তোমার task: সব বন্ধুর gems মিলিয়ে total কতটি diamond পাবে সেটা বের করতে হবে। total diamond এর সংখ্যা যদি 1000 এর দিগুন এর উপর হয়ে যায় সেক্ষেত্রে total diamond থেকে 2000 বাদ দিয়ে যতগুলো diamond অবশিষ্ট থাকবে, ততগুলো তোমরা পাবে।

*/


function gemsToDiamond(gems1, gems2, gems3) {
    let firstGems = 21 * gems1;
    let secoundGems = 32 * gems2;
    let thirdGems = 43 * gems3;
    const gemsSum = firstGems + secoundGems + thirdGems;
    console.log(firstGems, secoundGems, thirdGems)
    console.log(gemsSum)
    if (gemsSum > 2000) {
        const sum = gemsSum - 2000;
        return sum;
    }
    else {
        return gemsSum
    }


}

const totalGems = gemsToDiamond(20, 200, 50);
console.log(totalGems)