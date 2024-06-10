import "./output.css"
import Emoji from "./Emoji-card.jsx"
import Contributors from "./Contributors.jsx";

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
                <Emoji emoji="⭐" name="Star" description="Add new feature" />
                <Emoji emoji="🚧" name="Construction" description="Work in progress / All tests are completed" />
                <Emoji emoji="💳" name="Credit card" description="Add or update license for project" />
                <Emoji emoji="📖" name="Open book" description="Add or update README.md" />
                <Emoji emoji="📦" name="Package" description="Publish package!" />
                <Emoji emoji="🎉" name="Party popper" description="Start a new project" />
                <Emoji emoji="⬆️" name="Up arrow" description="Upgrade packages" />
                <Emoji emoji="🐛" name="Bug" description="Fix a bug" />
                <Emoji emoji="📝" name="Memo" description="Add or Update text/link or others ..." />
                <Contributors />
            </div>
        </>
    )
}

export default Emojis;
