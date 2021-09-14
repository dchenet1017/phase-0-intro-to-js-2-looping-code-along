// Code your solutions in this file





const occasions = ["Happy birthday","Happy Annivsary", " Merry Christmas"];
function writeCards(occasions) {
    for (let i=0; i< occasions.length; i++) {
        console.log(`${occasions [i]}to you and your family!`);
        debugger;
    }
    return occasions;
}
writeCards(occasions)


function countDown (startingNUmber) {
    while (startingNumber> 0) {
        console.log (startingNymber );
        startingNumber -=1;
    }
    console.log(startingNumber);
}