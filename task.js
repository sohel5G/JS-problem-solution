/*
let Araf = 80;
let Ashif = 85;
let Kamal = 57;


if( Araf > Ashif && Araf > Kamal ){
    console.log('cake for Araf');
}else if( Ashif > Araf && Ashif > Kamal ){
    console.log( 'cake for Ashif' );
}else{
    console.log('cake for Kamal')
}


let getMaxMark = Math.max( Araf, Ashif, Kamal );
switch( getMaxMark ){
    case  Araf:
        console.log('This cake for Araf');
        break;
    case  Ashif:
        console.log('This cake for Ashif');
        break;
    case  Kamal:
        console.log('This cake for Kamal');
        break;
    default :
        console.log('We can not find the max mark for those students');
}
*/



// Print the hight number 

function getHighNumber( giveArray ){
    let large = giveArray[0];
    for( let x = 0; x < giveArray.length; x++ ){
        let element = giveArray[x];
        if( element > large ){
            large = element;
        }
    }
    return large;
}


let hights = [1, 3, 2, 7, 9, 27];
let result = getHighNumber( hights )
console.log(result);


