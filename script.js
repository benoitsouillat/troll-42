
class Google {
    constructor(search) {
        this.search = search;
    }

    getURL() {
        return ('https://www.google.com/search?q=' + this.search);  
    } 
    
}

let form = document.getElementById("searchForm");

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        e.stopPropagation();
        let value = document.getElementById("search").value;
        let searchLink = new Google(value);

        if(value)
        window.open(searchLink.getURL(), '_blank');
    });




