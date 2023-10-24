interface CommonInput {
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
interface CommonSelect {
  selectedOption: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}
