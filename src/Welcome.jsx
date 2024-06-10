import Emojis from "./Emojis";
import "./output.css"

function Welcome() {
    return (
        <>
            <div className="font-mono" data-theme="cupcake">
                <h1 className="text-center mt-5 text-2xl font-bold">Welcome to GITEM 👋</h1>
                <p className="text-center font-bold">AN EMOJI GUIDE FOR YOU COMMIT MESSAGES LIKE GITMOJI 💻</p>
                <Emojis />
            </div>
        </>
    )
}

export default Welcome;