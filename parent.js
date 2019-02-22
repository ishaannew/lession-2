'use strict';
class Person { 
   doPrint() { 
      console.log("doPrint() Person");
      return doPrint();
   }
}

class Student extends Person { 
   doPrint() { 
     super.doPrint();
      console.log("doPrint() Student"); 
   }
}

class Boy extends Student { 
   doPrint() {
     super.doPrint();
      console.log("doPrint() Boy"); 
     return doPrint();
     
   }
}


var obj = new Boy(); 
obj.doPrint();
