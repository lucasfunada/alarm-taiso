import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type SelectHoursProps = {
  defaultValue: string
  setNumber: (number: string) => void
  arrayLength: number
}

export default function SelectNumber({ defaultValue, setNumber, arrayLength }: SelectHoursProps) {
  return (
    <Select
      defaultValue={defaultValue}
      onValueChange={setNumber}
    >
      <SelectTrigger className="caret-transparent">
        <SelectValue />
      </SelectTrigger>
      <SelectContent className="caret-transparent">
        {[...Array(arrayLength).keys()].map((hour) => (
          <SelectItem key={hour} value={hour.toString()}>
            {hour.toString().padStart(2, '0')}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}