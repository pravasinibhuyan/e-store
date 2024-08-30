import { InputAdornment, TextField, Typography } from '@mui/material';
import {
  Control,
  Controller,
  FieldErrors,
  RegisterOptions,
} from 'react-hook-form';

const FormNumField = ({
  name,
  control,
  errors,
  rules,
  handleNumberChange,
}: {
  name: any;
  control: Control<any>;
  errors: FieldErrors<any>;
  rules?: Omit<
    RegisterOptions<any>,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >;
  handleNumberChange: () => void;
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => (
        <>
          <TextField
            {...field}
            placeholder="Mobile Number"
            variant="outlined"
            fullWidth
            type="text"
            sx={{
              mt: '5px',
              padding: '0',
              '& .MuiInputBase-input': {
                padding: '0.5rem',
                '&::placeholder': {
                  fontSize: '0.9rem',
                },
              },
              '& .MuiFormHelperText-root.Mui-error': {
                fontSize: '10px',
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Typography sx={{ fontSize: '0.9rem' }}> +91</Typography>
                </InputAdornment>
              ),
            }}
            error={!!errors[name]}
            helperText={errors[name]?.message as string}
            onChange={handleNumberChange}
          />
        </>
      )}
    />
  );
};
export default FormNumField;
