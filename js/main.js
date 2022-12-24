function generate (){
    var quotes = {
        "- Coco Chanel" : '“The most courageous act is still to think for yourself. Aloud.”',
        "- George Orwel" : '“War is peace.Freedom is slavery.Ignorance is strength.”',
        "- Virginia Woolf" : '“Lock up your libraries if you like; but there is no gate, no lock, no bolt that you can set upon the freedom of my mind.”',
        "- John Green" : '“Some tourists think Amsterdam is a city of sin, but in truth it is a city of freedom. And in freedom, most people find sin.”',
        "- Mahatma Gandhi" : '“Freedom is not worth having if it does not include the freedom to make mistakes.”',
        "- Jim MORRISON" : '“The most important kind of freedom is to be what you really are. You trade in your reality for a role. You trade in your sense for an act. You give up your ability to feel, and in exchange, put on a mask.”',
        "- Nelson Mandela" : '“When a man is denied the right to live the life he believes in, he has no choice but to become an outlaw.”',
        "- Søren Kierkegaard" : '“People demand freedom of speech as a compensation for the freedom of thought which they seldom use.”',
        "- Ralph Ellison" : '“When I discover who I am, I’ll be free.”',
        "- Toni Morrison" : '“You wanna fly, you got to give up the shit that weighs you down.”',
        "- Benjamin Franklin" : '“They who can give up essential liberty to obtain a little temporary safety deserve neither liberty nor safety”'
    }
    var authors = Object.keys(quotes); 

    var author = authors[Math.floor(Math.random()*authors.length)];

    var quote = quotes[author];

    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;

  
}
setInterval(generate() , 2000);

setTimeout(function gey() {
    generate();
    setTimeout(run, 100);
  }, 100);