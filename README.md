### 1. **What are some differences between interfaces and types in TypeScript?**

Interference::                                                                                   

1.`extends` দিয়ে একাধিক ইন্টারফেস একসাথে যুক্ত করা যায়।

2. ইউনিয়ন টাইপ সরাসরি সাপোর্ট করে না।

3. একই নামের একাধিক ইন্টারফেস

অটোমেটিক মার্জ হয়ে যায়।
4. কম্পাইলার জন্য অপ্টিমাইজড, বড় প্রোজেক্টেদ্রুত কাজ করে।

Type:

1.`&` (ইন্টারসেকশন) ব্যবহার করে একসাথে যুক্ত করতে হয়।

2.ইউনিয়ন টাইপ সহজে তৈরি করা যায়।

3.একই নামের `type` ডিক্লেয়ার করলে **এরর** হয়।

4.জটিল টাইপে কিছুক্ষণ কম্পাইলেশন টাইম বেশি নিতে পারে।

 

4.What is the use of `enums` in TypeScript? Provide an example of a numeric and string enum.*

Enum-এর প্রধান ব্যবহার:**

1. ম্যাজিক নম্বর/স্ট্রিং এড়ানো    :নাম ব্যবহার করে বুঝতে সহজ
2. টাইপ সেফটি**  : শুধু enum-এর ভ্যালু ব্যবহার করা যায়
3. অটো-কমপ্লিশন  : IDE-তে সব অপশন দেখায়
4. রিলেটেড ভ্যালু গ্রুপ করা

Example of Enum:

enum Direction {
Up,       
Down,    
Left,      
Right      
}

let move: Direction = Direction.Up;
console.log(move); 

function movePlayer(direction: Direction) {
if (direction === Direction.Up) {
console.log("Direction is upgoing");
}
}

movePlayer(Direction.Up);