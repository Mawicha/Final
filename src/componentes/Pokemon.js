class Pokemon { /* Objeto de tipo Pokemon */
	constructor (data) { /* En su constructor, toma los datos recibidos a partir de los datos del Pokémon seleccionado y los mete en las variables del objeto, este pase de datos se hace en la App.js */
		this.id = data.id;
		this.name = data.name;
		this.sprite = data.sprites.front_default;
		this.type = data.types[0].type.name;
		this.height = data.height;
		this.weight = data.weight;
	}
}

export default Pokemon;