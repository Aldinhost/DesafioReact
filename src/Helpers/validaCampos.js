const validaCampos = (infoObj) => {
    //Validar que los campos no esten vacios
    const arrayOfValues = [];
    for(let valor in infoObj){
        // console.log(infoObj[valor]);
        arrayOfValues.push(infoObj[valor]);
    }
    return arrayOfValues.some((valor => valor === undefined || valor === ''));
    //REgresa true si alguno está vacio o undefined
}

export default validaCampos;