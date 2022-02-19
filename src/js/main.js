
const $qrData = document.getElementById("qr-data");
const $btnCreate = document.getElementById("btn__create");
const qrCode = new QRCode(document.getElementById("qrcode"));
const $qrCodeClass = document.getElementsByClassName("img__picture");
const $modal = document.getElementById("modal");
const $closeBtn = document.getElementById("close-btn");

$btnCreate.addEventListener("click", () => {

	let dataValue = $qrData.value;
	qrCode.makeCode(dataValue);
	dataValue !== "Tesyl" ? null : modal();
});

function modal(){
	$modal.style.visibility = "visible";
}

$closeBtn.addEventListener("click", () => {
	$modal.style.visibility = "hidden";
})


