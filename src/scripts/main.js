const mapedKeys = [];

// Função para tocar a música
const playTune = (key) => {
    // Cria um novo objeto de áudio com o nome do arquivo de áudio
    const audio = new Audio(`src/tunes/${key}.wav`);
    audio.play();

    // Seleciona a tecla clicada ou pressionada
    const clickedKey = document.querySelector(`[data-key="${key}"]`);

    // Adiciona a classe 'active' para estilizar a tecla
    if (clickedKey) {
        clickedKey.classList.add("active");
        setTimeout(() => {
            // Remove a classe 'active' após 150ms
            clickedKey.classList.remove("active");
        }, 150);
    }
};

// Seleciona todas as teclas do piano
const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input");
const keysCheck = document.querySelector(".keys-check input");

// Adiciona o evento de clique e mapeia as teclas
pianoKeys.forEach((key) => {
    key.addEventListener("click", () => playTune(key.dataset.key));

    // Adiciona a tecla ao array mapedKeys
    mapedKeys.push(key.dataset.key);
});

// Evento de pressionamento de tecla no teclado
document.addEventListener("keydown", (e) => {
    
    const key = e.key.toLowerCase(); 
    if (mapedKeys.includes(key)) {
        playTune(key);
    }
});


const handleVolume = (e) => {
    audio.volume = (e.target.value);
};
const showHideKeys = () =>{
    pianoKeys.forEach( key => key.classList.toggle("hide"))
}
volumeSlider.addEventListener("input", handleVolume);

keysCheck.addEventListener("click", showHideKeys);
