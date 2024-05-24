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
]

export const userRows =
[
  {
    "id": 1,
    "username": "johndoe",
    "img": "https://example.com/images/johndoe.jpg",
    "status": "active",
    "email": "johndoe@example.com",
    "age": 28
  },
  {
    "id": 2,
    "username": "janedoe",
    "img": "https://example.com/images/janedoe.jpg",
    "status": "inactive",
    "email": "janedoe@example.com",
    "age": 32
  },
  {
    "id": 3,
    "username": "alice",
    "img": "https://example.com/images/alice.jpg",
    "status": "active",
    "email": "alice@example.com",
    "age": 25
  },
  {
    "id": 4,
    "username": "bob",
    "img": "https://example.com/images/bob.jpg",
    "status": "active",
    "email": "bob@example.com",
    "age": 30
  },
  {
    "id": 5,
    "username": "charlie",
    "img": "https://example.com/images/charlie.jpg",
    "status": "inactive",
    "email": "charlie@example.com",
    "age": 35
  },
  {
    "id": 6,
    "username": "david",
    "img": "https://example.com/images/david.jpg",
    "status": "active",
    "email": "david@example.com",
    "age": 40
  },
  {
    "id": 7,
    "username": "eve",
    "img": "https://example.com/images/eve.jpg",
    "status": "inactive",
    "email": "eve@example.com",
    "age": 22
  },
  {
    "id": 8,
    "username": "frank",
    "img": "https://example.com/images/frank.jpg",
    "status": "active",
    "email": "frank@example.com",
    "age": 29
  },
  {
    "id": 9,
    "username": "grace",
    "img": "https://example.com/images/grace.jpg",
    "status": "inactive",
    "email": "grace@example.com",
    "age": 27
  },
  {
    "id": 10,
    "username": "henry",
    "img": "https://example.com/images/henry.jpg",
    "status": "active",
    "email": "henry@example.com",
    "age": 33
  },
  {
    "id": 11,
    "username": "isabel",
    "img": "https://example.com/images/isabel.jpg",
    "status": "inactive",
    "email": "isabel@example.com",
    "age": 31
  },
  {
    "id": 12,
    "username": "jack",
    "img": "https://example.com/images/jack.jpg",
    "status": "active",
    "email": "jack@example.com",
    "age": 26
  },
  {
    "id": 13,
    "username": "karen",
    "img": "https://example.com/images/karen.jpg",
    "status": "inactive",
    "email": "karen@example.com",
    "age": 24
  },
  {
    "id": 14,
    "username": "leo",
    "img": "https://example.com/images/leo.jpg",
    "status": "active",
    "email": "leo@example.com",
    "age": 37
  },
  {
    "id": 15,
    "username": "mia",
    "img": "https://example.com/images/mia.jpg",
    "status": "inactive",
    "email": "mia@example.com",
    "age": 23
  },
  {
    "id": 16,
    "username": "nathan",
    "img": "https://example.com/images/nathan.jpg",
    "status": "active",
    "email": "nathan@example.com",
    "age": 34
  },
  {
    "id": 17,
    "username": "olivia",
    "img": "https://example.com/images/olivia.jpg",
    "status": "inactive",
    "email": "olivia@example.com",
    "age": 21
  },
  {
    "id": 18,
    "username": "peter",
    "img": "https://example.com/images/peter.jpg",
    "status": "active",
    "email": "peter@example.com",
    "age": 39
  },
  {
    "id": 19,
    "username": "quinn",
    "img": "https://example.com/images/quinn.jpg",
    "status": "inactive",
    "email": "quinn@example.com",
    "age": 38
  },
  {
    "id": 20,
    "username": "rachel",
    "img": "https://example.com/images/rachel.jpg",
    "status": "active",
    "email": "rachel@example.com",
    "age": 36
  }
];