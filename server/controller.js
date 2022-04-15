let fortunes = [
    "Be careful or you could fall for some tricks today.",
    "An inch of time is an inch of gold.",
    "Believe it can be done.",
    "Courtesy is contagious.",
    "Every wise man started out by asking many questions."
]


module.exports = {
    getCompliment: (req, res) => {
        const compliments = [
            "Gee, you're a smart cookie!",
            "Cool shirt!",
            "Your Javascript skills are stellar.",
        ]
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
      },
    getFortune: (req,res) => {
        let randomIndex = Math.floor(Math.random() * fortunes.length)
        let randomFortune = fortunes[randomIndex]

        res.status(200).send(randomFortune)
    }
}