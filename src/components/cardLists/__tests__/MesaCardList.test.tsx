import { render, screen } from "@testing-library/react";

jest.mock("@/features/filters/hooks", () => ({
    useFilterQuery: jest.fn(),
    useFilterStatus: jest.fn(),
    useFilterWaiter: jest.fn(),
}));

import {
    useFilterQuery,
    useFilterStatus,
    useFilterWaiter,
} from "@/features/filters/hooks";
import MesaCardList from "../MesaCardList";
import { CardMesaProps } from "@/components/cards/CardMesa";
import { CheckpadModel, CheckpadModelIcon } from "@/constants/api";
import { JSX } from "react";

jest.mock("../CardsGridList", () => {
    return {
        __esModule: true,
        default: ({
            data,
            itemContent,
        }: {
            data: CardMesaProps[];
            itemContent: (index: number, card: CardMesaProps) => JSX.Element;
        }) => (
            <div>
                {data.map((item, index) => (
                    <div key={index}>{itemContent(index, item)}</div>
                ))}
            </div>
        ),
    };
});

describe("MesaCardList", () => {
    const cards: CardMesaProps[] = [
        {
            identifier: "Mesa 1",
            waiterFullName: "João",
            activity: "active",
            data: {
                ordersheetsNum: 1,
                customer: { value: "Cliente 1", isRealName: true },
                model: {
                    value: CheckpadModel.Mesa,
                    icon: CheckpadModelIcon.TableRestaurant,
                },
                lastOrderCreated: new Date(),
                totalPrice: 150,
            },
        },
        {
            identifier: "Mesa 2",
            waiterFullName: "Maria",
            activity: "inactive",
            data: {
                ordersheetsNum: 2,
                customer: { value: "Cliente 2", isRealName: true },
                model: {
                    value: CheckpadModel.Apartamento,
                    icon: CheckpadModelIcon.Apartment,
                },
                lastOrderCreated: new Date(),
                totalPrice: 200,
            },
        },
        {
            identifier: "Mesa 3",
            waiterFullName: null,
            activity: "active",
            data: {
                ordersheetsNum: 3,
                customer: { value: "Cliente 3", isRealName: true },
                model: {
                    value: CheckpadModel.Barraca,
                    icon: CheckpadModelIcon.Tent,
                },
                lastOrderCreated: new Date(),
                totalPrice: 300,
            },
        },
    ];

    beforeEach(() => {
        (useFilterQuery as jest.Mock).mockReturnValue("");
        (useFilterStatus as jest.Mock).mockReturnValue("");
        (useFilterWaiter as jest.Mock).mockReturnValue("");
    });

    it("renders all cards when there is no filter", () => {
        render(<MesaCardList cards={cards} />);

        expect(screen.getByText("Mesa 1")).toBeInTheDocument();
        expect(screen.getByText("Mesa 2")).toBeInTheDocument();
        expect(screen.getByText("Mesa 3")).toBeInTheDocument();
    });

    it("filters cards by waiter name", () => {
        (useFilterWaiter as jest.Mock).mockReturnValue("João");

        render(<MesaCardList cards={cards} />);

        expect(screen.getByText("Mesa 1")).toBeInTheDocument();
        expect(screen.queryByText("Mesa 2")).toBeNull();
        expect(screen.queryByText("Mesa 3")).toBeNull();
    });

    it("filters cards by status", () => {
        (useFilterStatus as jest.Mock).mockReturnValue("active");

        render(<MesaCardList cards={cards} />);

        expect(screen.getByText("Mesa 1")).toBeInTheDocument();
        expect(screen.getByText("Mesa 3")).toBeInTheDocument();
        expect(screen.queryByText("Mesa 2")).toBeNull();
    });

    it("filters cards by search query", () => {
        (useFilterQuery as jest.Mock).mockReturnValue("Cliente 2");

        render(<MesaCardList cards={cards} />);

        expect(screen.getByText("Mesa 2")).toBeInTheDocument();
        expect(screen.queryByText("Mesa 1")).toBeNull();
        expect(screen.queryByText("Mesa 3")).toBeNull();
    });
});
