import { useState } from 'react';
import { generateArticle } from '@/utils/gemini';
import ContentViewer from '@/components/dashboard/content-viewer';
import ContentCreateForm from '@/components/dashboard/content-create-form';
import type { ContentCreateRequestParam } from '../shared/types/content-create-request-param';
import { useAppContext } from '@/contexts/app.context';
import { toast } from 'react-hot-toast';

export default function DashboardHome() {
  const { generatingContext, setGeneratingContext } = useAppContext();
  const [content, setContent] = useState<string | null>(null);

  const handleSubmit = async (params: ContentCreateRequestParam) => {
    setGeneratingContext(true);

    const { title, description } = params;
    try {
      const result = await generateArticle(title, description);
      setContent(result ?? null);
    } catch (error) {
      console.log(error);
      toast.error('Error occurred while generating content');
    } finally {
      setGeneratingContext(false);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-semibold">Article Title</h1>

      {content ? (
        <ContentViewer content={content} />
      ) : (
        <ContentCreateForm
          isLoading={generatingContext}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
}
