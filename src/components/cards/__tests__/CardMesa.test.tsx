import { render, screen } from "@testing-library/react";
import CardMesa, { CardMesaProps, CardMesaPropsData } from "../CardMesa";
import { ApiActivity, CheckpadModel, CheckpadModelIcon } from "@/constants/api";

const mockData: CardMesaPropsData = {
    ordersheetsNum: 3,
    customer: {
        value: "Test Customer",
        isRealName: true,
    },
    model: {
        value: CheckpadModel.Mesa,
        icon: CheckpadModelIcon.TableRestaurant,
    },
    lastOrderCreated: new Date("2026-02-12T09:00:00"),
    totalPrice: 150,
};

const defaultProps: CardMesaProps = {
    identifier: "1",
    waiterFullName: "João Silva",
    activity: ApiActivity.Active,
    data: mockData,
};

describe("CardMesa component", () => {
    it("renders the table identifier", () => {
        render(<CardMesa {...defaultProps} />);
        expect(screen.getByText(defaultProps.identifier)).toBeInTheDocument();
    });

    it("renders the number of ordersheets", () => {
        render(<CardMesa {...defaultProps} />);
        expect(
            screen.getByText(mockData.ordersheetsNum.toString()),
        ).toBeInTheDocument();
    });

    it("renders the customer name", () => {
        render(<CardMesa {...defaultProps} />);
        expect(screen.getByText(mockData.customer.value)).toBeInTheDocument();
    });

    it("renders the correct model with its icon", () => {
        render(<CardMesa {...defaultProps} />);
        expect(screen.getByText(mockData.model.value)).toBeInTheDocument();
        expect(screen.getByTestId("checkpad-icon")).toBeInTheDocument();
    });

    it("renders the waiter's initials correctly", () => {
        render(<CardMesa {...defaultProps} />);
        expect(screen.getByText("JS")).toBeInTheDocument();
    });

    it("renders the footer with the correct price", () => {
        render(<CardMesa {...defaultProps} />);
        expect(screen.getByText(`R$${mockData.totalPrice}`)).toBeInTheDocument();
    });

    it("renders correctly when no data is provided", () => {
        const props: CardMesaProps = {
            identifier: "2",
            activity: ApiActivity.Inactive,
        };
        render(<CardMesa {...props} />);
        expect(screen.getByText(props.identifier)).toBeInTheDocument();
        expect(screen.queryByText(mockData.customer.value)).not.toBeInTheDocument();
    });
});
