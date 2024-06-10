import "./output.css"
import Emoji from "./Emoji-card.jsx"

function Emojis() {
    return (
        <>
            <div className="font-mono" data-theme="cupcake">
                <h1 className="text-center mt-5 text-3xl">Emojis</h1>
                <Emoji emoji="➕" name="Plus" description="Add a package from project" />
                <Emoji emoji="➖" name="Minus" description="Remove a package from project" />
                <Emoji emoji="⛏️" name="Pick" description="Build project" />
                <Emoji emoji="⚙️" name="Gear" description="Add or update configuration files" />
                <Emoji emoji="✅" name="Check mark" description="Completed all tests" />
            </div>
        </>
    )
}

export default Emojis;