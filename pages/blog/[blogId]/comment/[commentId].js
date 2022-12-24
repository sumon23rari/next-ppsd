import { useRouter } from "next/router";

function ComentDetails() {
    const router=useRouter();
    const {commentId,blogId}=router.query;
   // console.log(result);
    return (
        <div>
            <h2>this is commentDetais blogId{blogId} .comment Id:{commentId}</h2>
        </div>
    );
}

export default ComentDetails;