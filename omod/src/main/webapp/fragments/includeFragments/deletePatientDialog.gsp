<%
    ui.includeJavascript("vxnaid", "deletePatient.js")
%>

<div id="vmp-delete-patient-creation-dialog" class="dialog" style="display: none">
    <div class="dialog-header">
        <i class="icon-remove"></i>
        <h3>
            ${ ui.message("coreapps.deletePatient.title", ui.encodeHtmlContent(ui.format(patient.patient))) }
        </h3>
    </div>
    <div class="dialog-content">
        <p class="dialog-instructions">${ ui.message("coreapps.task.deletePatient.message", ui.encodeHtmlContent(ui.format(patient.patient))) }</p>

        <label for="vmp-delete-reason">${ ui.message("cfl.vxnaid.deletePatient.reason.label") }: </label>
        <input type="text" id="vmp-delete-reason">

        <br>
        <h6 id="vmp-delete-reason-empty">${ ui.message("coreapps.task.deletePatient.deleteMessageEmpty") }</h6>
        <br>
        <button class="confirm right">${ ui.message("coreapps.confirm") }<i class="icon-spinner icon-spin icon-2x" style="display: none; margin-left: 10px;"></i></button>
        <button class="cancel">${ ui.message("coreapps.cancel") }</button>
    </div>
</div>