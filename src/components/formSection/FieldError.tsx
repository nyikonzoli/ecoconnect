type FieldErrorInputProps = {
  error: string | undefined;
  touched: boolean | undefined;
};

export default function FieldError({ error, touched }: FieldErrorInputProps) {
  return error && touched ? (
    <p className="text-[#cc0000] text-sm">{error}</p>
  ) : null;
}
