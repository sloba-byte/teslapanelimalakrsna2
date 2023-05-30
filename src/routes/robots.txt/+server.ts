import {
    PUBLIC_SITE_URL,
} from '$env/static/public';

export const prerender = true;

export const GET = async (): Promise<Response> => {
    const headers: Record<string, string> = {
        "Content-Type": "text/plain"
    };

    return new Response(
        `User-agent: *
Allow: /
Sitemap: ${PUBLIC_SITE_URL}/sitemap.xml`,
        { headers: headers }
    );
}