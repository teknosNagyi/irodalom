let array = [
    {
        uralkod : "I. István",
        esemeny : "Koronázás",
        esemeny2 : "Pannonhalmi apátság megalapítása",
        evszam : "1000",
        evszam2 : "1001"
    },
    {
        uralkod : "IV. Béla",
        esemeny : "tatárjárás",
        evszam : "1241-1242"
    },
    {
        uralkod : "Mátyás király",
        esemeny : "Bécs elfoglalása",
        esemeny2 : "Kenyérmezei csata",
        evszam : "1485",
        evszam2 : "1479"
    },
    {
        uralkod : "II. Rákóczi Ferenc",
        esemeny : "A szabadságharc kezdete",
        esemeny2 : "A szabadságharc vége",
        evszam : "1703",
        evszam2 : "1711"
    }
];

const table = document.createElement('table');
document.body.appendChild(table);

const thead = document.createElement('thead');
table.appendChild(thead);

const tr = document.createElement('tr');
thead.appendChild(tr);

const tbody = document.createElement('tbody');
table.appendChild(tbody);

const uralkodo = document.createElement('th');
uralkodo.innerHTML = 'Úralkodó';
tr.appendChild(uralkodo);

const esemeny = document.createElement('th');
esemeny.innerHTML = 'Esemény';
tr.appendChild(esemeny);

const evszam = document.createElement('th');
evszam.innerHTML = 'Évszám';
tr.appendChild(evszam);


rendertable(array);

const form = document.getElementById('form')

form.addEventListener('submit',function(e){
    const uralkodonev = document.getElementById('uralkodo_nev');
    const esemeny1 = document.getElementById('esemeny1');
    const evszam1 = document.getElementById('evszam1');
    const esemeny2 = document.getElementById('esemeny2');
    const evszam2 = document.getElementById('evszam2');
    
    e.preventDefault()

    const uralkodonevvalue=uralkodonev.value
    const esemeny1value=esemeny1.value
    const evszam1value = evszam1.value
    const esemeny2value = esemeny2.value
    const evszam2value = evszam2.value

    

    
    if(validate(uralkodonevvalue,esemeny1value,evszam1value)){
     const hozzadott={
        uralkod:uralkodonevvalue,
        esemeny: esemeny1value,
        evszam:evszam1value,
        evszam2:evszam2value,
        esemeny2:esemeny2value 
    }  
    array.push(hozzadott)
    rendertable(array);
    form.reset();}
})




function rendertable(asd){
    tbody.innerHTML=''
    for (let adat of asd ){
       const uj_sor= document.createElement('tr')

       const cella1 =document.createElement('td')
       cella1.innerHTML=adat.uralkod
       cella1.rowSpan = adat.esemeny2 ? 2 : 1; 
       uj_sor.appendChild(cella1)

       const cella2 =document.createElement('td')
       cella2.innerHTML=adat.esemeny
       
       uj_sor.appendChild(cella2)

       const cella3 =document.createElement('td')
       cella3.innerHTML=adat.evszam
       
       uj_sor.appendChild(cella3)

       tbody.appendChild(uj_sor)

       if (adat.esemeny2 && adat.evszam2){
        const masodik_sor= document.createElement('tr')
        
       const cella4 =document.createElement('td')
       cella4.innerHTML=adat.esemeny2
       cella4.classList.add("cigany")
       masodik_sor.appendChild(cella4)
       
       const cella5 =document.createElement('td')
       cella5.innerHTML=adat.evszam2
       
       masodik_sor.appendChild(cella5)

       tbody.appendChild(masodik_sor)

       }
    }
}

function validate(uralkodonev1,esemeny1,evszam1){
    let result = true
    document.getElementById('uralkodo_neverror').innerHTML=""
    document.getElementById('esemeny1error').innerHTML=""
    document.getElementById("evszam1error").innerHTML=""
    
    if (!uralkodonev1){
        const uralkodonev = document.getElementById('uralkodo_neverror')
        uralkodonev.innerHTML="error"
        result=false
    }
    if (!esemeny1){
        const esemeny = document.getElementById('esemeny1error')
        esemeny.innerHTML="error"
        result=false
    }
    if (!evszam1){
        const evszam = document.getElementById("evszam1error")
        evszam.innerHTML="erorr"
        result=false
    }



    return result

}