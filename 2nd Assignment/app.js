let mobiles = [
    {
        brand: "Samsung",
        model: "A30",
        price: "40000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb"
    },
    {
        brand: "Samsung",
        model: "A10",
        price: "40000",
        camera: "40px",
        ram: "4gb",
        rom : "128gb"
    },
    {
        brand: "Samsung",
        model: "A20",
        price: "40000",
        camera: "40px",
        ram: "4gb",
        rom : "128gb"
    },
    {
        brand: "Vivo",
        model: "Y20",
        price: "20000",
        camera: "40px",
        ram: "2gb",
        rom : "32gb"
    },
    {
        brand: "Vivo",
        model: "Y11",
        price: "20000",
        camera: "40px",
        ram: "3gb",
        rom : "32gb"
    },
    {
        brand: "Vivo",
        model: "Y15",
        price: "30000",
        camera: "40px",
        ram: "4gb",
        rom : "64gb"
    },
    {
        brand: "Motorola",
        model: "123",
        price: "5000",
        camera: "2px",
        ram: "2gb",
        rom : "32gb"
    },
    {
        brand: "Iphone",
        model: "12",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb"
    },
    {
        brand: "Iphone",
        model: "13",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb"
    },
    {
        brand: "Iphone",
        model: "X",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb"
    },
]


function filterMobilePhones() {
    const filterOption = document.getElementById('filterOption').value;
    const filterValue = document.getElementById('filterInput').value.toLowerCase();
  
    const filteredMobiles = mobiles.filter((mobile) => {
      return mobile[filterOption].toLowerCase().includes(filterValue);
    });
  
    displayMobilePhones(filteredMobiles);
  }
  function displayMobilePhones(filteredMobiles) {
    const mobileListDiv = document.getElementById('list');
    mobileListDiv.innerHTML = '';
  
    filteredMobiles.forEach((mobile) => {
        const phoneDiv = document.createElement('div');
      phoneDiv.innerHTML = `
        <p>Model: ${mobile.model}</p>
        <p>brand: ${mobile.brand}</p>
        <p>Price: ${mobile.price}</p>
        <p>Camera: ${mobile.camera}</p>
        <p>ram: ${mobile.ram}</p>
        <p>rom: ${mobile.rom}</p>
        <hr>
        
      `;
      mobileListDiv.appendChild(phoneDiv);
    });
  }
    




