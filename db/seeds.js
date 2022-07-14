const db = connect("mongodb://localhost:27017/shelter")

db.post.drop()

db.post.insertMany([
    {
        id: 1,
        title: "I had a thought...",
        name: "Bob Newhart",
        story: "The only way to survive is to have a sense of humour",
        date: "2022-07-14"
    },
    {
        id: 2,
        title: "Money Tips #5574",
        name: "saamiya",
        story: "Always borrow money from a pessimist, he won't expect it back",
        date: "2022-07-14"
    },
    {
        id: 3,
        title: "Cats are better than dogs",
        name: "Nova",
        story: "Cats are cooler, thank you for listening to my Ted Talk.",
        date: "2022-07-14"
    },
    {
        id: 4,
        title: "Mr Playwright",
        name: "William Shakespeare",
        story: "Some are born great, some achieve greatness, and some have greatness thrust upon them.",
        date: "2022-07-14"
    }
]) 
