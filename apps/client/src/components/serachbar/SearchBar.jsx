import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Loader2 } from 'lucide-react'
import * as z from 'zod'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import ImageData from '../cloudinary/ImageDataFunction'
import { toast } from '@/components/ui/use-toast'

const FormSchema = z.object({
  prompt: z
    .string()
    .min(4, {
      message: 'Prompt must be at least 4 characters.',
    })
    .regex(/(duck|pato)/, {
      message: 'Prompt must contain a duck.',
    }),
})

const SearchBar = ({ onClick, isLoading }) => {
  const form = useForm({
    resolver: zodResolver(FormSchema),
  })

  function onSubmit(data) {
    onClick(data.prompt)
    form.reset({
      prompt: '',
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="prompt"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="A duck with a hat"
                  className="w-full"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isLoading}>
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {!isLoading && 'Search'}
        </Button>
      </form>
    </Form>
  )
}

export default SearchBar
