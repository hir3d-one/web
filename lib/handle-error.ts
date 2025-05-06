import { toast } from 'sonner';
import { parseError } from './parse-error';

export const handleError = (error: unknown): void => {
  const message = parseError(error);
  toast.error(message);
}; 