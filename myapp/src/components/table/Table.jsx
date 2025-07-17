import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      id: 1143155,
      product: "Acer Nitro 5",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Nishanth",
      date: "5 March",
      amount: 785,
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 2235235,
      product: "Playstation 5",
      img: "https://t3.ftcdn.net/jpg/05/25/37/30/360_F_525373026_mEvYH9lgyphjWukE2aiqp4O20xSTiZ0g.jpg",
      customer: "Monesh",
      date: "11 July",
      amount: 900,
      method: "Online Payment",
      status: "Pending",
    },

    {
      id: 2342353,
      product: "Omen ",
      img: "https://microless.com/cdn/product_description/3116078_1670396250.jpg",
      customer: "Dharani",
      date: "13 october",
      amount: 3500,
      method: "Cash on delivery",
      status: "Pending",
    },

    {
      id: 2357741,
      product: "Razer Blade 15",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFJy7YD2Wf3NbXkDYg8011MJzc6CLLWoiKWw&s",
      customer: "Rupesh",
      date: "15 april",
      amount: 920,
      method: "Online",
      status: "Approved",
    },
    {
      id: 2342355,
      product: "ASUS ROG Strix",
      img: "https://www.reliancedigital.in/wp-content/uploads/2023/07/Asus_ROG_Scar_G18_5.jpg",
      customer: "Faheem",
      date: "11 may",
      amount: 2000,
      method: "Online ",
      status: "Pending",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
