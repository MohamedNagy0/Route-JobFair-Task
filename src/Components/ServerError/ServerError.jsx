import errorImg from "../../assets/images/Server Error.jpg";
export default function ServerError() {
    //I did this Component because if anyone forget to open the localServer

    return (
        <>
            <section className="min-h-screen flex flex-col justify-center items-center">
                <div className="max-w-[700px]">
                    <img
                        src={errorImg}
                        alt="This Photo Expresses Server Error"
                    />
                </div>
            </section>
        </>
    );
}
