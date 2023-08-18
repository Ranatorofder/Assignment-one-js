// তোমাকে একটা function দেওয়া হবে called findingBadData(). এটা ইনপুট হিসেবে একটা array নিবে। array তে যেকোনো সংখ্যক কতগুলো number থাকবে। number গুলো negative number (less than zero) ও হতে পারে, আবার positive number (greater than or equal to zero) ও হতে পারে। কোনও number যদি negative হয় সেটাকে আমরা বলব “Bad Data”. কোনও number যদি positive হয় সেটাকে আমরা বলব “Good Data”. এখন তোমার task: array তে কতগুলো Bad data আছে সেটা খুঁজে বের করতে হবে এবং সেই নাম্বার টা return করতে হবে।

function findingBadData(number) {
    let badData = 0;
    for (let i = 0; i < number.length; i++) {
        let element = number[i];
        if (element < 0) {
            badData++;
        }

    }
    return badData;
}

let arrayNumbers = [-4, -9, -5, -33, -55]
const allBadData = findingBadData(arrayNumbers);
console.log(allBadData);



