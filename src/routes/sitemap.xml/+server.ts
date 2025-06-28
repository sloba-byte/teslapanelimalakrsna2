
import {
    PUBLIC_SITE_URL,
} from '$env/static/public';

const site_url = PUBLIC_SITE_URL

/*


https://teslapaneli.rs/krovni-paneli/tk5
<priority>0.8 < /priority>

https://teslapaneli.rs/zidni-paneli/tfh
<priority>0.8 < /priority>

https://teslapaneli.rs/zidni-paneli/tfv
<priority>0.8 < /priority>
*/

const zidni_paneli_url: string = PUBLIC_SITE_URL + "/zidni-paneli"
const krovni_paneli_url = PUBLIC_SITE_URL + "/krovni-paneli"
const paneli_cene_url = PUBLIC_SITE_URL + "/paneli-cene"

function getPriority(url: string) {
    switch (url) {
        case PUBLIC_SITE_URL: return "1.0"
        case zidni_paneli_url: return "0.9"
        case krovni_paneli_url: return "0.9"
        case paneli_cene_url: return "0.9"

        default: return "0.7"
    }
}


const staticPages = Object.keys(
    import.meta.glob("/src/routes/**/+page.(svelte|md)")
)
    .filter(
        (page) =>
            !["/src/routes/+page.svelte"].find((filter) => page.includes(filter))
    )
    .map((page) =>
        page
            .replace("/src/routes", PUBLIC_SITE_URL)
            .replace("/+page.svelte", "")
            .replace("/+page.md", "")
    );

export const prerender = true;


export const GET = async (): Promise<Response> => {
    const headers: Record<string, string> = {
        "Cache-Control": "max-age=3600",
        "Content-Type": "application/xml",
    };

    return new Response(
        `<?xml version="1.0" encoding="UTF-8" ?>
    <urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
      xmlns:xhtml="http://www.w3.org/1999/xhtml"
      xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
      xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"
    >
      <url>
        <loc>${PUBLIC_SITE_URL}</loc>
        <changefreq>weekly</changefreq>
        <priority>1.0</priority>
        <lastmod>${`${process.env.VITE_BUILD_TIME}`}</lastmod>
      </url>
      ${staticPages
            .map(
                (url: string) => `<url>
        <loc>${url}</loc>
        <changefreq>daily</changefreq>
        <priority>${getPriority(url)}</priority>
        <lastmod>${`${process.env.VITE_BUILD_TIME}`}</lastmod>
      </url>`
            )
            .join("")}
    </urlset>`,
        { headers: headers }
    );
};