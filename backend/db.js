const mongoose = require('mongoose')
const mongoURI = 'mongodb+srv://goFood:goFood@cluster0.fjxavi3.mongodb.net/goFood?retryWrites=true&w=majority'
const connectToMongo = async () => {
    mongoose.connect(mongoURI)
        .then(() => {
            console.log('Database Connected')
            const fetched_data = mongoose.connection.db.collection("food_items")
            fetched_data.find({}).toArray()
                .then((data) => {
                    global.food_items=data
                    // console.log(data)
                    const foodCategory=mongoose.connection.db.collection('food_category')
                    foodCategory.find({}).toArray()
                    .then((catData)=>{
                        global.food_category=catData
                    })
                })
        })
        .catch((err)=>{
            console.log(err)
        })

       
}
module.exports = connectToMongo