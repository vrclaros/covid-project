const route_api="http://127.0.0.1:5000/";

function load_data() {
    alert('loading...');
    d3.json(route_api+"csv").then(data => console.log(data));
}

function load_country() {
    alert('loading countries...');
    d3.json(route_api+"countries").then(data => console.log(data));
}