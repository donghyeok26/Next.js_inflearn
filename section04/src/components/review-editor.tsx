'use client'

import { useEffect } from "react";

import style from "./review-editor.module.scss"
import { createReviewAction } from "@/actions/create-review.action";
import { useActionState } from "react";

export default function ReviewEditor({ bookId }: { bookId: string }) {

    const [state, formAction, isPending] = useActionState(createReviewAction, null);

    useEffect(() => {
        if (state && !state.status) {
            alert(state.error)
        }
    }, [state])

    return (
        <section>
            <form className={style.form_container} action={formAction} >
                <input type="text" name="bookId" value={bookId} hidden readOnly />
                <textarea disabled={isPending} required name="content" placeholder="리뷰 내용" />
                <div className={style.submit_container}>
                    <input disabled={isPending} required name="author" type="text" placeholder="작성자" />
                    <button disabled={isPending} type="submit" > {isPending ? "..." : "작성"} </button>
                </div>
            </form>
        </section>
    )
}