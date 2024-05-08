import type { DefaultSession } from "@auth/core/types";
import type {
  Component,
  PropFunction,
  QwikChangeEvent,
  QwikFocusEvent,
  QwikIntrinsicElements,
  Signal,
} from "@builder.io/qwik";
import type { ActionStore } from "@builder.io/qwik-city";
import type {
  FormActionStore,
  PartialValues,
  ResponseData,
} from "@modular-forms/qwik";
import type { Order } from "@prisma/client";
import type { ColumnDef, Table } from "@tanstack/table-core";
import type { CATEGORY_TYPES_ENUM } from "~/constants";
import type {
  ItemFormType,
  OrderFormType,
  PrismaItemWithPrice,
} from "~/validation";
import type { AppLinkProps } from "./routes.gen";
import type { ItemSelectSchemaType } from "./schema";

type OrderItemType = {
  id: string;
  name: string;
  unit: string;
  quantity: number;
  unitPrice: number;
  unitPriceWithTax: number;
  // taxAmount: string;
  // discountAmount: string;
  // price: string;
  // finalPrice: string;
  // total: string;
  // merged: boolean;
};

type AuthSession = DefaultSession & {
  userId: string;
  shopId: string;
  roleId: string;
};

type CustomSelectOption = {
  value: string;
  label: string;
};

type SelectFnArgs = {
  option: CustomSelectOption;
  index: number;
  menuOptIdx: number;
};

type Ref =
  | Signal<Element | undefined>
  | ((element: Element) => void)
  | QRL<(element: FieldElement) => void>;

type InputElement = HTMLInputElement | HTMLTextAreaElement;
interface ModularInputProps {
  ref: Ref;
  name: string;
  onInput$: PropFunction<(event: Event, element: InputElement) => void>;
  onChange$: PropFunction<
    (event: QwikChangeEvent<InputElement>, element: InputElement) => void
  >;
  onBlur$: PropFunction<
    (event: QwikFocusEvent<InputElement>, element: InputElement) => void
  >;
  onFocus$?: PropFunction<
    (event: QwikFocusEvent<InputElement>, element: InputElement) => void
  >;
  label: string;
  required?: boolean;
  class?: string;
  error?: string;
  disabled?: boolean;
}

interface ConfirmDialogProps {
  onConfirm: PropFunction<() => void>;
  onCancel?: PropFunction<() => void>;
  onHide: PropFunction<() => void>;
}

type Entity = "ITEM" | "CATEGORY" | "ORDER" | "CUSTOMER" | "FACILITY";

type IconProps = {
  props?: QwikIntrinsicElements["svg"];
  key?: string;
  size?: Size | number;
};

type Size = "xs" | "sm" | "md" | "lg";
type Position = "top" | "bottom" | "left" | "right";
// type Variant = "info" | "success" | "warning" | "error";

type AvailableTables =
  | Table<Order>
  | Table<PrismaItemWithPrice>
  | Table<ItemSelectSchemaType>;
type TableHookData<T> = Readonly<Signal<T[]>>;
type TableHookColumns<T> = ColumnDef<T, any>[];

type AvailableFormTypes = ItemFormType | OrderFormType;

type FromStoreAction<T> = ActionStore<
  FormActionStore<T, ResponseData>,
  PartialValues<T>,
  true
>;

type CRUDactions = "CREATE" | "READ" | "UPDATE" | "DELETE";
type QuickActions = "EDIT" | "DELETE" | "DUPLICATE";

type PaymentMethod = "CASH" | "CARD" | "BANK";

type PrintFormat = "80mm" | "58mm" | "A4" | "A5";

type DiscountType = "PERCENTAGE" | "AMOUNT";

type Currency = "ALL" | "EUR" | "USD";

type Language = "AL" | "EN";

type CategoryType = (typeof CATEGORY_TYPES_ENUM)[number];

type PageSizes = 10 | 20 | 50 | 100;

type RemoveParamLang<T> = T extends { "param:lang": string }
  ? Omit<T, "param:lang">
  : T;

type AppLinkPropsWOLang = RemoveParamLang<AppLinkProps>;

type BtnEntryType = {
  text: string;
  Icon: Component<IconProps>;
  link: AppLinkPropsWOLang;
  IconRight?: Component<IconProps>;
  hideWhenInactive?: boolean;
  onClick?: PropFunction<() => void>;
};

type Accordion = {
  text: string;
  Icon: Component<IconProps>;
  items: BtnEntryType[];
};

type ColorVariant =
  | "primary"
  | "secondary"
  | "success"
  | "error"
  | "warning"
  | "ghost"
  | "accent";

type Justify = "start" | "end" | "center";
