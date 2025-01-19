export default async function getData(url) {
    try {
        const res = await fetch(url);

        if (!res.status) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const data = await res.json();
        return data.data;
    } catch (error) {
        console.error('Fetch error:', error);
        throw error; // Re-throw the error to propagate it to the caller if needed
    }
}
