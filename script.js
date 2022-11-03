const klikBtn = document.getElementById('klik');
const mainDiv = document.getElementById('main');

function newNode(el, inner='', parent = null){
    let newEl = document.createElement(el);
    let textNode = document.createTextNode(inner);
    newEl.appendChild(textNode);
    if(parent != null){
        parent.appendChild(newEl);
    }
    return newEl;
}

function Klik(){
    klikBtn.hidden = true;
    mainDiv.style.display = 'flex';
    mainDiv.style.opacity = 1;
    
    let newMain = newNode('div', '', mainDiv);
    newMain.style.width = '20%';
    newNode('h1', 'Institut Teknologi Sumatera', newMain);
    newNode('h3', '2022', newMain);
    newNode('p' , 'ITERA saat ini sedang berkembang pesat dan menjadi incaran calon mahasiswa baru yang ingin menempuh bangku perkuiahan ',newMain);
    
}