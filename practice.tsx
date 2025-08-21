type ObjectType = {
  id: number;
  name: string;
  price: number;
  category: string;
  inStock: boolean;
};

const products: ObjectType[] = [
  {
    id: 1,
    name: "Wireless Mouse",
    price: 25.99,
    category: "Electronics",
    inStock: true,
  },
  {
    id: 2,
    name: "Gaming Keyboard",
    price: 59.99,
    category: "Electronics",
    inStock: false,
  },
  {
    id: 3,
    name: "Office Chair",
    price: 149.99,
    category: "Furniture",
    inStock: true,
  },
  {
    id: 4,
    name: "Water Bottle",
    price: 12.49,
    category: "Accessories",
    inStock: true,
  },
  {
    id: 5,
    name: "Notebook",
    price: 3.99,
    category: "Stationery",
    inStock: true,
  },
];

function add(a: number, b: number): number {
  return a + b;
}

const subt = (a: number, b: number): number => a - b;

const age = 42;
const name: string = "Tesfaye";
const price: boolean = false;

//object type practis
export type Profile = { name: string; age: number; price: number };

const profile: Profile = {
  age: 10,
  name: "abebe",
  price: 45.36,
};

//array type practice
type DataTypes = string;
const nameList: DataTypes[] = ["abebe", "alemu", "abera"];

nameList.push(name);

//object and array type practice

const users: (
  | { age: number; name: string; price?: number }
  | number
  | boolean
  | string
)[] = [
  {
    age: 10,
    name: "abebe",
    price: 45.36,
  },
  {
    age: 16,
    name: "ali",
  },
  45,
  false,
  "abebe",
];

// any data type

type UserProp = (
  | { age: number; name: string; price?: number }
  | number
  | boolean
  | string
)[];

const users2: any[] = [
  {
    age: 10,
    name: "abebe",
    price: 45.36,
  },
  {
    age: 16,
    name: "ali",
  },
  45,
  false,
  "abebe",
];

const practice = () => {
  return (
    <div>
      {products.map((item) => (
        <Product key={item.id} item={item} />
      ))}
    </div>
  );
};

/*
const a = (h:number) => h+7;

<a  h={8}/>
a(7)

*/

const { a } = { a: 0 };
a;
const Product = (props) => {
  props.item;
  return <div>practice</div>;
};
