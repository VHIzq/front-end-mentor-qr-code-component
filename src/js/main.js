
const $qrData = document.getElementById("qr-data");
const $btnClear = document.getElementById("btn__clear");
const $btnCreate = document.getElementById("btn__create");
const qrCode = new QRCode(document.getElementById("qrcode"));
const $qrCodeClass = document.getElementsByClassName("img__picture");

$btnCreate.addEventListener("click", () => {

	let dataValue = $qrData.value;
	qrCode.makeCode(dataValue);
	
});


