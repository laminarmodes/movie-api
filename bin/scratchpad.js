db.movies.insertOne(
{
  Title: "Silence of the Lambs",
  Description: "A young FBI cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer.",
  Genre: {
    Name: "Thriller",
    Description: "Thriller film, also known as suspense film or suspense thriller, is a broad film genre that involves excitement and suspense in the audience."
  },
  Director: {
    Name: "Jonathan Demme",
    Bio: "Robert Jonathan Demme was an American director, producer, and screenwriter.",
    Birth: "1944",
    Death: "2017"
  },
  ImagePath: "silenceofthelambs.png",
  Featured: true
}
)

db.movies.insertOne(
{
  Title: "Interstellar",
  Description: "Earths future has been riddled by disasters, famines, and droughts. There is only one way to ensure mankinds survival: Interstellar travel. A newly discovered wormhole in the far reaches of our solar system allows a team of astronauts to go where no man has gone before, a planet that may have the right environment to sustain human life.",
  Genre: {
    Name: "Science Fiction",
    Description: "Science fiction (once known as scientific romance) is similar to fantasy, except stories in this genre use scientific understanding to explain the universe that it takes place in. It generally includes or is centered on the presumed effects or ramifications of computers or machines; travel through space, time or alternate universes; alien lifeforms, genetic engineering, or other such things. The science or technology used may or may not be very thoroughly elaborated on."
  },
  Director: {
    Name: "Christopher Nolan",
    Bio: "In 2010, Nolan captivated audiences with the sci-fi thriller Inception (2010), which he directed and produced from his own original screenplay. The thought-provoking drama was a worldwide blockbuster, earning more than $800,000,000 and becoming one of the most discussed and debated films of the year. Among its many honors, Inception received four Academy Awards and eight nominations, including Best Picture and Best Screenplay. Nolan was recognized by his peers with D.G.A. and P.G.A. Award nominations, as well as a W.G.A. Award for his work on the film.",
    Birth: "1970-07-30",
    Death: ""
  },
  ImagePath: "interstellar.png",
  Featured: true
}
)

db.movies.insertOne({Title: "Inception",Description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO but his tragic past may doom the project and his team to disaster.", Genre: {Name: "Science Fiction",
Description: "Science fiction (once known as scientific romance) is similar to fantasy, except stories in this genre use scientific understanding to explain the universe that it takes place in. It generally includes or is centered on the presumed effects or ramifications of computers or machines, travel through space, time or alternate universes, alien life-forms, genetic engineering, or other such things. The science or technology used may or may not be very thoroughly elaborated on."}, Director: {Name: "Christopher Nolan", Bio: "In 2010, Nolan captivated audiences with the sci-fi thriller Inception (2010), which he directed and produced from his own original screenplay. The thought-provoking drama was a worldwide blockbuster, earning more than $800,000,000 and becoming one of the most discussed and debated films of the year. Among its many honors, Inception received four Academy Awards and eight nominations, including Best Picture and Best Screenplay. Nolan was recognized by his peers with D.G.A. and P.G.A. Award nominations, as well as a W.G.A. Award for his work on the film.", Birth: "1970-07-30", Death: ""}, ImagePath: "inception.png", Featured: true})

db.movies.insertOne({Title: "Little Miss Sunshine", Description: "A family determined to get their young daughter into the finals of a beauty pageant take a cross-country trip in their VW bus.", Genre: {Name: "Comedy", Description: "Comedy is a story that tells about a series of funny, or comical events, intended to make the audience laugh. It is a very open genre, and thus crosses over with many other genres on a frequent basis."}, Director: {Name: "Jonathan Dayton", Bio: "In 1998, Jonathan and Valerie co-founded Bob Industries, one of the countrys leading commercial production companies. Directing commercials for VW, Sony Playstation, Gap, Target, Ikea, Apple, ESPN, amongst others, Dayton and Faris continue to push the medium into new vistas. In 2002, Creativity Magazine labeled them as one of their top ten best commercial directors.", Birth: "1957-07-07", Death: ""}, ImagePath: "little_miss_sunshine.png", Featured: true})

db.movies.insertOne({Title: "The Nightmare Before Christmas", Description: "Jack Skellington, king of Halloween Town, discovers Christmas Town, but his attempts to bring Christmas to his home causes confusion.", Genre: {Name: "Animation", Description: "Animation is a method in which figures are manipulated to appear as moving images. In traditional animation, images are drawn or painted by hand on transparent celluloid sheets to be photographed and exhibited on film. Today, most animations are made with computer-generated imagery (CGI). Computer animation can be very detailed 3D animation, while 2D computer animation (which may have the look of traditional animation) can be used for stylistic reasons, low bandwidth, or faster real-time renderings. Other common animation methods apply a stop motion technique to two and three-dimensional objects like paper cutouts, puppets, or clay figures."}, Director: {Name: "Henry Selick", Bio: "Selick was born in Glen Ridge, New Jersey, son of Charles H. Selick and Melanie Molan. He was mostly raised in Rumson, New Jersey. As a child, Selick took up drawing as a hobby. He became fascinated with animation at a young age, after viewing two specific films. One was the silhouette animation feature film The Adventures of Prince Achmed (1926) by Lotte Reiniger. It was one of the earliest animated feature films (the first had been released in 1917), the first produced in Europe, and the earliest one that has been preserved. The other film was the live-action film The 7th Voyage of Sinbad (1958), which featured stop-motion animation by Ray Harryhausen.", Birth: "1952-11-30", Death: ""}, ImagePath: "the_nightmare_before_christmas.png", Featured: true})

db.movies.insertOne(
{
  Title: "Arrival",
  Description: "A linguist works with the military to communicate with alien lifeforms after twelve mysterious spacecraft appear around the world.",
  Genre: {
    Name: "Science Fiction",
    Description: "Science fiction (once known as scientific romance) is similar to fantasy, except stories in this genre use scientific understanding to explain the universe that it takes place in. It generally includes or is centered on the presumed effects or ramifications of computers or machines; travel through space, time or alternate universes; alien life-forms; genetic engineering; or other such things. The science or technology used may or may not be very thoroughly elaborated on."
  },
  Director: {
    Name: "Denis Villeneuve",
    Bio: "Denis Villeneuve is a French Canadian film director and writer. He was born in 1967, in Trois-Rivières, Québec, Canada. He started his career as a filmmaker at the National Film Board of Canada. He is best known for his feature films Arrival (2016), Sicario (2015), Prisoners (2013), Enemy (2013), and Incendies (2010). He is married to Tanya Lapointe.",
    Birth: "1967-10-03",
    Death: ""
  },
  ImagePath: "arrival.png",
  Featured: true
}
)

db.movies.insertOne(
{
  Title: "The Dark Knight Rises",
  Description: "Eight years after the Jokers reign of anarchy, Batman, with the help of the enigmatic Catwoman, is forced from his exile to save Gotham City from the brutal guerrilla terrorist Bane.",
  Genre: {
    Name: "Action",
    Description: "An action story is similar to adventure, and the protagonist usually takes a risky turn, which leads to desperate situations (including explosions, fight scenes, daring escapes, etc.). Action and adventure are usually categorized together (sometimes even as action-adventure) because they have much in common, and many stories fall under both genres simultaneously (for instance, the James Bond series can be classified as both)."
  },
  Director: {
    Name: "Christopher Nolan",
    Bio: "In 2010, Nolan captivated audiences with the sci-fi thriller Inception (2010), which he directed and produced from his own original screenplay. The thought-provoking drama was a worldwide blockbuster, earning more than $800,000,000 and becoming one of the most discussed and debated films of the year. Among its many honors, Inception received four Academy Awards and eight nominations, including Best Picture and Best Screenplay. Nolan was recognized by his peers with D.G.A. and P.G.A. Award nominations, as well as a W.G.A. Award for his work on the film.",
    Birth: "1970-07-30",
    Death: ""
  },
  ImagePath: "the_dark_knight_rises.png",
  Featured: true
}
)

db.movies.insertOne({Title: "Tenet", Description: "Armed with only one word, Tenet, and fighting for the survival of the entire world, a Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.", Genre: {Name: "Action", Description: "An action story is similar to adventure, and the protagonist usually takes a risky turn, which leads to desperate situations (including explosions, fight scenes, daring escapes, etc.). Action and adventure are usually categorized together (sometimes even as action-adventure) because they have much in common, and many stories fall under both genres simultaneously (for instance, the James Bond series can be classified as both)."}, Director: {Name: "Christopher Nolan", Bio: "In 2010, Nolan captivated audiences with the sci-fi thriller Inception (2010), which he directed and produced from his own original screenplay. The thought-provoking drama was a worldwide blockbuster, earning more than $800,000,000 and becoming one of the most discussed and debated films of the year. Among its many honors, Inception received four Academy Awards and eight nominations, including Best Picture and Best Screenplay. Nolan was recognized by his peers with D.G.A. and P.G.A. Award nominations, as well as a W.G.A. Award for his work on the film.", Birth: "1970-07-30", Death: ""}, ImagePath: "tenet.png", Featured: true})


db.movies.insertOne({Title: "Forrest Gump", Description: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.", Genre: {Name: "Drama", Description: "Drama: The drama genre features stories with high stakes and a lot of conflicts. They’re plot-driven and demand that every character and scene move the story forward. Dramas follow a clearly defined narrative plot structure, portraying real-life scenarios or extreme situations with emotionally-driven characters. "}, Director: {Name: "Robert Zemeckis", Bio: "A whiz-kid with special effects, Robert is from the Spielberg camp of film-making (Steven Spielberg produced many of his films). Usually working with writing partner Bob Gale, Robert's earlier films show he has a talent for zany comedy (Romancing the Stone (1984), 1941 (1979)) and special effect vehicles (Who Framed Roger Rabbit (1988) and Back to the Future (1985)). His later films have become more serious, with the hugely successful Tom Hanks vehicle Forrest Gump (1994) and the Jodie Foster film Contact (1997), both critically acclaimed movies. Again, these films incorporate stunning effects. Robert has proved he can work a serious story around great effects.", Birth: "1951-05-14", Death: ""}, ImagePath: "forrest_gump.png", Featured: true})

db.movies.insertOne(
{
  Title: "The Shawshank Redemption",
  Description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
  Genre: {
    Name: "Drama",
    Description: "Drama: The drama genre features stories with high stakes and a lot of conflicts. They’re plot-driven and demand that every character and scene move the story forward. Dramas follow a clearly defined narrative plot structure, portraying real-life scenarios or extreme situations with emotionally-driven characters. "
  },
  Director: {
    Name: "Frank Darabont",
    Bio: "Three-time Oscar nominee Frank Darabont was born in a refugee camp in 1959 in Montbeliard, France, the son of Hungarian parents who had fled Budapest during the failed 1956 Hungarian revolution. Brought to America as an infant, he settled with his family in Los Angeles and attended Hollywood High School. His first job in movies was as a production assistant on the 1981 low-budget film, Hell Night (1981), starring Linda Blair. He spent the next six years working in the art department as a set dresser and in set construction while struggling to establish himself as a writer. ",
    Birth: "1959-01-28",
    Death: ""
  },
  ImagePath: "the_shawshank_redemption.png",
  Featured: true
}
)

db.movies.insertOne(
{
  Title: "The Shawshank Redemption",
  Description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
  Genre: {
    Name: "Drama",
    Description: "Drama: The drama genre features stories with high stakes and a lot of conflicts. They’re plot-driven and demand that every character and scene move the story forward. Dramas follow a clearly defined narrative plot structure, portraying real-life scenarios or extreme situations with emotionally-driven characters. "
  },
  Director: {
    Name: "Frank Darabont",
    Bio: "Three-time Oscar nominee Frank Darabont was born in a refugee camp in 1959 in Montbeliard, France, the son of Hungarian parents who had fled Budapest during the failed 1956 Hungarian revolution. Brought to America as an infant, he settled with his family in Los Angeles and attended Hollywood High School. His first job in movies was as a production assistant on the 1981 low-budget film, Hell Night (1981), starring Linda Blair. He spent the next six years working in the art department as a set dresser and in set construction while struggling to establish himself as a writer. ",
    Birth: "1959-01-28",
    Death: ""
  },
  ImagePath: "the_shawshank_redemption.png",
  Featured: true
}
)

db.users.insertOne({
  Username: "Maxim Smith",
  Password: "maxim1234",
  Email: "maxim.smith@gmail.com",
  Birthday: "1980-03-17",
  FavoriteMovies: [ObjectId("61b4deb151e9f9068e6eb7d1"), ObjectId("61b4e0be51e9f9068e6eb7d2")]
})

db.users.insertOne({
  Username: "Devon Smith",
  Password: "devon1234",
  Email: "devon.smith@gmail.com",
  Birthday: "1979-05-10",
  FavoriteMovies: [ObjectId("61b4e0be51e9f9068e6eb7d2"), ObjectId("61b4e20951e9f9068e6eb7d3")]
})

db.users.insertOne({
  Username: "Anthony Smith",
  Password: "anthony1234",
  Email: "athony.smith@gmail.com",
  Birthday: "1983-10-10",
  FavoriteMovies: [ObjectId("61b4e29b51e9f9068e6eb7d4"), ObjectId("61b4e31051e9f9068e6eb7d5")]
})

db.users.insertOne({
  Username: "Manny Smith",
  Password: "manny1234",
  Email: "manny.smith@gmail.com",
  Birthday: "1972-11-10",
  FavoriteMovies: [ObjectId("61b4e29b51e9f9068e6eb7d4"), ObjectId("61b4e31051e9f9068e6eb7d5"), ObjectId("61b4e33051e9f9068e6eb7d7")]
})

db.users.insertOne({
  Username: "Jane Smith",
  Password: "jane1234",
  Email: "jane.smith@gmail.com",
  Birthday: "1975-12-19",
  FavoriteMovies: [ObjectId("61b4e39751e9f9068e6eb7d8"), ObjectId("61b4e3dd51e9f9068e6eb7d9"), ObjectId("61b4e31051e9f9068e6eb7d5")]
})

db.movies.find({ $and: [{"Genre.Name": "Drama"}, {"Director.Name": "Frank Darabont"}]})

db.movies.update(
  { Title: "Interstellar"},
  { $set: { Description: "Set in a dystopian future where humanity is struggling to survive, the film follows a group of astronauts who travel through a wormhole near Saturn in search of a new home for mankind."}}
)

db.movies.update(
  { "Director.Name": "Christopher Nolan"},
  { $set: { Bio: "Nolan's films are typically rooted in epistemological and metaphysical themes, exploring human morality, the construction of time, and the malleable nature of memory and personal identity. His work is permeated by mathematically inspired images and concepts, unconventional narrative structures, practical special effects, experimental soundscapes, large-format film photography, and materialistic perspectives. He has co-written several of his films with his brother Jonathan, and runs the production company Syncopy Inc. with his wife Emma Thomas."}}
)

db.users.update(
  { Username: "Maxim Smith" },
  { $push: { FavoriteMovies: ObjectId("61b4e3dd51e9f9068e6eb7d9") } }
)

db.users.deleteOne({ Username: "Maxim Smith"})
