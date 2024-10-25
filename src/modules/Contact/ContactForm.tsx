import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import {z} from 'zod'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

const formSchema = z.object({
  fullname: z.string().min(1, {
    message: "Required",
  }),
  email: z.string().email(),
  subject: z.string().min(1, {
    message: "Required",
  }),
  message: z.string().min(1, {
    message: "Required",
  }),
})

const ContactForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        fullname: "",
        email: "",
        message: "",
      },
    })

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log(values)
    }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-3 p-10 w-full max-w-[700px] bg-white/60 rounded-md shadow-lg">
        <FormField
          control={form.control}
          name="fullname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Fullname</FormLabel>
              <FormControl>
                <Input placeholder="John Mark" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Email</FormLabel>
              <FormControl>
                <Input placeholder="e.g. john@eyouremail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Enter message..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        

        <Button type="submit" className="mt-10 w-fit">Submit</Button>
      </form>
    </Form>
  )
}

export default ContactForm
