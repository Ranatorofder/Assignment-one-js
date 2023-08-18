// তোমাকে একটা function দেওয়া হবে called “isLGSeven()”. এটা ইনপুট হিসেবে একটা number নিবে।  এখন তোমার task: তোমাকে ইনপুট ভ্যালু এবং ৭ এর মধ্যে পার্থক্য বের করতে হবে। যদি এই পার্থক্য ৭ এর চেয়ে ছোট হয়, তখন তোমাকে return করতে হবে সেই বিয়োগফল। নাহলে তোমাকে return করতে হবে double of the input। মানে যে সংখ্যা ইনপুট হিসেবে নিয়েছো সেটির দ্বিগুণ।

function isLGSeven(number) {


    if (number < 7) {
        let mainus = number - 7;
        return mainus;
    }
    else {
        number * 2;
        let intu = number * 2;
        return intu;
    }

}

const totalNumber = isLGSeven(15);
console.log(totalNumber);