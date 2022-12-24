import { useRouter } from "next/router";

function document() {
    const router =useRouter();
    const result=router.query.params;
 
    return (
        <div>
            <h3>this is document page</h3>
            {
                result?.map(a=><li>{a}</li>)
            }
        </div>
    );
}

export default document;