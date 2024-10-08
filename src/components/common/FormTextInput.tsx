import { InputAdornment, TextField, Typography } from '@mui/material';
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
  placeholder?: string;
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
              sx={{
                mt: '5px',
                padding: '0',
                '& .MuiInputBase-input': {
                  padding: '0.7rem',

                  '&::placeholder': {
                    fontSize: '0.9rem',
                  },
                },
              }}
              type={type}
              error={!!errors[name]}
              helperText={errors[name]?.message as string}
              InputProps={{
                startAdornment: (
                  <>
                    {type === 'number' && (
                      <InputAdornment position="start">
                        <Typography
                          sx={{
                            fontSize: '0.9rem',
                            borderRight: '1px solid',
                            borderRightColor: 'grey',
                            padding: '0 0.5rem',
                          }}
                        >
                          +91
                        </Typography>
                      </InputAdornment>
                    )}
                  </>
                ),
              }}
            />
          </>
        );
      }}
    />
  );
};
export default FormTextInput;
