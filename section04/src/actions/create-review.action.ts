'use server';
import { revalidatePath } from "next/cache";

export async function createReviewAction(_: any, formData: FormData) {
    const bookId = formData.get("bookId")?.toString();
    const content = formData.get("content")?.toString();
    const author = formData.get("author")?.toString();

    // 내용이 없을때 전달하면 안되니까 예외처리
    if (!content || !author || !bookId) {
        return {
            status: false,
            error: "리뷰내용과 작성자를 입력해주세요."
        }
    }

    //api호출
    try {

        const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/review`, {
            method: "POST",
            body: JSON.stringify({ bookId, content, author }),
        })
        console.log(response.status)
        if (!response.ok) {
            throw new Error(response.statusText)
        }
        revalidatePath(`/book/${bookId}`)
        return {
            status: true,
            error: '',
        };
    } catch (err) {
        console.log(err);
        return {
            status: false,
            error: `리뷰 저장에 실패했습니다 ${err}`
        }
    }
}

