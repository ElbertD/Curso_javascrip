function auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

var AutoNuevo = new auto("Tesla", "Model 3", 2020);

var AutoNuevo2 = new auto("Tesla", "Model X", 2018);

var modelo = ["Corolla","4Runner", "2000GT","AA","AE86","Alphard","Corolla","4Runner", "2000GT","AA","AE86","Alphard", "Altezza", "Auris","Avanza","Avensis", "Altezza", "Auris","Avanza","Avensis","Corolla","4Runner", "2000GT","AA","AE86","Alphard", "Altezza", "Auris","Avanza","Avensis"]

var marca = ["Toyota","Toyota","Toyota","Toyota","Toyota","Toyota","Toyota","Toyota","Toyota","Toyota","Toyota","Toyota","Toyota","Toyota","Toyota","Toyota","Toyota","Toyota","Toyota","Toyota","Toyota","Toyota","Toyota","Toyota","Toyota","Toyota","Toyota","Toyota","Toyota","Toyota"]

var annio = [2020,2021,2022,2023,2020,2020,2021,2022,2023,2020,2020,2021,2022,2023,2020,2020,2021,2022,2023,2020,2020,2021,2022,2023,2020,2020,2021,2022,2023,2020]

function auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

for(var i = 0;marca.length > i && modelo.length > i && annio.length > i; i++) {
    var nuevoAuto= new auto(marca[i], modelo[i], annio[i]);
    console.log(nuevoAuto)
}