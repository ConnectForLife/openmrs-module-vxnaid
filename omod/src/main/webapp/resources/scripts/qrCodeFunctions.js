function generateNewQRCodes() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  const numQRCodes = 42;
  const qrCodeSize = 30;
  const columnWidth = 60;
  const qrAlignment = 7;
  const margin = 5;

  let x = margin;
  let y = margin;

  let qrCanvasContainer = document.createElement('div');
  let qrcode = new QRCode(qrCanvasContainer, {
    text: 'empty',
    width: qrCodeSize,
    height: qrCodeSize
  });

  for (let row = 0; row < numQRCodes; ++row) {
    const uuid = uuidv4();
    qrcode.clear();
    qrcode.makeCode(uuid);

    doc.addImage(qrCanvasContainer.getElementsByTagName('canvas')[0], 'PNG', x + qrAlignment, y, qrCodeSize, qrCodeSize);
    doc.text(uuid, x, y + margin + qrCodeSize, { horizontalScale: 0.45});

    x += columnWidth;

    if (x + qrCodeSize > doc.internal.pageSize.width) {
      x = margin;
      y += qrCodeSize + margin * 2;

      if (row + 1 < numQRCodes && y + qrCodeSize > doc.internal.pageSize.height) {
        doc.addPage();
        x = margin;
        y = margin;
      }
    }
  }

  doc.save('QR-' + (new Date()).toISOString() + '.pdf');
}

function generatePatientQRCode(patientId, uuid) {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  const qrCodeSize = 30;
  const qrAlignment = 7;
  const margin = 5;

  let x = margin;
  let y = margin;

  let qrCanvasContainer = document.createElement('div');
  new QRCode(qrCanvasContainer, {
    text: uuid,
    width: qrCodeSize,
    height: qrCodeSize
  });

  doc.addImage(qrCanvasContainer.getElementsByTagName('canvas')[0], 'PNG', x + qrAlignment, y, qrCodeSize, qrCodeSize);
  doc.text(uuid, x, y + margin + qrCodeSize, { horizontalScale: 0.45});

  doc.save('QR-' + patientId + '.pdf');
}
