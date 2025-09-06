import SelectNumber from "@/components/form/SelectNumber"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import SelectSound from "@/components/form/SelectSound"
import type { alarmInfo } from "@/types/types"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Drawer, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer"
import { Slider } from "@/components/ui/slider"

type AlarmSetterProps = {
  setAlarmInfo: (info: alarmInfo) => void
}

const formSchema = z.object({
  hour: z.string().min(1).max(2),
  minute: z.string().min(1).max(2),
  sound: z.string().min(1).max(100),
  volume: z.number().min(0).max(1),
});

export default function AlarmSetter({ setAlarmInfo }: AlarmSetterProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      hour: "7",
      minute: "0",
      sound: "src/assets/alarms/digital-alarm.mp3",
      volume: 1,
    }
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setAlarmInfo({
      time: `${values.hour.padStart(2, '0')}:${values.minute.padStart(2, '0')}`,
      sound: values.sound,
      volume: values.volume,
    });
  }

  return (
    <Drawer>
      <DrawerTrigger>
        <Button className="mt-8 p-6 text-xl">Set Alarm</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Set Alarm Clock</DrawerTitle>
          </DrawerHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4 mt-6">
              <div className="flex gap-4 justify-between">
                <FormField
                  control={form.control}
                  name="hour"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Hour</FormLabel>
                      <FormControl>
                        <SelectNumber defaultValue={field.value} setNumber={field.onChange} arrayLength={24} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="minute"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Minute</FormLabel>
                      <FormControl>
                        <SelectNumber defaultValue={field.value} setNumber={field.onChange} arrayLength={60} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="sound"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Sound</FormLabel>
                      <FormControl>
                          <SelectSound defaultValue={field.value} setSound={field.onChange} volume={form.watch("volume")} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="volume"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Volume</FormLabel>
                    <FormControl>
                      <Slider
                        value={[field.value]}
                        onValueChange={val => field.onChange(val[0])}
                        max={1}
                        step={0.01}
                        className="w-full"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <DrawerFooter className="mt-4">
                <Button type="submit">Set Alarm</Button>
              </DrawerFooter>
            </form>
          </Form>
        </div>
      </DrawerContent>
    </Drawer>
  )
}