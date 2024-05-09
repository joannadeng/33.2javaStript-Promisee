function shuffle(){
   let res = axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/')
   return res;   
}

function card(deck_id){
    let card = axios.get(`https://deckofcardsapi.com/api/deck/${deck_id}/draw`);
    return card;
}

let deckID;

shuffle()
.then(res => {
    console.log(res)
    deckID = res.data.deck_id
    return card(deckID)
})
.then(res => {
    console.log(res.data.cards[0]['value'] + " of " + res.data.cards[0]['suit'])
    // console.log(res)
    return card(deckID)
})
.then(res => {

    console.log(res.data.cards[0]['value'] + " of " + res.data.cards[0]['suit'])
    // console.log(res)
    return card(deckID)
})
.catch(err => console.log(err))