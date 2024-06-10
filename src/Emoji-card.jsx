import './output.css';

function Emoji({ emoji, name, description }) {
    const imageUrl = `https://fav.farm/${emoji}`;

    return (
      <div className='font-mono flex justify-center items-center gap-3 mt-5' data-theme="cupcake">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={imageUrl} alt="Item" />
          </figure>
          <div className="card-body text-center">
              <h2 className="card-title text-center">{name}</h2>
              <p className='text-center'>{description}</p>
          </div>
        </div>
      </div>
    );
}

export default Emoji;
