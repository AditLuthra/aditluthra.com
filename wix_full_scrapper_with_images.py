import os
import requests
from bs4 import BeautifulSoup
import html2text
from urllib.parse import urlparse
from datetime import datetime

# Update this list with all your post info (add more as needed)
blog_posts = [
    {
        "title": "The Artful Alchemy of Science: Where Creativity Ignites Discovery",
        "url": "https://aditluthra0.wixsite.com/aditluthra/post/the-artful-alchemy-of-science-where-creativity-ignites-discovery",
        "date": "2023-10-07"
    },
    {
        "title": "Embracing Uniqueness: The Art of Being a 'Weirdo'",
        "url": "https://aditluthra0.wixsite.com/aditluthra/post/embracing-uniqueness",
        "date": "2023-08-20"
    },
    {
        "title": "Unleashing the Art of Culinary Creation",
        "url": "https://aditluthra0.wixsite.com/aditluthra/post/unleashing-the-art-of-culinary-creation",
        "date": "2023-08-06"
    },
    {
        "title": "The Cypherpunk Revolution",
        "url": "https://aditluthra0.wixsite.com/aditluthra/post/the-cypherpunk-revolution",
        "date": "2023-07-23"
    },
    {
        "title": "Embracing the Marvel of Aphantasia",
        "url": "https://aditluthra0.wixsite.com/aditluthra/post/embracing-the-marvel-of-aphantasia",
        "date": "2023-07-09"
    },
    {
        "title": "I am Sorry, Hopeful and Thankful to IIT",
        "url": "https://aditluthra0.wixsite.com/aditluthra/post/i-am-sory-hopeful-and-thankful-to-iit",
        "date": "2023-06-12"
    },
    {
        "title": "Welcome to my Brain!!!",
        "url": "https://aditluthra0.wixsite.com/aditluthra/post/welcome",
        "date": "2022-05-11"
    }
]

# Where to save output
output_dir = "blog/posts"
image_dir = "public/images/wix/inline"
os.makedirs(output_dir, exist_ok=True)
os.makedirs(image_dir, exist_ok=True)

# Markdown converter
converter = html2text.HTML2Text()
converter.ignore_links = False
converter.ignore_images = True  # we'll replace image tags ourselves

# Helper functions
def sanitize_filename(title):
    return title.lower().replace(" ", "-").replace("'", "").replace("!", "").replace(",", "").replace(":", "").replace("?", "").replace("’", "")

def download_image(src_url, post_slug, count):
    parsed = urlparse(src_url)
    ext = os.path.splitext(parsed.path)[-1]
    local_name = f"{post_slug}-{count}{ext}"
    local_path = os.path.join(image_dir, local_name)

    try:
        img_data = requests.get(src_url).content
        with open(local_path, "wb") as handler:
            handler.write(img_data)
        return f"/images/wix/inline/{local_name}"
    except Exception as e:
        print(f"❌ Failed to download image: {src_url} — {e}")
        return None

# Main loop
for post in blog_posts:
    try:
        res = requests.get(post["url"])
        soup = BeautifulSoup(res.content, "html.parser")
        article = soup.find("article") or soup.find("main")
        if not article:
            print(f"❌ Failed to extract article: {post['title']}")
            continue

        slug = sanitize_filename(post["title"])

        # Replace <img> tags with Markdown image syntax
        img_tags = article.find_all("img")
        for i, img in enumerate(img_tags):
            src = img.get("src")
            if src and src.startswith("http"):
                new_src = download_image(src, slug, i)
                if new_src:
                    img.replace_with(BeautifulSoup(f'<p>![]({new_src})</p>', "html.parser"))

        # Convert to Markdown
        content_md = converter.handle(str(article))

        # Add frontmatter
        markdown = f"""---
title: "{post['title']}"
date: "{post['date']}"
slug: "{slug}"
original_link: "{post['url']}"
---

{content_md}
"""

        # Save as Markdown file
        with open(os.path.join(output_dir, f"{slug}.md"), "w", encoding="utf-8") as f:
            f.write(markdown)

        print(f"✅ Converted: {slug}")
    except Exception as e:
        print(f"❌ Error processing {post['title']}: {e}")
