export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "age",
    headerName: "Age",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

//temporary data
export const userRows=[
  {
      id:1,
      username:"snow",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs9g11wo3H7IjMOFmrE7k2dEraLtmlc63lIw&s",
      status:"active",
      email:"snow1@gmail.com",
      age:"29",
  },
  {
      id:2,
      username:"Jaime Lannister",
      img:"https://w0.peakpx.com/wallpaper/1024/925/HD-wallpaper-iron-man-hero-logo-marvel.jpg",
      status:"passive",
      email:"jaime2@gmail.com",
      age:"38", 

  },
  {
      id:3,
      username:"cersei Lannister",
      img:" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCzFZyF0meRnDpqCpuO5R2c7wbcPnWw7pYcw&s",
      status:"pending",
      email:"cersei9@gmail.com",
      age:"42", 

  }, 
  {
      id:4,
      username:"Stark",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0J2kwex4LjtoCDvfyBWxOuqSdr94H6fxnwg&s",
      status:"pending",
      email:"stark5@gmail.com",
      age:"45", 

  }, 
  {
      id:5,
      username:"Targaryan",
      img:"https://img.lovepik.com/photo/48014/8840.jpg_wh860.jpg ",
      status:"pending",
      email:"targaryan7@gmail.com",
      age:"25", 

  }, 
  {
      id:6,
      username:"Melisandre",
      img:"https://cdn.shopify.com/s/files/1/1095/6418/files/Supreman-Black_red_fb588ce5-d3fb-4e37-af50-505e25dcc34d.jpg?v=1649940496",
      status:"active",
      email:"meli7@gmail.com",
      age:"44", 

  }, 
  {
      id:7,
      username:"Clifford",
      img:"https://i.pinimg.com/736x/5d/04/65/5d0465015c749a9c2cbbc0725c85f576.jpg",
      status:"passive",
      email:"cliff5@gmail.com",
      age:"36", 

  }, 
  {
      id:8,
      username:"Frances",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GOMTumplUCUsbHouX8BNH5XnLWM-HvC1Aw&s",
      status:"active",
      email:"frances7@gmail.com",
      age:"26", 

  }, 
  {
      id:9,
      username:"Roxie",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj2XJ1m501N6NcmUsJ7GlFqBhc_hjUFhGWag&s",
      status:"passive",
      email:"roxie7@gmail.com",
      age:"28", 

  }, 
];
