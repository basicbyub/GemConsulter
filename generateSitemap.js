import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";

async function generateSitemap() {
    const pages = ["/", "/about", "/services", "/contact"];
    const hostname = "https://gemconsulters.in";

    const stream = new SitemapStream({ hostname });

    pages.forEach((page) => stream.write({ url: page, changefreq: "daily", priority: 0.8 }));
    stream.end();

    const sitemap = await streamToPromise(stream);
    createWriteStream("./public/sitemap.xml").write(sitemap.toString());

    console.log("✅ Sitemap generated in public/sitemap.xml");
}

generateSitemap();
