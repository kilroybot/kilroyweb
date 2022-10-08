import { FormProps, withTheme } from "@rjsf/core";
import fields from "./fields";
import widgets from "./widgets";
import templates from "./templates";
import { ComponentType } from "react";

const theme = {
  fields: fields,
  widgets: widgets,
  templates: templates,
};

const Form: ComponentType<FormProps> = withTheme(theme);

export default Form;
