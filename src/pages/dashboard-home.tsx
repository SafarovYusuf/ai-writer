import { useState } from 'react';
import ContentViewer from '@/components/dashboard/content-viewer';
import ContentCreateForm from '@/components/dashboard/content-create-form';
import { useContentContext } from '@/contexts/content.context';
import type { TContentCreateRequestParam } from '@/shared/types/content-create-request-param';

export default function DashboardHome() {
  const { generateContent, generatingContext } = useContentContext();
  const [content, setContent] = useState<string | null>(null);

  const handleSubmit = async (params: TContentCreateRequestParam) => {
    const result = await generateContent(params);
    setContent(result);
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
