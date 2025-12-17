import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request, redirect }) => {
  const data = await request.formData();
  
  // URLs
  const formUrl = 'https://forms.zohopublic.in/coachproductjo1/form/StudentsGenLP/formperma/C_1h6ALc4ULI7tQMz2EShFwpEY5Hn7M_wS2-yuF2cE0';
  const submitUrl = 'https://forms.zohopublic.in/coachproductjo1/form/StudentsGenLP/formperma/C_1h6ALc4ULI7tQMz2EShFwpEY5Hn7M_wS2-yuF2cE0/htmlRecords/submit';

  try {
    // Step 1: GET the form page to get cookies
    const initialResponse = await fetch(formUrl, {
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      },
    });

    // Extract cookies
    const rawCookies = initialResponse.headers.get('set-cookie');
    const cookies = rawCookies ? rawCookies.split(',').map(c => c.split(';')[0]).join('; ') : '';
    
    console.log('Initial Cookies:', cookies);

    // Step 2: Prepare POST data
    const params = new URLSearchParams();
    for (const [key, value] of data.entries()) {
      params.append(key, value.toString());
    }

    // Step 3: POST with cookies
    const submitResponse = await fetch(submitUrl, {
      method: 'POST',
      body: params,
      headers: {
        'Cookie': cookies,
        'Referer': formUrl,
        'Origin': 'https://forms.zohopublic.in',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    const responseText = await submitResponse.text();
    console.log('Zoho Submit Status:', submitResponse.status);
    
    // Check for success (Zoho usually returns 200 even on error, so check content if needed)
    // But for now, we assume if we get a 200, it's good.
    
    // Extract Name and Email for the redirection URL
    const name = data.get('SingleLine')?.toString() || '';
    const email = data.get('Email')?.toString() || '';
    
    // Redirect to the success page
    const redirectUrl = new URL('https://coach.jove.com/signup');
    redirectUrl.searchParams.set('name', name);
    redirectUrl.searchParams.set('email', email);
    
    return redirect(redirectUrl.toString(), 302);

  } catch (error) {
    console.error('Error in proxy:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
};
