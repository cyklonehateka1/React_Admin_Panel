export const chartData = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export const tableColumns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "customerName", headerName: "Customer Name", width: 130 },
  { field: "products", headerName: "Products", width: 230, type: "array" },
  {
    field: "amount",
    headerName: "Amount",
    type: "number",
    width: 90,
  },
  {
    field: "address",
    headerName: "Address",
    type: "number",
  },
];

export const tableRows = [
  {
    id: 1,
    customerName: "Snow",
    products: ["Garri", "Condom", "Paracetamol"],
    amount: 305,
    address: "Accra, Airpot City",
  },
  {
    id: 2,
    customerName: "Eric Bosomtwe",
    products: ["Beef", "Cheevon", "Mutton"],
    amount: 705,
    address: "Accra, East Legon",
  },
  {
    id: 3,
    customerName: "Maik Young",
    products: ["Selfie stick", "Turtle Neck", "Fake Chainz"],
    amount: 25,
    address: "Accra, Airpot City",
  },
];
