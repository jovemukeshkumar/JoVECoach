import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request, redirect }) => {
  const data = await request.formData();
  
  // Construct the Zoho URL
  const zohoUrl = 'https://forms.zohopublic.in/coachproductjo1/form/StudentsGenLP/formperma/C_1h6ALc4ULI7tQMz2EShFwpEY5Hn7M_wS2-yuF2cE0/htmlRecords/submit';

  try {
    const response = await fetch(zohoUrl, {
      method: 'POST',
      body: data,
      headers: {
        'Referer': 'https://forms.zohopublic.in/',
      },
    });

    // Zoho returns 200 OK even on some errors, but usually redirects or shows a message.
    // However, since we are doing a server-side POST, we just want to check if it went through.
    
    // Extract Name and Email for the redirection URL
    const name = data.get('SingleLine')?.toString() || '';
    const email = data.get('Email')?.toString() || '';
    
    // Redirect to the success page
    const redirectUrl = new URL('https://coach.jove.com/signup');
    redirectUrl.searchParams.set('name', name);
    redirectUrl.searchParams.set('email', email);
    
    return redirect(redirectUrl.toString(), 302);

  } catch (error) {
    console.error('Error submitting form:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
};
