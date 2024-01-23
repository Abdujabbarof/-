"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"
import { Textarea } from "./ui/textarea"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import FileUploader from "./FileUploader"

const formSchema = z.object({
    caption: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    file: z.custom<File[]>(),
    location: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    tags: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
})

const PostForm = ({ post, action }: any) => {
    const isLoadingCreate = false
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          caption: "",
          file: [],
          location: "",
          tags: ""
        },
    })

    const onSubmit = (e: any) => {
      e.pereventDefault()
    }
    
  return (
    <Form {...form}>
      <form className="flex flex-col gap-9 w-full max-w-5xl" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="caption"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Caption</FormLabel>
              <FormControl>
                <Textarea className="h-36 focus-visible:ring-1 focus-visible:ring-offset-1 ring-offset-light-3 custom-scrollbar" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="file"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Add photos</FormLabel>
              <FormControl>
                <FileUploader fieldChange={field.onChange} mediaUrl={post?.imageUrl} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Add location</FormLabel>
              <FormControl>
                <Input type="text" className="h-12 rounded-xl focus-visible:ring-1 focus-visible:ring-offset-1 ring-offset-light-3" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="tags"
          render={({ field }) => (
            <FormItem>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              <FormLabel>Add Tags (separated by comma ",")</FormLabel>
              <FormControl>
                <Input type="text" className="h-12 rounded-xl focus-visible:ring-1 focus-visible:ring-offset-1 ring-offset-light-3" placeholder="Art,Expression,Learn" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex gap-4 items-center justify-end">
            <Button variant={"outline"}>Cencel</Button>
            <Button type="submit" disabled={isLoadingCreate}>{isLoadingCreate && 'Loading...'} Submit</Button>
        </div>
      </form>
    </Form>
  )
}

export default PostForm