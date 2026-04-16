<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Adivina la Energía</title>
  <style>
    body { font-family: Arial, sans-serif; background: #f7f7f7; padding: 30px; }
    .game-box { background: #fff; border-radius: 8px; box-shadow: 0 2px 8px #ccc; max-width: 400px; margin: auto; padding: 30px; }
    .clue { font-size: 1.2em; margin-bottom: 20px; }
    .result { margin-top: 20px; font-weight: bold; }
    .desc { margin-top: 10px; color: #555; }
    button { margin-top: 15px; padding: 8px 18px; font-size: 1em; }
    input[type="text"] { width: 100%; padding: 8px; font-size: 1em; margin-top: 10px; }
  </style>
</head>
<body>
  <div class="game-box">
    <h2>🔍 Adivina la energía</h2>
    <div class="clue" id="clue"></div>
    <input type="text" id="guess" placeholder="¿Qué energía crees que es?">
    <button onclick="checkGuess()">Comprobar</button>
    <div class="result" id="result"></div>
    <div class="desc" id="desc"></div>
    <button id="playAgain" style="display:none;" onclick="newGame()">Jugar otra vez</button>
  </div>
  <script>
    const energias = [
      {
        nombre: "solar",
        pista: "Me aprovecho del calor del sol. Aunque soy limpia y renovable, mi producción depende del clima.",
        descripcion: "La energía solar convierte la radiación del sol en electricidad o calor. Es renovable, pero intermitente."
      },
      {
        nombre: "eólica",
        pista: "Me muevo con el viento. A veces produzco más de lo necesario, otras nada.",
        descripcion: "La energía eólica usa aerogeneradores para transformar el viento en electricidad. Es limpia pero variable."
      },
      {
        nombre: "hidráulica",
        pista: "Puedo almacenar energía en forma de agua. Me aprovecho del movimiento del agua para generar electricidad.",
        descripcion: "La energía hidráulica usa el movimiento del agua para generar electricidad, y puede almacenarse en embalses."
      },
      {
        nombre: "fósil",
        pista: "Soy muy usada, pero muy contaminante. Provengo del carbón, petróleo o gas.",
        descripcion: "Las energías fósiles emiten gases de efecto invernadero y están detrás del cambio climático."
      },
      {
        nombre: "nuclear",
        pista: "No emito CO2 al generar electricidad, pero manejo materiales muy peligrosos.",
        descripcion: "La energía nuclear usa la fisión de átomos para generar electricidad. Tiene riesgos de residuos y accidentes."
      }
    ];

    let energiaActual = null;

    function normalizar(texto) {
      return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
    }

    function newGame() {
      energiaActual = energias[Math.floor(Math.random() * energias.length)];
      document.getElementById('clue').textContent = energiaActual.pista;
      document.getElementById('guess').value = '';
      document.getElementById('result').textContent = '';
      document.getElementById('desc').textContent = '';
      document.getElementById('playAgain').style.display = 'none';
      document.getElementById('guess').disabled = false;
    }

    function checkGuess() {
      const guess = document.getElementById('guess').value;
      if (!guess) return;
      const correcto = normalizar(guess) === normalizar(energiaActual.nombre);
      document.getElementById('result').textContent = correcto
        ? "✅ ¡Correcto!"
        : `❌ Incorrecto. Era: ${energiaActual.nombre.charAt(0).toUpperCase() + energiaActual.nombre.slice(1)}`;
      document.getElementById('desc').textContent = `ℹ️ ${energiaActual.descripcion}`;
      document.getElementById('playAgain').style.display = 'inline-block';
      document.getElementById('guess').disabled = true;
    }

    // Iniciar el juego al cargar
    window.onload = newGame;
  </script>
</body>
</html>