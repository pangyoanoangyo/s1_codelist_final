
// 스피드돔 카메라 다음버튼
function selectedControl(){
    const el = document.getElementById('spdCamType').value;  // //입력 받은 value 값
    document.querySelector(`.${el}`).style.display = 'flex';
    document.querySelector('#openspd').style.display = 'flex';
    console.log(el);
}


function select_cam(content1,content2,content3,content4,content5){
    console.log(`.${document.querySelector(content2).style.display}`);
    console.log(`.${document.querySelector(content3).value}`);
    console.log(`.${document.querySelector(content4).value}`);
    console.log(`.${document.querySelector(content4).value}${document.querySelector(content3).value}`);
    console.log(`#${document.querySelector(content4).value}${document.querySelector(content3).value}`);
    document.querySelector(content1).style.display='none';
    document.querySelector(content2).style.display='flex';
    document.querySelector(`#${document.querySelector(content4).value}${document.querySelector(content3).value}`).style.display='flex';
    document.querySelector(`.${document.querySelector(content4).value}${document.querySelector(content3).value}`).style.display='flex';
    document.querySelector(content5).style.display='flex';
    document.querySelector(content1).style.display='none';
    document.querySelector(content3).style.opacity=0.3;
    document.querySelector(content4).style.opacity=0.3;
    console.log(document.querySelector(content3));

}
function spd_btn(content1,content2,content3,content4,content5){
    const el1 = document.getElementById('spdCamType').value;  // //입력 받은 value 값
    const el_value = document.querySelector(`#${el1}`).value;  
    console.log(el1);
    console.log(el_value);
    console.log(`#${document.querySelector(content3).value}${el_value}`);
    console.log(`.${document.querySelector(content3).value}${el_value}`);
    console.log(content1);
    console.log(content2);
    document.querySelector(content1).style.display='flex';
    document.querySelector(content2).style.display='flex';
    //document.querySelector(`.${el_value}`).style.display='flex';
    document.querySelector(`#${document.querySelector(content3).value}${el_value}`).style.display='flex';
    document.querySelector(`.${document.querySelector(content3).value}${el_value}`).style.display='flex'; 
    document.querySelector(content5).style.display='flex';
    document.querySelector(content1).style.display='none';
    document.querySelector(content3).style.opacity=0.3;
    document.querySelector(`#${el1}`).style.opacity=0.3;    
}

function openModal(content){
    document.querySelector(content).style.display='flex';
    document.querySelector('header').style.opacity=0.1;
    document.querySelector('main').style.opacity=0.1;
}

function btnReset(content1,content2,content3,content4,content5){
    document.querySelector(content1).style.display='none';
    document.querySelector(content2).style.display='none';
    document.querySelector(`#${document.querySelector(content4).value}${document.querySelector(content3).value}`).style.display='none';
    document.querySelector(`.${document.querySelector(content4).value}${document.querySelector(content3).value}`).style.display='none';
    document.querySelector(content5).style.display='flex';
    document.querySelector(content3).style.opacity=1;
    document.querySelector(content4).style.opacity=1;
}
function btnSpdReset(content1,content2,content3,content4){
    const spd_value = document.querySelector(`#${document.getElementById('spdCamType').value}`).value;
    document.querySelector(content1).style.display='none';
    document.querySelector(content2).style.display='none';
    document.querySelector('#openspd').style.display='flex';
    document.querySelector(content3).style.opacity=1;
    document.querySelector(`#${document.getElementById('spdCamType').value}`).style.opacity=1;
    document.querySelector(`#${document.getElementById('spdCamType').value}`).style.display='none';
    document.querySelector(`.${document.getElementById('spdCamType').value}`).style.display='none';

    document.querySelector(`#${document.querySelector(content3).value}${spd_value}`).style.display='none';
    document.querySelector(`.${document.querySelector(content3).value}${spd_value}`).style.display='none'; 

    console.log(`#${document.querySelector(content4).value}${spd_value}`);
    console.log(`#${document.getElementById('spdCamType').value}`);
    console.log(`#${spd_value}`);
}
function closeModal(content1,content2){
    document.querySelector(content1).style.display='none';
    document.querySelector('header').style.opacity=1;
    document.querySelector('main').style.opacity=1;
    document.querySelector(content2).style.display='none';
    location.reload();
}

function option1() {
    document.querySelector("body").style.backgroundColor="white";
}
