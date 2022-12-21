import { useState } from 'react';
import './styles.scss';

const ProductsShelf = [
    {
        "id": 1,
        "productName": "Monitor LED 27'' Gamer Curvo Samsung  1920 x 1080 FHD 240 Hz HDMI, DP, Gsync Série CRG50",
        "oldPrice": "2.923,00",
        "currentPrice": "2.599,00",
        "imageURL": "src/assets/product.png"
    },
    {
        "id": 2,
        "productName": "Apple Macbook Air (13 polegadas, 2020, Chip M1, 256 GB de SSD, 8 GB de RAM) - Prateado",
        "oldPrice": "9.923,00",
        "currentPrice": "6.599,00",
        "imageURL": "src/assets/product.png"
    }
]

console.log(ProductsShelf);

const ShelfItem = () => {

    const [txtButton, setTxtButton] = useState(true)
    const [favorites, setFavorites] = useState(false)
    const [favoritesProducts, setFavoritesProducts] = useState([])
    
    const handleAdd = () => {
        setTxtButton(txtButton => !txtButton);
        console.log(txtButton);
    }

    const handleAddFav = () => {
        setFavorites(favorites => !favorites);

        console.log(favorites)
    }

    const printText = txtButton ? 'adicionar' : 'adicionado';
    const styleFavoriteBtn = favorites ? 'active' : '';


    return(
        <div className="container">
            {ProductsShelf && ProductsShelf.length > 0 ? ProductsShelf.map((product) => {
            
                return(
                    <div className="shelfItem" key={product.id}>
                        <button className={`btnFavorites ${styleFavoriteBtn}`} onClick={handleAddFav}></button>
                        <img src={product.imageURL} className="shelfItem__image" alt="teste" />
                        <div className="shelfItem__boxProduct">
                            <p className="shelfItem__name">{product.productName}</p>
                            <p className="shelfItem__oldPrice">{product.oldPrice}</p>
                            <p className="shelfItem__currentPrice">{product.currentPrice}</p>
                            <p className="shelfItem__priceMethods">em até 10x de R$ 259,90 sem juros</p>
                        </div>
                        <button className={`btn ${txtButton ? '' : 'active'}`} onClick={handleAdd}>{printText}</button>
                    </div>
                )
                
            } ) : "Não há produtos"}
            
        </div>
    )
}

export default ShelfItem;