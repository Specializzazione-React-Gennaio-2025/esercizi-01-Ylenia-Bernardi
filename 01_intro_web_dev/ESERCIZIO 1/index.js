// ADDIZIONE
export function add(x,y,z){
    let risultatioAddizione = x + y + z;
    document.getElementById("risultatioAddizione").innerHTML = risultatioAddizione;
    return risultatioAddizione;
}

// SOTTRAZIONE
export function sub(x,y,z){
    let risultatioSottrazione = x - y - z;
    document.getElementById("risultatioSottrazione").innerHTML = risultatioSottrazione;
    return risultatioSottrazione;
}

// MOLTIPLICAZIONE
export function mul(x,y,z){
    let risultatoMoltiplicazione = x * y * z;
    document.getElementById("risultatoMoltiplicazione").innerHTML = risultatoMoltiplicazione;
    return risultatoMoltiplicazione;
}

const Math = {
    add(x,y){
        let defAdd = x + y;
        document.getElementById("defAdd").innerHTML = defAdd;
        return defAdd;
    },

    sub(x,y){
        let defSub = x - y;
        document.getElementById("defSub").innerHTML = defSub;
        return defSub;
    },

    mul(x,y){
        let defMol = x * y;
        document.getElementById("defMol").innerHTML = defMol;
        return defMol;
    }
}

export default Math;