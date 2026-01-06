import { BookData } from "@/types";

export default async function fetchOneBook(id: number): Promise<BookData | null> {

    const url = `https://onebite-books-server-main-lovat-psi.vercel.app/book/${id}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error();
        }

        return response.json();
    }
    catch (err) {
        console.log(err);
        return null;
    }


}