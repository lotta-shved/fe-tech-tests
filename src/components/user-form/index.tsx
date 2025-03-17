import { User } from "@/models/user";
import { Button, Stack, TextField } from "@mui/material";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { NEW_USER } from "./constants";

export const UserForm = ({ onSubmit }: { onSubmit: SubmitHandler<User> }) => {
  const {
    control,
    handleSubmit,
    formState: {
      errors,
      // isValid,
      // isDirty,
    },
  } = useForm<User>({ defaultValues: NEW_USER, mode: 'onChange' });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2}>
        <Controller
          name='firstName'
          control={control}
          rules={{ required: 'This field is required', pattern: { value: /^[A-Za-z]+$/i, message: 'Only letters are allowed' } }}
          render={({ field }) => <TextField {...field} error={!!errors?.firstName} helperText={errors?.firstName?.message} label="Name" />}
        />
        <Controller
          name='lastName'
          control={control}
          rules={{ required: 'This field is required', }}
          render={({ field }) => <TextField {...field} error={!!errors?.lastName} helperText={errors?.lastName?.message} label="Lastname" />}
        />
        <Controller
          name='email'
          control={control}
          rules={{ required: true }}
          render={({ field }) => <TextField {...field} label="Email" />}
        />
        <Controller
          name='age'
          control={control}
          rules={{ required: false, min: 18, max: 99 }}
          render={({ field }) => <TextField {...field} label="Age" type="number"/>}
        />
        <Controller
          name='bank.currency'
          control={control}
          rules={{ required: false }}
          render={({ field }) => <TextField {...field} label="Currency" />}
        />
        <Button type="submit" variant="contained">Submit</Button>
      </Stack>
    </form>
  );
};
