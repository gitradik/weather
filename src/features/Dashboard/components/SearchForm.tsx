import { Controller, useForm } from "react-hook-form";
import { InputBase, Paper, Divider, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

type SearchFormProps = {
  defaultValue: string;
  onSubmit: (value: string) => void;
  placeholder?: string;
};
function SearchForm({
  defaultValue,
  onSubmit,
  placeholder = "Search",
}: SearchFormProps) {
  const { control, handleSubmit, formState, getValues } = useForm<{
    city: string;
  }>({
    mode: "all",
    reValidateMode: "onSubmit",
  });

  function submit() {
    onSubmit(getValues().city);
  }

  return (
    <Paper
      component="form"
      noValidate
      onSubmit={handleSubmit(submit)}
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
    >
      <Controller
        name="city"
        control={control}
        render={({ field: { onChange } }) => (
          <InputBase
            defaultValue={defaultValue}
            onChange={onChange}
            sx={{ ml: 1, flex: 1 }}
            placeholder={placeholder}
          />
        )}
      />
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton
        type="submit"
        color="primary"
        sx={{ p: 2 }}
        disabled={!formState.isDirty}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

export default SearchForm;
