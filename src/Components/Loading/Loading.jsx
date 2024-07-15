import loadingGif from "../../assets/images/Loading Animation.gif";
export default function Loading() {
    return (
        <>
            <section className="min-h-screen flex justify-center items-center">
                <div>
                    <img
                        src={loadingGif}
                        alt="Loading Animation Photo Expresses waiting"
                    />
                </div>
            </section>
        </>
    );
}
