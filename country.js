class Country {
    constructor(name, lang, greeting, colors, flag) {
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
        this.flag = flag;
    }
}
let usa = new Country("USA", "English", "Hello World", ["red", "white", "blue"], "USA_Flag.png");
let mexico = new Country("Mexico", "Spanish", "Hola Mundo", ["green", "white", "red"], "Flag_of_Mexico.png");
let algeria = new Country("Algeria", "Arabic", "Marhaban Bialealam", ["green", "white", "red"], "Flag-Algeria.jpg");
let brazil = new Country("Brazil", "Portugese", "Olá Mundo", ["green", "blue", "yellow"], "Flag-Brazil.jpg");
let russia = new Country("Russia", "Russian", "Privet, mir",["white", "blue", "red"], "russia_flag.png");


function SwitchCountry()
{
    let input = document.getElementById("CountryList").value;
    let country;

    if (input === "USA") {
        //set country to usa 
        country = usa;        
    }
    else if (input === "Mexico") {
        country = mexico;
    }
    else if (input === "Algeria") {
        country = algeria;
    }
    else if (input === "Brazil") {
        country = brazil;
    }
    else if (input === "Russia") {
        country = russia;
    }
    document.getElementById("CountryName").innerText = country.name;
    document.getElementById("OfficialLanguage").innerText = country.lang;
    document.getElementById("HelloWorld").innerText = country.greeting;
    document.getElementById("Flag").src = country.flag;
    DisplayColors(country.colors);
}

function DisplayColors(colors)
    {
        let color1 = document.getElementById("Color1");        
        color1.style.backgroundColor = colors[0];
        let color2 = document.getElementById("Color2");        
        color2.style.backgroundColor = colors[1];
        let color3 = document.getElementById("Color3");        
        color3.style.backgroundColor = colors[2];
    };