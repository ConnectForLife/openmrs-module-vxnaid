/*
 *  This Source Code Form is subject to the terms of the Mozilla Public License,
 *  v. 2.0. If a copy of the MPL was not distributed with this file, You can
 *  obtain one at http://mozilla.org/MPL/2.0/. OpenMRS is also distributed under
 *  the terms of the Healthcare Disclaimer located at http://openmrs.org/license.
 *  <p>
 *  Copyright (C) OpenMRS Inc. OpenMRS is a registered trademark and the OpenMRS
 *  graphic logo is a trademark of OpenMRS Inc.
 */

package org.openmrs.module.vxnaid.fragment.controller;

import org.openmrs.Patient;
import org.openmrs.ui.framework.fragment.FragmentModel;
import org.springframework.web.bind.annotation.RequestParam;

public class GenerateQrCodeFragmentController {

  private static final String OPENMRS_ID_PATIENT_IDENTIFIER_TYPE_NAME = "OpenMRS ID";

  public void controller(FragmentModel model, @RequestParam("patientId") Patient patient) {
    model.addAttribute("patientUuid", patient.getUuid());
    model.addAttribute(
        "omrsIdentifier",
        patient.getPatientIdentifier(OPENMRS_ID_PATIENT_IDENTIFIER_TYPE_NAME).getIdentifier());
  }
}
