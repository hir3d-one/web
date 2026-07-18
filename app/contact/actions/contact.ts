'use server';

/**
 * Contact submissions are disabled for this deprecated portfolio showcase.
 * Kept as a server action stub if anything still posts to it.
 */
export const contact = async (): Promise<{
  error?: string;
}> => {
  return {
    error:
      'Contact is closed for this portfolio showcase. Please use https://github.com/hir3d-one instead.',
  };
};
