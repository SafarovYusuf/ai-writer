import { useState } from 'react';
import { generateArticle } from '@/utils/gemini';
import ContentViewer from '@/components/dashboard/content-viewer';
import ContentCreateForm from '@/components/dashboard/content-create-form';
import type { ContentCreateRequestParam } from '../shared/types/content-create-request-param';
import { useAppContext } from '@/contexts/app.context';

export default function DashboardHome() {
  const { generatingContext, setGeneratingContext } = useAppContext();
  const [content, setContent] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (params: ContentCreateRequestParam) => {
    setGeneratingContext(true);
    setError(null);
    const { title, description } = params;
    try {
      const result = await generateArticle(title, description);
      setContent(result ?? null);
    } catch {
      setError('Failed to generate article. Please try again.');
    } finally {
      setGeneratingContext(false);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-semibold">Article Title</h1>
      {error && <p className="text-red-500 mt-2">{error}</p>}
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
