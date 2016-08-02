import XMLHttpRequest
var xhr = new XMLHttpRequest();
var url = 'http://explorecourses.stanford.edu/search?view=xml-20140508&filter-coursestatus-Active=on&page=0&catalog=&q=CS%20140&academicYear=20162017';
xhr.open('GET', url);
xhr.onreadystatechange = function () {
      if (this.status == 200 && this.readyState == 4) {
              console.log('response: ' + this.responseText);
                
      }

};
xhr.send();
