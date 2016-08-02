'use strict'
var rootUrl = 'http://localhost:9292/'

class api {
    static searchCourses(query) {
        var academicYear = "20162017"    
        var url = "http://localhost:9292/search?query=" + encodeURIComponent(query)
        console.log(url)
        return fetch(url)
            .then((response)=> {
                return response.json()
            })
            .catch((error) => {
                return error;
            })
    }

}
export default api
