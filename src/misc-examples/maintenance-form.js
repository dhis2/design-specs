import React from "react";
import "./maintenance-form.css";

import {
  InputField,
  TextAreaField,
  SingleSelectField,
  Button
} from "@dhis2/ui-core";

const Header = props => <div class="headerbar"></div>;

const PageWrapper = props => <div id="page-wrapper">{props.children}</div>;

const SidebarCollapsed = props => <div class="sidebar sidebar-collapse"></div>;

const FormWrapper = props => <div id="form-wrapper">{props.children}</div>;

const FormHeader = props => (
  <div class="form-header">
    <h1 class="form-title">{props.title}</h1>
    <p class="form-description">{props.description}</p>
  </div>
);

const FormSectionWrap = props => (
  <div class="form-section-wrap">
    <div class="form-section-meta">
      <p class="form-section-title">{props.title}</p>
      <p class="form-section-description">{props.description}</p>
    </div>
    {props.children}
  </div>
);

const FormSection = props => (
  <div
    className={`
      form-section
      ${"full-width" in props && " full-width"}
      `}
  >
    {props.children}
  </div>
);

const FormSectionSplit = props => (
  <div class="form-section-split">{props.children}</div>
);

const FormHelperBox = props => (
  <div class="form-helper-box">
    <div class="fhb-icon">
      <svg
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m12 0c-6.627417 0-12 5.372583-12 12s5.372583 12 12 12 12-5.372583 12-12c-.0071648-6.62444695-5.375553-11.99283515-12-12zm0 19c-.8284271 0-1.5-.6715729-1.5-1.5s.6715729-1.5 1.5-1.5 1.5.6715729 1.5 1.5-.6715729 1.5-1.5 1.5zm1.6-6.08c-.3645881.1591192-.6001929.5192018-.6.917 0 .5522847-.4477153 1-1 1s-1-.4477153-1-1c-.0001808-1.1930315.7065685-2.2727874 1.8-2.75.9156182-.3996087 1.3959287-1.4135785 1.1251126-2.37519303-.2708162-.96161452-1.209688-1.57590491-2.1992783-1.43895634s-1.72634888.98312803-1.7258343 1.98214937c0 .55228475-.44771525 1-1 1s-1-.44771525-1-1c0-1.99778963 1.47396908-3.6892788 3.45299-3.96248154 1.9790209-.27320274 3.8561734.95566176 4.3974164 2.87873727.541243 1.92307547-.419402 3.95062837-2.2504064 4.74974427z"
          fill="#4a5768"
        />
      </svg>
    </div>
    <div class="fhb-content">
      <p class="form-helper-box-title">{props.title}</p>
      {props.children}
    </div>
  </div>
);

const FormFooter = props => (
  <div id="form-footer">
    <Button primary>{props.saveAction}</Button>
    <Button secondary>{props.cancelAction}</Button>
  </div>
);

export default function MaintenanceFormPage() {
  return (
    <>
      <Header />
      <PageWrapper>
        <SidebarCollapsed />
        <FormWrapper>
          <FormHeader
            title="Create a Data Element"
            description="Data elements are the base of DHIS2. Data elements define what is actually recorded in the system, for example number of immunisations or number of cases of malaria."
          />
          <FormSectionWrap
            title="Basic Information"
            description="Information to help others identify this data element."
          >
            <FormSection>
              <InputField
                label="Name"
                inputWidth="480px"
                required
                placeholder="e.g. Malaria cases"
              />
              <InputField
                label="Short name"
                required
                inputWidth="240px"
                placeholder="e.g. m-cases"
              />
              <InputField
                label="Code"
                inputWidth="240px"
                placeholder="e.g. m003974"
              />
              <InputField label="Form name" inputWidth="480px" />
              <InputField
                label="URL"
                inputWidth="480px"
                placeholder="e.g. https://dhis2.org"
              />
              <TextAreaField
                label="Description"
                inputWidth="480px"
                placeholder="What is the purpose of this data element?"
                rows="3"
              />
            </FormSection>
          </FormSectionWrap>
          <FormSectionWrap
            title="Data Setup"
            description="What type of this data element be used to capture?"
          >
            <FormSection full-width>
              <FormSectionSplit>
                <SingleSelectField
                  label="Domain type"
                  required
                  inputWidth="320px"
                  placeholder="Select a domain type"
                />
                <SingleSelectField
                  label="Value type"
                  required
                  inputWidth="320px"
                  placeholder="Select a value type"
                />
                <SingleSelectField
                  label="Aggregation type"
                  required
                  inputWidth="320px"
                  placeholder="Select an aggregation type"
                />
                <InputField
                  label="Field mask"
                  inputWidth="480px"
                  placeholder="e.g. /d/d/d-/d/d/d"
                  helpText="An expected format for this data, defined using shortcodes."
                />
              </FormSectionSplit>
              <FormSectionSplit>
                <FormHelperBox title="Domain, Value and Aggregation Types">
                  <p>
                    This is an example of a side-section that can be included in
                    part of a form to give contextual help to a user. It is
                    especially useful for giving help to an often misunderstood
                    area.
                  </p>
                  <p>
                    <strong>Domain</strong> refers to whether this data is for
                    capture aggregated, anonymized data, or if the data element
                    will be used to track data for a specific entity, e.g. a
                    person or patient.
                  </p>
                  <p>
                    <strong>Value</strong> type is the type of data to collect.
                    Common types are number (33 cases), Yes/No (Dosage given:
                    Yes) or Organisation Unit (A location, or unit).{" "}
                    <a href="#">Read more about all value types here.</a>
                  </p>
                  <p>
                    <strong>Aggregation</strong> type is how the data will be
                    aggregated in analytics. Data can be summed (added),
                    averaged or other advanced analytic methods.
                  </p>
                </FormHelperBox>
              </FormSectionSplit>
            </FormSection>
          </FormSectionWrap>
          <FormFooter
            saveAction="Save Data Element"
            cancelAction="Cancel without saving"
          />
        </FormWrapper>
      </PageWrapper>
    </>
  );
}
