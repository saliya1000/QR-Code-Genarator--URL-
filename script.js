const form = document.getElementById("generate-form");
const qr = document.getElementById("qrcode");


const onGenarateSubmit = (e) => {
    e.preventDefault();
    cleanUI();

    const url = document.getElementById("url").value;
    const size = document.getElementById("size").value;

    
    if(url===""){
        alert("Enter a valid Url")
    }
    else{
        showSpinner();
        
        setTimeout(() => {
            hideSpinner();
            genarateQrCode(url, size);

            setTimeout(() => {
                const saveurl = qr.querySelector("img").src;
                createSaveBtn(saveurl);
            },50);
        }, 1000);
    }

};

const genarateQrCode = function (url, size) {
    const qrcode = new QRCode("qrcode", {
        text: url,
        width: size,
        height: size,
       
    });
}

const cleanUI = function (){
    qr.innerHTML = "";
    const savebtn = document.getElementById("savelink");

    if(savebtn){
        savebtn.remove();
    }
}




const showSpinner = function(){
    document.getElementById("spinner").style.display = "block";
};

const hideSpinner = function(){
    document.getElementById("spinner").style.display = "none";
};

const createSaveBtn = function(saveUrl){

    const link = document.createElement("a");
    link.id = "savelink";
    link.classList = "download-btn";
    link.href = saveUrl;
    link.download = "qrcode";
    link.innerHTML = "Download QR";
    document.getElementById("genarated").appendChild(link);
}

hideSpinner();
form.addEventListener("submit", onGenarateSubmit)