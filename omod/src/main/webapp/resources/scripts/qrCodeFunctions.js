function generateNewQRCodes() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  const numQRCodes = 42;
  const qrCodeSize = 45;
  const columnWidth = 60;
  const qrAlignment = 7;
  const margin = 10;

  let x = margin;
  let y = margin;

  let qrCanvasContainer = document.createElement('div');
  let qrcode = new QRCode(qrCanvasContainer, {
    text: 'empty',
    width: qrCodeSize,
    height: qrCodeSize
  });

  for (let row = 0; row < numQRCodes; ++row) {
    const uuid = generateChildId();
    qrcode.clear();
    qrcode.makeCode(uuid);

    doc.addImage(qrCanvasContainer.getElementsByTagName('canvas')[0], 'PNG', x + qrAlignment, y, qrCodeSize, qrCodeSize);

    const textWidth = doc.getTextWidth(uuid);
    const centeredX = x + qrAlignment + (qrCodeSize - textWidth) / 2;
    doc.text(uuid, centeredX + 10, y + margin + qrCodeSize, { horizontalScale: 0.45});

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
  const qrCodeSize = 45;
  const qrAlignment = 7;
  const margin = 10;

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

  hideGenerateQRDialog();
}

function generateChildId() {
  const identifierLength = 8;
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < identifierLength; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    result += chars[randomIndex];
  }
  return result;
}

function showGenerateQRDialog() {
  jq("#generate-qr-code-dialog").show();
}

function hideGenerateQRDialog() {
  jq("#generate-qr-code-dialog").hide();
}

