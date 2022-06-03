# Slutprojekt

Isak Thyrel , 2022-05-30

## Inledning

Här beskriver du kortfattat arbetets syfte/mål, arbetssätt, genomförande.
Syftet med arbetet var att lära mig mer om olika tekniker för att bygga upp och hosta sidor för webben. I mitt arbete använder jag node, detta gör att den faktiskta html/css koden byggs upp på clientens sida medans den pratar med en extern databas för att tillföra data. Målet var att skapa en sida där man kan logga in samt lägga upp olika meddelanden eller "meeps". Mitt arbetssätt var att först så planerade jag hur jag skulle bygga upp min hemsida och vilka delar den skulle innehålla. Sedan använde jag ett node script för att testa och hosta min sida på local host. Jag använde även express och nodemon för att få en konstant uppdatering av sidan utan att behöva göra node scripten vid varje ändring.

## Bakgrund


Jag började arbetet med att skapa en planering för arbetets olika delar och struktur. Denna planering innehöll struktur för vilka router jag skulle använda med tillhörande CRUD metod. Databasens struktur planerades även här med login och meeps tables. Efter planeringen var skapad började jag med att skapa mina tables och detta gjorde jag med programmet tableplus. Jag skapade en login table där alla de unika användarna och lösenorden fanns. När databasen var klar var det dags att börja bygga på själva sidan. Jag började med att ladda ner express som är ramverket jag använt för mitt projekt. Sedan installerades nodemon för att få en bättre utvecklar upplevelse som gjorde det lättare för mig att testa min sida. Efter jag fått ett ramverk var det dags att börja bygga projektet med routes. Den första routen jag skapade var i index och den var en GET route för meeps. Denna route skickar min meeps databas i json format. För att få databas kopplingen att fungera behövdes en .env fil med databas informationen. För att hantera json datan användes nunjucks för att bygga min sida med meeps datan. Jag använde bootstrap i kombination med nunjucks för att underlätta strukturen på mitt projekt och lättare implementera stilar. Efter index sidan var byggd skapade jag routes till login, profile och register sidor. Därefter skapade jag min register route som är en POST route till login databasen. Den skapar en ny användare och ett lösenord som krypteras med bcrypt. Därefter skapade jag en login route där användare och lösenord jämförs med datan som är i databasen, självklart behövs hashen dekrypteras så det kan jämföras med det inskrivna lösenordet. 

## Positiva erfarenheter


Det har gått bra att arbeta med databasen och att skapa olika sql frågor. Jag tycker att jag har börjat få en bra förståelse för hur databaser fungrar och hur man kan arbeta med dem. Även har mina kunskaper om hur man skapar routes blivit större. Det gick bra att arbeta med nunjucks. Överlag har mina kunskaper om hur jag skapar ett node projekt blivit större och jag är säker på hur express ramverket fungerar. 

## Negativa erfarenheter


Jag har vid många tillfällen under projektets gång försökt skapa och göra tillägg till min sida utöver min planering. Jag försökte implementera en API till min sida och försökte göra detta med eleventy-fetch. Jag insåg dock att detta inte fungerar till min projekt struktur och att det faktiskta sättet att implementera API med node var betydligt mer komplicerat än vad jag trott. Så jag valde att deprikera API tilägget. Lärdom jag kan ta av detta är att utgå från min planering så mycket det går och att se till att göra tilläggen efter jag är klar med själav projektet. Ofta kan jag försöka göra tillägg som jag anser är roliga istället för att förbättra mitt projekt. Jag gjorde samma misstag när jag försökte skapa en profil bild. Min första tanke var att skapa en post route som laddar upp en bild från sidan till databasen. Jag insåg dock att det är riktigt komplicerat att förvara bilder i databasen och valde därför att inte göra det. Jag hade inte gett upp med att profilbilderna utan jag försökte ett annat sätt och det var att direkt ladda upp bilderna till servern. Jag lyckades skapa en route för att ladda upp bilder till servern med express-file upload. Det funkade dock mindre bra när jag testade hosta sidan på heroku, file upload routen fungerade inte. Jag hittade ingen lösning på detta och valde att deprikera den också. Lärdomen jag tar från detta är att vara bättre förbered och följa planeringen mer precist.

## Sammanfattning


Över lag har arbetet varit lyckat och jag har skapat en sida som fungerar på ett någorlunda bra sätt. Den har alla funktioner som jag hade planerat ut att den skulle ha. Dock hade jag gärna byggt på den lite med css och stilar för att få den att se bättre ut. Dessutom finns det mindre ändringar jag hade kunnat göra för att ge användaren en mer användarvänlig upplevelse. Arbetet har fått mig att inse hur viktigt det är med en planering som är precis och att jag ska följa den i min bästa förmåga. Att jag gör klart alla delar i min planering innan jag börjar skapa tillägg. Jag slösade mycket tid under projektets gång på tillägg som jag i slutändan valde att deprikera. Jag borde istället prioritera att få projektet helt klart och användarvänligt istället för "onödiga" tillägg. 