let Books = require('./models/Books')

let obj = {
    uid: "before_go",
    title: "One Last Thing Before I Go",
    description: "“Mistakes have been made.” Drew Silver has begun to accept that life isn’t going to turn out as he expected. His fleeting fame as the drummer for a one-hit wonder rock band is nearly a decade behind him. His ex-wife is about to marry a terrific guy. And his Princeton-bound teenage daughter Casey has just confided in him that she’s pregnant—because Silver is the one she cares least about letting down.",
    metadata: {
      authors: [{
        name: "Jonathan Tropper"
      }]
    },
    price: 8.77,
    thumbnailLink: "/images/books/beforeIGo.jpg",
    type: "book"
}

let book = new Books(obj)

book.save()