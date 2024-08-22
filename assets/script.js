/*    // Función para obtener los datos de los personajes de la API

async function fetchCharacters(start, end) {
    const characterContainer = document.getElementById('characterContainer');
    characterContainer.innerHTML = ''; // Limpiar el contenedor antes de agregar nuevos personajes

    for (let i = start; i <= end; i++) {
        try {
            const response = await fetch(`https://swapi.dev/api/people/${i}/`);

            if (!response.ok) {
                // Si la respuesta no es exitosa (404 por ejemplo), continuar con el siguiente ID
                console.warn(`No se encontró personaje con ID ${i}`);
                continue; // Continuar con el siguiente ID 
            }

            const data = await response.json();

            if (!data.name || !data.height || !data.mass) {
                // Si me faltan datos importantes, omitir el personaje
                console.warn(`Datos incompletos para personaje con ID ${i}`);
                continue;
            }
            
            // Crear un bloque para cada personaje
            const characterBlock = document.createElement('div');
            characterBlock.className = 'col-md-4 mb-3'; // Ajustar el tamaño y el margen del bloque
            
            characterBlock.innerHTML = `
                <div class="character-block">
                    <h3>${data.name}</h3>
                    <p>Altura: ${data.height} cm</p>
                    <p>Peso: ${data.mass} kg</p>
                </div>
            `;
            
            characterContainer.appendChild(characterBlock);
        } catch (error) {
            console.error('Error fetching character data:', error);
        }
    }
}

// clic en el btn de rango 1-5
document.querySelector('button[data-start="1"]').addEventListener('click', () => {
    fetchCharacters(1, 5);
});

// 6-11
document.querySelector('button[data-start="6"]').addEventListener('click', () => {
    fetchCharacters(6, 11);
});

// 12-17
document.querySelector('button[data-start="12"]').addEventListener('click', () => {
    // Ajustar los rangos disponibles basados en los datos de la API
    fetchCharacters(12, 16); // elimine el rango con ID 17 ya que que no tenia datos en la API - (undifined)
});

//agregar img personajes */


// btener los datos de los personajes de la API
async function fetchCharacters(start, end) {
    const characterContainer = document.getElementById('characterContainer');
    characterContainer.innerHTML = ''; // Limpiar el contenedor antes de agregar nuevos personajes

    for (let i = start; i <= end; i++) {
        try {
            const response = await fetch(`https://swapi.dev/api/people/${i}/`);

            if (!response.ok) {
                console.warn(`No se encontró personaje con ID ${i}`);
                continue;
            }

            const data = await response.json();

            if (!data.name || !data.height || !data.mass) {
                console.warn(`Datos incompletos para personaje con ID ${i}`);
                continue;
            }

            // URL de la imagen según el nombre del personaje
            let backgroundImage = './assets/imgs/default.jpg'; // Imagen por defecto

            switch (data.name) {
                case 'Luke Skywalker':
                    backgroundImage = './assets/imgs/star_wars__tcg___endor_luke_by_anthonyfoti_d7v5ojb-300w.jpg';
                    break;
                case 'C-3PO':
                    backgroundImage = './assets/imgs/c_3po_by_steveargyle_d9kb64r-300w.jpg';
                    break;
                case 'R2-D2':
                    backgroundImage = './assets/imgs/star_wars_r2_d2___jawa_taxi_service_by_graught_d6vqgqa-300w.jpg';
                    break;
                case 'Darth Vader':
                    backgroundImage = './assets/imgs/darth_vader_by_6kart_d6v8x3c-350t.jpg';
                    break;
                case 'Leia Organa':
                    backgroundImage = './assets/imgs/imperial_leia_organa_by_zhaliacaldwellai_dhbgpka-300w.jpg';
                    break;
                case 'Owen Lars':
                    backgroundImage = './assets/imgs/descarga.jpeg';
                    break;
                case 'Beru Whitesun lars':
                    backgroundImage = './assets/imgs/images.jpeg';
                    break;
                case 'R5-D4':
                    backgroundImage = './assets/imgs/r5_d4_by_conklingc_dfbrq9o-350t.png';
                    break;
                case 'Biggs Darklighter':
                    backgroundImage = './assets/imgs/descarga (1).jpeg';
                    break;
                case 'Obi-Wan Kenobi':
                    backgroundImage = './assets/imgs/star_wars__tcg___obi_wan_kenobi_by_anthonyfoti_d5mqpvt-350t.jpg';
                    break;
                case 'Anakin Skywalker':
                    backgroundImage = './assets/imgs/anakin_skywalker__4_by_karmichorror_dglct1t-92s.jpg';
                    break;
                case 'Wilhuff Tarkin':
                    backgroundImage = './assets/imgs/W-H-rogue_one_by_5ic_d9y73ck-350t.jpg';
                    break;
                case 'Chewbacca':
                    backgroundImage = './assets/imgs/chewbacca_by_markbulahao_dbuvjza-375w.jpg';
                    break;
                case 'Han Solo':
                    backgroundImage = './assets/imgs/han_solo_by_r_valle_dctq8it-375w.jpg';
                    break;
                case 'Greedo':
                    backgroundImage = './assets/imgs/greedo-descarga (2).jpeg';
                    break;
                case 'Jabba Desilijic Tiure':
                    backgroundImage = './assets/imgs/jabba_the_hutt_dl_by_valforwing_d3fgzuh-350t.jpg';
                    break;                                    
                    
                default:
                    console.warn(`No se encontró imagen para ${data.name}, usando imagen por defecto.`);
            }

            // bloque para cada personaje
            const characterBlock = document.createElement('div');
            characterBlock.className = 'col-md-4 mb-3'; // Ajustar el tamaño y el margen del bloque
            
            characterBlock.innerHTML = `
                <div class="character-block" style="background-image: url('${backgroundImage}'); background-size: cover; background-position: center;">
                    <h3>${data.name}</h3>
                    <p>Altura: ${data.height} cm</p>
                    <p>Peso: ${data.mass} kg</p>
                </div>
            `;

            characterContainer.appendChild(characterBlock);
        } catch (error) {
            console.error('Error fetching character data:', error);
        }
    }
}

// Event listeners para los botones de rango
document.querySelector('button[data-start="1"]').addEventListener('click', () => {
    fetchCharacters(1, 5);
});

document.querySelector('button[data-start="6"]').addEventListener('click', () => {
    fetchCharacters(6, 11);
});

document.querySelector('button[data-start="12"]').addEventListener('click', () => {
    fetchCharacters(12, 16); // elimine el rango con ID 17 ya que no tenía datos en la API
});
