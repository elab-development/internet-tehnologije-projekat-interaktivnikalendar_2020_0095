[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/1IMeAlJr)

Prilikom pokretanja Laravel dela neophodno je u terminalu prvo ukucati cd aplikacija, a potom i php artisan serve. Za pokretanje Reacta treba u terminalu ukucati cd react_aplikacija, a nakon toga i npm start.

Ova aplikacija predstavlja interaktivni kalendar namenjen organizaciji i praćenju događaja unutar firme. Na početnoj stranici korisnici se susreću sa jednostavnim menijem koji sadrži četiri osnovne opcije: Login, Registration, Calendar, i All Events.

•	Login: Ova opcija vodi korisnika na stranicu za prijavu, gde se u zavisnosti od korisničke uloge (administrator ili menadžer) prikazuje odgovarajući meni nakon uspešnog logovanja.
•	Registration: Ova opcija omogućava registraciju novih administratora. 
•	Calendar: Svi korisnici, bez obzira na ulogu, imaju pristup osnovnom kalendaru.
•	All Events: Ova funkcionalnost omogućava osnovni pregled događaja koji su otvoreni za sve korisnike unutar firme, odnosno događaja koji pripadaju kategoriji „General“.

Kada se korisnik prijavi putem opcije Login, prikazuju mu se specifične opcije u meniju, zavisno od njegove uloge:

1.	Administrator:
•	My Calendar: Prikazuje interaktivni kalendar sa mogućnošću dodavanja novih događaja. Administrator može kreirati događaje u različitim kategorijama kao što su      Meeting, Training & Development, Product Launch, i General.
•	All Events: Omogućava administratoru da vidi sve događaje i da obriše one koje smatra nepotrebnim ili zastarelim.
•	User Registration: Ovo je posebna opcija dostupna samo administratorima, koja omogućava registraciju novih menadžera u sistem.
•	Logout: Vraća korisnika na početnu stranicu, odjavljujući ga iz sistema.

2.	Menadžer:
•	My Calendar: Menadžeru se prikazuje kalendar i ima mogućnost da doda nove događaje.
•	All Events: Kao i kod administratora, menadžer može videti sve događaje i da obriše one koji mu nisu više potrebni.
•	Logout: Takođe vraća menadžera na početnu stranicu i odjavljuje ga iz sistema.

Aplikacija je dizajnirana tako da omogućava jasnu podelu uloga i odgovornosti unutar firme, sa posebnim naglaskom na administraciju događaja i jednostavno upravljanje kalendarom. Ovaj sistem omogućava transparentnost i lakše praćenje svih važnih događaja unutar firme, čineći ga ključnim alatom za organizaciju i planiranje.

