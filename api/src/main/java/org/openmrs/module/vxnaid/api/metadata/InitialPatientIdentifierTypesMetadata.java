/*
 *  This Source Code Form is subject to the terms of the Mozilla Public License,
 *  v. 2.0. If a copy of the MPL was not distributed with this file, You can
 *  obtain one at http://mozilla.org/MPL/2.0/. OpenMRS is also distributed under
 *  the terms of the Healthcare Disclaimer located at http://openmrs.org/license.
 *  <p>
 *  Copyright (C) OpenMRS Inc. OpenMRS is a registered trademark and the OpenMRS
 *  graphic logo is a trademark of OpenMRS Inc.
 */

package org.openmrs.module.vxnaid.api.metadata;

import org.openmrs.PatientIdentifierType;import org.openmrs.api.PatientService;import org.openmrs.api.context.Context;import org.openmrs.module.metadatadeploy.bundle.VersionedMetadataBundle;

public class InitialPatientIdentifierTypesMetadata extends VersionedMetadataBundle {

  @Override
  public int getVersion() {
    return 2;
  }

  @Override
  protected void installEveryTime() throws Exception {
    //dp nothing
  }

  @Override
  protected void installNewVersion() throws Exception {
    createNewPatientIdentifier("National ID", "62882f78-4382-11ef-92cb-0242ac1d0002");
    createNewPatientIdentifier("Child Number", "8529d3ec-d844-4fad-a9c2-8f9b02b1ed40");
  }

  private void createNewPatientIdentifier(String name, String uuid) {
    PatientService patientService = Context.getPatientService();

    if (patientService.getPatientIdentifierTypeByName(name) == null) {
      PatientIdentifierType patientIdentifierType = new PatientIdentifierType();
      patientIdentifierType.setName(name);
      patientIdentifierType.setUuid(uuid);
      patientService.savePatientIdentifierType(patientIdentifierType);
    }
  }
}
