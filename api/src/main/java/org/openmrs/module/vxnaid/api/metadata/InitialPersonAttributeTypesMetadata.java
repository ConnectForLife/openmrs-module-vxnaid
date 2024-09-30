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

import org.openmrs.PersonAttributeType;
import org.openmrs.api.PersonService;
import org.openmrs.api.context.Context;
import org.openmrs.module.metadatadeploy.bundle.VersionedMetadataBundle;

public class InitialPersonAttributeTypesMetadata extends VersionedMetadataBundle {
  @Override
  public int getVersion() {
    return 3;
  }

  @Override
  protected void installEveryTime() throws Exception {
    // do nothing
  }

  @Override
  protected void installNewVersion() throws Exception {
    createNewPersonAttributeType(
        "Birth Weight", "4f9b97bf-4381-11ef-92cb-0242ac1d0002", "Child weight at birth");
    createNewPersonAttributeType(
        "Mother's name", "8d871d18-c2cc-11de-8d13-0010c6dffd0f", "Child mother's name");
    createNewPersonAttributeType(
        "Child's name", "f1839002-417c-4b07-8da3-f58a36fffd25", "Child's name");
    createNewPersonAttributeType(
        "Father's name", "9104069d-2560-4d5a-b726-e4921c87e345", "Child father's name");
    createNewPersonAttributeType(
        "Child category", "d5e7bcbc-565c-11ef-9ee3-0242c0a89002", "Child's category");
    createNewPersonAttributeType(
        "Mother's first name", "267bfc66-7f3c-11ef-92f3-0242c0a89002", "Mother's first name");
    createNewPersonAttributeType(
        "Mother's last name", "3f5477c5-7c21-4e92-9104-908d9dcbfb98", "Mother's first name");
    createNewPersonAttributeType(
        "Father's first name", "5c16d27c-7f3c-11ef-92f3-0242c0a89002", "Father's first name");
    createNewPersonAttributeType(
        "Father's last name", "20474324-194f-491d-b9cf-d2dd1f86fada", "Father's first name");
  }

  private void createNewPersonAttributeType(String name, String uuid, String description) {
    PersonService personService = Context.getPersonService();

    if (personService.getPersonAttributeTypeByName(name) == null) {
      PersonAttributeType personAttributeType = new PersonAttributeType();
      personAttributeType.setName(name);
      personAttributeType.setUuid(uuid);
      personAttributeType.setDescription(description);
      personAttributeType.setFormat("java.lang.String");
      personService.savePersonAttributeType(personAttributeType);
    }
  }
}
