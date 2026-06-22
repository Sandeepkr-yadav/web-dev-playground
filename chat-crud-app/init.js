const mongoose = require('mongoose');
const Chat = require("./models/chat.js");

async function main(){
   mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

main().then(() =>{
    console.log('Connected sucessfull !')
})
.catch((err)=> console.log(err));

const chats = [
  {
    from: "Alice",
    to: "Bob",
    msg: "Hey Bob, how are you?",
    created_at: new Date()
  },
  {
    from: "Bob",
    to: "Alice",
    msg: "I'm good, thanks!",
    created_at: new Date()
  },
  {
    from: "Charlie",
    to: "David",
    msg: "Meeting at 5 PM.",
    created_at: new Date()
  },
  {
    from: "David",
    to: "Charlie",
    msg: "Sure, see you then.",
    created_at: new Date()
  },
  {
    from: "Emma",
    to: "Frank",
    msg: "Did you complete the assignment?",
    created_at: new Date()
  },
  {
    from: "Frank",
    to: "Emma",
    msg: "Yes, I submitted it.",
    created_at: new Date()
  },
  {
    from: "Grace",
    to: "Henry",
    msg: "Happy Birthday!",
    created_at: new Date()
  },
  {
    from: "Henry",
    to: "Grace",
    msg: "Thank you so much!",
    created_at: new Date()
  },
  {
    from: "Ivy",
    to: "Jack",
    msg: "Let's go for a walk.",
    created_at: new Date()
  },
  {
    from: "Jack",
    to: "Ivy",
    msg: "Sounds great.",
    created_at: new Date()
  },
  {
    from: "Kevin",
    to: "Lily",
    msg: "Can you send the notes?",
    created_at: new Date()
  },
  {
    from: "Lily",
    to: "Kevin",
    msg: "Sure, check your email.",
    created_at: new Date()
  },
  {
    from: "Mike",
    to: "Nina",
    msg: "Where are you?",
    created_at: new Date()
  },
  {
    from: "Nina",
    to: "Mike",
    msg: "I'm on my way.",
    created_at: new Date()
  },
  {
    from: "Oliver",
    to: "Peter",
    msg: "Lunch together?",
    created_at: new Date()
  },
  {
    from: "Peter",
    to: "Oliver",
    msg: "Yes, let's go.",
    created_at: new Date()
  },
  {
    from: "Queen",
    to: "Ryan",
    msg: "Project deadline is tomorrow.",
    created_at: new Date()
  },
  {
    from: "Ryan",
    to: "Queen",
    msg: "I know, almost done.",
    created_at: new Date()
  },
  {
    from: "Sophia",
    to: "Tom",
    msg: "Call me when free.",
    created_at: new Date()
  },
  {
    from: "Tom",
    to: "Sophia",
    msg: "Okay, will do.",
    created_at: new Date()
  },
  {
    from: "Uma",
    to: "Victor",
    msg: "Let's watch a movie.",
    created_at: new Date()
  },
  {
    from: "Victor",
    to: "Uma",
    msg: "Which one?",
    created_at: new Date()
  },
  {
    from: "William",
    to: "Xavier",
    msg: "Good morning!",
    created_at: new Date()
  },
  {
    from: "Xavier",
    to: "William",
    msg: "Morning! Have a nice day.",
    created_at: new Date()
  },
  {
    from: "Yara",
    to: "Zane",
    msg: "See you tomorrow.",
    created_at: new Date()
  }
];

Chat.insertMany(chats);