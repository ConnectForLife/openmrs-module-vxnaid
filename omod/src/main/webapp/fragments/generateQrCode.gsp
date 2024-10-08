<style>
  #generate-qr-code-dialog {
      position: fixed;
      top: 40%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 1000;
  }
</style>

<%
    ui.includeJavascript("vxnaid", "qrCodeFunctions.js")
%>

<div id="generate-qr-code-dialog" class="dialog" style="display: none">
    <div class="dialog-header">
        <h3>
            ${ ui.message("cfl.vxnaid.generateQrCode.modal.title") }
        </h3>
    </div>
    <div class="dialog-content">
        <p class="dialog-instructions">${ ui.message("cfl.vxnaid.generateQrCode.modal.question") }</p>
        <button class="right" onClick="generatePatientQRCode('${patientUuid}', '${omrsIdentifier}')">
            ${ui.message("coreapps.confirm")}
            <i class="icon-spinner icon-spin icon-2x" style="display: none; margin-left: 10px;"></i>
        </button>

        <button class="cancel" onClick="hideGenerateQRDialog()">
            ${ui.message("coreapps.cancel")}
        </button>
    </div>
</div>
