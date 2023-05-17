import Main from "../Main/Main"
import { getByTestId, render, screen } from "@testing-library/react";

describe("Test Main Component", () => {

    test("previous button is NOT rendered upon first render", () => {
        render(<Main />);
        const prevButton = screen.queryByText('Previous');
        expect(prevButton).toBeNull();
    })

    test("next button is rendered upon first render", () => {
        render(<Main />);
        const nextButton = screen.getByText('Next');
        expect(nextButton).toBeInTheDocument();
    })
})