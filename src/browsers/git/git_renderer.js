const { ipcRenderer } = require('electron');
const git = require('../../lib/git-cli');
const {createDialog} = require('../../lib/dialog')

const project = ipcRenderer.sendSync('project-request');

let USERNAME = null;
let PASSWORD = null;
let setUsername = true;
let submitBtn;
let inputValue;

let openDialog = document.getElementById('openDialog');

openDialog.addEventListener('click', _ => {
    if(setUsername == true){
        document.body.appendChild(createDialog('text', 'Username'));
    }else{
        var elem = document.getElementById('dialog-req');
        elem.parentNode.removeChild(elem);
        document.body.appendChild(createDialog('password', 'Password'));
    }
    submitBtn = document.getElementById('submit');
    submitBtn.addEventListener('click', _=>{
        setDialog();
    })
    document.getElementById('dialog-req').showModal();
})

function setDialog(){
    inputValue = document.getElementById('val');
    if(setUsername == true){
        USERNAME = inputValue.value;
        setUsername = false;
        openDialog.click();
    }else{
        PASSWORD = inputValue.value;
        setUsername = true;    
    }
}

git.getCommitList(project['path']).then(res => {
    console.log(res);
});

git.status(project['path']).then(res => {
    console.log(res);
})

document.getElementById("cancel").addEventListener('click', _=>{
    ipcRenderer.send("close-modal");
});