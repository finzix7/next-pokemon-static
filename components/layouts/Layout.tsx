import Head from "next/head";
import { FC, ReactNode } from "react";
import { NavBar } from "../ui";

interface Props {
    children: ReactNode,
    title?: string,
}


const origin = (typeof window === 'undefined') ? '' : window.location.origin;

export const Layout: FC<Props> = ({ children, title }) => {

    return (
        <>
            <Head>
                <title>{title || 'Pokemon App'}</title>
                <meta name="author" content="Diego Oliver" />
                <meta name="description" content={`Informacion sobre pokemon ${title}`} />
                <meta name="keywords" content={`${title}, pokemon, pokedex`} />

                <meta property="og:title" content={`Información sobre ${title}`} />
                <meta property="og:description" content={`Esta página es sobre ${title}`} />
                <meta property="og:image" content={`${origin}/img/banner.png`} />
            </Head>

            <NavBar />

            <main style={{
                padding: '0px 20px',
            }}>
                {children}
            </main>
        </>
    )
}


