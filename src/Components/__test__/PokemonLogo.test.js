import PokemonLogo from "../PokemonLogo/PokemonLogo"
import { render, screen } from "@testing-library/react";

describe("Test PokemonLogo Component", () => {

    test("render pokemon logo", () => {
        render(<PokemonLogo />);
        const logo = screen.getByRole('img');
        expect(logo).toBeTruthy();
    })

    test ("Pokemon logo has src='/images/Pokémon_logo.webp' and alt='pokemon logo'", () => {
        render(<PokemonLogo />);
        const logo = screen.getByRole('img');
        expect(logo).toHaveAttribute('src', '/images/Pokémon_logo.webp');
        expect(logo).toHaveAttribute('alt', 'pokemon logo');
    })
})