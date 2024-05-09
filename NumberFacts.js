let baseURL = "http://numbersapi.com"

let favoriteNum = [];

function getFact(num) {
    let res = axios.get(`${baseURL}/${num}/trivia?json`)
    return res;
}

getFact(33)
  .then(res => console.log(res))
  .catch(err => console.log(err))


function getMulFacts(num){
    // num =  "1,2,3,10"
    let res = axios.get(`${baseURL}/${num}`)
    return res;
}

getMulFacts("1,2,3,10")
  .then(res => console.log(res))
  .catch(err => console.log(err))

for (let i = 1; i < 5; i++) {
    favoriteNum.push(
        axios.get(`${baseURL}/random`)
    )
}

Promise.all(favoriteNum)
  .then(facts => {
    for (fact of facts) {
        console.log(fact.data)
    }
  })
  .catch(err => console.log(err))