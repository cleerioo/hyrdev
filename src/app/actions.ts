'use server';

import { z } from 'zod';

const schema = z.object({
    name: z.string().min(1),
    email: z.string().email(),
    service: z.string(),
    message: z.string().min(10),
});

export async function submitInquiry(formData: FormData) {
    // Validate the data
    const validatedFields = schema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        service: formData.get('service'),
        message: formData.get('message'),
    });

    if (!validatedFields.success) {
        return { error: 'Invalid fields' };
    }

    // MOCK: Simulate database delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log('--- NEW INQUIRY RECEIVED (MOCK) ---');
    console.log(validatedFields.data);
    console.log('-----------------------------------');

    return { success: true };
}
