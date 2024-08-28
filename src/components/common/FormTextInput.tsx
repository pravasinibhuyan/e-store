import { TextField } from '@mui/material';
import {
  Control,
  Controller,
  FieldErrors,
  RegisterOptions,
} from 'react-hook-form';

const FormTextInput = ({
  name,
  control,
  errors,
  rules,
  type = 'text',
  multiline = false,
  rows,
  placeholder,
}: {
  name: any;
  control: Control<any>;
  errors: FieldErrors<any>;
  rules?: Omit<
    RegisterOptions<any>,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >;
  type?: string;
  multiline?: boolean;
  rows?: number;
  placeholder: string;
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => {
        return (
          <>
            <TextField
              placeholder={placeholder}
              {...field}
              multiline={multiline}
              rows={rows}
              maxRows={4}
              margin="normal"
              fullWidth
              sx={{ mt: '5px' }}
              type={type}
              error={!!errors[name]}
              helperText={errors[name]?.message as string}
            />
          </>
        );
      }}
    />
  );
};
export default FormTextInput;
