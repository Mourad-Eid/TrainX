import { TextInputProps } from "react-native";
import { Control, FieldValues, Path, UseFormGetValues } from "react-hook-form";

export type InputProps<TFieldValues extends FieldValues = FieldValues> = {
  control: Control<TFieldValues>;
  name: Path<TFieldValues>;
  confirmName?: Path<TFieldValues>;
  getValues?: UseFormGetValues<TFieldValues>;
} & TextInputProps;
