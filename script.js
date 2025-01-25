let quotes=['Happiness is not something ready-made. It comes from your own actions',
     'The happiness of your life depends upon the quality of your thoughts','You cant go back and change the beginning but you can start where you are and change the ending','Life is 10% what happens to you and 90% how you react to it.','The biggest adventure you can take is to live the life of your dreams','Life is short, but it is long enough to achieve something wonderfu','Believe you can and youre halfway there','The future belongs to those who believe in the beauty of their dreams','Your time is limited, so dont waste it living someone elses life'
    ]


function generatequote(){
    let randomquote=Math.floor(Math.random()*quotes.length)
    document.getElementById("quote").innerHTML=quotes[randomquote];
    document.getElementById("para").style.display="none";
}
