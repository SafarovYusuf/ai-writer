import { Label } from '../ui/label.tsx';
import { Input } from '../ui/input.tsx';
import { Textarea } from '../ui/textarea.tsx';
import { Button } from '../ui/button.tsx';
import { useState, type FormEvent } from 'react';
import { Spinner } from '../ui/spinner.tsx';
import type { ContentCreateRequestParam } from '@/shared/types/content-create-request-param.ts';

type ContentCreateProps = {
  isLoading: boolean;
  onSubmit: (params: ContentCreateRequestParam) => void;
};

export default function ContentCreateForm({
  isLoading,
  onSubmit,
}: ContentCreateProps) {
  const [form, setForm] = useState<ContentCreateRequestParam>({
    title: '',
    description: '',
  });

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    onSubmit(form);
  };

  const handleChange = (
    event: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.currentTarget;
    setForm({ ...form, [name]: value });
  };

  return (
    <form className="mt-4" onSubmit={handleSubmit}>
      <div className="grid w-full gap-1.5 mb-4">
        <Label htmlFor="title">Title</Label>
        <Input
          type="text"
          id="title"
          placeholder="Title..."
          name="title"
          onChange={handleChange}
          disabled={isLoading}
        />
      </div>

      <div className="grid w-full gap-1.5 mb-4">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          placeholder="Description..."
          name="description"
          onChange={handleChange}
          disabled={isLoading}
        />
      </div>

      <Button
        type="submit"
        className="bg-black text-white rounded-xl px-5 py-6"
        disabled={isLoading}
      >
        {isLoading && <Spinner data-icon="inline-start" />}
        {isLoading ? 'Generating...' : 'Generate'}
      </Button>
    </form>
  );
}
