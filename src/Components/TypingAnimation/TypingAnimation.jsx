import { Cursor, useTypewriter } from "react-simple-typewriter";

export default function TypingAnimation() {
    //Typing Animation using Typewriter library
    const [typeEffect] = useTypewriter({
        words: ["React Dev.", "Font-End."],
        loop: {},
        typeSpeed: 100,
        deleteSpeed: 40,
    });
    return (
        <div>
            <h2 className="text-primary-color-2 font-bold text-md text-center absolute top-1/2 left-1/2  -translate-x-1/2">
                <span>{`< I'm a`} </span>
                <span>
                    {typeEffect}
                    <span className="text-primary-bg-2">
                        <Cursor cursorStyle="/>" />
                    </span>
                </span>
            </h2>
        </div>
    );
}
