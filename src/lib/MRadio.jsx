import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useField, useFormikContext } from "formik";
import { FormHelperText } from "@mui/material";

export default function MRadio({
  name,
  legend,
  value,
  options,
  label,
  ...otherProps
}) {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);
  // console.log(value);
  const handleChange = (evt) => {
    //    console.log(value, typeof value, checked, typeof checked);

    if (evt.target.value === "false") {
      setFieldValue(name, false);
    } else {
      setFieldValue(name, true);
    }
  };
  const configRadio = {
    ...field,
    ...otherProps,
    type: "radio",
    required: true,

    margin: "normal",
    onChange: handleChange,
  };
  if (meta && meta.touched && meta.error) {
    configRadio.error = true;
    configRadio.helperText = meta.error;
  }

  return (
    <FormControl component="fieldset" {...configRadio} fullWidth={true}>
      <FormLabel component="legend">{legend}</FormLabel>
      <RadioGroup
        row
        aria-label="gender"
        name="radio-buttons-group"
        value={value}
      >
        {options.map((item, index) => (
          <FormControlLabel
            {...configRadio}
            key={item?.name}
            value={item?.value}
            //  checked={value}
            control={<Radio />}
            label={item?.name}
          />
        ))}
      </RadioGroup>
      <FormHelperText>{configRadio?.helperText}</FormHelperText>
    </FormControl>
  );
}
