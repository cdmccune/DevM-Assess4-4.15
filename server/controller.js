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
    getFortunes: (req,res) => {
        res.status(200).send(fortunes)
    }


    ,getFortune: (req,res) => {
        let randomIndex = Math.floor(Math.random() * fortunes.length)
        let randomFortune = fortunes[randomIndex]

        res.status(200).send(randomFortune)
    }, 
    
    deleteFortune: (req,res) => {
        const deletedFortune = fortunes[req.params.id]
        fortunes.splice(req.params.id, 1)
        res.status(200).send(`You have deleted the fortune: ${deletedFortune}`)
    },

    updateFortune: (req, res) => {
        const beforeFortune = fortunes[req.params.id]
        const afterFortune = req.body
        fortunes.splice(req.params.id, 1,afterFortune.updatedFortune)
        res.status(200).send(`You have replaced "${beforeFortune}" with "${afterFortune.updatedFortune}". I hope you're pleased with altering our sacred timeline...`)
    },

    createFortune: (req, res) => {
        const newFortune = req.body.createdFortune
        fortunes.push(newFortune)
        res.status(200).send(`Way to be a sellout and change your future, your new fortune: ${newFortune} `)
    }
}