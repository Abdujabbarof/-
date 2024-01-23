"use client"
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export const formSchema = z.object({
  name: z.string().min(2, { 
      message: "Username must be at least 2 characters." 
  }),
  username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
  }),
  email: z.string().email(),
  password: z.string().min(8, {
      message: "Username must be at least 8 characters."
  })
})
const Page = () => {
  const isCreatingUser = false
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      username: "",
      email: "",
      password: ""
    },
})

  return (
    <Form {...form}>
        <div className="max-w-[380px] w-full flex-center flex-col">
          <h2 className='text-2xl font-semibold sm:text-4xl'>Social<span className='font-bold text-primary'>Gram</span></h2>

          <h2 className="text-light-3 small-medium md:text-xl mt-5">Wecome to SocialGram</h2>
          <p className="text-light-3 small-medium md:base-regular mt-2">Sign up to chat with your friends.</p>
      
          <form className="flex flex-col gap-5 w-full mt-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input type="text" className="shad-input" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input type="text" className="shad-input" {...field} />
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
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="text" className="shad-input" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" className="shad-input" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="mt-2">
              {
                isCreatingUser ? (
                  <div className="flex-center gap-2"><Loader /> Loading...</div>
                ) : "Sign up"
              }
            </Button>
          </form>
          <p className="text-small-regular text-light-2 text-center mt-3">Already hava an account? <Link href={'/sign-in'} className="text-primary text-small-semibold ml-1">Sign in</Link></p>
        </div>
      </Form>  
  )
}

export default Page