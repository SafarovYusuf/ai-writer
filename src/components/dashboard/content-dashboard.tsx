import { Label } from '@/components/ui/label';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import { useState, FormEvent } from 'react';
import { Spinner } from '../ui/spinner';

export default function ContentDashboard() {
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    title: '',
    description: '',
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    console.log(form);
  };

  const handleChange = (
    event: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.currentTarget;
    setForm({ ...form, [name]: value });
  };

  return (
    <div>
      <h1 className="text-3xl font-semibold">Article Title</h1>
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
          Generating
        </Button>
      </form>
    </div>
  );
}
