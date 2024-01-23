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
email: z.string().email(),
password: z.string().min(8, {
    message: "Username must be at least 8 characters."
})
})

const Page = () => {
const isUserLoading = false
const form = useForm<z.infer<typeof formSchema>>({
  resolver: zodResolver(formSchema),
  defaultValues: {
    email: "",
    password: ""
  },
})

return (
  <Form {...form}>
      <div className="max-w-[380px] w-full flex justify-center items-center flex-col">
        <h2 className='text-2xl font-semibold sm:text-4xl'>Social<span className='font-bold text-primary'>Gram</span></h2>

        <h2 className="text-light-3 small-medium md:text-xl mt-5">Log in to your account</h2>
        <p className="text-light-3 small-medium md:base-regular mt-2">Welcome back, please enter your details</p>
      
        <form className="flex flex-col gap-5 w-full mt-4">
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
              isUserLoading ? (
                <div className="flex-center gap-2"><Loader /> Loading...</div>
              ) : "Sign in"
            }
          </Button>
        </form>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <p className="text-small-regular text-light-2 text-center mt-3">Don't hava an account? <Link href={'/sign-up'} className="text-primary text-small-semibold ml-1">Sign up</Link></p>
      </div>
    </Form>  
)
}

export default Page