const BASE_URL = 'http://46.175.145.132:1337';

export async function getCorsets() {
    const res = await fetch(`${BASE_URL}/api/products?filters[category][id][$eq]=1&populate=preview,preview_hover,card_gallery_images`, {
        next: { revalidate: 10 },
    })
    const result = await res.json();

    return result.data;
}

