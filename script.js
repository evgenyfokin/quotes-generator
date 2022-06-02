'use strict';

function generate() {
    let quotes = {
        '― Jules Renard':
            '“The truly free man is the one who can turn down an invitation to dinner without giving an excuse.”',
        '― Albert Einstein':
            "“Our task must be to free ourselves... by widening our circle of compassion to embrace all living creatures and the whole of nature and it's beauty.”",
        '― Lana Del Rey':
            '“Who are you?Are you in touch with all of your darkest fantasies? Have you created a life for yourself where you can experience them?I have. I am fucking crazy.But I am free.”',
        '― Candace Bushnell':
            "“Maybe some women aren' tmeant to be tamed. Maybe they just need to run free until they find someone just as wild to run with them. -Carrie Bradshaw”",
        '― Pierce Brown, Red Rising':
            '“Man cannot be freed by the same injustice that enslaved it.”',
    };

    let autors = Object.keys(quotes);
    let autor = autors[Math.floor(Math.random() * autors.length)];
    let quote = Object.values(quotes);

    document.getElementById('author').innerHTML = autor;
    
    document.getElementById('quote').innerHTML = quote[autors.indexOf(autor)];
}

generate();
