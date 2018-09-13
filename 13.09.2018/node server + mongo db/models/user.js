module.exports = {
    userModel: {
        id: String,
        name: String,
        password: String,
        age: Number,
        isMale: Boolean,
        visitedCountries: Array
    }
};
//  curl -v -X POST -H "Content-type: application/json" -d "{\"id\":\"207138132\", \"name\":\"Efrat\", \"password\":\"03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4\", \"age\":\"20\", \"isMale\":\"false\", \"visitedCountries\":\"[]\"}" http://localhost:3000/register

 //  curl -v -X POST -H "Content-type: application/json" -d "{\"name\":\"Efrat\", \"password\":\"03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4\"}" http://localhost:3000/login
