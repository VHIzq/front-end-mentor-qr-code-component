
const $qrData = document.getElementById("qr-data");
const $btnClear = document.getElementById("btn__clear");

const qrCode = new QRCode(document.getElementById("qrcode"));
const $qrCodeClass = document.getElementsByClassName("img__picture");

$qrData.addEventListener("click", (e) => {

	let dataValue = e.target.value;
	qrCode.makeCode(dataValue);
	
});


