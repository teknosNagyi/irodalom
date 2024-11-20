const array = [
    {
      Szerző_neve: "Balassi Bálint",
      Korszak: "reformáció",
      Szerelmek1: "Losonczy Anna",
      Szerelmek2: "Dobó Krisztina"
    },
    {
      Szerző_neve: "Csokonai Vitéz Mihály",
      Korszak: "felvilágosodás",
      Szerelmek1: "Vajda Juliána"
    },
    {
      Szerző_neve: "Petőfi Sándor",
      Korszak: "magyar romantika",
      Szerelmek1: "Mednyánszky Berta",
      Szerelmek2: "Szendrey Júlia"
    },
    {
      Szerző_neve: "Ady Endre",
      Korszak: "20. század",
      Szerelmek1: "Léda",
      Szerelmek2: "Csinszka"
    }
  ];

  const table = document.createElement('table')
  document.body.appendChild(table)
  const thead = document.createElement('thead')
  table.appendChild(thead)

  const tbody=document.createElement('tbody')
  table.appendChild(tbody)

  const tr = document.createElement('tr')

  const szerzo=document.createElement('th')
  szerzo.innerHTML="Szerző"
  tr.appendChild(szerzo)

  const korszak= document.createElement("th")
  korszak.innerHTML="Korszak"
  tr.appendChild(korszak)

  const szerelmek = document.createElement('th')

  szerelmek.innerHTML = "Szerelmek"
  szerelmek.colSpan=2
  tr.appendChild(szerelmek)

  thead.appendChild(tr)

rendetable(array)
const form = document.getElementById('form')

  form.addEventListener('submit',function(e){
        

        const kolto_nev=document.getElementById('kolto_nev')
        const korszak = document.getElementById('korszak')
        const szerelem1 = document.getElementById('szerelem1')
        const masodik = document.getElementById('masodik')
        const szerelem2 = document.getElementById('szerelem2')
        e.preventDefault()
        const kolto_nevValue=kolto_nev.value
        const korszakvalue = korszak.value
        let szerelem1value = szerelem1.value
        const masodikvalue = masodik.checked
        const szerelem2value = szerelem2.value


        if (error1(kolto_nevValue,korszakvalue)){
        
        if (szerelem1value ==""&&szerelem2value==""){
          szerelem1value="-"
        }
        if (masodikvalue==false){
          const uj1={
            Szerző_neve: kolto_nevValue ,
            Korszak:korszakvalue ,
            Szerelmek1: szerelem1value
            
          }
          array.push(uj1)
          rendetable(array)
        }
        
        else{
        const uj={
          Szerző_neve: kolto_nevValue ,
          Korszak:korszakvalue ,
          Szerelmek1: szerelem1value,       
          Szerelmek2: szerelem2value

        }
        array.push(uj)
          rendetable(array)
      }
    }
      form.reset()

        
        
  })


  function rendetable(asd){
    tbody.innerHTML=''
    for (let adat of asd){
        const sor = document.createElement('tr')

        const cella1= document.createElement('td')
        cella1.innerHTML= adat.Szerző_neve
        sor.appendChild(cella1)

        const cella2=document.createElement('td')
        cella2.innerHTML=adat.Korszak
        sor.appendChild(cella2)

        const cella3=document.createElement('td')
        cella3.innerHTML=adat.Szerelmek1
        sor.appendChild(cella3)
        if(adat.Szerelmek2){
            const cella4=document.createElement('td')
            cella4.innerHTML=adat.Szerelmek2
            sor.appendChild(cella4)
        }
        else{
          cella3.colSpan=2
        }
        tbody.appendChild(sor)
    }
  }

  function error1(nev,korszak){
    let result=true;
    if (nev=="" ||korszak==""){
      result=false
    }
   return result
  }

 
  