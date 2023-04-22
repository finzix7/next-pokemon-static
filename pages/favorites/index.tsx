import { Layout } from "@/components/layouts";
import { FavoritesPokemons } from "@/components/pokemon";
import { NoFavorites } from "@/components/ui";
import { localFavorites } from "@/utils";
import { useEffect, useState } from "react";

export const FavoritesPage = () => {

    const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

    useEffect(() => {
        setFavoritePokemons(localFavorites.pokemons());
    }, [])


    return (
        <Layout title="Pokémones Favoritos">
            {
                favoritePokemons.length === 0 ?
                    <NoFavorites />
                    :
                    <FavoritesPokemons pokemons={favoritePokemons} />
            }
        </Layout>
    )
};

export default FavoritesPage;
