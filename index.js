const ENGLISH=document.getElementById('english');
const TRANSLATIONBUT=document.getElementById('translationbut');
const TRANSCRIPTIONBUT=document.getElementById('transcriptionbut');
const EN=document.getElementById('en');
const TRANSLATION=document.getElementById('translation');
const TRANSCRIPTION=document.getElementById('transcription');
const ECRAN=document.getElementById('ecran');


ENGLISH.addEventListener('click', ()=>{
    EN.classList.toggle('none');
});

TRANSLATIONBUT.addEventListener('click', ()=>{
    TRANSLATION.classList.toggle('none');
});
/*
TRANSCRIPTIONBUT.addEventListener('click', ()=>{
    TRANSCRIPTION.classList.toggle('none');
    //console.log(predlojenieArr, predlojenieArrTr)
});*/

let r= document.getElementsByTagName('div');

let predlojenie;


for (j=0;j<EN.getElementsByTagName("p").length;j++){
    EN.getElementsByTagName("p")[j].addEventListener('click', ()=>{
        ECRAN.innerHTML=''
        TRANSLATION.innerHTML=''
        for (f=0;f<EN.getElementsByTagName("p").length;f++){
        EN.getElementsByTagName("p")[f].classList.remove('color')
        }
       let eve = event.target
       eve.classList.toggle('color')
       eve=eve.textContent

       getTranslation (eve)
       async function getTranslation (pTextContext) {
           const url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200422T124843Z.080b6a504e291973.8a23faf52816f1c303da63567f732b90ec64f825&text= ${pTextContext} &lang=en-ru`;
           const res = await fetch(url);
           const data = await res.json();
       
           let rec= await String(data.text).toLowerCase();
        
           let pTeg = document.createElement('p')
           let br = document.createElement('br')
       //let span = document.createElement('span')
       
      // span.textContent= await j;
       pTeg.textContent= await rec;
       
       
       
       await TRANSLATION.appendChild(pTeg);
      // await pTeg.appendChild(span);
       };


predlojenie=eve

let predlojenieArrTr=[]
getTranslationText ();
async function getTranslationText () {
    
let predlojenieArr = predlojenie.split(" ");
for (i=0;i<predlojenieArr.length;i++){
    
    const url = "https://dictionary.yandex.net/dicservice.json/lookup?ui=ru&text=" + predlojenieArr[i] + "&lang=en-ru&flags=23";
   
    const res = await fetch(url);
   
    let data = await res.json();
    data = await data.def;

   if (data[0]===undefined){data[0]={ts:" "}}

    data = await data[0].ts;
    data =await  `[${data}]`
   predlojenieArrTr[i]=data
}
let pTeg = document.createElement('tag')
let span = document.createElement('span')
span.textContent=j;
pTeg.textContent= (predlojenieArrTr.join(' '));

let br = document.createElement('br')
 ECRAN.appendChild(pTeg);
};
});
}

/*
for (j=0;j<EN.getElementsByTagName("p").length;j++){
    let pTextContext=EN.getElementsByTagName("p")[j].textContent
    getTranslation (pTextContext)
async function getTranslation (pTextContext) {
    const url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200422T124843Z.080b6a504e291973.8a23faf52816f1c303da63567f732b90ec64f825&text= ${pTextContext} &lang=en-ru`;
    const res = await fetch(url);
    const data = await res.json();

    let rec= await String(data.text).toLowerCase();
 
    let pTeg = document.createElement('p')
    let br = document.createElement('br')
let span = document.createElement('span')

span.textContent= await j;
pTeg.textContent= await rec;



await TRANSLATION.appendChild(pTeg);
await pTeg.appendChild(span);
};
}*/