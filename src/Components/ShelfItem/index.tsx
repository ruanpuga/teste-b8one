import { useState } from 'react';
import './styles.scss';

const ProductsShelf = [
    {
        "id": 1,
        "productName": "Monitor LED 27'' Gamer Curvo Samsung  1920 x 1080 FHD 240 Hz HDMI, DP, Gsync Série CRG50",
        "oldPrice": "2.923,00",
        "currentPrice": 2599,
        "imageURL": "/assets/product.png"
    },
    {
        "id": 2,
        "productName": "Apple Macbook Air (13 polegadas, 2020, Chip M1, 256 GB de SSD, 8 GB de RAM) - Prateado",
        "oldPrice": "9.923,00",
        "currentPrice": 6598,
        "imageURL": "/assets/product.png"
    }
]

const priceConfig = {style: 'currency', currency: 'BRL'};


const ShelfItem = () => {

    const [favoritesProducts, setFavoritesProducts] = useState<number[]>([])
    const [cartProducts, setCartProducts] = useState<number[]>([])

    const handleAdd = (id: number) => {
        if (cartProducts.includes(id)) {

            
            const currentCart = [...cartProducts]
            const cartWithoutId = currentCart.filter(currentId => id !== currentId)
            

            
            setCartProducts(cartWithoutId);
        } else {
            setCartProducts([...cartProducts, id])
        }
    }


    const handleAddFav = (id: number) => {

        if (favoritesProducts.includes(id)) {

            const currentFavorites = [...favoritesProducts]
            const noFavorite = currentFavorites.filter(currentId => id !== currentId)
        
            setFavoritesProducts(noFavorite)
        } else {
            setFavoritesProducts([...favoritesProducts, id])
            
        }
        
    }

    
    

    return(
        <div className="container">
            {ProductsShelf && ProductsShelf.length > 0 ? ProductsShelf.map((product) => {
                const isInCart = cartProducts.includes(product.id)
                const isFavorite = favoritesProducts.includes(product.id)

                

                const priceMethods = product.currentPrice / 10;

                console.log(product.currentPrice)

                return(
                    <div className="shelfItem" key={product.id}>
                        <button className={`btnFavorites ${isFavorite ? 'active' : ''}`} onClick={() => handleAddFav(product.id)}></button>
                        <img src={product.imageURL} className="shelfItem__image" alt="teste" />
                        <div className="shelfItem__boxProduct">
                            <p className="shelfItem__name">{product.productName}</p>
                            <p className="shelfItem__oldPrice">R$ {product.oldPrice}</p>
                            <p className="shelfItem__currentPrice">{product.currentPrice.toLocaleString('pt-br', priceConfig)}</p>
                            <p className="shelfItem__priceMethods">em até <b>10x de {priceMethods.toLocaleString('pt-br', priceConfig)}</b> sem juros</p>
                        </div>
                        <button className={`btn ${isInCart ? 'active' : ''}`} onClick={() => handleAdd(product.id)}>{isInCart ? 'adicionado' : 'adicionar'}</button>
                    </div>
                    
                )
                
            } ) : "Não há produtos"}
            
        </div>
    )
}

export default ShelfItem;