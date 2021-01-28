/* eslint-disable quotes */
/* eslint-disable max-len */
import { DateTime } from "luxon";
import { ObjectID } from "mongodb";

let index = 0;

const objectIDs = (() => {
    const objectIDs = [];
    for (let i = 0; i < 100; i++) {
        objectIDs.push(new ObjectID());
    }
    return objectIDs;
})();

const getNextObjectID = () => {
    index++;
    return objectIDs[index - 1];
};

const getObjectIDFromBefore = (goBackBy = 1) => {
    return objectIDs[index - 1 - goBackBy];
};

const aCompleteGuideToAnimals = [
    {
        _id: getNextObjectID(),
        name: "Todd Sullivan",
        comment: "Animals are such interesting creatures. I always wonder what it would like to be a llama.",
        avatar: "https://res.cloudinary.com/reuben/image/upload/v1608009190/fullstack-react/authors/todd-sullivan_bt8oqy.jpg",
        timestamp: DateTime.local().minus({ days: 45 }),
        upvotes: 8,
        downvotes: 2,
        depth: 0,
        parent: "root",
        path: "complete-guide-to-animals",
    },
    {
        _id: getNextObjectID(),
        name: "Todd Sullivan",
        comment: "Animals are such interesting creatures. I always wonder what it would like to be a llama.",
        avatar: "https://res.cloudinary.com/reuben/image/upload/v1608009190/fullstack-react/authors/todd-sullivan_bt8oqy.jpg",
        timestamp: DateTime.local().minus({ days: 45 }),
        upvotes: 0,
        downvotes: 0,
        depth: 1,
        parent: getObjectIDFromBefore(),
        path: "complete-guide-to-animals",
    },
    {
        _id: getNextObjectID(),
        name: "Todd Sullivan",
        comment: "Animals are such interesting creatures. I always wonder what it would like to be a llama.",
        avatar: "https://res.cloudinary.com/reuben/image/upload/v1608009190/fullstack-react/authors/todd-sullivan_bt8oqy.jpg",
        timestamp: DateTime.local().minus({ days: 45 }),
        upvotes: 0,
        downvotes: 0,
        depth: 2,
        parent: getObjectIDFromBefore(),
        path: "complete-guide-to-animals",
    },
    {
        _id: getNextObjectID(),
        name: "Todd Sullivan",
        comment: "Animals are such interesting creatures. I always wonder what it would like to be a llama.",
        avatar: "https://res.cloudinary.com/reuben/image/upload/v1608009190/fullstack-react/authors/todd-sullivan_bt8oqy.jpg",
        timestamp: DateTime.local().minus({ days: 45 }),
        upvotes: 0,
        downvotes: 0,
        depth: 3,
        parent: getObjectIDFromBefore(),
        path: "complete-guide-to-animals",
    },
    {
        _id: getNextObjectID(),
        name: "Todd Sullivan",
        comment: "Animals are such interesting creatures. I always wonder what it would like to be a llama.",
        avatar: "https://res.cloudinary.com/reuben/image/upload/v1608009190/fullstack-react/authors/todd-sullivan_bt8oqy.jpg",
        timestamp: DateTime.local().minus({ days: 45 }),
        upvotes: 0,
        downvotes: 0,
        depth: 4,
        parent: getObjectIDFromBefore(),
        path: "complete-guide-to-animals",
    },
    {
        _id: getNextObjectID(),
        name: "Todd Sullivan",
        comment: "Animals are such interesting creatures. I always wonder what it would like to be a llama.",
        avatar: "https://res.cloudinary.com/reuben/image/upload/v1608009190/fullstack-react/authors/todd-sullivan_bt8oqy.jpg",
        timestamp: DateTime.local().minus({ days: 45 }),
        upvotes: 0,
        downvotes: 0,
        depth: 5,
        parent: getObjectIDFromBefore(),
        path: "complete-guide-to-animals",
    },
    {
        _id: getNextObjectID(),
        name: "Todd Sullivan",
        comment: "Animals are such interesting creatures. I always wonder what it would like to be a llama.",
        avatar: "https://res.cloudinary.com/reuben/image/upload/v1608009190/fullstack-react/authors/todd-sullivan_bt8oqy.jpg",
        timestamp: DateTime.local().minus({ days: 45 }),
        upvotes: 0,
        downvotes: 0,
        depth: 6,
        parent: getObjectIDFromBefore(),
        path: "complete-guide-to-animals",
    },
    {
        _id: getNextObjectID(),
        name: "Todd Sullivan",
        comment: "Animals are such interesting creatures. I always wonder what it would like to be a llama.",
        avatar: "https://res.cloudinary.com/reuben/image/upload/v1608009190/fullstack-react/authors/todd-sullivan_bt8oqy.jpg",
        timestamp: DateTime.local().minus({ days: 45 }),
        upvotes: 0,
        downvotes: 0,
        depth: 7,
        parent: getObjectIDFromBefore(),
        path: "complete-guide-to-animals",
    },
    {
        _id: getNextObjectID(),
        name: "Todd Sullivan",
        comment: "Animals are such interesting creatures. I always wonder what it would like to be a llama.",
        avatar: "https://res.cloudinary.com/reuben/image/upload/v1608009190/fullstack-react/authors/todd-sullivan_bt8oqy.jpg",
        timestamp: DateTime.local().minus({ days: 45 }),
        upvotes: 0,
        downvotes: 0,
        depth: 8,
        parent: getObjectIDFromBefore(),
        path: "complete-guide-to-animals",
    },
    {
        _id: getNextObjectID(),
        name: "Todd Sullivan",
        comment: "Animals are such interesting creatures. I always wonder what it would like to be a llama.",
        avatar: "https://res.cloudinary.com/reuben/image/upload/v1608009190/fullstack-react/authors/todd-sullivan_bt8oqy.jpg",
        timestamp: DateTime.local().minus({ days: 45 }),
        upvotes: 0,
        downvotes: 0,
        depth: 9,
        parent: getObjectIDFromBefore(),
        path: "complete-guide-to-animals",
    },
    {
        _id: getNextObjectID(),
        name: "Todd Sullivan",
        comment: "Animals are such interesting creatures. I always wonder what it would like to be a llama.",
        avatar: "https://res.cloudinary.com/reuben/image/upload/v1608009190/fullstack-react/authors/todd-sullivan_bt8oqy.jpg",
        timestamp: DateTime.local().minus({ days: 45 }),
        upvotes: 0,
        downvotes: 0,
        depth: 10,
        parent: getObjectIDFromBefore(),
        path: "complete-guide-to-animals",
    },
    {
        _id: getNextObjectID(),
        name: "Todd Sullivan",
        comment: "Animals are such interesting creatures. I always wonder what it would like to be a llama.",
        avatar: "https://res.cloudinary.com/reuben/image/upload/v1608009190/fullstack-react/authors/todd-sullivan_bt8oqy.jpg",
        timestamp: DateTime.local().minus({ days: 45 }),
        upvotes: 0,
        downvotes: 0,
        depth: 11,
        parent: getObjectIDFromBefore(),
        path: "complete-guide-to-animals",
    },
    {
        _id: getNextObjectID(),
        name: "Todd Sullivan",
        comment: "Huh? That was weird.",
        avatar: "https://res.cloudinary.com/reuben/image/upload/v1608009190/fullstack-react/authors/todd-sullivan_bt8oqy.jpg",
        timestamp: DateTime.local().minus({ days: 40 }),
        upvotes: 47,
        downvotes: 4,
        depth: 12,
        parent: getObjectIDFromBefore(),
        path: "complete-guide-to-animals",
    },
    {
        _id: getNextObjectID(),
        name: "Jamil Thomson",
        comment: "Very weird! How did you even manage to do that?",
        avatar: "https://res.cloudinary.com/reuben/image/upload/v1608009191/fullstack-react/authors/jamil-thomson_mkzu8o.jpg",
        timestamp: DateTime.local().minus({ days: 37 }),
        upvotes: 5,
        downvotes: 0,
        depth: 13,
        parent: getObjectIDFromBefore(2),
        path: "complete-guide-to-animals",
    },
    {
        _id: getNextObjectID(),
        name: "Jocelyn Wynn",
        comment: "I think you've broken the website.",
        avatar: "https://res.cloudinary.com/reuben/image/upload/v1608009192/fullstack-react/authors/jocelyn-wynn_p3o3rg.jpg",
        timestamp: DateTime.local().minus({ days: 45 }),
        upvotes: 89,
        downvotes: 2,
        depth: 7,
        parent: getObjectIDFromBefore(5),
        path: "complete-guide-to-animals",
    },
    {
        _id: getNextObjectID(),
        name: "Tayla Mills",
        comment: "You'd definitely think that the author of this article really loves animals?! I mean, animals are cool and all, but I think the author went a bit overboard here.",
        avatar: "https://res.cloudinary.com/reuben/image/upload/v1608009190/fullstack-react/authors/tayla-mills_hm0mbv.jpg",
        timestamp: DateTime.local().minus({ days: 17 }),
        upvotes: 30,
        downvotes: 12,
        depth: 0,
        parent: "root",
        path: "complete-guide-to-animals",
    },
    {
        _id: getNextObjectID(),
        name: "Animal_Lover45",
        comment: "DEFEND ANIMALS!!!!!",
        avatar: "https://res.cloudinary.com/reuben/image/upload/v1610515162/fullstack-react/authors/default-avatar_umlq3b.png",
        timestamp: DateTime.local().minus({ days: 3 }),
        upvotes: 348,
        downvotes: 56,
        depth: 0,
        parent: "root",
        path: "complete-guide-to-animals",
    },
    {
        _id: getNextObjectID(),
        name: "Franklin \"Mouse\" Finbar",
        comment: "Yes, I agree. Except for that hippo that ate Shelly. That was just plain nasty!",
        avatar: "https://res.cloudinary.com/reuben/image/upload/v1610673901/fullstack-react/authors/franklin-finbar_y4dehe.jpg",
        timestamp: DateTime.local().minus({ days: 2 }),
        upvotes: 25,
        downvotes: 82,
        depth: 1,
        parent: getObjectIDFromBefore(),
        path: "complete-guide-to-animals",
    },
    {
        _id: getNextObjectID(),
        name: "Dr. Smolder Bravestone",
        comment: "Yoooooo, Mouse, I need you to be my valet and grab me my weapons, pronto!",
        avatar: "https://res.cloudinary.com/reuben/image/upload/v1610673901/fullstack-react/authors/smolder-bravestone_uugl1e.jpg",
        timestamp: DateTime.local().minus({ days: 34 }),
        upvotes: 67,
        downvotes: 16,
        depth: 0,
        parent: "root",
        path: "complete-guide-to-animals",
    },
    {
        _id: getNextObjectID(),
        name: "Xx_Unhappy Reader_xX",
        comment: "This article could have been written a whole lot better.",
        avatar: "https://res.cloudinary.com/reuben/image/upload/v1610515162/fullstack-react/authors/default-avatar_umlq3b.png",
        timestamp: DateTime.local().minus({ days: 44 }),
        upvotes: 2,
        downvotes: 99,
        depth: 0,
        parent: "root",
        path: "complete-guide-to-animals",
    },
];

const howToSmolder = [
    {
        _id: getNextObjectID(),
        name: "Kaidan Nairn",
        comment: "Very interesting article. I will have to practice these techniques some time to up my dating game!",
        avatar: "https://res.cloudinary.com/reuben/image/upload/v1608009192/fullstack-react/authors/kaidan-nairn_toopg0.jpg",
        timestamp: DateTime.local().minus({ days: 370 }),
        upvotes: 65,
        downvotes: 124,
        depth: 0,
        parent: "root",
        path: "how-to-smolder",
    },
    {
        _id: getNextObjectID(),
        name: "Julie Roberts",
        comment: "Up your dating game? So what about our 7 year relationship!!?! Is this really how I find out - through some lame smoldering article??! I can't believe you Kaidan!! WE ARE DONE!!!!!!!!",
        avatar: "https://res.cloudinary.com/reuben/image/upload/v1608010637/fullstack-react/authors/julie-roberts_o3efc9.jpg",
        timestamp: DateTime.local().minus({ days: 369 }),
        upvotes: 542,
        downvotes: 0,
        depth: 1,
        parent: getObjectIDFromBefore(),
        path: "how-to-smolder",
    },
    {
        _id: getNextObjectID(),
        name: "Roger White",
        comment: "Hi Julie. So sorry for your loss. My name is Roger - I am a 37 y/o upbeat and vibrant man looking for someone who has your qualities. Please respond to my private message and I hope that we can discuss the possibility of going on a date sometime in the near future. You can reach me on +1-808-555-0135. Thanks, and looking forward to hearing from you.",
        avatar: "https://res.cloudinary.com/reuben/image/upload/v1608009190/fullstack-react/authors/roger-white_ryykyd.jpg",
        timestamp: DateTime.local().minus({ days: 19 }),
        upvotes: 124,
        downvotes: 52,
        depth: 2,
        parent: getObjectIDFromBefore(),
        path: "how-to-smolder",
    },
    {
        _id: getNextObjectID(),
        name: "Zane Frost",
        comment: "Haha, nice.",
        avatar: "https://res.cloudinary.com/reuben/image/upload/v1608009192/fullstack-react/authors/zane-frost_q60eot.jpg",
        timestamp: DateTime.local().minus({ days: 369 }),
        upvotes: 5,
        downvotes: 2,
        depth: 1,
        parent: getObjectIDFromBefore(3),
        path: "how-to-smolder",
    },
    {
        _id: getNextObjectID(),
        name: "Zane Frost",
        comment: "I am commenting for the fun of it.",
        avatar: "https://res.cloudinary.com/reuben/image/upload/v1608009192/fullstack-react/authors/zane-frost_q60eot.jpg",
        timestamp: DateTime.local().minus({ days: 240 }),
        upvotes: 4,
        downvotes: 12,
        depth: 0,
        parent: "root",
        path: "how-to-smolder",
    },
    {
        _id: getNextObjectID(),
        name: "Jamil Thomson",
        comment: "What kind of an article is this? How to smolder? What even is smoldering? This was pointless. I want 5 minutes of my life back.",
        avatar: "https://res.cloudinary.com/reuben/image/upload/v1608009191/fullstack-react/authors/jamil-thomson_mkzu8o.jpg",
        timestamp: DateTime.local().minus({ days: 28 }),
        upvotes: 8,
        downvotes: 55,
        depth: 0,
        parent: "root",
        path: "how-to-smolder",
    },
    {
        _id: getNextObjectID(),
        name: "Vera Mercer",
        comment: "I'm just trying to do my grocery shopping and ended up here some how. I just want to order my weekly shop from Coles. Please can someone just redirect me. I am getting quite hungry and could do with some food.",
        avatar: "https://res.cloudinary.com/reuben/image/upload/v1608009191/fullstack-react/authors/vera-mercer_h9cgoh.jpg",
        timestamp: DateTime.local().minus({ days: 15 }),
        upvotes: 4,
        downvotes: 32,
        depth: 0,
        parent: "root",
        path: "how-to-smolder",
    },
    {
        _id: getNextObjectID(),
        name: "Tayla Mills",
        comment: "Incredibly written article. I will definitely put my new found knowledge to use. Thanks for helping me to learn to smolder the right way.",
        avatar: "https://res.cloudinary.com/reuben/image/upload/v1608009190/fullstack-react/authors/tayla-mills_hm0mbv.jpg",
        timestamp: DateTime.local().minus({ days: 1 }),
        upvotes: 20,
        downvotes: 0,
        depth: 0,
        parent: "root",
        path: "how-to-smolder",
    },
    {
        _id: getNextObjectID(),
        name: "Lilian Noel",
        comment: "I've been smoldering since I was 6 years old. I am now 36.",
        avatar: "https://res.cloudinary.com/reuben/image/upload/v1608009192/fullstack-react/authors/lilian-noel_byoqkl.jpg",
        timestamp: DateTime.local().minus({ hours: 5 }),
        upvotes: 6,
        downvotes: 36,
        depth: 0,
        parent: "root",
        path: "how-to-smolder",
    },
    {
        _id: getNextObjectID(),
        name: "Dr. Smolder Bravestone",
        comment: "Thanks for sharing, Lilian.",
        avatar: "https://res.cloudinary.com/reuben/image/upload/v1610673901/fullstack-react/authors/smolder-bravestone_uugl1e.jpg",
        timestamp: DateTime.local().minus({ hours: 1 }),
        upvotes: 2,
        downvotes: 0,
        depth: 1,
        parent: getObjectIDFromBefore(),
        path: "how-to-smolder",
    },
];

const danceFighting = [
    {
        _id: getNextObjectID(),
        name: "Ruby Roundhouse",
        comment: "Hello??? Anyone?????????",
        avatar: "https://res.cloudinary.com/reuben/image/upload/v1610673901/fullstack-react/authors/ruby-roundhouse_ubn3m8.jpg",
        timestamp: DateTime.local().minus({ days: 1 }),
        upvotes: 0,
        downvotes: 0,
        depth: 0,
        parent: "root",
        path: "dance-fighting",
    },
];

const readingMaps = [
    {
        _id: getNextObjectID(),
        name: "Roger White",
        comment: "Hi Professor Shelley Oberon. My name is Roger White. I am a 37 y/o man who considers himself quite skilled in the art of maps. I once found myself lost in the African desert with nothing but the shirt on my back, a metal soup spoon, a map of Antarctica, a 15m rope, 5 cans of baked beans, 250 grams of strong blend Arabian coffee beans, 1L of VOSS sparkling water and my trusty Lakers snapback. Boy, did it turn out that map of Antarctica was useless when you're lost in the desert of Africa. I still managed to decipher it and get back to humanity. Thanks for reading.",
        avatar: "https://res.cloudinary.com/reuben/image/upload/v1608009190/fullstack-react/authors/roger-white_ryykyd.jpg",
        timestamp: DateTime.local().minus({ hours: 12 }),
        upvotes: 22,
        downvotes: 87,
        depth: 0,
        parent: "root",
        path: "reading-maps",
    },
];

const npcSeekingAssistance = [
    {
        _id: getNextObjectID(),
        name: "Roger White",
        comment: "Hi Nigel. My name is Roger - I am a 36 y/o upbeat and vibrant man who would consider himself a superhero. Please respond to my private message and I hope that we can discuss my services that I provide. You can reach me on +1-808-555-0135. I think I would be a very good match. Please contact me ASAP.",
        avatar: "https://res.cloudinary.com/reuben/image/upload/v1608009190/fullstack-react/authors/roger-white_ryykyd.jpg",
        timestamp: DateTime.local().minus({ days: 500 }),
        upvotes: 409,
        downvotes: 230,
        depth: 0,
        parent: "root",
        path: "npc-seeking-assistance",
    },
];

const npcStillSeekingAssistance = [
    {
        _id: getNextObjectID(),
        name: "Roger White",
        comment: "Hi Nigel. I reached out to you in response to your last article. Just thought I would let you know I am now 37 y/o, and I'm not hurt about you not replying to my message. After 6 months of counselling sessions, I am now in a good place again after you ghosting me and also probably most likely something to do with my divorce with my ex-wife of 27 years.. Anyway, I still believe I would be a good fit to help you out. You mention that you are looking for anyone available. Surely that means that I am a match. Please Nigel. Respond to my private messages and we can talk price. You can reach me on +1-808-555-0135. Please contact me at your soonest convenience.",
        avatar: "https://res.cloudinary.com/reuben/image/upload/v1608009190/fullstack-react/authors/roger-white_ryykyd.jpg",
        timestamp: DateTime.local().minus({ days: 26 }),
        upvotes: 128,
        downvotes: 9,
        depth: 0,
        parent: "root",
        path: "npc-still-seeking-assistance",
    },
    {
        _id: getNextObjectID(),
        name: "Not Telling",
        comment: "Seems like the author is pretty annoyed here, hey? I mean, it looks like they've been waiting for someone to help them for quite some time now...",
        avatar: "https://res.cloudinary.com/reuben/image/upload/v1610515162/fullstack-react/authors/default-avatar_umlq3b.png",
        timestamp: DateTime.local().minus({ days: 495 }),
        upvotes: 6,
        downvotes: 1,
        depth: 0,
        parent: "root",
        path: "npc-still-seeking-assistance",
    },
    {
        _id: getNextObjectID(),
        name: "Kathryn Sutherland",
        comment: "Yeah, they're angry alright!",
        avatar: "https://res.cloudinary.com/reuben/image/upload/v1608009192/fullstack-react/authors/kathryn-sutherland_sxrwjn.jpg",
        timestamp: DateTime.local().minus({ days: 495 }),
        upvotes: 1,
        downvotes: 0,
        depth: 1,
        parent: getObjectIDFromBefore(),
        path: "npc-still-seeking-assistance",
    },
];

const documents = [
    aCompleteGuideToAnimals,
    howToSmolder,
    danceFighting,
    readingMaps,
    npcSeekingAssistance,
    npcStillSeekingAssistance,
];

export default documents;