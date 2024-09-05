import { TextField } from '@mui/material';
import {
  Control,
  Controller,
  FieldErrors,
  RegisterOptions,
} from 'react-hook-form';
import { countryList } from '../Data';

const FormSelectInput = ({
  name,
  control,
  errors,
  rules,
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
              select
              {...field}
              maxRows={4}
              margin="normal"
              fullWidth
              sx={{
                mt: '5px',
                '& .MuiInputBase-input': {
                  padding: '0.7rem',
                },
              }}
              error={!!errors[name]}
              helperText={errors[name]?.message as string}
              SelectProps={{
                native: true,
              }}
            >
              {countryList.map((selectItem: any) => (
                <option value={selectItem.value} key={selectItem.value}>
                  {selectItem.value}
                </option>
              ))}
            </TextField>
          </>
        );
      }}
    />
  );
};
export default FormSelectInput;
