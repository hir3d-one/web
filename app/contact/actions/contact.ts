'use server';

type ContactProperties = {
  name: string;
  email: string;
  message: string;
};

export const contact = async ({
  name,
  email,
  message,
}: ContactProperties): Promise<{
  error?: string;
}> => {
  console.log('📧 Contact form submission:', {
    name,
    email,
    message
  });

  return {};
};
