export type Coupon = {
  code: string;
  type: "percentage" | "fixed";
  value: number;
};

export const coupons: Coupon[] = [
  {
    code: "WELCOME10",
    type: "percentage",
    value: 10,
  },
  {
    code: "POWER15",
    type: "percentage",
    value: 15,
  },
  {
    code: "SAVE100",
    type: "fixed",
    value: 100,
  },
];