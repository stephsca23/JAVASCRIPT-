var time = 24;
var saludo;

if (time >= 0 && time < 12) {
    saludo = "Buenos dias";
    
} else if (time >= 12 && time < 20) {
    saludo = "buenas tardes";
} else if (time >= 20 && time <= 24) {
    saludo = "buenas noches";
} else {
    saludo = "Hora desconocida";
}
