export type Maybe<T> = T | null;

export interface CustomerFilterInput {
  companyName?: Maybe<string>;

  address?: Maybe<AddressInput>;
}

export interface AddressInput {
  street?: Maybe<string>;

  city?: Maybe<string>;

  region?: Maybe<string>;

  postalCode?: Maybe<string>;

  country?: Maybe<string>;

  phone?: Maybe<string>;
}

export interface EmployeeFilterInput {
  title?: Maybe<string>;

  lastName?: Maybe<string>;

  reportsTo?: Maybe<number>;

  address?: Maybe<AddressInput>;
}

export interface ProductFilterInput {
  productID?: Maybe<number>;

  productName?: Maybe<string>;

  supplierID?: Maybe<number>;

  categoryID?: Maybe<number>;

  quantityPerUnit?: Maybe<string>;

  unitPrice?: Maybe<number>;

  unitsInStock?: Maybe<number>;

  unitsOnOrder?: Maybe<number>;

  reorderLevel?: Maybe<number>;

  discontinued?: Maybe<boolean>;
}

export interface CustomerInput {
  customerID: string;

  companyName: string;

  contactName?: Maybe<string>;

  contactTitle?: Maybe<string>;

  address?: Maybe<AddressInput>;
}

export type Date = any;

// ====================================================
// Scalars
// ====================================================

// ====================================================
// Types
// ====================================================

export interface Query {
  customer?: Maybe<Customer>;

  customers: (Maybe<Customer>)[];

  employee?: Maybe<Employee>;

  employees: (Maybe<Employee>)[];

  product?: Maybe<Product>;

  products: (Maybe<Product>)[];
  /** A simple type for getting started! */
  hello?: Maybe<string>;

  user: User;
}

export interface Customer {
  _id: string;

  customerID: string;

  companyName: string;

  contactName?: Maybe<string>;

  contactTitle?: Maybe<string>;

  address?: Maybe<Address>;
}

export interface Address {
  street?: Maybe<string>;

  city?: Maybe<string>;

  region?: Maybe<string>;

  postalCode?: Maybe<string>;

  country?: Maybe<string>;

  phone?: Maybe<string>;
}

export interface Employee {
  _id: string;

  employeeID: number;

  lastName?: Maybe<string>;

  firstName?: Maybe<string>;

  title?: Maybe<string>;

  titleOfCourtesy?: Maybe<string>;

  birthDate?: Maybe<Date>;

  hireDate?: Maybe<Date>;

  address?: Maybe<Address>;

  phone?: Maybe<string>;

  notes?: Maybe<string>;

  reportsTo?: Maybe<Employee>;

  reportsID?: Maybe<number>;

  subordinates: (Maybe<Employee>)[];

  territoryID: (Maybe<number>)[];
}

export interface Product {
  _id: string;

  productID: number;

  name?: Maybe<string>;

  supplierID?: Maybe<number>;

  categoryID?: Maybe<number>;

  quantityPerUnit?: Maybe<string>;

  unitPrice?: Maybe<number>;

  unitsInStock?: Maybe<number>;

  unitsOnOrder?: Maybe<number>;

  reorderLevel?: Maybe<number>;

  discontinued?: Maybe<boolean>;
}

export interface User {
  name: string;

  ip: string;

  articles: Article[];

  friends?: Maybe<User>;
}

export interface Article {
  /** `aaa` | `ok` \\\ */
  title: string;

  desc?: Maybe<string>;

  createdAt?: Maybe<number>;

  updatedAt?: Maybe<number>;
}

export interface Mutation {
  article?: Maybe<ArticleMutations>;

  customer?: Maybe<CustomerMutations>;

  log?: Maybe<string>;
}

export interface ArticleMutations {
  create?: Maybe<number>;

  update?: Maybe<number>;

  remove?: Maybe<number>;
}

export interface CustomerMutations {
  create?: Maybe<CustomerCreatePayload>;
}

export interface CustomerCreatePayload {
  record?: Maybe<Customer>;
}

// ====================================================
// Arguments
// ====================================================

export interface CustomerQueryArgs {
  id: string;
}
export interface CustomersQueryArgs {
  filter?: Maybe<CustomerFilterInput>;

  limit: number;

  offset?: Maybe<number>;
}
export interface EmployeeQueryArgs {
  id: string;
}
export interface EmployeesQueryArgs {
  filter?: Maybe<EmployeeFilterInput>;

  limit: number;

  offset?: Maybe<number>;
}
export interface ProductQueryArgs {
  id: string;
}
export interface ProductsQueryArgs {
  filter?: Maybe<ProductFilterInput>;

  limit: number;

  offset?: Maybe<number>;
}
export interface HelloQueryArgs {
  arg?: string;
}
export interface UserQueryArgs {
  id: number;

  err?: Maybe<string>;
}
export interface CreateCustomerMutationsArgs {
  input: CustomerInput;
}

import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig
} from "graphql";

import { GraphQLContext } from "../context";

export type Resolver<Result, Parent = {}, Context = {}, Args = {}> = (
  parent: Parent,
  args: Args,
  context: Context,
  info: GraphQLResolveInfo
) => Promise<Result> | Result;

export interface ISubscriptionResolverObject<Result, Parent, Context, Args> {
  subscribe<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: Context,
    info: GraphQLResolveInfo
  ): AsyncIterator<R | Result> | Promise<AsyncIterator<R | Result>>;
  resolve?<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: Context,
    info: GraphQLResolveInfo
  ): R | Result | Promise<R | Result>;
}

export type SubscriptionResolver<
  Result,
  Parent = {},
  Context = {},
  Args = {}
> =
  | ((
      ...args: any[]
    ) => ISubscriptionResolverObject<Result, Parent, Context, Args>)
  | ISubscriptionResolverObject<Result, Parent, Context, Args>;

export type TypeResolveFn<Types, Parent = {}, Context = {}> = (
  parent: Parent,
  context: Context,
  info: GraphQLResolveInfo
) => Maybe<Types>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult, TArgs = {}, TContext = {}> = (
  next: NextResolverFn<TResult>,
  source: any,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export namespace QueryResolvers {
  export interface Resolvers<Context = GraphQLContext, TypeParent = {}> {
    customer?: CustomerResolver<Maybe<Customer>, TypeParent, Context>;

    customers?: CustomersResolver<(Maybe<Customer>)[], TypeParent, Context>;

    employee?: EmployeeResolver<Maybe<Employee>, TypeParent, Context>;

    employees?: EmployeesResolver<(Maybe<Employee>)[], TypeParent, Context>;

    product?: ProductResolver<Maybe<Product>, TypeParent, Context>;

    products?: ProductsResolver<(Maybe<Product>)[], TypeParent, Context>;
    /** A simple type for getting started! */
    hello?: HelloResolver<Maybe<string>, TypeParent, Context>;

    user?: UserResolver<User, TypeParent, Context>;
  }

  export type CustomerResolver<
    R = Maybe<Customer>,
    Parent = {},
    Context = GraphQLContext
  > = Resolver<R, Parent, Context, CustomerArgs>;
  export interface CustomerArgs {
    id: string;
  }

  export type CustomersResolver<
    R = (Maybe<Customer>)[],
    Parent = {},
    Context = GraphQLContext
  > = Resolver<R, Parent, Context, CustomersArgs>;
  export interface CustomersArgs {
    filter?: Maybe<CustomerFilterInput>;

    limit: number;

    offset?: Maybe<number>;
  }

  export type EmployeeResolver<
    R = Maybe<Employee>,
    Parent = {},
    Context = GraphQLContext
  > = Resolver<R, Parent, Context, EmployeeArgs>;
  export interface EmployeeArgs {
    id: string;
  }

  export type EmployeesResolver<
    R = (Maybe<Employee>)[],
    Parent = {},
    Context = GraphQLContext
  > = Resolver<R, Parent, Context, EmployeesArgs>;
  export interface EmployeesArgs {
    filter?: Maybe<EmployeeFilterInput>;

    limit: number;

    offset?: Maybe<number>;
  }

  export type ProductResolver<
    R = Maybe<Product>,
    Parent = {},
    Context = GraphQLContext
  > = Resolver<R, Parent, Context, ProductArgs>;
  export interface ProductArgs {
    id: string;
  }

  export type ProductsResolver<
    R = (Maybe<Product>)[],
    Parent = {},
    Context = GraphQLContext
  > = Resolver<R, Parent, Context, ProductsArgs>;
  export interface ProductsArgs {
    filter?: Maybe<ProductFilterInput>;

    limit: number;

    offset?: Maybe<number>;
  }

  export type HelloResolver<
    R = Maybe<string>,
    Parent = {},
    Context = GraphQLContext
  > = Resolver<R, Parent, Context, HelloArgs>;
  export interface HelloArgs {
    arg?: string;
  }

  export type UserResolver<
    R = User,
    Parent = {},
    Context = GraphQLContext
  > = Resolver<R, Parent, Context, UserArgs>;
  export interface UserArgs {
    id: number;

    err?: Maybe<string>;
  }
}

export namespace CustomerResolvers {
  export interface Resolvers<Context = GraphQLContext, TypeParent = Customer> {
    _id?: _IdResolver<string, TypeParent, Context>;

    customerID?: CustomerIdResolver<string, TypeParent, Context>;

    companyName?: CompanyNameResolver<string, TypeParent, Context>;

    contactName?: ContactNameResolver<Maybe<string>, TypeParent, Context>;

    contactTitle?: ContactTitleResolver<Maybe<string>, TypeParent, Context>;

    address?: AddressResolver<Maybe<Address>, TypeParent, Context>;
  }

  export type _IdResolver<
    R = string,
    Parent = Customer,
    Context = GraphQLContext
  > = Resolver<R, Parent, Context>;
  export type CustomerIdResolver<
    R = string,
    Parent = Customer,
    Context = GraphQLContext
  > = Resolver<R, Parent, Context>;
  export type CompanyNameResolver<
    R = string,
    Parent = Customer,
    Context = GraphQLContext
  > = Resolver<R, Parent, Context>;
  export type ContactNameResolver<
    R = Maybe<string>,
    Parent = Customer,
    Context = GraphQLContext
  > = Resolver<R, Parent, Context>;
  export type ContactTitleResolver<
    R = Maybe<string>,
    Parent = Customer,
    Context = GraphQLContext
  > = Resolver<R, Parent, Context>;
  export type AddressResolver<
    R = Maybe<Address>,
    Parent = Customer,
    Context = GraphQLContext
  > = Resolver<R, Parent, Context>;
}

export namespace AddressResolvers {
  export interface Resolvers<Context = GraphQLContext, TypeParent = Address> {
    street?: StreetResolver<Maybe<string>, TypeParent, Context>;

    city?: CityResolver<Maybe<string>, TypeParent, Context>;

    region?: RegionResolver<Maybe<string>, TypeParent, Context>;

    postalCode?: PostalCodeResolver<Maybe<string>, TypeParent, Context>;

    country?: CountryResolver<Maybe<string>, TypeParent, Context>;

    phone?: PhoneResolver<Maybe<string>, TypeParent, Context>;
  }

  export type StreetResolver<
    R = Maybe<string>,
    Parent = Address,
    Context = GraphQLContext
  > = Resolver<R, Parent, Context>;
  export type CityResolver<
    R = Maybe<string>,
    Parent = Address,
    Context = GraphQLContext
  > = Resolver<R, Parent, Context>;
  export type RegionResolver<
    R = Maybe<string>,
    Parent = Address,
    Context = GraphQLContext
  > = Resolver<R, Parent, Context>;
  export type PostalCodeResolver<
    R = Maybe<string>,
    Parent = Address,
    Context = GraphQLContext
  > = Resolver<R, Parent, Context>;
  export type CountryResolver<
    R = Maybe<string>,
    Parent = Address,
    Context = GraphQLContext
  > = Resolver<R, Parent, Context>;
  export type PhoneResolver<
    R = Maybe<string>,
    Parent = Address,
    Context = GraphQLContext
  > = Resolver<R, Parent, Context>;
}

export namespace EmployeeResolvers {
  export interface Resolvers<Context = GraphQLContext, TypeParent = Employee> {
    _id?: _IdResolver<string, TypeParent, Context>;

    employeeID?: EmployeeIdResolver<number, TypeParent, Context>;

    lastName?: LastNameResolver<Maybe<string>, TypeParent, Context>;

    firstName?: FirstNameResolver<Maybe<string>, TypeParent, Context>;

    title?: TitleResolver<Maybe<string>, TypeParent, Context>;

    titleOfCourtesy?: TitleOfCourtesyResolver<
      Maybe<string>,
      TypeParent,
      Context
    >;

    birthDate?: BirthDateResolver<Maybe<Date>, TypeParent, Context>;

    hireDate?: HireDateResolver<Maybe<Date>, TypeParent, Context>;

    address?: AddressResolver<Maybe<Address>, TypeParent, Context>;

    phone?: PhoneResolver<Maybe<string>, TypeParent, Context>;

    notes?: NotesResolver<Maybe<string>, TypeParent, Context>;

    reportsTo?: ReportsToResolver<Maybe<Employee>, TypeParent, Context>;

    reportsID?: ReportsIdResolver<Maybe<number>, TypeParent, Context>;

    subordinates?: SubordinatesResolver<
      (Maybe<Employee>)[],
      TypeParent,
      Context
    >;

    territoryID?: TerritoryIdResolver<(Maybe<number>)[], TypeParent, Context>;
  }

  export type _IdResolver<
    R = string,
    Parent = Employee,
    Context = GraphQLContext
  > = Resolver<R, Parent, Context>;
  export type EmployeeIdResolver<
    R = number,
    Parent = Employee,
    Context = GraphQLContext
  > = Resolver<R, Parent, Context>;
  export type LastNameResolver<
    R = Maybe<string>,
    Parent = Employee,
    Context = GraphQLContext
  > = Resolver<R, Parent, Context>;
  export type FirstNameResolver<
    R = Maybe<string>,
    Parent = Employee,
    Context = GraphQLContext
  > = Resolver<R, Parent, Context>;
  export type TitleResolver<
    R = Maybe<string>,
    Parent = Employee,
    Context = GraphQLContext
  > = Resolver<R, Parent, Context>;
  export type TitleOfCourtesyResolver<
    R = Maybe<string>,
    Parent = Employee,
    Context = GraphQLContext
  > = Resolver<R, Parent, Context>;
  export type BirthDateResolver<
    R = Maybe<Date>,
    Parent = Employee,
    Context = GraphQLContext
  > = Resolver<R, Parent, Context>;
  export type HireDateResolver<
    R = Maybe<Date>,
    Parent = Employee,
    Context = GraphQLContext
  > = Resolver<R, Parent, Context>;
  export type AddressResolver<
    R = Maybe<Address>,
    Parent = Employee,
    Context = GraphQLContext
  > = Resolver<R, Parent, Context>;
  export type PhoneResolver<
    R = Maybe<string>,
    Parent = Employee,
    Context = GraphQLContext
  > = Resolver<R, Parent, Context>;
  export type NotesResolver<
    R = Maybe<string>,
    Parent = Employee,
    Context = GraphQLContext
  > = Resolver<R, Parent, Context>;
  export type ReportsToResolver<
    R = Maybe<Employee>,
    Parent = Employee,
    Context = GraphQLContext
  > = Resolver<R, Parent, Context>;
  export type ReportsIdResolver<
    R = Maybe<number>,
    Parent = Employee,
    Context = GraphQLContext
  > = Resolver<R, Parent, Context>;
  export type SubordinatesResolver<
    R = (Maybe<Employee>)[],
    Parent = Employee,
    Context = GraphQLContext
  > = Resolver<R, Parent, Context>;
  export type TerritoryIdResolver<
    R = (Maybe<number>)[],
    Parent = Employee,
    Context = GraphQLContext
  > = Resolver<R, Parent, Context>;
}

export namespace ProductResolvers {
  export interface Resolvers<Context = GraphQLContext, TypeParent = Product> {
    _id?: _IdResolver<string, TypeParent, Context>;

    productID?: ProductIdResolver<number, TypeParent, Context>;

    name?: NameResolver<Maybe<string>, TypeParent, Context>;

    supplierID?: SupplierIdResolver<Maybe<number>, TypeParent, Context>;

    categoryID?: CategoryIdResolver<Maybe<number>, TypeParent, Context>;

    quantityPerUnit?: QuantityPerUnitResolver<
      Maybe<string>,
      TypeParent,
      Context
    >;

    unitPrice?: UnitPriceResolver<Maybe<number>, TypeParent, Context>;

    unitsInStock?: UnitsInStockResolver<Maybe<number>, TypeParent, Context>;

    unitsOnOrder?: UnitsOnOrderResolver<Maybe<number>, TypeParent, Context>;

    reorderLevel?: ReorderLevelResolver<Maybe<number>, TypeParent, Context>;

    discontinued?: DiscontinuedResolver<Maybe<boolean>, TypeParent, Context>;
  }

  export type _IdResolver<
    R = string,
    Parent = Product,
    Context = GraphQLContext
  > = Resolver<R, Parent, Context>;
  export type ProductIdResolver<
    R = number,
    Parent = Product,
    Context = GraphQLContext
  > = Resolver<R, Parent, Context>;
  export type NameResolver<
    R = Maybe<string>,
    Parent = Product,
    Context = GraphQLContext
  > = Resolver<R, Parent, Context>;
  export type SupplierIdResolver<
    R = Maybe<number>,
    Parent = Product,
    Context = GraphQLContext
  > = Resolver<R, Parent, Context>;
  export type CategoryIdResolver<
    R = Maybe<number>,
    Parent = Product,
    Context = GraphQLContext
  > = Resolver<R, Parent, Context>;
  export type QuantityPerUnitResolver<
    R = Maybe<string>,
    Parent = Product,
    Context = GraphQLContext
  > = Resolver<R, Parent, Context>;
  export type UnitPriceResolver<
    R = Maybe<number>,
    Parent = Product,
    Context = GraphQLContext
  > = Resolver<R, Parent, Context>;
  export type UnitsInStockResolver<
    R = Maybe<number>,
    Parent = Product,
    Context = GraphQLContext
  > = Resolver<R, Parent, Context>;
  export type UnitsOnOrderResolver<
    R = Maybe<number>,
    Parent = Product,
    Context = GraphQLContext
  > = Resolver<R, Parent, Context>;
  export type ReorderLevelResolver<
    R = Maybe<number>,
    Parent = Product,
    Context = GraphQLContext
  > = Resolver<R, Parent, Context>;
  export type DiscontinuedResolver<
    R = Maybe<boolean>,
    Parent = Product,
    Context = GraphQLContext
  > = Resolver<R, Parent, Context>;
}

export namespace UserResolvers {
  export interface Resolvers<Context = GraphQLContext, TypeParent = User> {
    name?: NameResolver<string, TypeParent, Context>;

    ip?: IpResolver<string, TypeParent, Context>;

    articles?: ArticlesResolver<Article[], TypeParent, Context>;

    friends?: FriendsResolver<Maybe<User>, TypeParent, Context>;
  }

  export type NameResolver<
    R = string,
    Parent = User,
    Context = GraphQLContext
  > = Resolver<R, Parent, Context>;
  export type IpResolver<
    R = string,
    Parent = User,
    Context = GraphQLContext
  > = Resolver<R, Parent, Context>;
  export type ArticlesResolver<
    R = Article[],
    Parent = User,
    Context = GraphQLContext
  > = Resolver<R, Parent, Context>;
  export type FriendsResolver<
    R = Maybe<User>,
    Parent = User,
    Context = GraphQLContext
  > = Resolver<R, Parent, Context>;
}

export namespace ArticleResolvers {
  export interface Resolvers<Context = GraphQLContext, TypeParent = Article> {
    /** `aaa` | `ok` \\\ */
    title?: TitleResolver<string, TypeParent, Context>;

    desc?: DescResolver<Maybe<string>, TypeParent, Context>;

    createdAt?: CreatedAtResolver<Maybe<number>, TypeParent, Context>;

    updatedAt?: UpdatedAtResolver<Maybe<number>, TypeParent, Context>;
  }

  export type TitleResolver<
    R = string,
    Parent = Article,
    Context = GraphQLContext
  > = Resolver<R, Parent, Context>;
  export type DescResolver<
    R = Maybe<string>,
    Parent = Article,
    Context = GraphQLContext
  > = Resolver<R, Parent, Context>;
  export type CreatedAtResolver<
    R = Maybe<number>,
    Parent = Article,
    Context = GraphQLContext
  > = Resolver<R, Parent, Context>;
  export type UpdatedAtResolver<
    R = Maybe<number>,
    Parent = Article,
    Context = GraphQLContext
  > = Resolver<R, Parent, Context>;
}

export namespace MutationResolvers {
  export interface Resolvers<Context = GraphQLContext, TypeParent = {}> {
    article?: ArticleResolver<Maybe<ArticleMutations>, TypeParent, Context>;

    customer?: CustomerResolver<Maybe<CustomerMutations>, TypeParent, Context>;

    log?: LogResolver<Maybe<string>, TypeParent, Context>;
  }

  export type ArticleResolver<
    R = Maybe<ArticleMutations>,
    Parent = {},
    Context = GraphQLContext
  > = Resolver<R, Parent, Context>;
  export type CustomerResolver<
    R = Maybe<CustomerMutations>,
    Parent = {},
    Context = GraphQLContext
  > = Resolver<R, Parent, Context>;
  export type LogResolver<
    R = Maybe<string>,
    Parent = {},
    Context = GraphQLContext
  > = Resolver<R, Parent, Context>;
}

export namespace ArticleMutationsResolvers {
  export interface Resolvers<
    Context = GraphQLContext,
    TypeParent = ArticleMutations
  > {
    create?: CreateResolver<Maybe<number>, TypeParent, Context>;

    update?: UpdateResolver<Maybe<number>, TypeParent, Context>;

    remove?: RemoveResolver<Maybe<number>, TypeParent, Context>;
  }

  export type CreateResolver<
    R = Maybe<number>,
    Parent = ArticleMutations,
    Context = GraphQLContext
  > = Resolver<R, Parent, Context>;
  export type UpdateResolver<
    R = Maybe<number>,
    Parent = ArticleMutations,
    Context = GraphQLContext
  > = Resolver<R, Parent, Context>;
  export type RemoveResolver<
    R = Maybe<number>,
    Parent = ArticleMutations,
    Context = GraphQLContext
  > = Resolver<R, Parent, Context>;
}

export namespace CustomerMutationsResolvers {
  export interface Resolvers<
    Context = GraphQLContext,
    TypeParent = CustomerMutations
  > {
    create?: CreateResolver<Maybe<CustomerCreatePayload>, TypeParent, Context>;
  }

  export type CreateResolver<
    R = Maybe<CustomerCreatePayload>,
    Parent = CustomerMutations,
    Context = GraphQLContext
  > = Resolver<R, Parent, Context, CreateArgs>;
  export interface CreateArgs {
    input: CustomerInput;
  }
}

export namespace CustomerCreatePayloadResolvers {
  export interface Resolvers<
    Context = GraphQLContext,
    TypeParent = CustomerCreatePayload
  > {
    record?: RecordResolver<Maybe<Customer>, TypeParent, Context>;
  }

  export type RecordResolver<
    R = Maybe<Customer>,
    Parent = CustomerCreatePayload,
    Context = GraphQLContext
  > = Resolver<R, Parent, Context>;
}

/** Directs the executor to skip this field or fragment when the `if` argument is true. */
export type SkipDirectiveResolver<Result> = DirectiveResolverFn<
  Result,
  SkipDirectiveArgs,
  GraphQLContext
>;
export interface SkipDirectiveArgs {
  /** Skipped when true. */
  if: boolean;
}

/** Directs the executor to include this field or fragment only when the `if` argument is true. */
export type IncludeDirectiveResolver<Result> = DirectiveResolverFn<
  Result,
  IncludeDirectiveArgs,
  GraphQLContext
>;
export interface IncludeDirectiveArgs {
  /** Included when true. */
  if: boolean;
}

/** Marks an element of a GraphQL schema as no longer supported. */
export type DeprecatedDirectiveResolver<Result> = DirectiveResolverFn<
  Result,
  DeprecatedDirectiveArgs,
  GraphQLContext
>;
export interface DeprecatedDirectiveArgs {
  /** Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax (as specified by [CommonMark](https://commonmark.org/). */
  reason?: string;
}

export interface DateScalarConfig extends GraphQLScalarTypeConfig<Date, any> {
  name: "Date";
}

export interface IResolvers {
  Query?: QueryResolvers.Resolvers;
  Customer?: CustomerResolvers.Resolvers;
  Address?: AddressResolvers.Resolvers;
  Employee?: EmployeeResolvers.Resolvers;
  Product?: ProductResolvers.Resolvers;
  User?: UserResolvers.Resolvers;
  Article?: ArticleResolvers.Resolvers;
  Mutation?: MutationResolvers.Resolvers;
  ArticleMutations?: ArticleMutationsResolvers.Resolvers;
  CustomerMutations?: CustomerMutationsResolvers.Resolvers;
  CustomerCreatePayload?: CustomerCreatePayloadResolvers.Resolvers;
  Date?: GraphQLScalarType;
}

export interface IDirectiveResolvers<Result> {
  skip?: SkipDirectiveResolver<Result>;
  include?: IncludeDirectiveResolver<Result>;
  deprecated?: DeprecatedDirectiveResolver<Result>;
}
export const typeDefs = `
type Address {
  street: String
  city: String
  region: String
  postalCode: String
  country: String
  phone: String
}

input AddressInput {
  street: String
  city: String
  region: String
  postalCode: String
  country: String
  phone: String
}

type Article {
  # \`aaa\` | \`ok\` \\\\\\
  title: String!
  desc: String
  createdAt: Int
  updatedAt: Int
}

type ArticleMutations {
  create: Float
  update: Float
  remove: Float
}

type Customer {
  _id: ID!
  customerID: String!
  companyName: String!
  contactName: String
  contactTitle: String
  address: Address
}

type CustomerCreatePayload {
  record: Customer
}

input CustomerFilterInput {
  companyName: String
  address: AddressInput
}

input CustomerInput {
  customerID: String!
  companyName: String!
  contactName: String
  contactTitle: String
  address: AddressInput
}

type CustomerMutations {
  create(input: CustomerInput!): CustomerCreatePayload
}

scalar Date

type Employee {
  _id: ID!
  employeeID: Int!
  lastName: String
  firstName: String
  title: String
  titleOfCourtesy: String
  birthDate: Date
  hireDate: Date
  address: Address
  phone: String
  notes: String
  reportsTo: Employee
  reportsID: Int
  subordinates: [Employee]!
  territoryID: [Int]!
}

input EmployeeFilterInput {
  title: String
  lastName: String
  reportsTo: Int
  address: AddressInput
}

type Mutation {
  article: ArticleMutations
  customer: CustomerMutations
  log: String
}

type Product {
  _id: ID!
  productID: Int!
  name: String
  supplierID: Int
  categoryID: Int
  quantityPerUnit: String
  unitPrice: Float
  unitsInStock: Int
  unitsOnOrder: Int
  reorderLevel: Int
  discontinued: Boolean
}

input ProductFilterInput {
  productID: Int
  productName: String
  supplierID: Int
  categoryID: Int
  quantityPerUnit: String
  unitPrice: Float
  unitsInStock: Int
  unitsOnOrder: Int
  reorderLevel: Int
  discontinued: Boolean
}

type Query {
  customer(id: ID!): Customer
  customers(filter: CustomerFilterInput, limit: Int! = 20, offset: Int): [Customer]!
  employee(id: ID!): Employee
  employees(filter: EmployeeFilterInput, limit: Int! = 20, offset: Int): [Employee]!
  product(id: ID!): Product
  products(filter: ProductFilterInput, limit: Int! = 20, offset: Int): [Product]!

  # A simple type for getting started!
  hello(arg: String = "dsd"): String
  user(id: Int!, err: String): User!
}

type User {
  name: String!
  ip: String!
  articles: [Article!]!
  friends: User
}

`;
