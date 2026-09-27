import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { CopyIcon, Share, Sparkles } from 'lucide-react';
import Markdown from 'react-markdown';
import { toast } from 'react-hot-toast';

type ContentViewerProps = {
  content: string;
};

export default function ContentViewer({ content }: ContentViewerProps) {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content);
      toast.success('Successfully copied to clipboard!');
    } catch (e) {
      console.error('[Error] Failed to copy to clipboard', e);
      toast.error('Error occured while copying to clipboard');
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({ text: content });
    } else {
      handleCopy();
    }
  };

  return (
    <Card className="mt-4">
      <CardContent className="p-8">
        <div className="markdown-body">
          <Markdown>{content}</Markdown>
        </div>
      </CardContent>
      <CardFooter className="justify-end gap-2">
        <Button variant="outline" onClick={handleShare}>
          <Share className="h-4 w-4" />
        </Button>
        <Button variant="outline" onClick={handleCopy}>
          <CopyIcon className="h-4 w-4" />
        </Button>
        <Button variant="outline">
          <Sparkles className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}
