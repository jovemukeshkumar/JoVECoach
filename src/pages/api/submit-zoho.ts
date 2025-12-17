import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request, redirect }) => {
  const data = await request.formData();
  
  // Construct the Zoho URL
  const zohoUrl = 'https://forms.zohopublic.in/coachproductjo1/form/StudentsGenLP/formperma/C_1h6ALc4ULI7tQMz2EShFwpEY5Hn7M_wS2-yuF2cE0/htmlRecords/submit';

  // Convert FormData to URLSearchParams for x-www-form-urlencoded submission
  // This is often more reliable for proxying than multipart/form-data
  const params = new URLSearchParams();
  for (const [key, value] of data.entries()) {
    params.append(key, value.toString());
  }

  console.log('Submitting to Zoho:', Object.fromEntries(params.entries()));

  try {
    const response = await fetch(zohoUrl, {
      method: 'POST',
      body: params,
      headers: {
        'Referer': 'https://forms.zohopublic.in/',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    const responseText = await response.text();
    console.log('Zoho Response Status:', response.status);
    console.log('Zoho Response Body:', responseText);

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
