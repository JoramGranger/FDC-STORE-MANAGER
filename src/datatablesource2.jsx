export const userColumns = [
    {field: "id", headerName: "ID", width: 70},
    {
        field: "user", headerName:"User", width: 230, renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.img} alt="avatar"/>
                    {params.row.username}
                </div>
            );
        },
    },
    {
        field: "email", headerName: "Email", width: 230    
    },
    {
        field: "age", headerName: "Age", width: 100    
    },
    {
        field: "status", headerName: "Status", width: 160,
        renderCell:(params) => {
            return (
                <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>                
            )
        }
    },
];

export const userRows =
[
  {
    "id": 1,
    "username": "johndoe",
    "img": "https://img.freepik.com/premium-photo/portrait-20s-african-man-headshot-portrait-young-adult-black-skin-african-man-west-african-young-adult-man-model_46728-2056.jpg?w=740",
    "status": "active",
    "email": "johndoe@example.com",
    "age": 28
  },
  {
    "id": 2,
    "username": "janedoe",
    "img": "https://img.freepik.com/premium-photo/portrait-20s-african-man-headshot-portrait-young-adult-black-skin-african-man-west-african-young-adult-man-model_46728-2056.jpg?w=740",
    "status": "inactive",
    "email": "janedoe@example.com",
    "age": 32
  },
  {
    "id": 3,
    "username": "alice",
    "img": "https://img.freepik.com/premium-photo/portrait-20s-african-man-headshot-portrait-young-adult-black-skin-african-man-west-african-young-adult-man-model_46728-2056.jpg?w=740",
    "status": "pending",
    "email": "alice@example.com",
    "age": 25
  },
  {
    "id": 4,
    "username": "bob",
    "img": "https://img.freepik.com/premium-photo/portrait-20s-african-man-headshot-portrait-young-adult-black-skin-african-man-west-african-young-adult-man-model_46728-2056.jpg?w=740",
    "status": "active",
    "email": "bob@example.com",
    "age": 30
  },
  {
    "id": 5,
    "username": "charlie",
    "img": "https://img.freepik.com/premium-photo/portrait-20s-african-man-headshot-portrait-young-adult-black-skin-african-man-west-african-young-adult-man-model_46728-2056.jpg?w=740",
    "status": "inactive",
    "email": "charlie@example.com",
    "age": 35
  },
  {
    "id": 6,
    "username": "david",
    "img": "https://img.freepik.com/premium-photo/portrait-20s-african-man-headshot-portrait-young-adult-black-skin-african-man-west-african-young-adult-man-model_46728-2056.jpg?w=740",
    "status": "pending",
    "email": "david@example.com",
    "age": 40
  },
  {
    "id": 7,
    "username": "eve",
    "img": "https://img.freepik.com/premium-photo/portrait-20s-african-man-headshot-portrait-young-adult-black-skin-african-man-west-african-young-adult-man-model_46728-2056.jpg?w=740",
    "status": "inactive",
    "email": "eve@example.com",
    "age": 22
  },
  {
    "id": 8,
    "username": "frank",
    "img": "https://img.freepik.com/premium-photo/portrait-20s-african-man-headshot-portrait-young-adult-black-skin-african-man-west-african-young-adult-man-model_46728-2056.jpg?w=740",
    "status": "active",
    "email": "frank@example.com",
    "age": 29
  },
  {
    "id": 9,
    "username": "grace",
    "img": "https://img.freepik.com/premium-photo/portrait-20s-african-man-headshot-portrait-young-adult-black-skin-african-man-west-african-young-adult-man-model_46728-2056.jpg?w=740",
    "status": "inactive",
    "email": "grace@example.com",
    "age": 27
  },
  {
    "id": 10,
    "username": "henry",
    "img": "https://img.freepik.com/premium-photo/portrait-20s-african-man-headshot-portrait-young-adult-black-skin-african-man-west-african-young-adult-man-model_46728-2056.jpg?w=740",
    "status": "active",
    "email": "henry@example.com",
    "age": 33
  },
  {
    "id": 11,
    "username": "isabel",
    "img": "https://img.freepik.com/premium-photo/portrait-20s-african-man-headshot-portrait-young-adult-black-skin-african-man-west-african-young-adult-man-model_46728-2056.jpg?w=740",
    "status": "pending",
    "email": "isabel@example.com",
    "age": 31
  },
  {
    "id": 12,
    "username": "jack",
    "img": "https://img.freepik.com/premium-photo/portrait-20s-african-man-headshot-portrait-young-adult-black-skin-african-man-west-african-young-adult-man-model_46728-2056.jpg?w=740",
    "status": "active",
    "email": "jack@example.com",
    "age": 26
  },
  {
    "id": 13,
    "username": "karen",
    "img": "https://img.freepik.com/premium-photo/portrait-20s-african-man-headshot-portrait-young-adult-black-skin-african-man-west-african-young-adult-man-model_46728-2056.jpg?w=740",
    "status": "inactive",
    "email": "karen@example.com",
    "age": 24
  },
  {
    "id": 14,
    "username": "leo",
    "img": "https://img.freepik.com/premium-photo/portrait-20s-african-man-headshot-portrait-young-adult-black-skin-african-man-west-african-young-adult-man-model_46728-2056.jpg?w=740",
    "status": "active",
    "email": "leo@example.com",
    "age": 37
  },
  {
    "id": 15,
    "username": "mia",
    "img": "https://img.freepik.com/premium-photo/portrait-20s-african-man-headshot-portrait-young-adult-black-skin-african-man-west-african-young-adult-man-model_46728-2056.jpg?w=740",
    "status": "pending",
    "email": "mia@example.com",
    "age": 23
  },
  {
    "id": 16,
    "username": "nathan",
    "img": "https://img.freepik.com/premium-photo/portrait-20s-african-man-headshot-portrait-young-adult-black-skin-african-man-west-african-young-adult-man-model_46728-2056.jpg?w=740",
    "status": "active",
    "email": "nathan@example.com",
    "age": 34
  },
  {
    "id": 17,
    "username": "olivia",
    "img": "https://img.freepik.com/premium-photo/portrait-20s-african-man-headshot-portrait-young-adult-black-skin-african-man-west-african-young-adult-man-model_46728-2056.jpg?w=740",
    "status": "inactive",
    "email": "olivia@example.com",
    "age": 21
  },
  {
    "id": 18,
    "username": "peter",
    "img": "https://img.freepik.com/premium-photo/portrait-20s-african-man-headshot-portrait-young-adult-black-skin-african-man-west-african-young-adult-man-model_46728-2056.jpg?w=740",
    "status": "active",
    "email": "peter@example.com",
    "age": 39
  },
  {
    "id": 19,
    "username": "quinn",
    "img": "https://img.freepik.com/premium-photo/portrait-20s-african-man-headshot-portrait-young-adult-black-skin-african-man-west-african-young-adult-man-model_46728-2056.jpg?w=740",
    "status": "inactive",
    "email": "quinn@example.com",
    "age": 38
  },
  {
    "id": 20,
    "username": "rachel",
    "img": "https://img.freepik.com/premium-photo/portrait-20s-african-man-headshot-portrait-young-adult-black-skin-african-man-west-african-young-adult-man-model_46728-2056.jpg?w=740",
    "status": "pending",
    "email": "rachel@example.com",
    "age": 36
  }
];