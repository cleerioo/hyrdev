'use server';

import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';

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

    const { name, email, service, message } = validatedFields.data;

    try {
        await sql`
      INSERT INTO inquiries (name, email, service, message)
      VALUES (${name}, ${email}, ${service}, ${message})
    `;

        // Refresh the admin dashboard so the new entry shows up immediately
        revalidatePath('/admin');

        return { success: true };
    } catch (error) {
        console.error('Database Error:', error);
        return { error: 'Failed to submit inquiry.' };
    }
}
