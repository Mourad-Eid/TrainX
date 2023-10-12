import { TextInputProps } from "react-native";
import { Control, FieldValues, Path } from "react-hook-form";

export type InputProps<TFieldValues extends FieldValues = FieldValues> = {
  control: Control<TFieldValues>;
  name: Path<TFieldValues>;
} & TextInputProps;
