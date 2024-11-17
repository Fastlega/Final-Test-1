var names = ["American Professional II Stratocaster®", "American Ultra Stratocaster®", "Player Stratocaster®", "Vintera® II '50s Stratocaster®", "American Professional II Telecaster®", "American Ultra Telecaster®", "Aerodyne Special Telecaster®", "Player Telecaster®", "Vintera® II '70s Jaguar®", "Kurt Cobain Jaguar®", "Johnny Marr Jaguar®", "Player Jaguar®", "American Professional II Jazzmaster®", "American Ultra Jazzmaster®", "Gold Foil Jazzmaster®", "American Performer Jazzmaster®"
]
var prices = ["$1,649.99", "$1,979.99", "$549.99", "$999.99", "$1,699.99", "$2,199.99", "$999.99", "$609.99", "$1,349.99", "$1,549.99", "$2,549.99", "$829.99", "$1,699.99", "$2,069.99", "$1,399.99", "$1,349.99"
]
var descriptions = ['Our popular Deep "C" neck now sports smooth rolled fingerboard edges, a "Super-Natural" satin finish and a newly sculpted neck heel for a supremely comfortable feel and easy access to the upper register. New V-Mod II Stratocaster single-coil pickups are more articulate than ever while retaining bell-like chime and warmth.',
'American Ultra is our most advanced series of guitars and basses for discerning players who demand the ultimate in precision, performance and tone. The American Ultra Stratocaster features a unique "Modern D" neck profile with Ultra rolled fingerboard edges for hours of playing comfort, and the tapered neck heel allows easy access to the highest register.' ,
'The inspiring sound of a Stratocaster is one of the foundations of Fender. Featuring this classic sound - bell-like high end, punchy mids and robust low end, combined with crystal-clear articulation - the Player Stratocaster is packed with authentic Fender feel and style. It`s ready to serve your musical vision, it`s versatile enough to handle any style of music and it`s the perfect platform for creating your own sound.',
'The Vintera® II `50s Stratocaster® features an alder body and a maple neck for classic Fender tone that`s full of punch and clarity. The soft "V"-shape neck lends a comfortably familiar grip that feels just right in your hand, while the 7.25" radius fingerboard with vintage-tall frets provide vintage comfort with ample room for big bends and expressive vibrato.',
'Our popular Deep "C" neck now sports smooth rolled fingerboard edges, a "Super-Natural" satin finish and a newly sculpted neck heel for a supremely comfortable feel and easy access to the upper register. New V-Mod II Telecaster single-coil pickups are more articulate than ever while delivering the twang, snap and snarl that made the Tele famous.',
'American Ultra is our most advanced series of guitars and basses for discerning players who demand the ultimate in precision, performance and tone. The American Ultra Telecaster features a unique "Modern D" neck profile with Ultra rolled fingerboard edges for hours of playing comfort, and the tapered neck heel allows easy access to the highest register.',
'The Aerodyne Special Telecaster® features a sleek new look with vibrant colors adorning the elegantly bound basswood body and the matching headcap. A modern "C" shape satin finished neck with 12" radius fingerboard ensures effortless playability, while newly designed vintage-voiced Telecaster pickups and a Babicz® Z-Series FCH-Tele® bridge deliver a perfect balance of high-performance and classic Fender tone.',
'Bold, innovative and rugged, the Player Telecaster is pure Fender, through and through. The feel, the style and, most importantly, the sound - they`re all there, waiting for you to make them whisper or wail for your music. Versatile enough to handle almost anything you can create and durable enough to survive any gig, this workhorse is a trusty sidekick for your musical vision.',
'The Vintera® II `70s Jaguar® features an alder body and a maple neck for classic Fender tone that`s full of punch and clarity. The late-`70s "C"-shape neck lends a comfortably familiar grip that feels just right in your hand, while the 7.25" radius fingerboard with vintage-tall frets provide vintage comfort with ample room for big bends and expressive vibrato. ',
'Return to the dark intensity and huge guitar sounds of the grunge rock movement with the Kurt Cobain Jaguar, a new-looking version of the battered and highly unusual 1965 Jaguar that Cobain wielded during the heady early-`90s era when Nirvana ruled rock and led a musically stunning and culturally subversive movement. It authentically evokes the modified left-handed Jaguar that Cobain found secondhand and came to prize shortly after the recording of massive 1991 album Nevermind, complete with DiMarzio® humbucking pickups, special switching, exclusive in-case extras and more. Available in right- and left-handed versions.',
'Johnny Marr is best known as the strikingly dynamic guitarist-arranger-songwriter behind the Smiths, who redefined and ruled U.K. pop in the 1980s. A master of melody, layering and texture, Marr has brought his own instantly identifiable genius to the proceedings ever since, in stints with The The, the Pretenders, Modest Mouse and the Cribs - to say nothing of his solo career and innumerable guest appearances. The Johnny Marr Jaguar® is a fantastically non-standard model that is as distinctive as the sounds he wrings from it.',
'Sleek and stylish and with a voice that`s a modern twist on our classic sound, the Player Jaguar has a uniquely slinky playing feel. It encourages you to play differently, to reach for new chords and melodic twists and to explore new sounds and tonalities. Decked out with spotlight-ready chrome accents, it has the authentic sound, features and feel that`s inspired countless artists to write new songs and create new genres of music.',
'The American Professional II Jazzmaster® draws from more than sixty years of innovation, inspiration and evolution to meet the demands of today`s working player. Our popular Deep "C" neck now sports smooth rolled fingerboard edges, a "Super-Natural" satin finish and a newly sculpted neck heel for a supremely comfortable feel and easy access to the upper register.', 
'American Ultra is our most advanced series of guitars and basses for discerning players who demand the ultimate in precision, performance and tone. The American Ultra Jazzmaster features a unique "Modern D" neck profile for hours of playing comfort, and the tapered neck heel allows easy access to the highest register.',
'Inspired by the garage rock bands of the sixties and the cult classic guitars they played, the Gold Foil Collection combines timeless Fender® designs with the dazzling style of a bygone era.The Gold Foil Jazzmaster® comes equipped with a bound ebony fingerboard, pearloid block inlays, mahogany body, Bigsby® B50 vibrato and three Gold Foil mini-humbuckers. Other features include a matching painted headstock, vintage-style tuners with white buttons, 21 Narrow Tall frets and a Fender® Jaguar®-inspired switch plate.',
'Born in Corona, California, the elegant American Performer Jazzmaster delivers the exceptional tone and refined feel you expect from an authentic Fender - with new player-oriented features that make it even more inspiring to play.'
]
var images = ["american_pro_stratocaster_2.jpg",
"ultra_stratocaster.jpg",
"player_stratocaster.jpg",
"vintera_stratocaster.jpg",
"american_pro_telecaster_2.jpg",
"american_ultra_telecaster.jpg",
"aerodyne_special_telecaster.jpg",
"player_telecaster.jpg",
"vintera_2_jaguar.jpg",
"kurt_cobain_jaguar.jpg",
"johnny_marr_jaguar.jpg",
"player_jaguar.jpg",
"american_pro_jazzmaster_2.jpg",
"american_ultra_jazzmaster.jpg",
"gold_foil_jazzmaster.jpg",
"american_performer_jazzmaster.jpg",
]
for (x in names) {
    var newElement = document.createElement ("section")
    var newName = document.createElement ("h3")
    newName.innerHTML = names[x]
    var newPrice = document.createElement ("p")
    newPrice.innerHTML = prices[x]
    var newDescription = document.createElement ("p")
    newDescription.innerHTML = descriptions[x]
    var newImage = document.createElement ("img")
    newImage.src = images [x]
    var button = document.createElement ("input")
    button.classList.add("button")
    button.type="button"
    button.value="Add To Cart"
    document.getElementById("article1").appendChild(newElement);
    newElement.appendChild(newImage)
    newElement.appendChild(newName)
    newElement.appendChild(newPrice)
    newElement.appendChild(button)
    newElement.appendChild(newDescription)

}
document.addEventListener('DOMContentLoaded', function() {
    const filterInput = document.getElementById("filter");
    const display = document.getElementById("article1");

    function filterCards() {
        const filterValue = filterInput.value.toLowerCase();
        const cards = display.querySelectorAll("section");
        cards.forEach(card => {
            const cardText = card.querySelector("h3").textContent.toLowerCase();
            if (cardText.includes(filterValue)) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    }

    filterInput.addEventListener('input', filterCards);
});
