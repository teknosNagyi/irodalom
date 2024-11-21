const array = [
    {
        vezeteknev: "Kocsis",
        keresztnev1: "Géza",
        keresztnev2: "Ferenc",
        hazas: "igen",
        haziallat: "kutyus"
    },
    {
        vezeteknev: "Horváth",
        keresztnev1: "Mária",
        keresztnev2: "Julia",
        hazas: "igen",
        haziallat: "kutyus"
    },
    {
        vezeteknev: "Balogh",
        keresztnev1: "Ferenc",
        keresztnev2: "",
        hazas: "igen",
        haziallat: "kutyus"
    },
    {
        vezeteknev: "Horváth",
        keresztnev1: "Gábor",
        keresztnev2: "Attila",
        hazas: "igen",
        haziallat: "kutyus"
    }
]

const table = document.createElement('table');
document.body.appendChild(table);

const thead = document.createElement('thead');
table.appendChild(thead);

const tr = document.createElement('tr');


const tbody = document.createElement('tbody');
table.appendChild(tbody);

const vezeteknev = document.createElement('th');
vezeteknev.innerHTML = 'Vezetéknév';
vezeteknev.colSpan=2
tr.appendChild(vezeteknev);

const keresztnev = document.createElement('th');
keresztnev.innerHTML = 'Keresztnév';
tr.appendChild(keresztnev);



const hazas = document.createElement('th');
hazas.innerHTML = 'Házas';
tr.appendChild(hazas);

const pet = document.createElement('th')
pet.innerHTML='Állat'
tr.append(pet)


thead.appendChild(tr);

rendertable()
function rendertable(){
    tbody.innerHTML=""

    for (let adat of array){
        let sor = document.createElement('tr')

        const cella1 = document.createElement('td')
        cella1.innerHTML=adat.vezeteknev
        sor.appendChild(cella1)

        const cella2 = document.createElement('td')
        cella2.innerHTML=adat.keresztnev1
        sor.appendChild(cella2)

        if (adat.keresztnev2){
            const cella3 = document.createElement('td')
        cella3.innerHTML=adat.keresztnev2
        sor.appendChild(cella3)

        }else{
            cella2.colSpan=2
        }
        const cella4 = document.createElement('td')
        cella4.innerHTML=adat.hazas
        sor.appendChild(cella4)

        const cella5 = document.createElement('td')
        cella5.innerHTML=adat.haziallat
        sor.appendChild(cella5)

        tbody.appendChild(sor)






    }
}