// তোমাকে একটা function দেওয়া হবে called mindGame(” যা ইনপুট হিসেবে একটা positive number নিবে।")এখন তোমার task : তোমাকে সেই নাম্বার এর সাথে 3 গুন করে, তারপর 10 যোগ করে, তারপর 2 দিয়ে ভাগ করে, তারপর 5 বিয়োগ করে, যা আউটপুট আসবে তা return করতে হবে


function mindGame(number) {
    let intu = 3 * number;
    let sum = intu + 10;
    let share = sum / 2;
    let mainus = share - 5;
    console.log(intu, sum, share, mainus);
    return mainus;
}

const total = mindGame(33);
console.log(total)