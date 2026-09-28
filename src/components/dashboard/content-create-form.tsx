import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import { Spinner } from '../ui/spinner';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';

import type { ContentCreateRequestParam } from '@/shared/types/content-create-request-param';

type ContentCreateProps = {
  isLoading: boolean;
  onSubmit: (params: ContentCreateRequestParam) => void;
};

const formSchema = z.object({
  title: z
    .string()
    .min(5, { message: 'String must contain at least 5 character(5)' })
    .max(50),
  description: z
    .string()
    .min(50, { message: 'String must contain at least 5 character(50)' })
    .max(1000),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContentCreateForm({
  isLoading,
  onSubmit,
}: ContentCreateProps) {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      description: '',
    },
  });

  // Forma yuborilganda chaqiriladigan funksiya
  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    onSubmit(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        {/* Title maydoni */}
        <FormField
          control={form.control}
          name="title"
          disabled={isLoading}
          render={({ field }) => (
            <FormItem className="mt-6">
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="ReactJs" {...field} />
              </FormControl>
              <FormDescription>
                Please, provide a title for your content.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Description maydoni */}
        <FormField
          control={form.control}
          name="description"
          disabled={isLoading}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Write about ReactJs form validation. Provide a real life examples"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Please, provide a description for your content.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit tugmasi va yuklanish indikatori */}
        <Button
          type="submit"
          disabled={isLoading}
          className="bg-blue-400 hover:bg-blue-600 text-white rounded py-3 px-4"
        >
          {isLoading && <Spinner className="mr-2 h-4 w-4 animate-spin" />}
          Yuborish
        </Button>
      </form>
    </Form>
  );
}
